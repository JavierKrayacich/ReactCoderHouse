import React, { useContext } from 'react';
import './styles.css';
import cartIcon from './media/cartIcon.png';
import { NavLink } from 'react-router-dom';
import { contexto } from '../CartContext';

const CartWidget = () => {
    const {cantidadTotal} = useContext(contexto)

    return (
        <NavLink to="/cart" id="cartWidget">
            <img src={cartIcon} alt="Icono de carrito de compras" width="20px" height="20px"></img>
            <div>{cantidadTotal}</div>
        </NavLink>
    )
}

export default CartWidget;
