import {} from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token requerido' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, config.jwtSecret);
        req.userId = payload.id;
        req.userRol = payload.rol;
        next();
    }
    catch {
        return res.status(401).json({ message: 'Token invalido o expirado' });
    }
};
//# sourceMappingURL=auth.middleware.js.map