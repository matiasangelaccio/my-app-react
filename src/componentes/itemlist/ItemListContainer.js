import React from 'react'
import ItemList from './ItemList'
import { useState , useEffect} from 'react'
import { getFetch } from './Mock'
const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
   
    useEffect(()=>{
        getFetch
        .then(resp=> setProductos(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])

    return (
        <div className='divItemListContainer'>
        <h1>{greeting}</h1> 
        {loading ? <h3>Aguarde unos segundos</h3>:<ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer
