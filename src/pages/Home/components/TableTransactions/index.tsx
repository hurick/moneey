import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/Transactions'

import { currencyFormat, dateFormat, fullDateFormat } from '../../../../utils'

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
      {isLoadingTransactions
        ? <Loader size={32} />
        : <TransactionsTable>
          <tbody>
            {transactions.map(transaction => (
              <TransactionItem key={transaction.id}>
                <td>{transaction.description}</td>

                <td>
                  <TransactionAmountHighlight variant={transaction.type}>
                    {transaction.type === 'expense' && '- '}
                    {currencyFormat.format(transaction.amountValue)}
                  </TransactionAmountHighlight>
                </td>

                <td>{transaction.category}</td>

                <td title={fullDateFormat.format(new Date(transaction.createadAt))}>
                  {dateFormat.format(new Date(transaction.createadAt))}
                </td>
              </TransactionItem>
            ))}
          </tbody>
        </TransactionsTable>
      }
    </TransactionsContainer>
  )
}
