import styled from 'styled-components'
import Logo from '../assets/LOGO_white.png'

const WhiteLogo = styled.img`
    height: 40px;
    padding: 20px 0;
`

const FooterContainer = styled.footer`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: black;
`

const CopyRights = styled.p`
    color: white;
`

function Footer() {
    return (
        <FooterContainer>
            <WhiteLogo src={Logo} />
            <CopyRights>© 2023 Kasa. All rights reserved.</CopyRights>
        </FooterContainer>
    )
}

export default Footer
