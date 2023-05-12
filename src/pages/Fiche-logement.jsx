import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Slideshow from '../components/Slideshow/Slideshow'
import Dropdown from '../components/Dropdown/Dropdown'
import Tag from '../components/Tag/Tag'

function FicheLogement() {
    //Récupère l'ID de l'URL
    const { id } = useParams()
    // Vérifie si l'ID existe dans la liste de logements
    const logement = logements.find((logement) => logement.id === id)

    if (!logement) {
        // Redirige vers la page 404 si l'ID n'existe pas
        return <Navigate to="/404" />
    }

    console.log(logement.tags)

    return (
        <main>
            <div className="logement-slideshow">
                <Slideshow images={logement.pictures} />
            </div>
            <h1 className="logement-title">{logement.title}</h1>
            <span className="logement-subtitle">{logement.location}</span>
            <div className="logement-tags">
                {logement.tags.map((tag, index) => (
                    <Tag key={index} tagName={tag} />
                ))}
            </div>
            <div className="logement-details">
                <div className="logement-description">
                    <Dropdown
                        title="Description"
                        description={logement.description}
                    />
                </div>
                <div className="logement-equipements">
                    <Dropdown
                        title="Équipements"
                        description={logement.equipments}
                    />
                </div>
            </div>
        </main>
    )
}

export default FicheLogement
