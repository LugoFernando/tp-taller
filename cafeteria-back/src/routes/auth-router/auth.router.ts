import { Router } from 'express';
import { AuthController } from '../../controller/auth.controller.js';

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/signup', authController.signup);
authRouter.post('/signin', authController.signin);
authRouter.put('/perfil/:id', authController.EditarPerfil);
authRouter.get('/:id',authController.getUsuario);

export default authRouter;