export declare class EmpleadoRepository {
    findAllEmpleados(): Promise<any>;
    findEmpleadoById(id: number): Promise<any>;
    createEmpleado(data: {
        nombre: string;
        apellido: string;
    }): Promise<any>;
    updateEmpleado(id: number, data: {
        nombre: string;
        apellido: string;
    }): Promise<any>;
    deleteEmpleado(id: number): Promise<any>;
}
//# sourceMappingURL=empleado.repository.d.ts.map