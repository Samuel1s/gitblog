import { HomeContainer, PostsContent, PostsContentInfo } from './styles'
import { PostsContext } from '../../context/PostsContext'
import { useContextSelector } from 'use-context-selector'
import { SearchForm } from '../../components/SearchForm'
import { Profile } from '../../components/Profile'
import { Posts } from '../../components/Posts'

export function Home() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  const totalPosts = posts.length

  return (
    <HomeContainer>
      <Profile />

      <PostsContent>
        <PostsContentInfo>
          <h3>Publicações</h3>
          <span>
            {totalPosts} publicaç{`${totalPosts >= 1 ? 'ões' : 'ão'}`}
          </span>
        </PostsContentInfo>
        <SearchForm />
        <Posts />
      </PostsContent>
    </HomeContainer>
  )
}
