import { useEffect, useState } from 'react'

import { Loader } from '../../../../components/Loader'

import {
  TransactionItem,
  TransactionsContainer,
  TransactionsTable,
  TransactionAmountHighlight
} from './styles'

interface Transaction {
  id: number
  description: string
  type: "income" | "expense"
  category: string
  amountValue: number
  createadAt: string
}

export const TableTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)

    fetch(`${import.meta.env.VITE_API_URL}/transactions`)
      .then(response => response.json())
      .then(data => {
        setTransactions(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <TransactionsContainer>
      {isLoading && <Loader size={32} />}

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
