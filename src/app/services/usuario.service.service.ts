import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../../interfaces/usuario'; // Asegúrate de que la interfaz está correctamente importada

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/usuarios'; // Define la URL base de la API para usuarios
  }

  // Crear un nuevo usuario
  nuevoUsuario(data: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.myAppUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Iniciar sesión de usuario
  loginUser(credentials: { cor_Elec: string; cont_Usu: string }): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}/login`, credentials).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Ocurrió un error:', error); // Log del error
    return throwError('Error en la comunicación con la API. Inténtelo más tarde.');
  }
}
