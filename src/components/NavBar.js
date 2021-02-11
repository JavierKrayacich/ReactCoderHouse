import React, { useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import CartWidget from './CartWidget';
import { contexto } from '../CartContext';

const NavBar = () =>{
  const {cart} = useContext(contexto)
  
  return (
      <nav>
        <NavLink to="/" exact id="brand">PerifericosGamer</NavLink>
        <div id="menuDerecha">
          <ul id="menu">
            <li className = "categories"><NavLink to="/category/Mouse">Mouse</NavLink></li>
            <li className = "categories"><NavLink to="/category/Teclados">Teclados</NavLink></li>
            <li className = "categories"><NavLink to="/category/Headsets">Headsets</NavLink></li>
          </ul>
          {cart.length > 0 ? <CartWidget/> : null}
        </div>
      </nav>
  )
}

export default NavBar;