import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner/Banner'
import bannerImage from '../assets/samuel-boardman-state-scenic-corridor-unsplash.png'
import Thumbnail from '../components/Thumbnail/Thumbnail'
import logements from '../data/logements.json'
import '../styles/style.css'

function Home() {
    return (
        <main>
            <Banner
                image={bannerImage}
                text="Chez vous, partout et ailleurs"
                alt="Bannière affichant des vagues se brisant contre les rochers"
            />
            <section className="thumbnails-container">
                {logements.map((logement) => {
                    const formattedTitle = logement.title
                        .toLowerCase() //En minuscule
                        .normalize('NFD') //Convertir les accents en lettres sans accents
                        .replace(/[^\w\s-]/g, '') // Supprime les caractères non alphanumériques
                        .replace(/\s+/g, '-') //Convertir les espaces en tiret
                        .replace(/-+/g, '-') //Convertir les tirets multiples en un seul tiret
                    const url = `/logements/${logement.id}/${formattedTitle}`

                    return (
                        <Link
                            className="thumbnail-link"
                            to={url}
                            key={logement.id}
                        >
                            <Thumbnail
                                cover={logement.cover}
                                title={logement.title}
                            />
                        </Link>
                    )
                })}
            </section>
        </main>
    )
}

export default Home
