import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostCardsContainer } from './styles'

export function Blog() {
  return (
    <>
      <Profile />
      <SearchForm />

      <PostCardsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCardsContainer>
    </>
  )
}
