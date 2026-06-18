import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth_token';

@Injectable({ providedIn: 'root' })
export class CryptService {

  guardarToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  eliminarToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  hayToken(): boolean {
    return !!this.obtenerToken();
  }
}
