import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({minimo, maximo}) => {
    const [count, setCount] = useState(minimo)
    const handleCount = () => {
        (count < maximo) && setCount(prev => prev + 1)

        // else {
        //     alert("no tenemos tanto stock")
        // }
    }
    const removeCount = () => {
         (count > minimo) ? setCount(prev => prev - 1) : alert("minimo de compra alcanzado")
    
    }
    return (
        <div className='itemCount'>

            <button className='buttonItemCount' onClick={removeCount}>-</button>
           <h3 className='count'>{count}</h3> 
            <button  className='buttonItemCount'  onClick={handleCount}>+</button>
        </div>
    )
}

export default ItemCount