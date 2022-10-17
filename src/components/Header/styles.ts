import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['gray-900']};
  padding: 2.5rem 1rem 8rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
`

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .hl__name {
    font-size: 1.5rem;
  }
`
export const ButtonNewTransactions = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  background-color: ${props => props.theme['green-500']};
  border: 2px solid transparent;
  border-radius: 6px;

  padding: .75rem 2rem;

  font-size: 1rem;
  line-height: 1.6em;
  font-weight: 700;
  color: ${props => props.theme['gray-100']};

  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: .2s;

  &:not(:disabled):hover {
    background-color: ${props => props.theme['green-300']};
  }
`
