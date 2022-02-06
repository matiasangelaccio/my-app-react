import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import './cartWidget.css'
import { useCartContext } from '../../context/cartContext'
const CartWidget = () => {
    const { mostrarNumero } = useCartContext()
    return (
        <div>
            <div className='badgeroundedNumber'>{mostrarNumero()}</div>
            <FaCartPlus className='carrito' />
        </div>
    )
}

export default CartWidget
