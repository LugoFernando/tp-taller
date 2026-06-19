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
    return this.http.post<{ token: string; usuario: any }>(
      `${this.apiUrl}/auth/signin`, data
    ).pipe(
      tap(res => this.cryptService.guardarToken(res.token))
    );
  }

  logout() {
    this.cryptService.eliminarToken();
  }

  estaAutenticado(): boolean {
    return this.cryptService.hayToken();
  }

  perfilUsuario(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(`${environment.API_URL}/usuario/${id}`);
  }
}
