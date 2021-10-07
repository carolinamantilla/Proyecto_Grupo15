import './App.css';
import React from 'react';
import Login from "./componentes/Login";
import {Route, BrowserRouter as Router} from "react-router-dom";


function App() {
 return(
    <Router>
      <div className="container">
        <div class="card">
          <div class="card-header">
            <b>Sistema de Ventas</b>
          </div>
          <div class="card-body">
            <Route component={Login}></Route>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
