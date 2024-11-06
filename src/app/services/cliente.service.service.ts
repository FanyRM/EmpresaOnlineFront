import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../../interfaces/cliente';  // Asegúrate de tener definida esta interfaz

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/clientes';  // Define la URL base de la API para clientes
  }

  // Método para obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.myAppUrl)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los clientes: ', error);
          return throwError(() => new Error('Error al obtener los clientes'));
        })
      );
  }

  // Método para obtener un cliente por ID
  getCliente(id: number): Observable<Cliente> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.get<Cliente>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al obtener el cliente con ID ${id}: `, error);
          return throwError(() => new Error(`Error al obtener el cliente con ID ${id}`));
        })
      );
  }

  // Método para crear un nuevo cliente
  postCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.myAppUrl, cliente)
      .pipe(
        catchError(error => {
          console.error('Error al crear el cliente: ', error);
          return throwError(() => new Error('Error al crear el cliente'));
        })
      );
  }

  // Método para actualizar un cliente por ID
  updateCliente(id: number, cliente: Cliente): Observable<any> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.put<any>(url, cliente)
      .pipe(
        catchError(error => {
          console.error(`Error al actualizar el cliente con ID ${id}: `, error);
          return throwError(() => new Error(`Error al actualizar el cliente con ID ${id}`));
        })
      );
  }

  // Método para eliminar un cliente por ID
  deleteCliente(id: number): Observable<any> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al eliminar el cliente con ID ${id}: `, error);
          return throwError(() => new Error(`Error al eliminar el cliente con ID ${id}`));
        })
      );
  }
}
