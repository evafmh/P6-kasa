import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Apropos from './pages/A-propos'
import FicheLogement from './pages/Fiche-logement'
import Page404 from './pages/404'

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/a-propos" component={Apropos} />
                    <Route path="/logements/:id" component={FicheLogement} />
                    <Route component={Page404} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
