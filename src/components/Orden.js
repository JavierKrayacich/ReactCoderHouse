import React, {useState, useEffect} from 'react'
import {getFirestore} from '../firebase'

const Orden = (orden) => {
    console.log(orden)
    const [ordenId, setOrdenId] = useState()
    
    
    useEffect(()=>{
        const db = getFirestore()
        const orders = db.collection("orders")
        if (!ordenId) {
            orders.add(orden)
            .then(({id})=>{
                setOrdenId(id)
                console.log(id)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
    },[ordenId, orden])

    console.log("Render Orden")

    return (<>{ordenId ?
                <>
                    <p>Orden de compra número: {ordenId}</p>
                    {}
                    <p>Gracias por su compra!</p>
                </>
                :
                <><p>Generando su orden</p></>
    }</>)
}

export default Orden