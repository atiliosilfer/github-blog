import { useNavigate } from 'react-router-dom'
import { PostCardContainer } from './style'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  title: string
  createdAt: string
  description: string
  number: number
}

export function PostCard({
  title,
  createdAt,
  description,
  number,
}: PostCardProps) {
  const navigate = useNavigate()

  function handleClickPost() {
    navigate(`/post/${number}`)
  }

  return (
    <PostCardContainer onClick={handleClickPost}>
      <div>
        <h2>{title}</h2>
        <span>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>

      <p>{description}</p>
    </PostCardContainer>
  )
}
