import {} from "express";
import { PedidoRepository } from "../repository/pedido.repository.js";
import { PedidoService } from "../services/pedido.service.js";
const pedidoRepository = new PedidoRepository();
const pedidoService = new PedidoService(pedidoRepository);
export class PedidoController {
    crearPedido = async (req, res) => {
        try {
            const pedido = await pedidoService.crearPedido(req.userId, req.body);
            res.status(201).json(pedido);
        }
        catch (error) {
            if (error.message === "CarritoVacio") {
                return res.status(400).json({ message: "El carrito esta vacio" });
            }
            if (error.message === "ProductoNoDisponible") {
                return res.status(400).json({ message: "Uno o mas productos no estan disponibles" });
            }
            if (error.message === "ItemInvalido") {
                return res.status(400).json({ message: "Item de pedido invalido" });
            }
            res.status(500).json({ message: "No se pudo crear el pedido", error });
        }
    };
    getMisPedidos = async (req, res) => {
        try {
            const pedidos = await pedidoService.obtenerMisPedidos(req.userId);
            res.status(200).json(pedidos);
        }
        catch (error) {
            res.status(500).json({ message: "Error al obtener pedidos", error });
        }
    };
    getPedido = async (req, res) => {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID invalido" });
        }
        try {
            const pedido = await pedidoService.obtenerPedido(id, req.userId, req.userRol === "admin");
            res.status(200).json(pedido);
        }
        catch (error) {
            if (error.message === "PedidoNoExiste") {
                return res.status(404).json({ message: "Pedido no encontrado" });
            }
            if (error.message === "NoAutorizado") {
                return res.status(403).json({ message: "No autorizado" });
            }
            res.status(500).json({ message: "Error al obtener el pedido", error });
        }
    };
    getPedidosAdmin = async (_req, res) => {
        try {
            const pedidos = await pedidoService.obtenerPedidosAdmin();
            const resultado = pedidos.map((pedido) => ({
                id: pedido.id,
                fecha: pedido.createdAt,
                total: pedido.total,
                usuarioNombre: `${pedido.usuario.nombre} ${pedido.usuario.apellido}`,
                usuarioEmail: pedido.usuario.email
            }));
            res.status(200).json(resultado);
        }
        catch (error) {
            res.status(500).json({ message: "Error al obtener pedidos", error });
        }
    };
}
//# sourceMappingURL=pedido.controller.js.map