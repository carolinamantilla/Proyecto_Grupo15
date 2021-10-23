# **FRONTEND DEL PROYECTO - GRUPO 15 - Ciclo III**
**“Aplicativo Web para gestionar la Venta de Jeans para damas ”**

| **#**|**AUTORES** | **MODULOS** |
| ---|---| --- |
| 1 |**Martha Carolina Mantilla Cárdenas**  | Gestión de ingreso al sistema de información Y Modulo administrador de ventas  |
| 2 |**Keidy Mercado Sierra**  | Modulo administrador de productos  |
| 3 |**Yasmin Andrea Zorro Gutiérrez**  | Gestión de usuarios  |

## **DESCRIPCION DEL PROYECTO**
Aplicativo de software que permite realizar el seguimiento de las ventas de Jeans en una empresa y hacerles el correspondiente seguimiento.

## **DESCRIPCION DEL FRONTEND**
### **INTERFACES GRÁFICAS**
### * **Gestión De Ingreso al Sistema De Información:**
La interfaz permite el registro e inicio de sesión; y la autorización de ingreso a la aplicación está a cargo de un tercero (Gmail) mediante Oauth 2.

### * **Módulo Administrador De Productos:**
Se realizaron dos interfaces: la primera permite el registro de productos y la segunda permite listar, buscar y actualizar productos (Cada una cuenta con los siguientes atributos: Identificador único (Inmutable), descripción, valor unitario y estado: disponible, no disponible).

### * **Módulo Administrador De Ventas:**
Se realizaron dos interfaces: la primera permite el registro de las ventas y la segunda permite listar, buscar y actualizar las ventas realizadas (Actualizar se refiere a establecer los diferentes estados de la venta: En proceso, cancelada o entregada, o editar alguno de sus otros campos modificables). Cada venta cuenta con los siguientes atributos: Identificador único de venta (Inmutable), el valor total de la venta, identificador, cantidad y precio unitario de cada producto, fecha de venta, el documento de identificación y nombre del cliente, y, además, cuenta con un encargado de gestionar dicha venta (vendedor).

### * **Gestión De Usuarios:**
La interfaz permite ver y actualizar el rol (administrador y vendedor) y el estado del usuario (pendiente/autorizado/no autorizado).

## **REPOSITORIO DEL FRONTEND**
[Repositorio en GitHub-Frontend](https://github.com/carolinamantilla/Proyecto_Grupo15.git)

## TABLERO DE TRABAJO EN TRELLO:
[Tablero en Trello](https://trello.com/b/Mi9n4pxV/proyecto-sobre-aplicativo-web)

## **COMANDOS PARA EJECUTAR LA APP**
El Framework utilizado para el Frontend en nuestro equipo fue REACT, y su comando de ejecución es npm start.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
