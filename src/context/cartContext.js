// CREACION DEL CONTEXTO
import { createContext, useState } from "react";

export const CartContext = createContext([])

// COMPONENTE QUE MANEJA EL CONTEXTO

export const CartContextProvider = (children) => {
    // ESTADOS Y FUNCIONES GLOBALES
    const [cartList, setCartList] = useState([])
    function agregarAlCarrito(items) {
        setCartList([...cartList, items])
    }
    return (
        <CartContextProvider value={{
            cartList,
            agregarAlCarrito
        }}>
            {children}
        </CartContextProvider>
    )
}

