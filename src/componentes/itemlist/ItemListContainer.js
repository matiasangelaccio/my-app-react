import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { getFetch } from './Mock'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategoria } = useParams()
    useEffect(() => {
        if (idCategoria) {
            getFetch
                .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getFetch
                .then(resp => setProductos(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [idCategoria])
    return (
        <div className='divItemListContainer'>
            <h1>{greeting}</h1>
            {loading ? <h3>Aguarde unos segundos</h3> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer
