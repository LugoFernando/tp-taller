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
                return res.status(409).json({ message: 'El email ya esta en uso' });
            }
            if (error.message === 'PASSWORD_INVALIDO') {
                return res.status(400).json({ message: 'La contraseña debe tener minimo 8 caracteres, una mayuscula, un numero y un caracter especial' });
            }
            return res.status(500).json({ message: 'Error al registrar usuario', error });
        }

    }


    public signin = async (req: Request, res: Response) => {

        try {
            const { email, password } = req.body;

            if (!email || !password) {

                return res.status(400).json({ message: 'Email y contrasena son obligatorios' });

            }

            const resultado = await authService.login(email, password);
            return res.status(201).json({ resultado });


        } catch (error: any) {
            if (error.message === 'CREDENCIALES_INVALIDAS') {
                return res.status(401).json({ message: 'Credenciales invalidas' });
            }
            return res.status(500).json({ message: 'Error al iniciar sesion', error });
        }

    }


    public EditarPerfil = async (req: Request, res: Response) => {

        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json("ID inválido");
        }

        const { email, nombre, apellido, direccion } = req.body;
        try {
            const ususarioActualizado = await authService.editarPerfil(id, { email, nombre, apellido, direccion });
            res.status(200).json(ususarioActualizado);
        } catch (error) {
            res.status(500).json({ message: "No se pudo actualizar el usuario", error });
        }
    }

    public getUsuario = async (req: Request, res: Response) => {
        try {
            const id: number = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json("ID inválido");
            }

            const usuario = await authService.obtenerDatosUsuario(id);

            if (!usuario) {
                return res.status(404).json({
                    message: "Usuario no encontrado"
                });
            }

            return res.status(200).json(usuario);

        } catch (error) {
            res.status(500).json({
                message: "No se pudo encontrar el usuario",
                error
            });
        }
    }


    public recoverPassword = async (req: Request, res: Response) => {
        try {
            const { email } = req.body;
            if (!email) {
                return res.status(400).json({ message: 'Email es obligatorio' });
            }

            const result = await authService.recoverPassword(email);

            return res.status(200).json({
                message: 'Si el email existe, se ha enviado un enlace de recuperación.',
                recovery: result
            });

        } catch (error: any) {
            return res.status(500).json({ message: 'Error al procesar la solicitud', error });
        }
    }


    public resetPassword = async (req: Request, res: Response) => {
        try {
            const { token, password, confirmPassword } = req.body;
            if (!token || !password || !confirmPassword) {
                return res.status(400).json({ message: 'Token y nueva contraseña son obligatorios' });
            }

            await authService.resetPassword(token, password, confirmPassword);
            return res.status(200).json({ message: 'Contraseña reestablecida correctamente' });
        } catch (error: any) {
            if (error.message === 'TOKEN_INVALIDO') {
                return res.status(400).json({ message: 'Token inválido o expirado' });
            }
            if (error.message === 'PASSWORD_INVALIDO') {
                return res.status(400).json({ message: 'La contraseña debe tener minimo 8 caracteres, una mayuscula, un numero y un caracter especial' });
            }
            if (error.message === 'PASSWORDS_NO_COINCIDEN') {
                return res.status(400).json({ message: 'Las contraseñas no coinciden' });
            }
            return res.status(500).json({ message: 'Error al reestablecer contraseña', error });
        }
    }

}
