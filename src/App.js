import './App.css';
import React from 'react';
import Login from "./componentes/Login";
import {Route, BrowserRouter as Router} from "react-router-dom";


function App() {
 return(
    <Router>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <b>Sistema de Ventas</b>
          </div>
          <div className="card-body">
            <Route component={Login}></Route>
          </div>
          <div className="card-footer">
            <small>Keydi Mercado<br/>
            Andrea Zorro<br/>
            Carolina Mantilla</small>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
