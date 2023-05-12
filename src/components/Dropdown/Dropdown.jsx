import React, { useState } from 'react'
import './Dropdown.css'
import arrowUp from '../../assets/arrow-up.png'
import arrowDown from '../../assets/arrow-down.png'

const Dropdown = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const renderDescription = () => {
        if (Array.isArray(description)) {
            return (
                <ul className="dropdown-list">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )
        } else {
            return <div className="dropdown-description">{description}</div>
        }
    }

    return (
        <div
            className={`dropdown ${isOpen ? 'open' : 'close'}`}
            onClick={toggleDropdown}
        >
            <div className="dropdown-header">
                <h2 className="dropdown-title">{title}</h2>
                <img
                    className={isOpen ? 'arrow arrow-up' : 'arrow arrow-down'}
                    src={isOpen ? arrowUp : arrowDown}
                    alt="show content"
                />
            </div>
            <div
                className={
                    isOpen ? 'dropdown-content' : 'dropdown-content-hidden'
                }
            >
                {isOpen ? renderDescription() : null}
            </div>
        </div>
    )
}

export default Dropdown
