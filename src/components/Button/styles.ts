import styled from "styled-components"

interface ButtonContainerProps {
  isOutlined: boolean
  size: 'default' | 'small' | 'medium' | 'large'
}

const buttonSizes = {
  small: ".5rem 1rem",
  medium: ".75rem 1.25rem",
  large: "1rem 2rem",
  default: ".75rem 2rem"
} as const

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${props => !props.isOutlined ? props.theme["green-500"] : 'transparent'};
  border: 2px solid ${props => !props.isOutlined ? `transparent` : `${props.theme["green-300"]}`};
  border-radius: 6px;

  padding: ${props => buttonSizes[props.size]};

  font-size: 1rem;
  line-height: 1.6em;
  font-weight: 700;
  color: ${props => !props.isOutlined ? props.theme["gray-100"] : props.theme["green-300"]};

  transition-property: background-color, color;
  transition-timing-function: ease-in-out;
  transition-duration: .2s;

  &:not(:disabled):hover {
    background-color: ${props => props.theme["green-300"]};
    color: ${props => props.theme["gray-100"]};
  }
`
