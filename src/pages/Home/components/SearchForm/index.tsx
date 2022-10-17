import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormInputs, searchFormSchema } from './validator'

import { MagnifyingGlass } from 'phosphor-react'

import { Button } from '../../../../components/Button'

import { SearchFormContainer } from './styles'

export const SearchForm = () => {
  const { register, handleSubmit, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearchTransactions = (data: SearchFormInputs) => {
    console.log('data', data)
  }

  const isFormQueryFilled = !watch('query')

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
        disabled={isFormQueryFilled}
      >
        <MagnifyingGlass size={20} />
        <span>Search</span>
      </Button>
    </SearchFormContainer>
  )
}
