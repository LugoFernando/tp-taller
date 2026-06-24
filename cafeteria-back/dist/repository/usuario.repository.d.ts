export declare class UsuarioRepository {
    findUsuarioById(id: number): Promise<{
        nombre: string;
        id: number;
        email: string;
        password: string;
        apellido: string;
        direccion: string;
        rol: string;
    } | null>;
    findUsuarioByEmail(email: string): Promise<{
        nombre: string;
        id: number;
        email: string;
        password: string;
        apellido: string;
        direccion: string;
        rol: string;
    } | null>;
    create(data: {
        email: string;
        password: string;
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
    updatePasswordById(id: number, password: string): Promise<{
        nombre: string;
        id: number;
        email: string;
        password: string;
        apellido: string;
        direccion: string;
        rol: string;
    }>;
    updateUser(id: number, data: {
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
    findAllUsuarios(): Promise<{
        nombre: string;
        id: number;
        email: string;
        apellido: string;
        direccion: string;
        rol: string;
    }[]>;
}
//# sourceMappingURL=usuario.repository.d.ts.map