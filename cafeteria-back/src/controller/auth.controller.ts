import { type Request, type Response } from 'express'
import { UsuarioRepository } from '../repository/usuario.repository.js';
import { AuthService } from '../services/auth.service.js';


const usuarioRespository = new UsuarioRepository;
const authService = new AuthService(usuarioRespository);


export class AuthController {

    constructor() {
    }

    public signup = async (req: Request, res: Response) => {

        try {

            const { email, password, nombre, apellido, direccion } = req.body

            if (!email || !password || !nombre || !apellido || !direccion) {
                return res.status(400).json({ message: 'Todos los campos son obligatorios' });
            }

            const user = await authService.registrarse(req.body);
            return res.status(201).json({ user });

        } catch (error: any) {

            if (error.message === 'EMAIL_EN_USO') {
                return res.status(409).json({ message: 'El email ya está en uso' });
            }
            if (error.message === 'PASSWORD_INVALIDO') {
                return res.status(400).json({ message: 'La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial' });
            }
            return res.status(500).json({ message: 'Error al registrar usuario', error });
        }

    }


    public signin = async (req: Request, res: Response) => {

        try {
            const { email, password } = req.body;

            if (!email || !password) {

                return res.status(400).json({ message: 'Email y contraseña son obligatorios' });

            }

            const resultado = await authService.login(email, password);
            return res.status(201).json({ resultado });


        } catch (error: any) {
            if (error.message === 'CREDENCIALES_INVALIDAS') {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }
            return res.status(500).json({ message: 'Error al iniciar sesión', error });
        }

    }



}
