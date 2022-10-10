import { Outlet } from 'react-router-dom'

import {
  DefaultLayoutContainer
} from './styles'

export const DefaultLayout = () => {
  return (
    <DefaultLayoutContainer>
      <Outlet />
    </DefaultLayoutContainer>
  )
}
