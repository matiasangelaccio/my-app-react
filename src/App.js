
import './App.css';
import  Menunavbar from './componentes/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/itemlist/ItemListContainer';
import ItemCount from './componentes/itemlist/ItemCount';



function App() {
  return (

    <div className="App">
 < Menunavbar />
 <ItemListContainer  greeting ='Bienvenido a Sabor SkateShop' />
 
      
    </div>
  );
}

export default App;
