import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TopicItemContainer } from './style'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { defaultTheme } from '../../styles/themes/default'

interface TopicItemProps {
  icon: IconProp
  description: string | number
}

export function TopicItem({ icon, description }: TopicItemProps) {
  return (
    <TopicItemContainer>
      <FontAwesomeIcon icon={icon} color={defaultTheme['base-label']} />
      <span>{description}</span>
    </TopicItemContainer>
  )
}
