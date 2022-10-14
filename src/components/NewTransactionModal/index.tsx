import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { Button } from '../Button'

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

        <FormTransaction>
          <input className="ft__input" type="text" placeholder="Description" />
          <input className="ft__input" type="text" placeholder="Price" />
          <input className="ft__input" type="text" placeholder="Category" />

          <TransactionTypes>
            <TransactionTypeButton defaultChecked variant="income" title="Income" value="income">
              <ArrowCircleUp className="ttb__icon" size={24} />
              <span>Income</span>
            </TransactionTypeButton>

            <TransactionTypeButton variant="expense" title="Expense" value="expense">
              <ArrowCircleDown className="ttb__icon" size={24} />
              <span>Expense</span>
            </TransactionTypeButton>
          </TransactionTypes>

          <Button
            size="large"
            type="submit"
            className="ft__create"
            title="Create new transaction"
          >
            Create
          </Button>
        </FormTransaction>

      </Content>
    </Dialog.Portal>
  )
}
