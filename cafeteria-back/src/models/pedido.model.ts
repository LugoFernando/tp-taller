export interface PedidoItemInput {
    productoId: number;
    cantidad: number;
}

export interface CrearPedidoInput {
    items: PedidoItemInput[];
}
