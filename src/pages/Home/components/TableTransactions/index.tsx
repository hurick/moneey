import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/Transactions'

import { Loader } from '../../../../components/Loader'

import {
  TransactionItem,
  TransactionsContainer,
  TransactionsTable,
  TransactionAmountHighlight
} from './styles'

export const TableTransactions = () => {
  const { transactions, isLoadingTransactions } = useContext(TransactionsContext)

  return (
    <TransactionsContainer>
      {isLoadingTransactions && <Loader size={32} />}

      <TransactionsTable>
        <tbody>
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <TransactionAmountHighlight variant={transaction.type}>
                  {transaction.amountValue}
                </TransactionAmountHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createadAt}</td>
            </TransactionItem>
          ))}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
