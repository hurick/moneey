import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormInputs, searchFormSchema } from './validator'

import { MagnifyingGlass } from 'phosphor-react'

import { Button } from '../../../../components/Button'

import { SearchFormContainer } from './styles'
import { Loader } from '../../../../components/Loader'

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
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
        disabled={isSubmitting || isFormQueryFilled}
        className="sfc__send"
      >
        {isSubmitting ? <Loader color="#00b37e" size={20} /> : <MagnifyingGlass size={20} /> }
        <span>Search</span>
      </Button>
    </SearchFormContainer>
  )
}
