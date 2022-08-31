import React from 'react';
import  estilos from'./nav.module.css'

const Navbar = () =>{
    return( 
        <header>
            <nav className={estilos.nav}>
                
                <ul>
                <div className={estilos.logo}>
                 <p>Mundo <b className={estilos.masco}>MASCOTAS</b></p>
                 </div>
                    <li>
                        <a href="http://">Nosotros</a>
                    </li>
                    <li>
                        <a href="http://">Contacto</a>
                    </li>
                    <li>
                        <a href="http://">Nuestros clientes</a>
                    </li>
                    <li>
                        <a href="http://">Ubicacion</a>
                    </li>
                </ul>
              
            </nav>
        </header>
    )
}

export default Navbar;