import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-900"]};
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
