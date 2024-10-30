import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CategoriaProducto } from '../../interfaces/categoria_producto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProductoService {

  private apiUrl: string = 'http://localhost:3000/api/categorias';  // Cambia la URL si es necesario

  constructor(private http: HttpClient) {}

  // Obtener todas las relaciones categoría-producto
  getCategoriaProductos(): Observable<CategoriaProducto[]> {
    return this.http.get<CategoriaProducto[]>(`${this.apiUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Obtener una relación categoría-producto por ID
  getCategoriaProducto(id: number): Observable<CategoriaProducto> {
    return this.http.get<CategoriaProducto>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Crear una nueva relación categoría-producto
  postCategoriaProducto(categoriaProducto: CategoriaProducto): Observable<CategoriaProducto> {
    return this.http.post<CategoriaProducto>(this.apiUrl, categoriaProducto)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Actualizar una relación categoría-producto por ID
  updateCategoriaProducto(id: number, categoriaProducto: CategoriaProducto): Observable<CategoriaProducto> {
    return this.http.put<CategoriaProducto>(`${this.apiUrl}/${id}`, categoriaProducto)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Eliminar una relación categoría-producto por ID
  deleteCategoriaProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Manejo de errores
  private handleError(error: any): Observable<never> {
    console.error('Error en el servicio', error);
    return throwError(() => new Error('Error en la solicitud de categoría-producto'));
  }
}
