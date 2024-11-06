import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Role } from '../../interfaces/rol'; // Asegúrate de que la interfaz está correctamente importada

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/roles'; // Define la URL base de la API para roles
  }

  // Obtener todos los roles
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.myAppUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un rol por ID
  getRol(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo rol
  postRol(data: Role): Observable<Role> {
    return this.http.post<Role>(this.myAppUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un rol
  updateRol(id: number, data: Role): Observable<Role> {
    return this.http.put<Role>(`${this.myAppUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un rol
  deleteRol(id: number): Observable<void> {
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
