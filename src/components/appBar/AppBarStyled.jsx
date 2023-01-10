import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`    
    padding: 16px;   
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    border-bottom: 1px solid #343545;
    background-color: var(--background-header);
`;  

export const BoxHeader = styled.div`
    display: flex;
    width: 1200px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
 
`;



export const Logo = styled(NavLink)`
  margin-right: 200px;
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus {
    color: rgba(33, 150, 243, 1);
  }
`;