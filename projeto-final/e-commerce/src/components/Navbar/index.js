import React from "react";
import { Nav, NavLink, NavMenu } from "./styled";
import { TbHome, TbChristmasTree, TbMail, TbShoppingCart } from 'react-icons/tb';
import Cart from '../Cart';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            <TbHome size="35px" />
          </NavLink>
          <NavLink to="/products">
            <TbChristmasTree size="35px" />
          </NavLink>
          <NavLink to="/contact">
            <TbMail size="35px" />
          </NavLink>
          <NavLink to="/cart">
            <TbShoppingCart size="35px" />
            <Cart active={false} />
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
