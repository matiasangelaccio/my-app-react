import React from 'react'
import { useEffect, useState } from 'react'
import { getFetch } from '../Mock'
import ItemDetail from '../ItemDetailC/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
const [producto, setProducto] = useState({})
const [loading, setLoading] = useState(true);
const{idDetalle} = useParams()
useEffect(()=>{
getFetch 
.then(resp=>{
setProducto(resp.find(prod =>(prod.id) === idDetalle))
setLoading(false);
})
},[idDetalle])

    return (
        <div>
          {loading ? 'cargando' :  
            <ItemDetail  producto={producto}/>
            }
        </div>
    )
}
export default ItemDetailContainer
