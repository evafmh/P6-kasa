import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
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
