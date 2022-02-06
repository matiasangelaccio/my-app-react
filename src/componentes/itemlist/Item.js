import React from 'react'
import { Card } from "react-bootstrap"
import './Item.css'
import { Link } from 'react-router-dom'
const item = ({ id, nombre, imagen, precio }) => {
    return (

        <div key={id} className='divItem'>
            <Card className='cardItem'>
                <Card.Img className='imagenProd' variant="top" src={imagen} alt={imagen} />

                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Card.Title>${precio}</Card.Title>
                    <div className='divButtonCardItem'>

                        <Link to={`/detalle/${id}`}>
                            <button className='bn632-hover bn25'>Detalle del producto</button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div >
    )
}

export default item
