import React from 'react'
import './Banner.css'

function Banner(props) {
    return (
        <div className="banner-container">
            <img className="banner-image" src={props.image} alt={props.alt} />
            {props.text ? <h1 className="banner-text">{props.text}</h1> : null}
        </div>
    )
}

export default Banner
