import { PostContent, PostsGridContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../context/PostsContext'
import { formatText } from '../../utils/formatter'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'

export function Posts() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  return (
    <PostsGridContainer>
      {posts.map((item) => {
        return (
          <PostContent key={item.number} to={`/post/${item.number}`}>
            <div>
              <h2>{item.title}</h2>
              <span>
                {formatDistanceToNow(new Date(item.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <p>{formatText(item.body)}</p>
          </PostContent>
        )
      })}
    </PostsGridContainer>
  )
}
