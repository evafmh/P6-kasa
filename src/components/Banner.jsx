import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
    position: relative;
    max-width: 1240px;
    height: 223px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.3);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid #000000;
    border-radius: 25px;
    mix-blend-mode: darken;
`

const BannerText = styled.h1`
    font-weight: 500;
    font-size: 48px;
    color: #ffffff;
    position: absolute;
    margin: 0;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
`

function Banner(props) {
    return (
        <BannerContainer>
            <BannerImage src={props.image} />
            {props.text ? <BannerText>{props.text}</BannerText> : null}
        </BannerContainer>
    )
}

export default Banner
