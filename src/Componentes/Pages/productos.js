import React from 'react';
import Jeans from "../../images/inicio.jpg";


function Productos () {
  return (
    <>
    &nbsp;
    &nbsp;
    &nbsp;
    <h1 className="title"><center>PRODUCTOS</center></h1>
    &nbsp;
    &nbsp;
    &nbsp;
    <div className="productos">
    <a href="#">
        <div className="producto">
          <center>
            <img src={Jeans} alt="" width="500"/>
          </center>
        </div>
        </a>
    </div>
    
    </>
  );
};
export default Productos;