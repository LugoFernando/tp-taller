export declare class EmpleadoRepository {
    findAllEmpleados(): Promise<({
        empresa: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        nombre: string;
        apellido: string | null;
        id_empresa: number | null;
    })[]>;
    findEmpleadoById(id: number): Promise<({
        empresa: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        nombre: string;
        apellido: string | null;
        id_empresa: number | null;
    }) | null>;
    createEmpleado(data: {
        nombre: string;
        apellido: string;
    }): Promise<{
        id: number;
        nombre: string;
        apellido: string | null;
        id_empresa: number | null;
    }>;
    updateEmpleado(id: number, data: {
        nombre: string;
        apellido: string;
    }): Promise<{
        id: number;
        nombre: string;
        apellido: string | null;
        id_empresa: number | null;
    }>;
    deleteEmpleado(id: number): Promise<{
        id: number;
        nombre: string;
        apellido: string | null;
        id_empresa: number | null;
    }>;
}
//# sourceMappingURL=empleado.repository.d.ts.map