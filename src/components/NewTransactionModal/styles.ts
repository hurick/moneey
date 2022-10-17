import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, .75);
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-width: 32rem;
  padding: 2.5rem 3rem;

  border-radius: 6px;
  background: ${props => props.theme['gray-800']};

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
;`

export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
  font-weight: 700;
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background-color: transparent;
  border: 0;

  color: ${props => props.theme['gray-500']};
  line-height: 0;

  cursor: pointer;
`

export const FormTransaction = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .ft__input {
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid transparent;
    background-color: ${props => props.theme['gray-900']};

    color: ${props => props.theme['gray-100']};

    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }

    &:focus {
      border-color: ${props => props.theme['green-300']};
    }
  }

  .ft__create {
    margin-top: 1.5rem;
    min-height: 4rem;
  }
`
export const TransactionTypes = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: .5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'expense'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  padding: 1rem;
  background-color: ${props => props.theme['gray-700']};
  border: 0;
  border-radius: 6px;

  color: ${props => props.theme['gray-300']};

  transition-property: background-color, color;
  transition-timing-function: ease-in-out;
  transition-duration: .2s;

  cursor: pointer;

  .ttb__icon {
    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};

    transition-property: color;
    transition-timing-function: ease-in-out;
    transition-duration: .2s;
  }

  &[data-state="checked"] {
    background-color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
    color: ${props => props.theme['gray-100']};

    .ttb__icon {
      color: ${props => props.theme['gray-100']};
    }
  }

  &[data-state="unchecked"] {
    &:hover {
      background-color: ${props => props.theme['gray-600']};
    }
  }
`
