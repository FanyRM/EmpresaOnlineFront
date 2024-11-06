export interface Venta {
    tot_vent?: number;       // Total de la venta
    fec_vent?: Date;         // Fecha de la venta
    tip_pago?: string;       // Tipo de pago
    id_Corte?: number;       // ID del corte relacionado
    id_Descuento?: number;   // ID del descuento aplicado
}
