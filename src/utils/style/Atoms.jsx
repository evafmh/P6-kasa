import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
    padding: 17px;
    color: ${colors.primary};
    text-decoration: none;
    font-size: 24px;
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &:active {
        text-decoration: underline;
    }
`
