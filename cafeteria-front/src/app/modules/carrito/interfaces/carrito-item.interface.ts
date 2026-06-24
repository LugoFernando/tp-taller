import { Producto } from '../../../modules/productos/interfaces/producto.interface';

export interface CarritoItem {
  producto: Producto;
  cantidad: number;
}
