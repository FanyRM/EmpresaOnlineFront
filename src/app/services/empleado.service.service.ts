import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Empleado } from '../../interfaces/empleado';  // Asegúrate de tener esta interfaz correctamente definida

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'api/empleados';  // Define la URL base de la API para empleados
  }

  // Obtener todos los empleados
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.myAppUrl)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los empleados: ', error);
          return throwError(() => new Error('Error al obtener los empleados'));
        })
      );
  }

  // Obtener un empleado por ID
  getEmpleado(id: number): Observable<Empleado> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.get<Empleado>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al obtener el empleado con ID ${id}: `, error);
          return throwError(() => new Error(`Error al obtener el empleado con ID ${id}`));
        })
      );
  }

  // Crear un nuevo empleado
  postEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post<any>(this.myAppUrl, empleado)
      .pipe(
        catchError(error => {
          console.error('Error al crear el empleado: ', error);
          return throwError(() => new Error('Error al crear el empleado'));
        })
      );
  }

  // Actualizar un empleado por ID
  updateEmpleado(id: number, empleado: Empleado): Observable<any> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.put<any>(url, empleado)
      .pipe(
        catchError(error => {
          console.error(`Error al actualizar el empleado con ID ${id}: `, error);
          return throwError(() => new Error(`Error al actualizar el empleado con ID ${id}`));
        })
      );
  }

  // Actualizar el estado de un empleado
  updateEstadoEmpleado(id: number, edo_Emp: string): Observable<any> {
    const url = `${this.myAppUrl}/estado/${id}`;
    return this.http.put<any>(url, { edo_Emp })
      .pipe(
        catchError(error => {
          console.error(`Error al actualizar el estado del empleado con ID ${id}: `, error);
          return throwError(() => new Error(`Error al actualizar el estado del empleado con ID ${id}`));
        })
      );
  }

  // Actualizar la situación de un empleado
  updateSituacionEmp(id: number, sit_Emp: boolean): Observable<any> {
    const url = `${this.myAppUrl}/situacion/${id}`;
    return this.http.put<any>(url, { sit_Emp })
      .pipe(
        catchError(error => {
          console.error(`Error al actualizar la situación del empleado con ID ${id}: `, error);
          return throwError(() => new Error(`Error al actualizar la situación del empleado con ID ${id}`));
        })
      );
  }

  // Eliminar un empleado por ID
  deleteEmpleado(id: number): Observable<any> {
    const url = `${this.myAppUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al eliminar el empleado con ID ${id}: `, error);
          return throwError(() => new Error(`Error al eliminar el empleado con ID ${id}`));
        })
      );
  }
}
