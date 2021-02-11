import React, {useContext, useState} from 'react';
import './styles.css';
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';
import { contexto } from '../CartContext';

const ItemDetail = ({item})=> {
    
    const [stock,setStock] = useState(100)
    const [initial,setInitial] = useState(1)
    const [cantItem, setCantItem] = useState()

    const {addItem} = useContext(contexto)

    const onAdd = ()=>{
        
        handleStock()
        
        addItem(item, initial)        
    }
    const handleStock = ()=> {
        if(stock>0) {
            setStock(stock-initial)
            setCantItem(initial)         
        }
    }    

    const onSumar = () => {
        if (initial<stock) {
            setInitial(initial+1)
        }                
    }
    const onRestar = () => {
        if (initial>0) {
            setInitial(initial-1)
        }      
    }
    


    return (<div id="itemDetail">
        <h4>{item.title}</h4>
        <p>Descripción: {item.description}</p>
        <p>Precio: ${item.price}</p>
        <img src={item.imageid} alt="Imagen de producto" height="200px" width="140px"></img>
        {cantItem ? 
            <>
                <button><NavLink to="/cart">Terminar mi compra</NavLink></button>
                <button><NavLink to="/">Seguir comprando</NavLink></button>
            </>
            : <ItemCount onAdd={onAdd} onSumar={onSumar} onRestar={onRestar} initial={initial}/>
        }
    </div>)
}

export default ItemDetail;