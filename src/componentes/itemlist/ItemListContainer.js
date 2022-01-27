import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import{getDocs, getFirestore, query, collection, where} from 'firebase/firestore'
const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategoria } = useParams()
    useEffect(() => {
if(idCategoria){
    const db = getFirestore()
    const queryCollection = query( collection (db, 'items'),
    where('categoria', '==', idCategoria))
    getDocs(queryCollection)
    .then(res=>setProductos(res.docs.map(prod =>({id: prod.id, ...prod.data()}))))
    .catch(err => err)
    .finally(() => setLoading(false))
}
else{
    const db = getFirestore()
const queryCollection = query( collection (db, 'items'))
getDocs(queryCollection)
.then(res=>setProductos(res.docs.map(prod =>({id: prod.id, ...prod.data()}))))
.catch(err => err)
.finally(() => setLoading(false))
}

// const queryProd = doc(db, 'items')
// getDoc(queryProd)
// .then(resp =>setProductos({id: resp.id, ...resp.data()}))
        // if (idCategoria) {
        //     getFetch
        //         .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
        //         .catch(err => console.log(err))
        //         .finally(() => setLoading(false))
        // } else {
        //     getFetch
        //         .then(resp => setProductos(resp))
        //         .catch(err => console.log(err))
        //         .finally(() => setLoading(false))
        // }
    }, [idCategoria])
    return (
        <div className='divItemListContainer'>
            <h1>{greeting}</h1>
            {loading ? <h3>Aguarde unos segundos</h3> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer
