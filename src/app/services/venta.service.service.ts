import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Venta } from '../../interfaces/venta'; // Asegúrate de que la interfaz está correctamente importada

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/ventas'; // Define la URL base de la API para ventas
  }

  // Obtener todas las ventas
  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.myAppUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener una venta por ID
  getVenta(id: number): Observable<Venta> {
    return this.http.get<Venta>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear una nueva venta
  postVenta(data: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.myAppUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar una venta
  updateVenta(id: number, data: Venta): Observable<Venta> {
    return this.http.put<Venta>(`${this.myAppUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar una venta
  deleteVenta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Ocurrió un error:', error); // Log del error
    return throwError('Error en la comunicación con la API. Inténtelo más tarde.');
  }
}
