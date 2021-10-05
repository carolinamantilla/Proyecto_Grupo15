import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Gestion({ props }) {
  return (
    <>
      <div class="container">
        <div class="row">
          <h1>Gestion de usuarios</h1>
          <p>
            {" "}
 
          </p>
        </div>
        <div class="row">
          <div
            class="col-md-12"
            style={{ textAlign: "right", alignSelf: "stretch" }}
          >
            <button type="button" class="btn btn-outline-success">
              Cerrar
            </button>
          </div>
        </div>
        <div class="row bordenegro">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Ingrese usuario
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="filtro"
              />
            </div>
          </div>
          <div
            class="col-md-6"
            style={{
              textAlign: "left",
              alignSelf: "stretch",
              marginTop: "28px",
            }}
          >
            <button type="button" class="btn btn-outline-success">
              Buscar
            </button>
            <a href="/editar">
              {" "}
              <button type="button" class="btn btn-outline-success">
                Nuevo
              </button>
            </a>
          </div>
          <div class="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Usuario</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Identificación</th>
                  <th class="text-center" scope="col">Acciones</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1101320584</th>
                  <td>Andrea Zorro</td>
                  <td>1101320584</td>
                  <td>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Selecciono estado</option>
                      <option value="1">Autorizado</option>
                      <option value="2">No autorizado</option>
                      <option value="3">Pendiente</option>
                    </select>
                  </td>
                  <td>
                    <a href="/editar">
                      {" "}
                      <button type="button" class="btn btn-info">
                        Editar
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="/editar">
                      {" "}
                      <button type="button" class="btn btn-danger">
                      <FontAwesomeIcon icon="times-circle" />
                      </button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">111101212</th>
                  <td>Sofia Zorro</td>
                  <td>111101212</td>
                  <td>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Selecciono estado</option>
                      <option value="1">Autorizado</option>
                      <option value="2">No autorizado</option>
                      <option value="3">Pendiente</option>
                    </select>
                  </td>
                  <td>
                    <a href="/editar">
                      {" "}
                      <button type="button" class="btn btn-info">
                        Editar
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="/editar">
                      {" "}
                      <button type="button" class="btn btn-danger">
                      <FontAwesomeIcon icon="times-circle" />
                      </button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">111101200</th>
                  <td>Javier Vargas</td>
                  <td>111101200</td>
                  <td>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Seleccionar rol</option>
                      <option value="1">Administrador</option>
                      <option value="2">No autorizado</option>
                      <option value="2">Pendiente</option>
                    </select>
                  </td>
                  <td>
                    <a href="/editar">
                      {" "}
                      <button type="button" class="btn btn-info">
                        Editar
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="/editar">
                      {" "}
                      <button type="button" class="btn btn-danger">
                      <FontAwesomeIcon icon="times-circle" />
                      </button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gestion;
