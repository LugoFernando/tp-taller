import { type Request, type Response } from 'express';
export declare class AuthController {
    constructor();
    signup: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    signin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=auth.controller.d.ts.map