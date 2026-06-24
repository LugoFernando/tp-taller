import { prisma } from "../prisma.js";
export class UsuarioRepository {
    async findUsuarioById(id) {
        return await prisma.usuario.findUnique({
            where: { id }
        });
    }
    async findUsuarioByEmail(email) {
        return await prisma.usuario.findUnique({
            where: { email }
        });
    }
    async create(data) {
        return await prisma.usuario.create({ data });
    }
    async updatePasswordById(id, password) {
        return await prisma.usuario.update({
            where: { id },
            data: { password }
        });
    }
    async updateUser(id, data) {
        return await prisma.usuario.update({
            where: { id },
            data
        });
    }
    async findAllUsuarios() {
        return await prisma.usuario.findMany({
            select: {
                id: true,
                email: true,
                nombre: true,
                apellido: true,
                direccion: true,
                rol: true
            },
            orderBy: { id: 'asc' }
        });
    }
}
//# sourceMappingURL=usuario.repository.js.map