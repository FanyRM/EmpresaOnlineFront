import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Descuento } from '../../interfaces/descuento';  // Asegúrate de tener definida esta interfaz

@Injectable({
  providedIn: 'root'
})
export class DescuentoService {

  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/descuentos';  // Define la URL base de la API para descuentos
  }

  // Obtener todos los descuentos
  getDescuentos(): Observable<Descuento[]> {
    return this.http.get<Descuento[]>(this.myAppUrl)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los descuentos: ', error);
          return throwError(() => new Error('Error al obtener los descuentos'));
        })
      );
  }

  // Obtener un descuento por ID
  getDescuento(id: number): Observable<Descuento> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.get<Descuento>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al obtener el descuento con ID ${id}: `, error);
          return throwError(() => new Error(`Error al obtener el descuento con ID ${id}`));
        })
      );
  }

  // Crear un nuevo descuento
  postDescuento(descuento: Descuento): Observable<any> {
    return this.http.post<any>(this.myAppUrl, descuento)
      .pipe(
        catchError(error => {
          console.error('Error al crear el descuento: ', error);
          return throwError(() => new Error('Error al crear el descuento'));
        })
      );
  }

  // Actualizar un descuento por ID
  updateDescuento(id: number, descuento: Descuento): Observable<any> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.put<any>(url, descuento)
      .pipe(
        catchError(error => {
          console.error(`Error al actualizar el descuento con ID ${id}: `, error);
          return throwError(() => new Error(`Error al actualizar el descuento con ID ${id}`));
        })
      );
  }

  // Eliminar un descuento por ID
  deleteDescuento(id: number): Observable<any> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al eliminar el descuento con ID ${id}: `, error);
          return throwError(() => new Error(`Error al eliminar el descuento con ID ${id}`));
        })
      );
  }
}
