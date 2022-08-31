// un componente de react es una funcion de javascript
import './App.css';
import Navbar from "./components/nav/Navbar"

 
// Convencion 
//SE DEBE LLAMAR IGUAL Q EL ARCHIVO
//EL NOMBRE EMPIEZA CON MAYUSCULA
const App = () => {
  return (
    <>
      <h1>Hola Mundo!</h1>
      <Navbar />
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