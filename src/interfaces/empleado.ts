export interface Empleado {
    nom_Emp?: string;         // Nombre del empleado
    ape_Pat_Emp?: string;     // Apellido paterno del empleado
    ape_Mat_Emp?: string;     // Apellido materno del empleado
    nss_Emp?: string;         // Número de seguridad social
    cor_Elec?: string;        // Correo electrónico
    fec_Nac?: Date;           // Fecha de nacimiento
    fec_Alta?: Date;          // Fecha de alta
    edo_Emp?: string;         // Estado del empleado (activo/inactivo)
    sit_Emp?: boolean;        // Situación del empleado (booleano para estado)
    id_Puesto?: number;       // ID del puesto del empleado
    id_Sucursal?: number;     // ID de la sucursal
    id_Rol?: number;          // ID del rol del empleado
    id_Usuario?: number;      // ID del usuario asociado
}
