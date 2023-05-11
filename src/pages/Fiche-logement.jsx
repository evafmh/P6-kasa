import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'

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
        <div>
            <h1>Fiche</h1>
        </div>
    )
}

export default FicheLogement
