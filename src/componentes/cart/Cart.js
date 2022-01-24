import React from 'react'
import './cart.css'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cartList, deleteItem, vaciarCarrito, total } = useCartContext()
    return (
        <div className='divCart'>
            {cartList.length === 0 ? (
                <div className='divCartEmpty'> 
                <h1>No agrego ningun producto al carrito</h1>
                <Link to={'/'}>
                <button className='bn632-hover bn26'>Volver al catalogo</button>
                </Link>
                </div>
            ) : (
                cartList.map(prod => <li className='listCart' key={prod.id} ><img className='imgCart' src={prod.img} />
                    <p>{prod.nombre}</p>
                    <p>cantidad: {prod.cantidad}</p>
                    <p>precio: ${prod.precio}</p>                  
           
            <button className='bn632-hover bn28' onClick={() => deleteItem(prod.id)}>X</button>
                </li>
                
                )
            )}
             <h3>Total${total()}</h3>
             <button className='bn632-hover bn28' onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
        
    )
}


export default Cart
