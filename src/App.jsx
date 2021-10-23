import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import { CreateProduct } from './components/CreateProduct';
import { EditProduct } from './components/EditProduct';
import { Home } from "./components/Home";
import { NotFound } from './components/NotFound';
import { NavBar } from './components/NavBar';
import { ProductoImagen } from './components/ImagenProduct';

export function App() {

    return (
        
        <BrowserRouter>
            <NavBar />
            <ProductoImagen/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/productos" component={ProductList} />
                {( 
                    <>
                        <Route exact path="/productos/agregar" component={CreateProduct} />
                        <Route exact path="/productos/editar/:id" component={EditProduct} />
                    </>
                )}
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
