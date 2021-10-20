import {Link} from "react-router-dom";
import React from 'react';
import SaleService from "../services/SaleService";

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sales:[]               
        }
        this.deleteSale = this.deleteSale.bind(this);
    }

    deleteSale(id){
        SaleService.deleteSale(id).then(res => {
            this.setState({sales: this.state.sales.filter(sale => sale.id !== id)});
        });
    }

    componentDidMount(){
        SaleService.getSales().then((res) => {
            this.setState({ sales: res.data.data});
            
        });
    }

    render() { 

        const {sales} = this.state;
        
        return ( 

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        <Link className="btn btn-success" to={"/crear"}>✚ Nueva Venta</Link>  
                    </div>
                    <div className="col-md-3">
                        <div className="barraBusqueda">
                            <input type="text"  placeholder="Buscar" className="textField" name="busqueda" value={this.state.busqueda} onChange={this.onChange} />
                            <button type="button" className="btnBuscar">🔍</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <h4>Lista de Ventas</h4>
                <table className="table">
                    <thead>
                        <tr>
                        <th>ID Venta</th>
                        <th>Fecha</th>
                        <th>ID Cliente</th>
                        <th>Nombre Cliente</th>
                        <th>ID Vendedor</th>
                        <th>Estado</th>
                        <th>Valor Total</th>
                        <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sales.map(
                            sale => 
                                <tr  key={sale._id}>
                                    <td>{sale._id}</td>
                                    <td>{sale.fecha}</td>
                                    <td>{sale.documentoCliente}</td>
                                    <td>{sale.nombreCliente}</td>
                                    <td>{sale.documentoVendedor}</td>
                                    <td>{sale.estado}</td>
                                    <td>{sale.valorTotal}</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="">
                                            <Link className="btn btn-primary" to={`/editar/${sale._id}`}> 📝 </Link>
                                            <button type="button" className="btn btn-danger" onClick={ () => this.deleteSale(sale._id)}
                                            > 🗑 </button> 
                                            
                                        </div>
                                    </td>
                                </tr>  
                            )
                        }
                    </tbody>
                </table>  
            </div>
            <div className="card-footer text-muted">
               
            </div>
        </div>
        
        
         );
    }
}
 
export default Listar
