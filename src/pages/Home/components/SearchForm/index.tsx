import { MagnifyingGlass } from 'phosphor-react'
import { Button } from '../../../../components/Button'

import { SearchFormContainer } from './styles'

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input
        type="text"
        className="sfc__transaction"
        placeholder="Find transactions"
      />

      <Button
        isOutlined
        type="submit"
        title="Search for transactions"
      >
        <MagnifyingGlass size={20} />
        <span>Search</span>
      </Button>
    </SearchFormContainer>
  )
}
