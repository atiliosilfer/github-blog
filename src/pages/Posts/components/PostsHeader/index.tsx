import { PostsHeaderContainer, Header, Footer } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { TopicItem } from '../../../../components/TopicItem'
import { Issue } from '../../../../services/Api'
import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostsHeaderProps {
  issueData: Issue
}

export function PostsHeader({ issueData }: PostsHeaderProps) {
  const formatedDate =
    issueData.created_at &&
    formatDistanceToNow(new Date(issueData.created_at), {
      locale: ptBR,
      addSuffix: true,
    })

  return (
    <PostsHeaderContainer>
      <Header>
        <NavLink to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </NavLink>
        <a href={issueData.html_url}>
          VER NO GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </Header>

      <h2>{issueData.title}</h2>

      <Footer>
        <TopicItem icon={faGithub as IconProp} description={'atiliosilfer'} />
        <TopicItem icon={faCalendarDay} description={formatedDate} />
        <TopicItem
          icon={faComment}
          description={`${issueData.comments} comentários`}
        />
      </Footer>
    </PostsHeaderContainer>
  )
}
