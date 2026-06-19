export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  clasificacion: string;
  precio: number;
  activo?: boolean;
  imagen?: string | null;
}
