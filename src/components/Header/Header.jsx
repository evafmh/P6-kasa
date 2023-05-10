import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/LOGO.png'
import './Header.css'

function Header() {
    const location = useLocation()

    return (
        <header className="header-container">
            <div className="logo-container">
                <Link to="/">
                    <img className="home-logo" src={Logo} alt="Logo" />
                </Link>
            </div>
            <nav className="nav-container">
                <Link
                    className={`header-link ${
                        location.pathname === '/' ? 'active' : ''
                    }`}
                    to="/"
                >
                    Accueil
                </Link>
                <Link
                    className={`header-link ${
                        location.pathname === '/a-propos' ? 'active' : ''
                    }`}
                    to="/a-propos"
                >
                    A propos
                </Link>
            </nav>
        </header>
    )
}

export default Header
