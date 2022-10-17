import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/Transactions'

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
  const { createTransaction } = useContext(TransactionsContext)

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
    const { description, amountValue, category, type } = data;

    await createTransaction({
      description,
      amountValue,
      category,
      type
    })

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
            {...register('amountValue', { valueAsNumber: true })}
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
