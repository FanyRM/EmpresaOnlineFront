import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductoVenta } from '../../interfaces/producto_venta'; // Asegúrate de que la interfaz está correctamente importada

@Injectable({
  providedIn: 'root'
})
export class ProductoVentaService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/productos-venta'; // Define la URL base de la API para productos de venta
  }

  // Obtener todos los productos de venta
  getProductosVentas(): Observable<ProductoVenta[]> {
    return this.http.get<ProductoVenta[]>(this.myAppUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un producto de venta por ID
  getProductoVenta(id: number): Observable<ProductoVenta> {
    return this.http.get<ProductoVenta>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo producto de venta
  postProductoVenta(data: ProductoVenta): Observable<ProductoVenta> {
    return this.http.post<ProductoVenta>(this.myAppUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un producto de venta
  updateProductoVenta(id: number, data: ProductoVenta): Observable<ProductoVenta> {
    return this.http.put<ProductoVenta>(`${this.myAppUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un producto de venta
  deleteProductoVenta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Ocurrió un error:', error); // Log del error
    return throwError('Error en la comunicación con la API. Inténtelo más tarde.');
  }
}
