import { Issue, Issues } from '../../services/Api'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostCardsContainer } from './styles'
import { useEffect, useState } from 'react'

export function Blog() {
  const [posts, setPosts] = useState<Issue[]>([])

  useEffect(() => {
    Issues.index().then((response) => {
      setPosts(response)
    })
  }, [])

  function handleSubmitSearchFilter(postName: string) {
    Issues.searchByName(postName).then((response) => {
      setPosts(response.items)
    })
  }

  return (
    <>
      <Profile />
      <SearchForm
        onHandleSubmit={handleSubmitSearchFilter}
        postsLength={posts.length}
      />

      <PostCardsContainer>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.body}
            createdAt={post.created_at}
            number={post.number}
          />
        ))}
      </PostCardsContainer>
    </>
  )
}
