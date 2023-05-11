import React, { useState } from 'react'
import './Slideshow.css'
import arrowRight from '../../assets/arrow-right.png'
import arrowLeft from '../../assets/arrow-left.png'

function Slideshow({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        )
    }

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        )
    }

    return (
        <div className="slideshow">
            {images.length > 1 && (
                <div className="slideshow-nav">
                    <img
                        className="slideshow-arrow arrow-left"
                        src={arrowLeft}
                        alt="Previous Slide"
                        onClick={goToPreviousSlide}
                    />
                    <img
                        className="slideshow-arrow arrow-right"
                        src={arrowRight}
                        alt="Next Slide"
                        onClick={goToNextSlide}
                    />
                    <div className="slide-number">{`${currentSlide + 1}/${
                        images.length
                    }`}</div>
                </div>
            )}
            <img
                className="slide-image"
                src={images.length === 1 ? images : images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
            />
        </div>
    )
}

export default Slideshow
