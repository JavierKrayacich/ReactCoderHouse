import React from 'react';
import './styles.css';
import Item from './Item';

const ItemList = ({items})=> {
    
    
    return (<>
            <div id="itemList">
                {items.length > 0 ? items.map(item=>{
                    return <Item key={item.id} item={item}/>
                })
                : <p>Carga de productos</p>}
            </div>
        </>
    )
}

export default ItemList;