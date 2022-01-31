// CREACION DEL CONTEXTO
import {useState, useContext, createContext } from "react";
import { getFirestore , collection} from 'firebase/firestore'
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
    const vaciarCarrito = ()=>{
        setCartList([])
    }
    console.log(cartList)
    const deleteItem = (id)=>{
        const itemFiltrado = cartList.filter((producto) => producto.id !== id)
        setCartList(itemFiltrado);
    }
    const total = () =>{
        const totalCarrito = cartList.reduce((prev,curr) => prev + curr.precio * curr.cantidad, 0
        );
        return totalCarrito;
    };
    const mostrarNumero = () =>{
        const itemsEnCarrito = cartList.reduce((prev, curr) => prev + curr.cantidad, 0)
        return itemsEnCarrito
    
    }

    

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito, 
            deleteItem,
            vaciarCarrito,
            total,
            mostrarNumero
        }}>
            {children}
        </CartContext.Provider>
    )
}

