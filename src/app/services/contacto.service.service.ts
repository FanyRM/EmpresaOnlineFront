import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contacto } from '../../interfaces/contacto';  // Asegúrate de tener definida esta interfaz

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/contactos';  // Define la URL base de la API para contactos
  }

  // Obtener todos los contactos
  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.myAppUrl)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los contactos: ', error);
          return throwError(() => new Error('Error al obtener los contactos'));
        })
      );
  }

  // Obtener un contacto por ID
  getContacto(id: number): Observable<Contacto> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.get<Contacto>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al obtener el contacto con ID ${id}: `, error);
          return throwError(() => new Error(`Error al obtener el contacto con ID ${id}`));
        })
      );
  }

  // Crear un nuevo contacto
  postContacto(contacto: Contacto): Observable<any> {
    return this.http.post<any>(this.myAppUrl, contacto)
      .pipe(
        catchError(error => {
          console.error('Error al crear el contacto: ', error);
          return throwError(() => new Error('Error al crear el contacto'));
        })
      );
  }

  // Actualizar un contacto por ID
  updateContacto(id: number, contacto: Contacto): Observable<any> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.put<any>(url, contacto)
      .pipe(
        catchError(error => {
          console.error(`Error al actualizar el contacto con ID ${id}: `, error);
          return throwError(() => new Error(`Error al actualizar el contacto con ID ${id}`));
        })
      );
  }

  // Eliminar un contacto por ID
  deleteContacto(id: number): Observable<any> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al eliminar el contacto con ID ${id}: `, error);
          return throwError(() => new Error(`Error al eliminar el contacto con ID ${id}`));
        })
      );
  }
}
