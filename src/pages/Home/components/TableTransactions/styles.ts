import styled from 'styled-components'

export const TransactionsContainer = styled.section`
  margin-top: 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 .5rem;
`

export const TransactionItem = styled.tr`
  background-color: ${props => props.theme['gray-700']};

  td {
    padding: 1.25rem 2rem;

    &:first-child {
      width: 40%;

      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface TransactionAmountHighlightProps {
  variant: 'income' | 'expense'
}

export const TransactionAmountHighlight = styled.span<TransactionAmountHighlightProps>`
  color: ${props => props.variant === 'income'
    ? props.theme['green-300']
    : props.theme['red-300']
};
`
