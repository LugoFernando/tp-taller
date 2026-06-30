import { Injectable, signal } from '@angular/core';

export interface ToastMensaje {
  mensaje: string;
  tipo: 'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root',
})
export class Toast {
  toastActual = signal<ToastMensaje | null>(null);

  mostrar(mensaje: string, tipo: ToastMensaje['tipo'] = 'success', duracionMs = 3000) {
    console.log("mostrar() ejecutado",mensaje)
    this.toastActual.set({ mensaje, tipo });

    setTimeout(() => {
      this.toastActual.set(null);
    }, duracionMs);
  }
}
