import { type Request, type Response } from 'express';
export declare class ProductoController {
    constructor();
    getProductos: (req: Request, res: Response) => Promise<void>;
    getProductosAdmin: (_req: Request, res: Response) => Promise<void>;
    getProducto: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    createProducto: (req: Request, res: Response) => Promise<void>;
    actualizarProducto: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    subirImagen: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    eliminarProducto: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=producto.controller.d.ts.map