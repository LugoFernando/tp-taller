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
}
//# sourceMappingURL=usuario.repository.js.map