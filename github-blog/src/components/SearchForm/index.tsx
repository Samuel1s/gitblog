import { PostsContext } from '../../context/PostsContext'
import { useContextSelector } from 'use-context-selector'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchPostsIssuesFromGitHubApi = useContextSelector(
    PostsContext,
    (context) => {
      return context.fetchPostsIssuesFromGitHubApi
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    fetchPostsIssuesFromGitHubApi(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        disabled={isSubmitting}
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
