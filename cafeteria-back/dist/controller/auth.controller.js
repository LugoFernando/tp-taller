import {} from 'express';
import { UsuarioRepository } from '../repository/usuario.repository.js';
import { AuthService } from '../services/auth.service.js';
const usuarioRespository = new UsuarioRepository;
const authService = new AuthService(usuarioRespository);
export class AuthController {
    constructor() {
    }
    signup = async (req, res) => {
        try {
            const { email, password, nombre, apellido, direccion } = req.body;
            if (!email || !password || !nombre || !apellido || !direccion) {
                return res.status(400).json({ message: 'Todos los campos son obligatorios' });
            }
            const user = await authService.registrarse(req.body);
            return res.status(201).json({ user });
        }
        catch (error) {
            if (error.message === 'EMAIL_EN_USO') {
                return res.status(409).json({ message: 'El email ya esta en uso' });
            }
            if (error.message === 'PASSWORD_INVALIDO') {
                return res.status(400).json({ message: 'La contrasena debe tener minimo 8 caracteres, una mayuscula, un numero y un caracter especial' });
            }
            return res.status(500).json({ message: 'Error al registrar usuario', error });
        }
    };
    signin = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'Email y contrasena son obligatorios' });
            }
            const resultado = await authService.login(email, password);
            return res.status(201).json({ resultado });
        }
        catch (error) {
            if (error.message === 'CREDENCIALES_INVALIDAS') {
                return res.status(401).json({ message: 'Credenciales invalidas' });
            }
            return res.status(500).json({ message: 'Error al iniciar sesion', error });
        }
    };
    EditarPerfil = async (req, res) => {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json("ID inválido");
        }
        const { email, nombre, apellido, direccion } = req.body;
        try {
            const ususarioActualizado = authService.editarPerfil(id, { email, nombre, apellido, direccion });
            res.status(200).json(ususarioActualizado);
        }
        catch (error) {
            res.status(500).json({ message: "No se pudo actualizar el usuario", error });
        }
    };
    getUsuario = async (req, res) => {
        try {
            const id = Number(req.params.id);
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
        }
        catch (error) {
            res.status(500).json({
                message: "No se pudo encontrar el usuario",
                error
            });
        }
    };
}
//# sourceMappingURL=auth.controller.js.map