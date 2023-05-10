import React from 'react'
import Banner from '../components/Banner/Banner'
import bannerImage from '../assets/samuel-boardman-state-scenic-corridor-unsplash.png'
import Thumbnail from '../components/Thumbnail/Thumbnail'
import logements from '../data/logements.json'
import '../styles/style.css'

function Home() {
    return (
        <div>
            <Banner
                image={bannerImage}
                text="Chez vous, partout et ailleurs"
                alt="Bannière affichant des vagues se brisant contre les rochers"
            />
            <section className="thumbnails-container">
                {logements.map((logement) => (
                    <Thumbnail
                        key={logement.id + logement.title}
                        cover={logement.cover}
                        title={logement.title}
                    />
                ))}{' '}
            </section>
        </div>
    )
}

export default Home
