import React, { useEffect } from 'react'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import logements from '../data/logements.json'
import Slideshow from '../components/Slideshow/Slideshow'
import Dropdown from '../components/Dropdown/Dropdown'
import Tag from '../components/Tag/Tag'
import Host from '../components/Host/Host'
import Rate from '../components/Rate/Rate'

function FicheLogement() {
    //Récupère l'ID de l'URL
    const { id } = useParams()
    // Vérifie si l'ID existe dans la liste de logements
    const logement = logements.find((logement) => logement.id === id)
    // Vérifie si le titre formaté dans l'URL est correct
    const formattedTitle = logement.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    const expectedUrl = `/logements/${logement.id}/${formattedTitle}`
    //Récupère l'URL
    const routeLocation = useLocation()

    useEffect(() => {
        scrollToTop()
    }, [])

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    if (!logement || routeLocation.pathname !== expectedUrl) {
        // Redirige vers la page 404 si l'ID n'existe pas ou si l'URL est incorrect
        return <Navigate to="/404" />
    }

    return (
        <main>
            <div className="logement-slideshow">
                <Slideshow images={logement.pictures} />
            </div>
            <div className="logement-main-information">
                <div className="logement-titles-and-tags">
                    <h1 className="logement-title">{logement.title}</h1>
                    <span className="logement-subtitle">
                        {logement.location}
                    </span>
                    <div className="logement-tags">
                        {logement.tags.map((tag, index) => (
                            <Tag key={index} tagName={tag} />
                        ))}
                    </div>
                </div>
                <div className="logement-host-and-rating">
                    <Host
                        name={logement.host.name}
                        picture={logement.host.picture}
                    />
                    <Rate rating={logement.rating} />
                </div>
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
