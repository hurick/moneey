import { createContext, useEffect, useState } from 'react'

import { Transaction, TransactionsContextType, TransactionsProviderProps } from './Transactions'

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoadingTransactions, setIsLoadingTransactions] = useState<boolean>(false)

  useEffect(() => {
    setIsLoadingTransactions(true)

    fetch(`${import.meta.env.VITE_API_URL}/transactions`)
      .then(response => response.json())
      .then(data => {
        setTransactions(data)
        setIsLoadingTransactions(false)
      })
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      isLoadingTransactions
    }}
    >
      { children }
    </TransactionsContext.Provider>
  )
}
