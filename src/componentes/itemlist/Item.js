import React from 'react'
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import ItemCount from './ItemCount'
import './Item.css'
import { Link } from 'react-router-dom'
const item = ({id, nombre, imagen, precio, descripcion, stock }) => {
    return (
        
        <div key = {id} className='divItem'>
            <Card className='cardItem'>
                <Card.Img className='imagenProd' variant="top" src={imagen} alt={imagen} />

                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {/* {descripcion} */}
                    </Card.Text>
                    <Card.Title>{precio}</Card.Title>
                    <ItemCount minimo={1} maximo={stock} stock={stock} />
                    <div className='divButtonCardItem'>
                        <Button variant="dark" className='buttonCardItem'>Agregar al carrito</Button>
                        <Link to={`/detalle/${ id }`}>
                            < Button variant="dark" className='buttonCardDetail'>Detalle del producto</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
        </div >
    )
}

export default item
