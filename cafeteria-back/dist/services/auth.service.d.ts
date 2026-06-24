import type { Usuario } from '../models/usuario.model.js';
import { UsuarioRepository } from '../repository/usuario.repository.js';
export declare class AuthService {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    validarPassword: (pwd: string) => boolean;
    registrarse(data: Usuario): Promise<{
        nombre: string;
        id: number;
        email: string;
        password: string;
        apellido: string;
        direccion: string;
        rol: string;
    }>;
    login(email: string, password: string): Promise<{
        token: string;
        id: number;
        email: string;
        nombre: string;
    }>;
    editarPerfil(id: number, data: {
        email: string;
        nombre: string;
        apellido: string;
        direccion: string;
    }): Promise<{
        nombre: string;
        id: number;
        email: string;
        password: string;
        apellido: string;
        direccion: string;
        rol: string;
    }>;
    obtenerDatosUsuario(id: number): Promise<{
        nombre: string;
        id: number;
        email: string;
        password: string;
        apellido: string;
        direccion: string;
        rol: string;
    }>;
    listarUsuariosAdmin(): Promise<{
        nombre: string;
        id: number;
        email: string;
        apellido: string;
        direccion: string;
        rol: string;
    }[]>;
    recoverPassword(email: string): Promise<{
        token: string;
        recoveryLink: string;
    }>;
    resetPassword(token: string, newPassword: string, confirmPassword: string): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map