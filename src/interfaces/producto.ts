export interface Producto {
    prci_Prod?: number;       // Precio del producto
    nom_Prod?: string;        // Nombre del producto
    des_Prod?: string;        // Descripción del producto
    edo_Prod?: string;        // Estado del producto
    img_Prod?: string;        // Imagen del producto (URL o nombre de archivo)
    id_Descuento?: number;    // ID del descuento aplicado al producto
}
