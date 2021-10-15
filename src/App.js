import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './Componentes/Pages/inicio';
import Productos from './Componentes/Pages/productos';
import Ventas from './Componentes/Pages/ventas';
import Administrador from './Componentes/Pages/administrador'
import CerrarSesion from './Componentes/Pages/cerrar-sesion'
import FooterBar from './Componentes/FooterBar/footerBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/inicio' component={Inicio} />
        <Route path='/productos' component={Productos} />
        <Route path='/ventas' component={Ventas} />
        <Route path='/administrador' component={Administrador} />
        <Route path='/cerrar-sesion' component={CerrarSesion} />
      </Switch>
      <FooterBar />
    </Router>
  );
}
export default App;
