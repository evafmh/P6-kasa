import React from 'react'
import './Thumbnail.css'

function Thumbnail(props) {
    return (
        <div className="thumbnail">
            <img
                className="thumbnail-image"
                src={props.cover}
                alt={props.title}
            />
            <h2 className="thumbnail-title">{props.title}</h2>
        </div>
    )
}

export default Thumbnail
