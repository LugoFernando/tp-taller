import { type Request, type Response } from 'express';
export declare class AuthController {
    constructor();
    signup: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    signin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    EditarPerfil: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getUsuarios: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getUsuario: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    recoverPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    resetPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=auth.controller.d.ts.map