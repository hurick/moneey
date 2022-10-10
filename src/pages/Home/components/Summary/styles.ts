import styled from "styled-components"

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface SummaryCardProps {
  variant?: boolean
}

export const SummaryCard = styled.div<SummaryCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 8rem;
  padding: 1.5rem 2rem;
  background-color: ${props => !props.variant ? props.theme["gray-600"] : props.theme["green-500"]};
  border-radius: 6px;

  color: ${props => props.theme["gray-100"]};
  line-height: 1.6em;
`

interface SummaryCardHeaderProps {
  iconColor?: 'green' | 'red'
}

const summaryCardHeaderColors = {
  green: "green-300",
  red: "red-300",
} as const

export const SummaryCardHeader = styled.div<SummaryCardHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;

  color: ${props => props.iconColor
    ? props.theme[summaryCardHeaderColors[props.iconColor]]
    : props.theme["gray-100"]
  };

  .sch__title {
    color: ${props => props.theme["gray-300"]};
  }
`

export const SummaryValueAmount = styled.strong`
  font-size: 2rem;
  font-weight: 700;
`
