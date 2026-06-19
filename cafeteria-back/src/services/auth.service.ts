
import type { Usuario } from '../models/usuario.model.js';
import { UsuarioRepository } from '../repository/usuario.repository.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
//import { usuario } from '../prisma/client';


export class AuthService {

    constructor(private usuarioRepository: UsuarioRepository) { }

    validarPassword = (pwd: string) => {
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
        return regex.test(pwd);
    };


    async registrarse(data: Usuario) {

        if (!this.validarPassword) { throw new Error('PASSWORD_INVALIDO'); }

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

        if (user.password != password) { throw new Error('Contraseña invalida'); }

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
        return this.usuarioRepository.findUsuarioById(id);
    }


}