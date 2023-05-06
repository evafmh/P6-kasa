import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../utils/style/Atoms.jsx'
import Logo from '../assets/LOGO.png'

const HomeLogo = styled.img`
    height: 68px;
`
const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Header() {
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={Logo} />
            </Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/a-propos">A propos</StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header
