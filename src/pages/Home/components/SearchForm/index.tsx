import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/Transactions'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormInputs, searchFormSchema } from './validator'

import { MagnifyingGlass } from 'phosphor-react'

import { Button } from '../../../../components/Button'

import { SearchFormContainer } from './styles'
import { Loader } from '../../../../components/Loader'

export const SearchForm = () => {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        className="sfc__transaction"
        placeholder="Find transactions"
        {...register('query')}
      />

      <Button
        isOutlined
        type="submit"
        title="Search for transactions"
        disabled={isSubmitting}
        className="sfc__send"
      >
        {isSubmitting ? <Loader color="#00b37e" size={20} /> : <MagnifyingGlass size={20} /> }
        <span>Search</span>
      </Button>
    </SearchFormContainer>
  )
}
