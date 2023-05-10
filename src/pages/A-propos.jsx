import React from 'react'
import Banner from '../components/Banner/Banner'
import bannerImage from '../assets/kalen-emsley-nature-Bkci_8qcdvQ-unsplash 2.png'

function Apropos() {
    return (
        <div>
            <Banner
                image={bannerImage}
                text=""
                alt="Bannière affichant un paysage de montagnes"
            />
        </div>
    )
}

export default Apropos
