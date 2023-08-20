import { ProfileContainer, ProfileFooter, ProfileTitle } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { TopicItem } from '../../../../components/TopicItem'
import { useEffect, useState } from 'react'
import { User, Users } from '../../../../services/Api'

export function Profile() {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    Users.single().then((response: User) => {
      setUser(response)
    })
  }, [])

  return (
    <ProfileContainer>
      <div>
        <img
          src={user.avatar_url}
          alt="profile image"
          width={144}
          height={144}
        />
      </div>
      <div>
        <ProfileTitle>
          <h2>{user.name}</h2>
          <a href={user?.html_url}>
            GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </ProfileTitle>

        <p>{user.bio}</p>

        <ProfileFooter>
          <TopicItem icon={faGithub as IconProp} description={user.login} />
          <TopicItem icon={faBuilding} description={user.company} />
          <TopicItem icon={faUserGroup} description={user.followers} />
        </ProfileFooter>
      </div>
    </ProfileContainer>
  )
}
