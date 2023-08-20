import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './style'

interface SearchFormData {
  postName: string
}

interface SearchFormProps {
  onHandleSubmit: (postName: string) => void
  postsLength: number
}

export function SearchForm({ onHandleSubmit, postsLength }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormData>()

  function onSubmit(data: SearchFormData) {
    onHandleSubmit(data.postName)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Publicações</h2>
        <span>{postsLength} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('postName')}
      />
    </SearchFormContainer>
  )
}
