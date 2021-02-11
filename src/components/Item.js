import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

const Item = ({item})=> {    

    return <div>
        <img src={item.imageid} alt={item.title} height="120px" width="100px"></img>
        <p>{item.title} ${item.price}</p>
        <div>
            <NavLink to={`/item/${item.id}`}>Ver detalle</NavLink>
        </div>
    </div>
}

export default Item;