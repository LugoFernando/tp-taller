export interface PedidoItem {
  id: number;
  productoId: number | null;
  nombreSnapshot: string;
  descripcionSnapshot?: string | null;
  clasificacionSnapshot?: string | null;
  precioSnapshot: number;
  cantidad: number;
  imagenSnapshot?: string | null;
}

export interface Pedido {
  id: number;
  usuarioId: number;
  total: number;
  createdAt: string;
  items: PedidoItem[];
}

export interface CrearPedidoPayload {
  items: { productoId: number; cantidad: number }[];
}
