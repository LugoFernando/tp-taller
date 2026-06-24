import { Router } from 'express';
import { AuthController } from '../../controller/auth.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware.js';
import { adminMiddleware } from '../../middleware/admin.middleware.js';
const authRouter = Router();
const authController = new AuthController();
authRouter.post('/signup', authController.signup);
authRouter.post('/signin', authController.signin);
authRouter.post('/recover-password', authController.recoverPassword);
authRouter.post('/reset-password', authController.resetPassword);
authRouter.put('/perfil/:id', authController.EditarPerfil);
authRouter.get('/usuarios', authMiddleware, adminMiddleware, authController.getUsuarios);
authRouter.get('/:id', authController.getUsuario);
export default authRouter;
//# sourceMappingURL=auth.router.js.map