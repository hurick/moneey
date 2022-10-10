import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  size?: 'default' | 'small' | 'medium' | 'large'
  isOutlined?: boolean
}

export const Button = ({
  children,
  className,
  size = 'default',
  isOutlined = false,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer
      {...rest}
      size={size}
      className={className}
      isOutlined={isOutlined}
    >
      { children }
    </ButtonContainer>
  )
}
