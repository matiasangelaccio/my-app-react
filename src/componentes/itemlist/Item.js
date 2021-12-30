import React from 'react'
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap" 
import ItemCount from './ItemCount'
import './Item.css'
const item = ({nombre, imagen, precio, descripcion, stock}) => {
    return (
        <div className='divItem'>
             <Card className='cardItem'>
                <Card.Img variant="top" src="#" alt={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Card.Title>{precio}</Card.Title>
                    <ItemCount minimo={1} maximo={stock} stock={stock}/>
                    <div className='divButtonCardItem'>
                        <Button variant="dark" className='buttonCardItem'>Agregar al carrito</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default item
