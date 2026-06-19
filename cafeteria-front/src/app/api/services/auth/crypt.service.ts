import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth_token';
const NOMBRE_KEY = 'auth_nombre';

@Injectable({ providedIn: 'root' })
export class CryptService {

  guardarToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  guardarNombre(nombre: string): void {
    localStorage.setItem(NOMBRE_KEY, nombre);
  }

  obtenerToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  obtenerNombre(): string | null {
    return localStorage.getItem(NOMBRE_KEY);
  }

  eliminarToken(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(NOMBRE_KEY);
  }

  hayToken(): boolean {
    return !!this.obtenerToken();
  }
}
