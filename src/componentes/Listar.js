import React from 'react';
import {Link} from "react-router-dom";

const ventas= [
    {idVenta: 1, fecha: "2021-09-13", idCliente: "1478", nombreCliente: "Andrés Duarte", idVendedor: "001 - Bruno", estado: "En proceso", 
      valorTotal: 800000,  },
    {idVenta: 2, fecha: "2021-09-20", idCliente: "4569", nombreCliente: "Paola Palacios", idVendedor: "002 - Carolina", estado: "Entregada", 
      valorTotal: 240000,  } ,
    {idVenta: 3, fecha: "2021-09-24", idCliente: "1258", nombreCliente: "Juan David Peréz", idVendedor: "003 - Alejandra", estado: "Cancelada", 
      valorTotal: 1050000, },
  ];

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            busqueda: " ",
            ventaB: [],
            ventas:ventas, //se debe eliminar la ventasB cuando se conecte con la Api.
         }
    }

    
    borrarRegistros=(idVenta)=>{
        //se debe enlazar con la API.
    }

    // se debe crear los metodos para cargar los datos de la Api

    onChange=async e =>{
        e.persist();
        await this.setState({busqueda: e.target.value});
        this.filtrarBusqueda();
      
    }
    
    filtrarBusqueda=()=>{
        var search=ventas.filter(item=>{
          if (item.idVenta.toString().includes(this.state.busqueda)||
          item.fecha.toString().includes(this.state.busqueda)||
          item.idCliente.toString().includes(this.state.busqueda)||
          item.idCliente.toString().includes(this.state.busqueda)||
          item.nombreCliente.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda)||
          item.idVendedor.toString().includes(this.state.busqueda)||
          item.estado.toLowerCase().includes(this.state.busqueda)
          ){
            return item;
          }
        });
        this.setState({ventas: search});
    }
    
    componentDidMount(){
        this.setState({ventasB: this.state.ventas});
    }

    render() { 

        const{ventas}=this.state

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
                        {ventas.map(
                        (venta) => (
                        
                        <tr>
                            <td>{venta.idVenta}</td>
                            <td>{venta.fecha}</td>
                            <td>{venta.idCliente}</td>
                            <td>{venta.nombreCliente}</td>
                            <td>{venta.idVendedor}</td>
                            <td>{venta.estado}</td>
                            <td>{venta.valorTotal}</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="">
                                    <Link className="btn btn-primary" to={"/editar"}> 📝 </Link>
                                    <button type="button" className="btn btn-danger"
                                    onClick={()=>this.borrarRegistros(venta.idVenta)}
                                    > 🗑 </button>
                                    
                                </div>
                            </td>
                        </tr>  
                        )
                        )}
                    </tbody>
                </table>  
            </div>
            <div className="card-footer text-muted">
               
            </div>
        </div>
        
        
         );
    }
}
 
export default Listar;