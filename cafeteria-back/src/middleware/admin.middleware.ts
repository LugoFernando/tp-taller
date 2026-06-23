import { type Response, type NextFunction } from 'express';
import type { AuthRequest } from './auth.middleware.js';

export const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.userRol !== 'admin') {
        return res.status(403).json({ message: 'Acceso solo para administradores' });
    }
    next();
};
