import type { Usuario } from '../models/usuario.model.js';
import { UsuarioRepository } from '../repository/usuario.repository.js';
export declare class AuthService {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    validarPassword: (pwd: string) => boolean;
    registrarse(data: Usuario): Promise<{
        id: number;
        nombre: string;
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
}
//# sourceMappingURL=auth.service.d.ts.map