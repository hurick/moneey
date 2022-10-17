import { createContext, useEffect, useState } from 'react'

import { api } from '../../lib/axios'

import { CreateTransactionInputs, Transaction, TransactionsContextType, TransactionsProviderProps } from './Transactions'

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoadingTransactions, setIsLoadingTransactions] = useState<boolean>(false)

  const fetchTransactions = async (query?: string) => {
    setIsLoadingTransactions(true)

    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      }
    })

    setTransactions(response.data)
    setIsLoadingTransactions(false)
  }

  const createTransaction = async (data: CreateTransactionInputs) => {
    const { description, amountValue, category, type } = data

    const response = await api.post('/transactions', {
      description,
      amountValue,
      category,
      type,
      createdAt: new Date()
    })

    setTransactions(state => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      isLoadingTransactions,
      fetchTransactions,
      createTransaction
    }}
    >
      { children }
    </TransactionsContext.Provider>
  )
}
