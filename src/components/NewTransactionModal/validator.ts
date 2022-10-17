import * as zod from 'zod'

export const newTransactionModalSchema = zod.object({
  description: zod.string(),
  amountValue: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'expense']),
})

export type NewTransactionModalInputs = zod.infer<typeof newTransactionModalSchema>
