import { Producto } from "../../../../modules/productos/interfaces/producto.interface";
import { ProductosRest } from "./producto.interface.rest";

export class ProductoMapper {

    static mapRestProductoToProductoFront(productoRest: ProductosRest): Producto {
        return {
            id: productoRest.id,
            nombre: productoRest.nombre,
            descripcion: productoRest.descripcion,
            clasificacion: productoRest.clasificacion,
            precio: productoRest.precio
        };
    }

    static mapRestProductoArrayToProductoArrayFront(productosRest: ProductosRest[]): Producto[] {
        return productosRest.map(this.mapRestProductoToProductoFront);
    }

}