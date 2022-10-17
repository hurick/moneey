import { createContext, useEffect, useState } from 'react'

import { Transaction, TransactionsContextType, TransactionsProviderProps } from './Transactions'

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoadingTransactions, setIsLoadingTransactions] = useState<boolean>(false)

  const fetchTransactions = async (query?: string) => {
    setIsLoadingTransactions(true)

    const url = new URL(`${import.meta.env.VITE_API_URL}/transactions`)
    query && url.searchParams.append('q', query)

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setTransactions(data)
        setIsLoadingTransactions(false)
      })
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
