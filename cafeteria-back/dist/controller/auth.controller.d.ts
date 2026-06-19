import { type Request, type Response } from 'express';
export declare class AuthController {
    constructor();
    signup: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    signin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    EditarPerfil: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getUsuario: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=auth.controller.d.ts.map