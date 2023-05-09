import React from 'react'
import Banner from '../components/Banner/Banner'
import bannerImage from '../assets/samuel-boardman-state-scenic-corridor-unsplash.png'

function Home() {
    return (
        <div>
            <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
        </div>
    )
}

export default Home
