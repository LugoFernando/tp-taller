import { type Response } from "express";
import { PedidoRepository } from "../repository/pedido.repository.js";
import { PedidoService } from "../services/pedido.service.js";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import type { CrearPedidoInput } from "../models/pedido.model.js";

const pedidoRepository = new PedidoRepository();
const pedidoService = new PedidoService(pedidoRepository);

export class PedidoController {

    public crearPedido = async (req: AuthRequest, res: Response) => {
        try {
            const pedido = await pedidoService.crearPedido(
                req.userId!,
                req.body as CrearPedidoInput
            );
            res.status(201).json(pedido);
        } catch (error: any) {
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

    public getMisPedidos = async (req: AuthRequest, res: Response) => {
        try {
            const pedidos = await pedidoService.obtenerMisPedidos(req.userId!);
            res.status(200).json(pedidos);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener pedidos", error });
        }
    };

    public getPedido = async (req: AuthRequest, res: Response) => {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ message: "ID invalido" });
        }

        try {
            const pedido = await pedidoService.obtenerPedido(
                id,
                req.userId!,
                req.userRol === "admin"
            );
            res.status(200).json(pedido);
        } catch (error: any) {
            if (error.message === "PedidoNoExiste") {
                return res.status(404).json({ message: "Pedido no encontrado" });
            }
            if (error.message === "NoAutorizado") {
                return res.status(403).json({ message: "No autorizado" });
            }
            res.status(500).json({ message: "Error al obtener el pedido", error });
        }
    };

    public getPedidosAdmin = async (_req: AuthRequest, res: Response) => {
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
        } catch (error) {
            res.status(500).json({ message: "Error al obtener pedidos", error });
        }
    };
}
