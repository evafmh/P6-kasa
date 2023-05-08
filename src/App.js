import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Apropos from './pages/A-propos'
import FicheLogement from './pages/Fiche-logement'
import Page404 from './pages/404'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap');
    body {
        font-family: 'Montserrat', sans-serif;
        padding: 20px;
    }
`

function App() {
    return (
        <Router>
            <div className="app">
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/a-propos" element={<Apropos />} />
                    <Route path="/logements/:id" element={<FicheLogement />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
