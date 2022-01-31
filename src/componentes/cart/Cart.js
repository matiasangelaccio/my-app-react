import React from 'react'
import {useState} from 'react'
import './cart.css'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { addDoc, getFirestore, collection, doc, updateDoc, query, where, documentId, writeBatch, getDocs } from 'firebase/firestore'


const Cart = () => {
    const { cartList, deleteItem, vaciarCarrito, total } = useCartContext()
    const [dataForm, setDataForm] = useState({
        email:'',
        name:'',
        phone:''
    })
    const realizarCompra = async (e) =>{
        e.preventDefault()
        let orden={}

        orden.buyer = {nombre: 'matias', email:'matiasangelaccio@gmail.com', tel:'1234959595'}
        orden.total = total()

        orden.items = cartList.map(cartItem =>{
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad

            return {id, nombre, precio, cantidad}
        })
        // guardar en firestore
        const db = getFirestore()
        const ordenCollection = collection(db, 'ordenes' )
        await addDoc(ordenCollection, orden )
        .then(resp=> console.log(resp.id))
        .catch(err =>console.log(err))

        // const orderDoc = doc(db, 'items', '1')
        // updateDoc(orderDoc, {
        //     stock:6
        // })
// actualizar stock
const queryCollection = collection(db, 'items')
const queryActualizarStock = query(
    queryCollection, where(documentId(), 'in', cartList.map(it =>it.id))
)
const batch = writeBatch(db)

await getDocs(queryActualizarStock)
.then(resp => resp.docs.forEach(res => batch.update(res.ref,{
    stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
})))
.catch(err => console.log(err))
.finally(() => console.log ('stock actualizado'))

batch.commit()
    }
function handleChange(e) {
    

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
             
             <form onSubmit={realizarCompra}>
             <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    onChange={handleChange}
                    value={dataForm.name}
                /><br />

                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    onChange={handleChange}
                    value={dataForm.phone}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    onChange={handleChange}
                    value={dataForm.email}
                /><br/>
   <button onClick={realizarCompra}>generar orden</button>
             </form>
        
        </div>

        
    )
}
}

export default Cart
