import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';
import ItemList from './ItemList';
import {getFirestore} from '../firebase'

const ItemListContainer = ({greeting}) => {
    const [items,setItems] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        setItems([])
        const db = getFirestore()    
        const itemsCollection = db.collection("ItemCollection")

        if(id){
            const query = itemsCollection.where("categoryid","==",id)
            query.get()
            .then((resultado)=>{
                
                resultado.docs.forEach((doc)=>{
                    const item = {  id: doc.id,
                                    
                                    ...doc.data()    }
                    setItems(items => [...items, item])
                    
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }else {
            const query = itemsCollection.get()
            query
            .then((resultado)=>{
                resultado.docs.forEach((doc)=>{
                    const item = {  id: doc.id,
                                    
                                    ...doc.data()    }
                    setItems(items => [...items, item])
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }, [id])

    console.log(items)

    return (<>
        <h1>{greeting}</h1>
        <ItemList items={items}/>
    </>
    )
} 

export default ItemListContainer;