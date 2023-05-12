import React from 'react'
import './Rate.css'
import activeStar from '../../assets/colored-star.png'
import inactiveStar from '../../assets/grey-star.png'

const Rate = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5]

    return (
        <div className="rate">
            {stars.map((star) => (
                <img
                    key={star}
                    src={star <= rating ? activeStar : inactiveStar}
                    alt={star <= rating ? 'colored-star' : 'grey-star'}
                    className="star"
                />
            ))}
        </div>
    )
}

export default Rate
