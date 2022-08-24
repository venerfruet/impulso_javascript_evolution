import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  @media (orientation:portrait){
    width: 100%;
    margin-bottom:11px;
  }
`;

export const NavLink = styled(Link)`
  color: #808080;
  border:2px solid;
  border-radius:7px;
  font-size: 1.3em;
  display: flex;
  flex-direction:row;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: deeppink;
  }
  `;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
