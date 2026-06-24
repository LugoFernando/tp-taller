import { type Response, type NextFunction } from 'express';
import type { AuthRequest } from './auth.middleware.js';
export declare const adminMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=admin.middleware.d.ts.map