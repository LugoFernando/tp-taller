import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Producto } from '../../../modules/productos/interfaces/producto.interface';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  http = inject(HttpClient);

  listProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      `${environment.API_URL}/producto`
    );
  }

  detailProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(
      `${environment.API_URL}/producto/${id}`
    );
  }

  crearProducto(producto: Producto): Observable<Producto> {
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