import { Router } from "express";
import productoRouter from "./producto-router/producto.router.js";
import authRouter from "./auth-router/auth.router.js";
import pedidoRouter from "./pedido-router/pedido.router.js";

export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        router.use("/api/producto", productoRouter);
        router.use("/api/auth", authRouter);
        router.use("/api/pedido", pedidoRouter);

        return router;
    }

}