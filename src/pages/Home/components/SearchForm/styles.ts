import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  width: 100%;
  margin-top: 4rem;

  .sfc__transaction {
    width: 100%;
    padding: 1rem;

    background-color: ${props => props.theme['gray-900']};
    border: 1px solid transparent;
    border-radius: 6px;

    color: ${props => props.theme['gray-100']};

    transition-property: border-color;
    transition-timing-function: ease-in-out;
    transition-duration: .2s;

    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }

    &:focus {
      border-color: ${props => props.theme['green-500']};
    }
  }

  .sfc__send {
    min-width: 9.5rem;
  }
`
