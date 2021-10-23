import React,{useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { UsuariosList } from './components/UsuarioList';
import { CreateUser } from './components/CreateUser';
import { EditUser } from './components/EditUser';
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";
import { NotFound } from './components/NotFound';
import { NavBar } from './components/NavBar';
import { getCurrentUser } from './services/AuthService';

export function App() {

    const [user, setUser] = useState([])
    useEffect(() => {
        setUser(getCurrentUser());
    }, [])

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/usuario" component={UsuariosList} />
                {user && (
                    <>
                        <Route exact path="/usuario/agregar" component={CreateUser} />
                        <Route exact path="/usuario/editar/:id" component={EditUser} />
                    </>
                )}
                <Route exact path="/login" component={Login} />
                <Route exact path="/registrarse" component={Signup} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}


