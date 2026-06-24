import { type Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
export declare class PedidoController {
    crearPedido: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getMisPedidos: (req: AuthRequest, res: Response) => Promise<void>;
    getPedido: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getPedidosAdmin: (_req: AuthRequest, res: Response) => Promise<void>;
}
//# sourceMappingURL=pedido.controller.d.ts.map