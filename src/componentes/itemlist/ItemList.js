import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = ({productos}) => {
 
    return (
        <div className='divItemList'>
            {productos.map(prod => <Item key={prod.id} id={prod.id} nombre={prod.nombre} imagen={prod.img} precio={prod.precio} descripcion={prod.descripcion} stock={prod.stock} />) }
        </div>
    )
}

export default ItemList
