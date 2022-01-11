
import './App.css';
import  Menunavbar from './componentes/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/itemlist/ItemListContainer';
import ItemCount from './componentes/itemlist/ItemCount';
import ItemDetailContainer from './componentes/itemlist/ItemDetailC/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './componentes/cart/Cart';



function App() {
  return (

    <div className="App">
      <BrowserRouter>
 < Menunavbar />
 <Routes>
 <Route exact path ='/cart' element={<Cart /> }/>
 <Route exact path ='/detalle/:idDetalle' element={<ItemDetailContainer /> }/>
 <Route exact path ='/' element={<ItemListContainer greeting ='Bienvenido a Sabor SkateShop' /> }/>
 <Route exact path ='/categoria/:idCategoria' element={<ItemListContainer  /> }/>
 </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
