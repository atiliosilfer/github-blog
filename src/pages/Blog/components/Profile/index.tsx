import { ProfileContainer, ProfileFooter, ProfileTitle } from './style'
import ProfileImage from '../../../../assets/perfil.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { TopicItem } from '../../../../components/TopicItem'

export function Profile() {
  return (
    <ProfileContainer>
      <div>
        <img src={ProfileImage} alt="profile image" width={144} height={144} />
      </div>
      <div>
        <ProfileTitle>
          <h2>Atílio Ferreira</h2>
          <a href="https://www.github.com">
            GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </ProfileTitle>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ProfileFooter>
          <TopicItem icon={faGithub as IconProp} description="atiliosilfer" />
          <TopicItem icon={faBuilding} description="dti digital" />
          <TopicItem icon={faUserGroup} description="32 seguidores" />
        </ProfileFooter>
      </div>
    </ProfileContainer>
  )
}
