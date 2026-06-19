import { Router } from "express";
import productoRouter from "./producto-router/producto.router.js";
import authRouter from "./auth-router/auth.router.js";
export class AppRoutes {
    static get routes() {
        const router = Router();
        router.use("/api/producto", productoRouter);
        router.use("/api/auth", authRouter);
        return router;
    }
}
//# sourceMappingURL=routes.js.map