import React from 'react'
import './Host.css'

const Host = ({ name, picture }) => {
    return (
        <aside className="host">
            <img className="host-picture" src={picture} alt="Host" />
            <span className="host-name">{name}</span>
        </aside>
    )
}

export default Host
