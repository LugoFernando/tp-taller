import { Router } from "express";
import { PedidoController } from "../../controller/pedido.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { adminMiddleware } from "../../middleware/admin.middleware.js";
const pedidoRouter = Router();
const pedidoController = new PedidoController();
pedidoRouter.post("/", authMiddleware, pedidoController.crearPedido.bind(pedidoController));
pedidoRouter.get("/mis-pedidos", authMiddleware, pedidoController.getMisPedidos.bind(pedidoController));
pedidoRouter.get("/admin", authMiddleware, adminMiddleware, pedidoController.getPedidosAdmin.bind(pedidoController));
pedidoRouter.get("/:id", authMiddleware, pedidoController.getPedido.bind(pedidoController));
export default pedidoRouter;
//# sourceMappingURL=pedido.router.js.map