import React from 'react'
import { useState } from 'react'
import { Card } from "react-bootstrap"
import ItemCount from '../ItemCount'
import { Link, NavLink } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
  const [show, setShow] = useState(true)
  const onAdd = (count) => {
    setShow(false)

  }
  return (
    <div>
      <Card.Img className='imagenProd' variant="top" src={producto.img} />
      {/* <Card.Title>{producto.nombre}</Card.Title> */}
      <Card.Title>{producto.descripcion}</Card.Title>
      <Card.Title>{producto.precio}</Card.Title>
      {show ? <ItemCount onAdd={onAdd} minimo={1} maximo={producto.stock} stock={producto.stock} /> :
        <div> <Link to='/cart'><button class="bn632-hover bn22">Finalizar la compra</button></Link>
          <Link to='/'><button class="bn632-hover bn20">Seguir comprando</button></Link>
        </div>}
    </div>
  )
}

export default ItemDetail
