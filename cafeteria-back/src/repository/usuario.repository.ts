import { prisma } from "../prisma.js";


export class UsuarioRepository {

    async findUsuarioById(id: number) {
        return await prisma.usuario.findUnique({
            where: { id }
        });
    }

    async findUsuarioByEmail(email: string) {
        return await prisma.usuario.findUnique({
            where: { email }
        });
    }

    async create(data: {
        email: string;
        password: string;
        nombre: string;
        apellido: string;
        direccion: string;
    }) {
        return await prisma.usuario.create({ data });
    }

    async updatePasswordById(id: number, password: string) {
    return await prisma.usuario.update({
        where: { id },
        data: { password }
    });
}
}