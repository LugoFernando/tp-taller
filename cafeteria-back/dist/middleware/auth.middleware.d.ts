import { type Request, type Response, type NextFunction } from 'express';
export interface AuthRequest extends Request {
    userId?: number;
    userRol?: string;
}
export declare const authMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.middleware.d.ts.map