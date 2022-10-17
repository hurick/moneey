import { ReactNode } from "react"

export interface Transaction {
  id: number
  description: string
  type: "income" | "expense"
  category: string
  amountValue: number
  createdAt: string
}

export interface TransactionsContextType {
  transactions: Transaction[]
  isLoadingTransactions: boolean
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInputs) => Promise<void>
}

export interface TransactionsProviderProps {
  children: ReactNode
}

export interface CreateTransactionInputs {
  description: string
  amountValue: number
  category: string
  type: string
}
