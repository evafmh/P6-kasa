import Logo from '../../assets/LOGO_white.png'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer-container">
            <img className="white-logo" src={Logo} alt="Kasa logo" />
            <p className="copy-rights">© 2023 Kasa. All rights reserved.</p>
        </footer>
    )
}

export default Footer
