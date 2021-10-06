import React from 'react';
import Select from 'react-select';
import { Link } from "react-router-dom";

const options = [
    { value: '0', label: 'Seleccione...' },
    { value: 'En proceso', label: 'En proceso' },
    { value: 'Cancelada', label: 'Cancelada' },
    { value: 'Entregada', label: 'Entregada' }
  ];

class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            venta: [],
            datosCargados:false,
         }
    }

    cambioValor = (e) =>{
        const state = this.state.venta;
        state[e.target.idVenta]=e.target.value;
        this.setState({venta:state});
    }

    enviarDatos = (e) => {
        e.preventDefault();
        console.log("Formulario enviado...");

    }

    render() { 

        const{venta}=this.state

        return ( 
        
        <div className="card">
            <div className="card-header">
               <h4>Editar Venta</h4>
            </div>
            <div className="card-body">
            <form onSubmit={this.enviarDatos}>
                        
                        <div className="row">    

                            <div className="col-md-3">  
                                <div className="form-group">
                                <label htmlFor="">ID Venta:</label>
                                <input type="text" readOnly name="idVenta" onChange={this.cambioValor} value={venta.idVenta} id="idVenta" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted"></small>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Fecha:</label>
                                <input type="text" name="fecha" onChange={this.cambioValor} value={venta.fecha} id="fecha" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Fecha de la venta</small>
                                </div>
                            </div>
                        
                        </div>

                        <div className="row">    

                            <div className="col-md-3">  
                                <div className="form-group">
                                <label htmlFor="">ID Cliente:</label>
                                <input type="text" name="idCliente" onChange={this.cambioValor} value={venta.idCliente} id="idCliente" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Identificación del Cliente</small>
                                </div>
                            </div>
                            
                            <div className="col-md-8">
                                <div className="form-group">
                                <label htmlFor="">Nombre del Cliente:</label>
                                <input type="text" name="nombreCliente" onChange={this.cambioValor} value={venta.nombreCliente} id="nombreCliente" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Ingrese el nombre y apellido del cliente</small>
                                </div>
                            </div>
                        
                        </div>

                        <div className="row">    

                            <div className="col-md-3">  
                                <div className="form-group">
                                <label htmlFor="">ID Vendedor</label>
                                <input type="text" name="idVendedor" onChange={this.cambioValor} value={venta.idVendedor}id="idVendedor" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Vendedor que realizó la venta</small>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Estado</label>
                                <Select
                                    value={venta.selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                                <small id="helpId" className="text-muted">Seleccione el estado de la venta</small>
                                </div>
                            </div>
                        
                        </div>

                        <div className="row">    

                            <div className="col-md-3">  
                                <div className="form-group">
                                <label htmlFor="">ID Producto:</label>
                                <input type="text" name="idProducto" onChange={this.cambioValor} value={venta.idProducto} id="idProducto" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Código del producto</small>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Cantidad:</label>
                                <input type="text" name="cantidad" onChange={this.cambioValor} value={venta.cantidad} id="cantidad" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Cantidad de productos</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Precio Unitario:</label>
                                <input type="text" name="precioUnit" onChange={this.cambioValor} value={venta.precioUnit} id="precioUnit" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Precio unitario del producto</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Valor Total:</label>
                                <input type="text" name="valorTotal" onChange={this.cambioValor} value={venta.valorTotal} id="valorTotal" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Valor total de la venta</small>
                                </div>
                            </div>
                        
                        </div>
                   </form>

            </div>
            <div className="card-footer text-muted">
                <div className="btn-group" role="group" aria-label="">
                    <button type="submit" className="btn btn-primary">🔄 Editar Venta</button>
                    <Link to={"/"} className="btn btn-danger">✖ Cancelar</Link>
                        
                </div>
            </div>
        </div> 
        );
    }
}
 
export default Editar;