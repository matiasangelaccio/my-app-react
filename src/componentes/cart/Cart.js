import React from 'react'
import { useCartContext } from '../../context/cartContext'



const Cart = () => {
    const { cartList } = useCartContext()
    return (
        <div>
            {cartList.map(prod => <li key={prod.id} >{prod.img}  {prod.nombre} cantidad: {prod.cantidad} precio: {prod.precio}</li>)}
        </div>
    )
}

export default Cart
