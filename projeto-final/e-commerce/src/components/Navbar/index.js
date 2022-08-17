import React from "react";
import { Nav, NavLink, NavMenu } from "./styled";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Início
          </NavLink>
          <NavLink to="/products">
            Produtos
          </NavLink>
          <NavLink to="/contact">
            Contato
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
