import React from 'react';
import {Link} from "react-router-dom";

const ventasB= [
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
            ventas:ventasB, //se debe eliminar la ventasB cuando se conecte con la Api.
         }
    }

    
    borrarRegistros=(idVenta)=>{
        //se debe enlazar con la API.
    }

    // se debe crear los metodos para cargar los datos de la Api

    render() { 

        const{ventas}=this.state

        return ( 
        
        <div className="card">
            <div className="card-header">
                <Link className="btn btn-success" to={"/crear"}>✚ Nueva Venta</Link>  
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