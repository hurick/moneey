import { Summary } from './components/Summary'
import { TableTransactions } from './components/TableTransactions'

import {
  HomeContainer
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Summary />
      <TableTransactions />
    </HomeContainer>
  )
}
