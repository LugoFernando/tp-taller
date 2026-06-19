import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CryptService } from './crypt.service';
import { environment } from '../../../../environments/environment.development';
import { Usuario } from '../../../modules/auth/interfaces/usuario.interface';


export interface SignupData {
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  direccion: string;
}

export interface SigninData {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private http = inject(HttpClient);
  private cryptService = inject(CryptService);
  private apiUrl = environment.API_URL;

  signup(data: SignupData) {
    return this.http.post(`${this.apiUrl}/auth/signup`, data);
  }

  signin(data: SigninData) {
    return this.http.post<{ resultado: { token: string; nombre: string } }>(
      `${this.apiUrl}/auth/signin`, data
    ).pipe(
      tap(res => {
        this.cryptService.guardarToken(res.resultado.token);
        if (res.resultado.nombre) {
          this.cryptService.guardarNombre(res.resultado.nombre);
        }
      })
    );
  }

  logout() {
    this.cryptService.eliminarToken();
  }

  estaAutenticado(): boolean {
    return this.cryptService.hayToken();
  }

  obtenerId():number {
    const token = this.cryptService.obtenerToken();
    if(!token) return 0;
    const payload = JSON.parse(atob(token.split('.')[1]));

    return payload.id ?? 0;
  }


  perfilUsuario(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiUrl}/auth/${id}`);}

  obtenerEmail(): string {
    const token = this.cryptService.obtenerToken();
    if (!token) return '';
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.email ?? '';
  }

  esAdmin(): boolean {
    const token = this.cryptService.obtenerToken();
    if (!token) return false;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.rol === 'admin';
  }

  obtenerNombre(): string {
    return this.cryptService.obtenerNombre() ?? '';

  }
}

