// CREACION DEL CONTEXTO
import {useState, useContext, createContext } from "react";

// CREO EL CONTEXTO
 const CartContext = createContext([])
// FUNCION QUE EVITA IMPORTAR EL USECONTEXT EN DONDE QUIERO USARLO
export function useCartContext(){
    return useContext(CartContext)
}

// COMPONENTE QUE MANEJA EL CONTEXTO

export const CartContextProvider = ({children}) => {
    // ESTADOS Y FUNCIONES GLOBALES
    const [cartList, setCartList] = useState([])
    function agregarAlCarrito(items) {
        const indice = cartList.findIndex(i => i.id === items.id)
// SI EXISTE DEVUELVE EL INDICE SINO -1
        if(indice > -1){
const cantVieja = cartList[indice].cantidad
let cantNueva = cantVieja + items.cantidad
cartList[indice].cantidad = cantNueva
let arrayCantActual = [...cartList]
setCartList(arrayCantActual)
        }
        else{
        setCartList([...cartList, items])
        }
    }
    function vaciarCarrito(){
        setCartList([])
    }
    console.log(cartList)
    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito, 
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

