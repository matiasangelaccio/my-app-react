
import './App.css';
import  Menunavbar from './componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';



function App() {
  return (

    <div className="App">
 < Menunavbar />
 <ItemListContainer  greeting ='Bienvenido a mi tienda' />
 <ItemCount minimo={1} maximo={10} />
      
    </div>
  );
}

export default App;
