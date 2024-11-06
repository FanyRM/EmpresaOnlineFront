import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Sucursal } from '../../interfaces/sucursal'; // Asegúrate de que la interfaz está correctamente importada

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/sucursales'; // Define la URL base de la API para sucursales
  }

  // Obtener todas las sucursales
  getSucursales(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.myAppUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener una sucursal por ID
  getSucursal(id: number): Observable<Sucursal> {
    return this.http.get<Sucursal>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear una nueva sucursal
  postSucursal(data: Sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(this.myAppUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar una sucursal
  updateSucursal(id: number, data: Sucursal): Observable<Sucursal> {
    return this.http.put<Sucursal>(`${this.myAppUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar una sucursal
  deleteSucursal(id: number): Observable<void> {
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
