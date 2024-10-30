import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment'; // Asegúrate de que la ruta sea correcta
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AccederService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    // Asegúrate de que endpoint esté definido en el environment
    this.myAppUrl = environment.endpoint.endsWith('/') ? environment.endpoint : `${environment.endpoint}/`;
    this.myApiUrl = `api/facebook`; // Ajusta aquí para apuntar a tu endpoint específico
  }

  // Login con usuario y contraseña
  login(usuario: Usuario): Observable<{ id: number, nom_Usu: string, token: string }> {
    return this.http.post<{ id: number, nom_Usu: string, token: string }>(this.myApiUrl, usuario)
      .pipe(
        catchError(error => {
          console.error('Error en login:', error);
          return throwError(() => new Error('Error en el login'));
        })
      );
  }

  // Login con Facebook (si es necesario)
  loginWithFacebook(accessToken: string): Observable<{ id: number, nom_Usu: string, token: string }> {
    return this.http.post<{ id: number, nom_Usu: string, token: string }>(`${this.myApiUrl}/facebook`, { accessToken })
      .pipe(
        catchError(error => {
          console.error('Error en login con Facebook:', error);
          return throwError(() => new Error('Error en el login con Facebook'));
        })
      );
  }
}
