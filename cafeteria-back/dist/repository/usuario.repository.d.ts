export declare class UsuarioRepository {
    findUsuarioById(id: number): Promise<{
        id: number;
        nombre: string;
        email: string;
        password: string;
        apellido: string;
        direccion: string;
        rol: string;
    } | null>;
    findUsuarioByEmail(email: string): Promise<{
        id: number;
        nombre: string;
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
        id: number;
        nombre: string;
        email: string;
        password: string;
        apellido: string;
        direccion: string;
        rol: string;
    }>;
}
//# sourceMappingURL=usuario.repository.d.ts.map