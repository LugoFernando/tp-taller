
import type { Usuario } from '../models/usuario.model.js';
import { UsuarioRepository } from '../repository/usuario.repository.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
// import { usuario } from '../prisma/client';


export class AuthService {

    constructor(private usuarioRepository: UsuarioRepository) { }

    validarPassword = (pwd: string) => {
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
        return regex.test(pwd);
    };


    async registrarse(data: Usuario) {

        if (!this.validarPassword(data.password)) { throw new Error('PASSWORD_INVALIDO'); }

        const existe = await this.usuarioRepository.findUsuarioByEmail(data.email);
        if (existe) { throw new Error('EMAIL_EN_USO'); }

        const usuario = this.usuarioRepository.create(
            { ...data }
        );

        return usuario;

    }


    async login(email: string, password: string) {

        const user = await this.usuarioRepository.findUsuarioByEmail(email);

        if (!user) { throw new Error('CREDENCIALES_INVALIDAS') }

        if (user.password != password) { throw new Error('Contrasena invalida'); }

        const token = jwt.sign(
            { id: user.id, email: user.email, rol: user.rol },
            config.jwtSecret,
            { expiresIn: '24h' }
        );

        // return { id: user.id, email: user.email, nombre: user.nombre };

        return { token, id: user.id, email: user.email, nombre: user.nombre };

    }

    async editarPerfil(id:number,data:{email:string,nombre:string,apellido:string,direccion:string}){
        const usuario = await this.usuarioRepository.findUsuarioById(id);

        if(!usuario){
            throw new Error("USUARIO_NO_EXISTENTE");
        }

        return await this.usuarioRepository.updateUser(id,data);
    }

    async obtenerDatosUsuario(id:number){
        const user = await this.usuarioRepository.findUsuarioById(id);

        if(!user){
            throw new Error("NO_EXISTE_USUARIO");
        }

        return user;
    }

    async listarUsuariosAdmin() {
        return await this.usuarioRepository.findAllUsuarios();
    }

    
    async recoverPassword(email: string) {
        const user = await this.usuarioRepository.findUsuarioByEmail(email);

        // Genera un token aunque el email no exista
        const payload: any = { email };

        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '10m' });
        const recoveryLink = `http://localhost:4200/auth/restablecer-contrasena?token=${token}`;

        // Simula el envío del token al mail
        console.log(`Simulated recovery for ${email}: ${recoveryLink}`);

        return { token, recoveryLink };
    }


    async resetPassword(token: string, newPassword: string, confirmPassword: string) {
    try {
        const payload: any = jwt.verify(token, config.jwtSecret) as any;

        if (!payload || !payload.email) {
            throw new Error('TOKEN_INVALIDO');
        }

        if (!this.validarPassword(newPassword)) {
            throw new Error('PASSWORD_INVALIDO');
        }

        if (newPassword !== confirmPassword) {
            throw new Error('PASSWORDS_NO_COINCIDEN');
        }

        let user = null;
        if (payload.id) {
            user = await this.usuarioRepository.findUsuarioById(payload.id);
        }
        if (!user) {
            user = await this.usuarioRepository.findUsuarioByEmail(payload.email);
        }

        if (!user) {
            // Si el token es válido pero no hay usuario asociado, fallamos como token inválido.
            throw new Error('TOKEN_INVALIDO');
        }

        await this.usuarioRepository.updatePasswordById(user.id, newPassword);

        // Invalida token por uso o tiempo 
        return { message: 'OK' };
    } catch (err: any) {
        if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError') {
            throw new Error('TOKEN_INVALIDO');
        }
        throw err;
    }
}
}