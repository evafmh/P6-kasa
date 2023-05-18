import React, { useEffect } from 'react'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import accomodations from '../data/accomodations.json'
import Slideshow from '../components/Slideshow/Slideshow'
import Dropdown from '../components/Dropdown/Dropdown'
import Tag from '../components/Tag/Tag'
import Host from '../components/Host/Host'
import Rate from '../components/Rate/Rate'

function Accomodation() {
    //Récupère l'ID de l'URL
    const { id } = useParams()
    // Vérifie si l'ID existe dans la liste de accomodations
    const accomodation = accomodations.find(
        (accomodation) => accomodation.id === id
    )
    // Vérifie si le titre formaté dans l'URL est correct
    const formattedTitle = accomodation.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    const expectedUrl = `/accomodations/${accomodation.id}/${formattedTitle}`
    //Récupère l'URL
    const routeLocation = useLocation()

    useEffect(() => {
        scrollToTop()
    }, [])

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const renderEquipmentsDropdownContent = () => {
        return (
            <ul className="dropdown-list">
                {accomodation.equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )
    }

    if (!accomodation || routeLocation.pathname !== expectedUrl) {
        // Redirige vers la page erreur 404 si l'ID n'existe pas ou si l'URL est incorrect
        return <Navigate to="/404" />
    }

    return (
        <main>
            <div className="accomodation-slideshow">
                <Slideshow images={accomodation.pictures} />
            </div>
            <div className="accomodation-main-information">
                <div className="accomodation-titles-and-tags">
                    <h1 className="accomodation-title">{accomodation.title}</h1>
                    <span className="accomodation-subtitle">
                        {accomodation.location}
                    </span>
                    <div className="accomodation-tags">
                        {accomodation.tags.map((tag, index) => (
                            <Tag key={index} tagName={tag} />
                        ))}
                    </div>
                </div>
                <div className="accomodation-host-and-rating">
                    <Host
                        name={accomodation.host.name}
                        picture={accomodation.host.picture}
                    />
                    <Rate rating={accomodation.rating} />
                </div>
            </div>
            <div className="accomodation-details">
                <div className="accomodation-description">
                    <Dropdown
                        title="Description"
                        description={accomodation.description}
                    />
                </div>
                <div className="accomodation-equipements">
                    <Dropdown
                        title="Équipements"
                        description={renderEquipmentsDropdownContent()}
                    />
                </div>
            </div>
        </main>
    )
}

export default Accomodation
