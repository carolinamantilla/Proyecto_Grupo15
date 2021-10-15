import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';
import Jeans from "../../images/Jeans.png";

const NavBar = () => {
  return (
    <>
      <Nav>
        <a href="#">
          <div className="logo">
            <img src={Jeans} alt="logo" width="70"/>
          </div>
        </a>
        <Bars />
        <NavMenu>
          <NavLink to='/inicio' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/productos' activeStyle>
            Productos
          </NavLink>
          <NavLink to='/ventas' activeStyle>
            Ventas
          </NavLink>
          <NavLink to='/administrador' activeStyle>
            Administrador
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/cerrar-sesion'>Cerrar Sesion</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default NavBar;
