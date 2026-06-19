//import type { Empleado } from '../models/empleado.model.js'
import { prisma } from '../prisma.js';
export class EmpleadoRepository {
    async findAllEmpleados() {
        const empleados = await prisma.empleado.findMany({
            include: { empresa: true }
        });
        return empleados;
    }
    async findEmpleadoById(id) {
        const empleado = await prisma.empleado.findUnique({
            where: { id: id },
            include: {
                empresa: true
            }
        });
        return empleado;
    }
    async createEmpleado(data) {
        return await prisma.empleado.create({
            data
        });
    }
    async updateEmpleado(id, data) {
        const empleado = await prisma.empleado.update({
            where: { id },
            data
        });
        return empleado;
    }
    async deleteEmpleado(id) {
        return await prisma.empleado.delete({
            where: { id }
        });
    }
}
//# sourceMappingURL=empleado.repository.js.map