import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { HeaderContainer } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderImageLeft from '../../assets/headerLeft.svg'
import HeaderImageRight from '../../assets/headerRight.svg'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <HeaderContainer>
      <img src={HeaderImageLeft} alt="" />
      <div>
        <FontAwesomeIcon
          icon={faTerminal}
          size="3x"
          color={defaultTheme.blue}
        />
        <h1>GITHUB BLOG</h1>
      </div>
      <img src={HeaderImageRight} alt="" />
    </HeaderContainer>
  )
}
