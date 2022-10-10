import { Summary } from './components/Summary'
import { SearchForm } from './components/SearchForm'
import { TableTransactions } from './components/TableTransactions'

import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Summary />

      <SearchForm />

      <TableTransactions />
    </HomeContainer>
  )
}
