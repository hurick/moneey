import { useContext, useMemo } from 'react'
import { TransactionsContext } from '../contexts/Transactions'

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext)

  const summary = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
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
  }, [transactions])

  return summary
}
