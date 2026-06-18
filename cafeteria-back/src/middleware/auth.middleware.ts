import { type Request, type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

export interface AuthRequest extends Request {
    userId?: number;
    userRol?: string;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token requerido' });
    }

    const token = authHeader.split(' ')[1]!;

    try {
        const payload = jwt.verify(token, config.jwtSecret) as unknown as {
            id: number;
            email: string;
            rol: string;
        };
        req.userId = payload.id;
        req.userRol = payload.rol;
        next();
    } catch {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }
};