import { HeaderContainer } from './styles'
import bannerHeaderImage from '../../assets/Cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={bannerHeaderImage} alt="Banner do github blog" />
    </HeaderContainer>
  )
}
