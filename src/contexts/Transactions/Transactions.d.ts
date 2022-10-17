import { ReactNode } from "react"

export interface Transaction {
  id: number
  description: string
  type: "income" | "expense"
  category: string
  amountValue: number
  createadAt: string
}

export interface TransactionsContextType {
  transactions: Transaction[]
  isLoadingTransactions: boolean,
  fetchTransactions: (query?: string) => Promise<void>
}

export interface TransactionsProviderProps {
  children: ReactNode
}
