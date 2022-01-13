import React from 'react'
import { Card } from "react-bootstrap"
import ItemCount from '../ItemCount'
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
    
    return (
        <div>
          <Card.Img className='imagenProd' variant="top" src={producto.img}  />
             
            
            {/* <Card.Title>{producto.nombre}</Card.Title> */}
            <Card.Title>{producto.descripcion}</Card.Title>
            <Card.Title>{producto.precio}</Card.Title>
            <ItemCount minimo={1}  maximo={producto.stock} stock={producto.stock} />
          <a href="/"><button className='bn632-hover bn25'>Agregar al carrito</button></a> 

           
    </div>
    )
}

export default ItemDetail
