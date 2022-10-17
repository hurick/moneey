import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/Transactions'

import { useSummary } from '../../../../hooks/useSummary'

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import CountUp from 'react-countup'

import {
  SummaryContainer,
  SummaryCard,
  SummaryCardHeader,
  SummaryValueAmount
} from './styles'

export const Summary = () => {
  const { isLoadingTransactions } = useContext(TransactionsContext)
  const summary = useSummary()

  const totalVariant = summary.total < 0 ? 'red' : 'green'

  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryCardHeader iconColor="green">
          <span className="sch__title">Income</span>
          <ArrowCircleUp size={32} />
        </SummaryCardHeader>

        <CountUp end={summary.income} duration={0.5} prefix="$" separator="," decimals={2} decimal={'.'}>
          {({ countUpRef }) => <SummaryValueAmount ref={countUpRef} isLoading={isLoadingTransactions} />}
        </CountUp>
      </SummaryCard>

      <SummaryCard>
        <SummaryCardHeader iconColor="red">
          <span className="sch__title">Expenses</span>
          <ArrowCircleDown size={32} />
        </SummaryCardHeader>

        <CountUp end={summary.expenses} duration={0.5} prefix="$" separator="," decimals={2} decimal={'.'}>
          {({ countUpRef }) => <SummaryValueAmount ref={countUpRef} isLoading={isLoadingTransactions} />}
        </CountUp>
      </SummaryCard>

      <SummaryCard variant={totalVariant}>
        <SummaryCardHeader>
          <span className="sch__title">Total</span>
          <CurrencyDollar size={32} />
        </SummaryCardHeader>

        <CountUp end={summary.total} duration={0.5} prefix=" $" separator="," decimals={2} decimal={'.'}>
          {({ countUpRef }) => <SummaryValueAmount ref={countUpRef} isLoading={isLoadingTransactions} />}
        </CountUp>
      </SummaryCard>
    </SummaryContainer>
  )
}
