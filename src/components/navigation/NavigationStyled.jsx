import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


export const Nav = styled.nav`
    display: flex;
    align-items: center;
`;


export const NavList = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    padding: 0;
    margin-right: 32px;

    &:last-child {
        margin-right: 0;
    }
`;


 export const LinkStyled = styled(NavLink)`
    display: block;
    padding: 0px 0;
    
    font-weight: 700;
    font-size: 20px;
    line-height: 1.88;
    letter-spacing: 0.06em;
    color: inherit;
    text-decoration: none;

    transition-property: color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);


    &:hover,
    &:focus {
        color: rgba(24, 140, 232, 1);
     }
    `;
