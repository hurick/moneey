import { CircleNotch } from "phosphor-react"

import { LoaderContainer } from "./styles"

interface LoaderProps {
  color?: string
  size?: number
}

export const Loader = ({ size = 24, color = "#e1e1e6" }: LoaderProps) => {
  return (
    <LoaderContainer>
      <CircleNotch className="lc__icon" size={size} color={color} />
    </LoaderContainer>
  )
}
