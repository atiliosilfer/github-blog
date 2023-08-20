import { PostsHeader } from './components/PostsHeader'
import ReactMarkdown from 'react-markdown'
import { PostDescriptionContainer } from './styles'
import { useParams } from 'react-router-dom'
import { Issue, Issues } from '../../services/Api'
import { useEffect, useState } from 'react'

export function Posts() {
  const { number } = useParams()

  const [post, setPost] = useState<Issue>({} as Issue)

  useEffect(() => {
    Issues.single(Number(number)).then((response: Issue) => {
      setPost(response)
    })
  }, [number])

  return (
    <>
      <PostsHeader issueData={post} />
      <PostDescriptionContainer>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostDescriptionContainer>
    </>
  )
}
