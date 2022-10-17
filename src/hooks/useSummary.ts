import { useContext } from 'react'
import { TransactionsContext } from '../contexts/Transactions'

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.amountValue
      acc.total += transaction.amountValue
    }

    if (transaction.type === 'expense') {
      acc.expenses += transaction.amountValue
      acc.total -= transaction.amountValue
    }

    return acc
  }, {
    income: 0,
    expenses: 0,
    total: 0
  })

  return summary
}
