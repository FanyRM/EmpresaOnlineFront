import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Producto } from '../../interfaces/producto'; // Asegúrate de que la interfaz está correctamente importada

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/productos'; // Define la URL base de la API para productos
  }

  // Obtener todos los productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.myAppUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un producto por ID
  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo producto
  postProducto(data: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.myAppUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un producto
  updateProducto(id: number, data: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.myAppUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un producto
  deleteProducto(id: number): Observable<void> {
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
