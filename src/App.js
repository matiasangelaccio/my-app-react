import logo from './logo.svg';
import './App.css';
import  Menunavbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';



function App() {
  return (

    <div className="App">
 < Menunavbar />
 <ItemListContainer  greeting ='Bienvenido a mi tienda' />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. yeye
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
