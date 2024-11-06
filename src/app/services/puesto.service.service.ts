// src/app/services/puesto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Puesto } from '../../interfaces/puesto'; // Asegúrate de que la interfaz está correctamente importada

@Injectable({
  providedIn: 'root'
})
export class PuestoService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/puestos'; // Define la URL base de la API para puestos
  }

  // Obtener todos los puestos
  getPuestos(): Observable<Puesto[]> {
    return this.http.get<Puesto[]>(this.myAppUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un puesto por ID
  getPuesto(id: number): Observable<Puesto> {
    return this.http.get<Puesto>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo puesto
  postPuesto(data: Puesto): Observable<Puesto> {
    return this.http.post<Puesto>(this.myAppUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un puesto
  updatePuesto(id: number, data: Puesto): Observable<Puesto> {
    return this.http.put<Puesto>(`${this.myAppUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un puesto
  deletePuesto(id: number): Observable<void> {
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
