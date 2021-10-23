import React from 'react';
import { Link } from "react-router-dom";
import SaleService from "../services/SaleService";


class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            idVenta: this.props.match.params.id,
            fecha:"", 
            documentoCliente: "", 
            nombreCliente: "", 
            documentoVendedor: "", 
            estado: "",
            valorTotal: "",
            _id: "",
            valor: "",
            cantidad: "",
            productos:[]     
            
        }
        this.changefechaHandler = this.changefechaHandler.bind(this);
        this.changedocumentoClienteHandler = this.changedocumentoClienteHandler.bind(this);
        this.changenombreClienteHandler = this.changenombreClienteHandler.bind(this);
        this.changedocumentoVendedorHandler = this.changedocumentoVendedorHandler.bind(this);
        this.changeestadoHandler = this.changeestadoHandler.bind(this);
        this.changevalorTotalHandler = this.changevalorTotalHandler.bind(this);
        this.changeidHandler = this.changeidHandler.bind(this);
        this.changevalorHandler = this.changevalorHandler.bind(this);
        this.changecantidadHandler = this.changecantidadHandler.bind(this);
        this.updateSale = this.updateSale.bind(this);
        this.addNewProduct = this.addNewProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
    SaleService.getSale(this.state.idVenta)
      .then(res => {
        let sale = res.data.data;
        this.setState({fecha: sale.fecha, documentoCliente: sale.documentoCliente, nombreCliente: sale.nombreCliente,
            documentoVendedor: sale.documentoVendedor, estado: sale.estado, valorTotal: sale.valorTotal, productos: sale.productos
        });
      })
      
      .catch((error) => {
        console.log(error);
      })
      
    }
               
    updateSale = (e) => {
        e.preventDefault();
        let sale = {fecha: this.state.fecha, documentoCliente: this.state.documentoCliente, nombreCliente: this.state.nombreCliente,
            documentoVendedor: this.state.documentoVendedor, estado: this.state.estado, valorTotal: this.state.valorTotal, productos:this.state.productos}
        console.log('id => ' + JSON.stringify(this.state.idVenta));
        SaleService.updateSale(sale, this.state.idVenta).then( res => {
            console.log(res.data);
            this.props.history.push('/');
        });
    }

    addNewProduct = (e) => {
        e.preventDefault();
        let newproducto = {_id: this.state._id, valor: this.state.valor, cantidad: this.state.cantidad};
            console.log('product => ' + JSON.stringify(newproducto));
        newproducto = this.state.productos.push(newproducto);
            console.log(this.state.productos); 
            this.props.history.push(); 
              
    }

    deleteProduct(id){
        const filtredData = this.state.productos.filter(producto => producto._id !== id);
        this.setState({ productos: filtredData });
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

    changeidHandler= (event) => {
        this.setState({_id: event.target.value});
    }

    changevalorHandler= (event) => {
        this.setState({valor: event.target.value});
    }

    changecantidadHandler= (event) => {
        this.setState({cantidad: event.target.value});
    }
       
    render() { 

        return ( 
        
        <div className="card" >
            <div className="card-header">
               <h4>Editar Venta</h4>
            </div>
            <div className="card-body">
            <form onSubmit={this.updateSale}>
                        
                        <div className="row">    

                            <div className="col-md-3">  
                                <div className="form-group">
                                <label htmlFor="">ID Venta:</label>
                                <input type="text" readOnly value={this.state.idVenta} name="idVenta" id="idVenta" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted"></small>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Fecha:</label>
                                <input type="text" name="fecha" value={this.state.fecha} onChange={this.changefechaHandler} id="fecha" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Fecha de la venta (aaaa-mm-dd)</small>
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
                                <small id="helpId" className="text-muted">Nombre y apellido del cliente</small>
                                </div>
                            </div>
                        
                        </div>

                        <div className="row">    

                            <div className="col-md-3">  
                                <div className="form-group">
                                <label htmlFor="">ID Producto:</label>
                                <input type="text" name="_id" value={this.state._id} onChange={this.changeidHandler} id="_id" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Código del producto</small>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Cantidad:</label>
                                <input type="text" name="cantidad" value={this.state.cantidad} onChange={this.changecantidadHandler} id="cantidad" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Cantidad de productos</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                <label htmlFor="">Precio Unitario:</label>
                                <input type="text" name="valor" value={this.state.valor} onChange={this.changevalorHandler} id="valor" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Precio unitario del producto</small>
                                </div>
                            </div>

                            <div className="col-md-3 ">
                                <br/>
                                <div className="btn-group" role="group" aria-label="">
                                    <button type="button" onClick={this.addNewProduct} className="btn btn-secondary">📥Agregar nuevo producto</button>
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
                            {
                                this.state.productos.map(
                                    producto => 
                                        <tr key={producto._id}>
                                            <td>{producto._id}</td>
                                            <td>{producto.cantidad}</td>
                                            <td>{producto.valor}</td>
                                        <div className="btn-group" role="group" aria-label="">
                                            <button type="button" onClick={() => this.deleteProduct(producto._id)} className="btn btn-danger"> 🗑 </button>
                                        </div>    
                                    </tr>
                                )}  
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
                    <button type="submit" onClick={this.updateSale} className="btn btn-primary">🔄 Editar Venta</button>
                    <Link to={"/"} className="btn btn-danger">✖ Cancelar</Link>
                        
                </div>
            </div>
        </div> 
        );
    }
}
 
export default Editar;