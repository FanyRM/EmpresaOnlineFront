import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { inventario } from '../../interfaces/inventario'; // Asegúrate de tener la interfaz importada

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/inventarios'; // Define la URL base de la API para inventarios
  }

  // Obtener todos los inventarios
  getInventarios(): Observable<inventario[]> {
    return this.http.get<inventario[]>(this.myAppUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un inventario por ID
  getInventario(id: number): Observable<inventario> {
    return this.http.get<inventario>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo inventario
  postInventario(data: inventario): Observable<inventario> {
    return this.http.post<inventario>(this.myAppUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un inventario
  updateInventario(id: number, data: inventario): Observable<inventario> {
    return this.http.put<inventario>(`${this.myAppUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un inventario
  deleteInventario(id: number): Observable<void> {
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
