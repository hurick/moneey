import { ReactNode } from 'react'

import { ButtonContainer } from './styles'

interface ButtonProps {
  className?: string
  children: ReactNode
  size?: 'default' | 'small' | 'medium' | 'large'
  isOutlined?: boolean
}

export const Button = ({
  children,
  className,
  size = 'default',
  isOutlined = false
}: ButtonProps) => {
  return (
    <ButtonContainer isOutlined={isOutlined} size={size} className={className}>
      { children }
    </ButtonContainer>
  )
}
