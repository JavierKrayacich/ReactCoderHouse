import React, { createContext, useState } from 'react';

const contexto = createContext()
const {Provider} = contexto

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([/* producto1, producto2, etc */])
    const [cantidadTotal, setCantidadTotal] = useState(0)

   
    const addItem = (objetoItem, quantity)=> {
        crearProducto(objetoItem, quantity, isInCart)        
    }

    
    const crearProducto = (objetoItem, quantity, callback)=> {
        const subtotal = quantity * objetoItem.price
        const itemAgregado = {producto: objetoItem, cantidad: quantity, subtotal: subtotal}
        /* console.log(itemAgregado) */        
        callback(itemAgregado, quantity)
    }

    
    const isInCart = (producto, quantity)=> {
        const existe = cart.find(element => element.producto.id === producto.producto.id)
        /* console.log(existe) */
        if (!existe) {
            setCart(cart => [...cart, producto])
            setCantidadTotal(cantidadTotal + quantity)            
        }
        else{alert("El producto ya se encuentra en el carrito.")}
    }
    
    
    const removeItem = (itemId, quantity)=> {
        quitarItem(itemId, quantity, borrarItem)
    }

    const quitarItem = (itemId, quantity, callback)=> {
        /* console.log(itemId) */
        const index = cart.findIndex(element => element.producto.id === itemId)
        /* console.log(index) */
        callback(index, quantity)
    }

    const borrarItem = (index, quantity)=> {
        cart.splice(index, 1)        
        /* console.log(cart) */
        setCart(cart)        
        setCantidadTotal(cantidadTotal - quantity)
    }
    
    
    const clear = ()=> {
        setCart([])
        setCantidadTotal(0)
    }

    
    const precioTotal = ()=>{
        return cart.reduce((suma, producto)=>suma + producto.subtotal, 0)
    }
    
    console.log(cart)

    return (
        <Provider value={{cart, addItem, removeItem, clear, precioTotal, cantidadTotal}}>
            {children}
        </Provider>
    )
}

export {contexto, Provider};
export default CartProvider;