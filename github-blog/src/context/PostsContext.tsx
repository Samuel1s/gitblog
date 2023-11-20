import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface Post {
  number: number
  title: string
  body: string
  created_at: string
}

export interface PostContextType {
  posts: Post[]
  fetchPostsIssuesFromGitHubApi: (query?: string) => Promise<void>
}

export interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPostsIssuesFromGitHubApi = useCallback(async (query?: string) => {
    try {
      const {
        data: { items },
      } = await api.get('search/issues', {
        params: { q: 'repo:samuel1s/gitblog ' + query },
      })

      setPosts(items)
    } catch (error) {
      console.error(error)
      const genericArrayPostError = [
        {
          number: 1,
          title: 'Request Failed',
          body: 'Standard message error at request failed',
          created_at: new Date().toISOString(),
        },
      ]

      setPosts(genericArrayPostError)
    }
  }, [])

  useEffect(() => {
    fetchPostsIssuesFromGitHubApi('')
  }, [fetchPostsIssuesFromGitHubApi])

  return (
    <PostsContext.Provider value={{ posts, fetchPostsIssuesFromGitHubApi }}>
      {children}
    </PostsContext.Provider>
  )
}
