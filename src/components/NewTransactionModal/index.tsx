import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { newTransactionModalSchema, NewTransactionModalInputs } from './validator'

import { Button } from '../Button'
import { Loader } from '../Loader'

import {
  Overlay,
  Content,
  Title,
  Close,
  FormTransaction,
  TransactionTypes,
  TransactionTypeButton
} from './styles'

interface NewTransactionModalProps {
  title?: string
  isClosable?: boolean
}

export const NewTransactionModal = ({ title, isClosable = false }: NewTransactionModalProps) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<NewTransactionModalInputs>({
    resolver: zodResolver(newTransactionModalSchema),
    defaultValues: {
      type: 'income'
    }
  })

  const handleCreateNewTransaction = async (data: NewTransactionModalInputs) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        {title && <Title>{ title }</Title>}

        {isClosable && (
          <Close title="Close">
            <X size={24} />
          </Close>
        )}

        <FormTransaction onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            required
            className="ft__input"
            type="text"
            placeholder="Description"
            {...register('description')}
          />

          <input
            required
            className="ft__input"
            type="number"
            placeholder="Price"
            {...register('price', { valueAsNumber: true })}
          />

          <input
            required
            className="ft__input"
            type="text"
            placeholder="Category"
            {...register('category')}
          />

          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <TransactionTypes onValueChange={field.onChange} value={field.value}>
                <TransactionTypeButton defaultChecked variant="income" title="Income" value="income">
                  <ArrowCircleUp className="ttb__icon" size={24} />
                  <span>Income</span>
                </TransactionTypeButton>

                <TransactionTypeButton variant="expense" title="Expense" value="expense">
                  <ArrowCircleDown className="ttb__icon" size={24} />
                  <span>Expense</span>
                </TransactionTypeButton>
              </TransactionTypes>
            )}
          />

          <Button
            size="large"
            type="submit"
            className="ft__create"
            title="Create new transaction"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : 'Create'}
          </Button>
        </FormTransaction>

      </Content>
    </Dialog.Portal>
  )
}
