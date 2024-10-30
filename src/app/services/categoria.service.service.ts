import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Categoria } from '../../interfaces/categoria';  // Asegúrate de tener definida esta interfaz

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/categorias';  // Define la URL base de la API
  }

  // Método para obtener todas las categorías
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.myAppUrl)
      .pipe(
        catchError(error => {
          console.error('Error al obtener las categorías: ', error);
          return throwError(() => new Error('Error al obtener las categorías'));
        })
      );
  }

  // Método para obtener una categoría por ID
  getCategoria(id: number): Observable<Categoria> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.get<Categoria>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al obtener la categoría con ID ${id}: `, error);
          return throwError(() => new Error(`Error al obtener la categoría con ID ${id}`));
        })
      );
  }

  // Método para crear una nueva categoría
  postCategoria(categoria: Categoria): Observable<any> {
    return this.http.post<any>(this.myAppUrl, categoria)
      .pipe(
        catchError(error => {
          console.error('Error al crear la categoría: ', error);
          return throwError(() => new Error('Error al crear la categoría'));
        })
      );
  }

  // Método para actualizar una categoría por ID
  updateCategoria(id: number, categoria: Categoria): Observable<any> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.put<any>(url, categoria)
      .pipe(
        catchError(error => {
          console.error(`Error al actualizar la categoría con ID ${id}: `, error);
          return throwError(() => new Error(`Error al actualizar la categoría con ID ${id}`));
        })
      );
  }

  // Método para eliminar una categoría por ID
  deleteCategoria(id: number): Observable<any> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al eliminar la categoría con ID ${id}: `, error);
          return throwError(() => new Error(`Error al eliminar la categoría con ID ${id}`));
        })
      );
  }
}
