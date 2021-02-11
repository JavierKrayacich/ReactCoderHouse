import React, {useContext} from 'react'
import { contexto } from '../CartContext'
import './styles.css'

const CartItem = ({item})=> {
    
    const {cantidad, producto, subtotal} = item
    const {removeItem} = useContext(contexto)
   
    return (<div className="productoCart">
        <h4>{producto.title} {}</h4>
        <img src={producto.imageid} alt={producto.title} height="100px" width="60px"></img>
        <p>Precio: ${producto.price}</p>
        <p>Cantidad: {cantidad}</p>
        <p>Subtotal: ${subtotal}</p>
        <button onClick={()=>removeItem(producto.id, cantidad)}>Quitar del carrito</button>
    </div>)
}

export default CartItem