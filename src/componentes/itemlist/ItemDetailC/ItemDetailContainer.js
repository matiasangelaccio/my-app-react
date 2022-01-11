import React from 'react'
import { useEffect, useState } from 'react'
import { getFetch } from '../Mock'
import ItemDetail from '../ItemDetailC/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
const [producto, setproducto] = useState({})
const{idDetalle} = useParams()
useEffect(()=>{
getFetch 
.then(resp=>setproducto(resp.find(prod =>prod.id === idDetalle)))
},[])

    return (
        <div>
            
            <ItemDetail  producto={producto}  />
        </div>
    )
}
export default ItemDetailContainer
