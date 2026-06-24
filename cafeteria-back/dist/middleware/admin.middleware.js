import {} from 'express';
export const adminMiddleware = (req, res, next) => {
    if (req.userRol !== 'admin') {
        return res.status(403).json({ message: 'Acceso solo para administradores' });
    }
    next();
};
//# sourceMappingURL=admin.middleware.js.map