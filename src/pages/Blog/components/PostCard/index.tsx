import { useNavigate } from 'react-router-dom'
import { PostCardContainer } from './style'

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
        <span>{createdAt}</span>
      </div>

      <p>{description}</p>
    </PostCardContainer>
  )
}
