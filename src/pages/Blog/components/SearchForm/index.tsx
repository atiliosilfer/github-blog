import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './style'

interface SearchFormData {
  postName: string
}

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormData>()

  function onSubmit(data: SearchFormData) {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('postName')}
      />
    </SearchFormContainer>
  )
}
