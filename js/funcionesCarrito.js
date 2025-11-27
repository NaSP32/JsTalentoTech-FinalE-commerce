import {guardarCarrito, obtenerCarrito, vaciarCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js"

export const agregarAlCarrito = () => {

}

export const eliminarProducto = () => {

}

export const vaciarCarrito = () => {
    vaciarCarrito()
    actualizarContador([])
    mostrarMensaje("Carrito vaciado");
};