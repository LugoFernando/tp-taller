import { Router } from 'express';
import { AuthController } from '../../controller/auth.controller.js';

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/signup', authController.signup);
authRouter.post('/signin', authController.signin);
authRouter.post('/recover-password', authController.recoverPassword);
authRouter.post('/reset-password', authController.resetPassword);

export default authRouter;