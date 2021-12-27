import React from 'react'
import { useState } from 'react'

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
        <div>

            <button onClick={removeCount}>-</button>
            {count}
            <button onClick={handleCount}>+</button>
        </div>
    )
}

export default ItemCount