import React from 'react'
import Banner from '../components/Banner/Banner'
import Dropdown from '../components/Dropdown/Dropdown'
import bannerImage from '../assets/kalen-emsley-nature-Bkci_8qcdvQ-unsplash 2.png'

const AboutData = [
    {
        title: 'Fiabilité',
        description:
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
        title: 'Respect',
        description:
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        title: 'Service',
        description:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        title: 'Sécurité',
        description:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
]

function About() {
    return (
        <main>
            <Banner
                image={bannerImage}
                text=""
                alt="Bannière affichant un paysage de montagnes"
            />
            <section>
                {AboutData.map((item, index) => (
                    <article
                        className="about-dropdown"
                        key={index + item.title}
                    >
                        <Dropdown
                            title={item.title}
                            description={item.description}
                        />
                    </article>
                ))}
            </section>
        </main>
    )
}

export default About
