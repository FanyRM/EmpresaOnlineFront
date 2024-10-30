import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioCliente } from '../../interfaces/usuarioCliente'; // Asegúrate de que la interfaz está correctamente importada

@Injectable({
  providedIn: 'root'
})
export class UsuarioClienteService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/usuarios-clientes'; // Define la URL base de la API para usuarios clientes
  }

  // Obtener todos los usuarios clientes
  getUsuariosClientes(): Observable<UsuarioCliente[]> {
    return this.http.get<UsuarioCliente[]>(this.myAppUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un usuario cliente por ID
  getUsuarioCliente(id: number): Observable<UsuarioCliente> {
    return this.http.get<UsuarioCliente>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo usuario cliente
  nuevoUsuarioC(data: UsuarioCliente): Observable<UsuarioCliente> {
    return this.http.post<UsuarioCliente>(this.myAppUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Iniciar sesión de usuario cliente
  loginUserC(credentials: { cor_Elec: string; cont_UsuC: string }): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}/login`, credentials).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un usuario cliente
  deleteUsuarioCliente(id: number): Observable<void> {
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
