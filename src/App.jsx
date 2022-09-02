// un componente de react es una funcion de javascript
import './App.css';
import NavBar from "./components/navBar/NavBar"
import ItemListContainer from './components/itemListContainer/ItemListContainer';


// Convencion 
//SE DEBE LLAMAR IGUAL Q EL ARCHIVO
//EL NOMBRE EMPIEZA CON MAYUSCULA
const App = () => {
  const bienvenida = 'bienvenidos a nuestra pagina web'
  return (
    <>
     {/* <h1>Hola Mundo!</h1> */}
      <NavBar />
      <ItemListContainer bienvenida = {bienvenida} />    
    </> 
  );
}

//devuelve un solo elemento; entonces debemos meterlo en un contenedor 

export default App;


/* export const App = () => {
  return (
    <h1>Hola Mundo!!!</h1>
  );
} */