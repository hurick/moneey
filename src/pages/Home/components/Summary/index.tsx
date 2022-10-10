import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { SummaryContainer, SummaryCard, SummaryCardHeader, SummaryValueAmount } from './styles'

export const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryCardHeader iconColor="green">
          <span className="sch__title">Income</span>
          <ArrowCircleUp size={32} />
        </SummaryCardHeader>

        <SummaryValueAmount>R$ 17.400,00</SummaryValueAmount>
      </SummaryCard>

      <SummaryCard>
        <SummaryCardHeader iconColor="red">
          <span className="sch__title">Expenses</span>
          <ArrowCircleDown size={32} />
        </SummaryCardHeader>

        <SummaryValueAmount>R$ 17.400,00</SummaryValueAmount>
      </SummaryCard>

      <SummaryCard variant>
        <SummaryCardHeader>
          <span className="sch__title">Total</span>
          <CurrencyDollar size={32} />
        </SummaryCardHeader>

        <SummaryValueAmount>R$ 17.400,00</SummaryValueAmount>
      </SummaryCard>
    </SummaryContainer>
  )
}
