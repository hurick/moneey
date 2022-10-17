import styled, { keyframes } from 'styled-components'

const infiniteRotation = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  .lc__icon {
    animation: ${infiniteRotation} 1.5s infinite;
  }
`
