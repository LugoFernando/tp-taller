export interface Usuario {
    id?: number;
    email: string;
    password: string;
    nombre: string;
    apellido: string;
    direccion: string;
    rol?: string;
}