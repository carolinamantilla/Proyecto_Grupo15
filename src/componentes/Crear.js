import React from 'react';
import { Link } from "react-router-dom";
import SaleService from "../services/SaleService";


class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            fecha:"", 
            documentoCliente: "", 
            nombreCliente: "", 
            documentoVendedor:"", 
            estado: "",
            valorTotal: "",
            
         }

        this.changefechaHandler = this.changefechaHandler.bind(this);
        this.changedocumentoClienteHandler = this.changedocumentoClienteHandler.bind(this);
        this.changenombreClienteHandler = this.changenombreClienteHandler.bind(this);
        this.changedocumentoVendedorHandler = this.changedocumentoVendedorHandler.bind(this);
        this.changeestadoHandler = this.changeestadoHandler.bind(this);
        this.changevalorTotalHandler = this.changevalorTotalHandler.bind(this);
        this.saveSale = this.saveSale.bind(this);
    }

    componentDidMount(){
       return
    }

    saveSale = (e) => {
        e.preventDefault();
        let sale = {fecha: this.state.fecha, documentoCliente: this.state.documentoCliente, nombreCliente: this.state.nombreCliente,
            documentoVendedor: this.state.documentoVendedor, estado: this.state.estado, valorTotal: this.state.valorTotal};
            console.log('sale => ' + JSON.stringify(sale));

        SaleService.createSale(sale).then(res =>{
            this.props.history.push('/');
        });
        
    }
    
    changefechaHandler= (event) => {
        this.setState({fecha: event.target.value});
    }

    changedocumentoClienteHandler= (event) => {
        this.setState({documentoCliente: event.target.value});
    }

    changenombreClienteHandler= (event) => {
        this.setState({nombreCliente: event.target.value});
    }

    changedocumentoVendedorHandler= (event) => {
        this.setState({documentoVendedor: event.target.value});
    }
    
    changeestadoHandler= (event) => {
        this.setState({estado: event.target.value});
    }

    changevalorTotalHandler= (event) => {
        this.setState({valorTotal: event.target.value});
    }

    render() { 
        
        return (             

            <div className="card">
                <div className="card-header">
                    <h4>Registar Nueva Venta</h4>
                </div>
                <div className="card-body">
                   <form>
                        
                        <div className="row">    

                            <div className="col-md-3">  
                                <div className="form-group">
                                <label htmlFor="">ID Venta:</label>
                                <input type="text" readOnly name="id" id="id" className="form-control" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Asigando por el sistema</small>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Fecha:</label>
                                <input type="text" name="fecha" value={this.state.fecha} onChange={this.changefechaHandler} id="fecha" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Fecha de la venta</small>
                                </div>
                            </div>

                            <div className="col-md-3">  
                                <div className="form-group">
                                <label htmlFor="">Identificación del Vendedor:</label>
                                <input type="text" name="documentoVendedor" value={this.state.documentoVendedor} onChange={this.changedocumentoVendedorHandler} id="documentoVendedor" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Vendedor que realizó la venta</small>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Estado: </label>
                                <input type="text" name="estado" value={this.state.estado} onChange={this.changeestadoHandler} id="estado" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Estado: (En proceso/Cancelado/Entregada)</small>
                                </div>
                            </div>
                        
                        </div>

                        <div className="row">    

                            <div className="col-md-3">  
                                <div className="form-group">
                                <label htmlFor="">Identificación del Cliente:</label>
                                <input type="text" name="documentoCliente" value={this.state.documentoCliente} onChange={this.changedocumentoClienteHandler} id="documentoCliente" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Identificación del Cliente</small>
                                </div>
                            </div>
                            
                            <div className="col-md-8">
                                <div className="form-group">
                                <label htmlFor="">Nombre del Cliente:</label>
                                <input type="text" name="nombreCliente" value={this.state.nombreCliente} onChange={this.changenombreClienteHandler} id="nombreCliente" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Ingrese el nombre y apellido del cliente</small>
                                </div>
                            </div>
                        
                        </div>

                        <div className="row"> 
                            <div className="col-md-3">  
                                <div className="form-group">
                                <label htmlFor="">ID Producto:</label>
                                <input type="text" name="idProducto" id="idProducto" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Código del producto</small>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Cantidad:</label>
                                <input type="text" name="cantidad" id="cantidad" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Cantidad de productos</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Precio Unitario:</label>
                                <input type="text" name="precioUnit" id="precioUnit" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Precio unitario del producto</small>
                                </div>
                            </div>

                            <div className="col-md-3 ">
                                <br/>
                                <div className="btn-group" role="group" aria-label="">
                                    <button type="button" className="btn btn-secondary"> ➕ Agregar </button>
                                </div>
                            </div>
                        </div>

                        <div className="row"> 
                            <div className="col-md-10 ">
                            <table className="table">
                            <thead>
                                <tr>
                                <th>ID Producto</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>99900</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="">
                                            <button type="button" className="btn btn-danger"> 🗑 </button>
                                        </div>
                                    </td>
                                </tr>  
                            </tbody>
                            </table>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Valor Total:</label>
                                <input type="text" name="valorTotal" value={this.state.valorTotal} onChange={this.changevalorTotalHandler} id="valorTotal" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Valor total de la venta</small>
                                </div>
                            </div>
                        </div>
                   </form>

                </div>

                <div className="card-footer text-muted">
                
                    <div className="btn-group" role="group" aria-label="">
                        <button type="submit" onClick={this.saveSale} className="btn btn-primary">✔ Agregar Venta</button>
                        <Link to={"/"} className="btn btn-danger">✖ Cancelar</Link>
                        
                    </div>

                </div>
            </div>

        );
    }
}
 
export default Crear;