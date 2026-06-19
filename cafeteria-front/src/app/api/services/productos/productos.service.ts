import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  updateProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(
      `${environment.API_URL}/producto/${producto.id}`,
      producto
    );
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(
      `${environment.API_URL}/producto/${id}`
    );
  }
}
