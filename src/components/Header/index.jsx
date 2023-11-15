import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 30px;
`

const HeaderSubGroup = styled.div`
  display: flex;
`

const HomeLogo = styled.img`
  height: 50px;
`

function Header() {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <HomeLogo src={DarkLogo} alt="dark-logo" />
      </Link>
      <HeaderSubGroup>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </HeaderSubGroup>
    </HeaderWrapper>
  )
}

export default Header
