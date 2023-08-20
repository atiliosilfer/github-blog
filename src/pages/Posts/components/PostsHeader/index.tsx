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

interface PostsHeaderProps {
  issueData: Issue
}

export function PostsHeader({ issueData }: PostsHeaderProps) {
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
        <TopicItem icon={faCalendarDay} description={issueData.created_at} />
        <TopicItem
          icon={faComment}
          description={`${issueData.comments} comentários`}
        />
      </Footer>
    </PostsHeaderContainer>
  )
}
