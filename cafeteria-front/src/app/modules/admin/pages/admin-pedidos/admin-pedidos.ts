import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PedidoAdmin } from '../../interfaces/pedido-admin.interface';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-admin-pedidos',
  imports: [RouterLink, Button, TableModule, Message],
  templateUrl: './admin-pedidos.html',
  styleUrl: './admin-pedidos.css',
})
export class AdminPedidosComponent {
  pedidos = signal<PedidoAdmin[]>([]);
}
