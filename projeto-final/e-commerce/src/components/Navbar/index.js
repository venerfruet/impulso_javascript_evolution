import React from "react";
import { Nav, NavLink, NavMenu } from "./styled";
import { TbHome, TbChristmasTree, TbMail, TbShoppingCart } from 'react-icons/tb';
import CartLink from '../CartLink';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            <TbHome size="27px" />
          </NavLink>
          <NavLink to="/products">
            <TbChristmasTree size="27px" />
          </NavLink>
          <NavLink to="/contact">
            <TbMail size="27px" />
          </NavLink>
          <NavLink to="/cart">
            <TbShoppingCart size="27px" />
            <CartLink />
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
