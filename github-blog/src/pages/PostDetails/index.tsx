import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { dateFormatter } from '../../utils/formatter'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import remarkGfm from 'remark-gfm'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import {
  PostDetailContainer,
  PostDetailCard,
  NavButton,
  PostDetailContent,
  PostInfo,
} from './styles'
import Markdown from 'react-markdown'

interface IssueDetail {
  html_url: string
  title: string
  login: string
  comments: number
  created_at: Date
  body: string
}

export function PostsDetails() {
  const { id } = useParams()
  const [post, setPost] = useState({} as IssueDetail)

  async function getIssueDetailFromAPI() {
    try {
      const {
        data: {
          html_url: htmlURL,
          title,
          comments,
          created_at: createdAt,
          body,
          user: { login },
        },
      } = await api.get(
        `https://api.github.com/repos/samuel1s/gitblog/issues/${id}`,
      )

      setPost({
        html_url: htmlURL,
        title,
        comments,
        created_at: new Date(createdAt),
        body,
        login,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIssueDetailFromAPI()
  }, [])

  return (
    <PostDetailContainer>
      <PostDetailCard>
        <header>
          <NavButton to="/" type="button">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </NavButton>
          <a href={post.html_url} target="_blank" rel="noreferrer">
            Ver no Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <div>
          <h1>{post.title}</h1>
        </div>
        <PostInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {dateFormatter.format(post.created_at)}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} Comentários
          </span>
        </PostInfo>
      </PostDetailCard>
      <PostDetailContent>
        <div>
          <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
        </div>
      </PostDetailContent>
    </PostDetailContainer>
  )
}
