
import './App.css';
import  Menunavbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';



function App() {
  return (

    <div className="App">
 < Menunavbar />
 <ItemListContainer  greeting ='Bienvenido a mi tienda' />
      
    </div>
  );
}

export default App;
