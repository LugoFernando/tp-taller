import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { CrearPedidoPayload, Pedido } from '../../../modules/pedidos/interfaces/pedido.interface';
import { PedidoAdmin } from '../../../modules/admin/interfaces/pedido-admin.interface';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.API_URL}/pedido`;

  crearPedido(payload: CrearPedidoPayload): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, payload);
  }

  listarMisPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/mis-pedidos`);
  }

  obtenerPedido(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiUrl}/${id}`);
  }

  listarAdmin(): Observable<PedidoAdmin[]> {
    return this.http.get<PedidoAdmin[]>(`${this.apiUrl}/admin`);
  }
}
