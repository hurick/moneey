import { createContext, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

import { Transaction, TransactionsContextType, TransactionsProviderProps } from './Transactions'

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoadingTransactions, setIsLoadingTransactions] = useState<boolean>(false)

  const fetchTransactions = async (query?: string) => {
    setIsLoadingTransactions(true)

    const response = await api.get('/transactions', {
      params: { q: query }
    })

    setTransactions(response.data)
    setIsLoadingTransactions(false)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      isLoadingTransactions,
      fetchTransactions
    }}
    >
      { children }
    </TransactionsContext.Provider>
  )
}
