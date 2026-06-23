import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Producto } from '../../../modules/productos/interfaces/producto.interface';
import { environment } from '../../../../environments/environment.development';

export interface ListarProductosParams {
  nombre?: string;
  clasificacion?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  http = inject(HttpClient);

  listar(params?: ListarProductosParams): Observable<Producto[]> {
    const query = new URLSearchParams();
    if (params?.nombre) query.set('nombre', params.nombre);
    if (params?.clasificacion) query.set('clasificacion', params.clasificacion);
    const qs = query.toString();
    return this.http.get<Producto[]>(`${environment.API_URL}/producto${qs ? `?${qs}` : ''}`);
  }

  obtener(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${environment.API_URL}/producto/${id}`);
  }

  listarAdmin(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${environment.API_URL}/producto/admin`);
  }

  cambiarEstadoProducto(producto: Producto, activo: boolean): Observable<Producto> {
    return this.updateProducto({ ...producto, activo });
  }

  desactivarProducto(producto: Producto): Observable<Producto> {
    return this.cambiarEstadoProducto(producto, false);
  }

  activarProducto(producto: Producto): Observable<Producto> {
    return this.cambiarEstadoProducto(producto, true);
  }

  subirImagen(nombre: string, archivo: File): Observable<{ imagen: string }> {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = String(reader.result).split(',')[1];
        const extension = archivo.name.split('.').pop() || 'jpg';
        this.http.post<{ imagen: string }>(`${environment.API_URL}/producto/imagen`, {
          nombre,
          archivo: base64,
          extension,
        }).subscribe({
          next: (res) => {
            observer.next(res);
            observer.complete();
          },
          error: (err) => observer.error(err),
        });
      };
      reader.onerror = () => observer.error(reader.error);
      reader.readAsDataURL(archivo);
    });
  }

  listProductos(): Observable<Producto[]> {
    return this.listar();
  }

  detailProducto(id: number): Observable<Producto> {
    return this.obtener(id);
  }

  crearProducto(producto: Partial<Producto>): Observable<Producto> {
    return this.http.post<Producto>(
      `${environment.API_URL}/producto`,
      producto
    );
  }

  crearProductoConImagen(producto: Partial<Producto>, archivo: File): Observable<Producto> {
    return this.subirImagen(producto.nombre!, archivo).pipe(
      switchMap((res) => this.crearProducto({ ...producto, imagen: res.imagen }))
    );
  }

  updateProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(
      `${environment.API_URL}/producto/${producto.id}`,
      producto
    );
  }

  updateProductoConImagen(producto: Producto, archivo: File): Observable<Producto> {
    return this.subirImagen(producto.nombre, archivo).pipe(
      switchMap((res) => this.updateProducto({ ...producto, imagen: res.imagen }))
    );
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(
      `${environment.API_URL}/producto/${id}`
    );
  }
}
