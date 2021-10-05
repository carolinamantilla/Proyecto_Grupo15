import React, { useState } from "react";

function GestionEditar({ props }) {
  return (
    <>
      <div class="container">
        <div class="row">
          <h1>Editar usuario</h1>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <label for="exampleFormControlInput1" class="form-label">
              usuario
            </label>
            <input type="text" class="form-control" placeholder="usuario" />
          </div>
          <div class="col-md-6">
            <label for="exampleFormControlInput1" class="form-label">
              Contraseña
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="editar contraseña"
            />
          </div>
          <div class="col-md-6">
            <label for="exampleFormControlInput1" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="editar nombre"
            />
          </div>
          <div class="col-md-6">
            <label for="exampleFormControlInput1" class="form-label">
              Identificación
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="editar identificación"
            />
            <input type="file" />
          </div>
          <div class="col-md-6">
            <label for="exampleFormControlInput1" class="form-label">
              Seleccione rol
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Selecciono estado</option>
              <option value="1">Administrador </option>
              <option value="2">Vendedor</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-6"
            style={{ textAlign: "right", alignSelf: "stretch" }}
          >
            {" "}
            <button type="button" class="btn btn-outline-success">
              Guardar
            </button>
            <a href="/inicio">
              <button type="button" class="btn btn-outline-success">
                Cerrar
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default GestionEditar;
