import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.png'
import './Header.css'

function Header() {
    return (
        <header className="header-container">
            <Link to="/">
                <img className="home-logo" src={Logo} alt="Logo" />
            </Link>
            <nav className="nav-container">
                <Link className="header-link" to="/">
                    Accueil
                </Link>
                <Link className="header-link" to="/a-propos">
                    A propos
                </Link>
            </nav>
        </header>
    )
}

export default Header
