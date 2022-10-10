import {
  TransactionItem,
  TransactionsContainer,
  TransactionsTable,
  TransactionAmountHighlight
} from './styles'

export const TableTransactions = () => {
  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>
          <TransactionItem>
            <td>Desenvolvimento de website</td>
            <td>
              <TransactionAmountHighlight variant="income">
                R$ 12.000,00
              </TransactionAmountHighlight>
            </td>
            <td>Venda</td>
            <td>11/10/2022</td>
          </TransactionItem>

          <TransactionItem>
            <td>Hamburger</td>
            <td>
              <TransactionAmountHighlight variant="expenses">
                - R$ 45,46
              </TransactionAmountHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/10/2022</td>
          </TransactionItem>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
