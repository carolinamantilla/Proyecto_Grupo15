import "./App.css";
import Gestion from "./componets/gestion";
import { BrowserRouter as Router, Switch, Route, link } from "react-router-dom";
import GestionEditar from "./componets/gestion-editar";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as fsv from "@fortawesome/free-solid-svg-icons";
library.add(fsv.faCoffee, fsv.faTimesCircle);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <a href="/inicio">
              {" "}
              <button type="button" class="btn btn-danger">
                Lista Usuarios
              </button>
            </a>
            <a href="/editar">
              {" "}
              <button type="button" class="btn btn-danger">
                Editar usuarios
              </button>
            </a>
          </Route>
          <Route path="/inicio">
            <Gestion />
          </Route>
          <Route path="/editar">
            <GestionEditar />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
