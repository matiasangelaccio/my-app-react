import React from 'react'
import { useState } from 'react'
import { Card } from "react-bootstrap"
import ItemCount from '../ItemCount'
import { Link} from 'react-router-dom'
import './ItemDetail.css'
import { useCartContext } from '../../../context/cartContext'

const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useCartContext()

  const [show, setShow] = useState(true)
  const onAdd = (count) => {
    setShow(false)
    agregarAlCarrito({ ...producto, cantidad: count })
  }
  return (
    <div>
      <Card.Img className='imagenProd' variant="top" src={producto.img} />
      {/* <Card.Title>{producto.nombre}</Card.Title> */}
      <Card.Title>{producto.descripcion}</Card.Title>
      <Card.Title>${producto.precio}</Card.Title>
      {show ? <ItemCount onAdd={onAdd} minimo={0} maximo={producto.stock} stock={producto.stock} /> :
        <div> <Link to='/cart'><button className="bn632-hover bn22">Finalizar la compra</button></Link>
          <Link to='/'><button className="bn632-hover bn20">Seguir comprando</button></Link>
        </div>}
    </div>
  )
}

export default ItemDetail
