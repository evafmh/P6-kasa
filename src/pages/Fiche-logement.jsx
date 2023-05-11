import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Slideshow from '../components/Slideshow/Slideshow'

function FicheLogement() {
    //Récupère l'ID de l'URL
    const { id } = useParams()
    // Vérifie si l'ID existe dans la liste de logements
    const logement = logements.find((logement) => logement.id === id)

    if (!logement) {
        // Redirige vers la page 404 si l'ID n'existe pas
        return <Navigate to="/404" />
    }

    return (
        <main>
            <Slideshow images={logement.pictures} />
            <h1>{logement.title}</h1>
        </main>
    )
}

export default FicheLogement
