import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Proveedor } from '../../interfaces/proveedor'; // Asegúrate de que la interfaz está correctamente importada

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/proveedores'; // Define la URL base de la API para proveedores
  }

  // Obtener todos los proveedores
  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.myAppUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un proveedor por ID
  getProveedor(id: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.myAppUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo proveedor
  postProveedor(data: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.myAppUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un proveedor
  updateProveedor(id: number, data: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(`${this.myAppUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un proveedor
  deleteProveedor(id: number): Observable<void> {
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
