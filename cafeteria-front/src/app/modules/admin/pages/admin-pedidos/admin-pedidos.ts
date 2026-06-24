import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';
import { PedidosService } from '../../../../api/services/pedidos/pedidos.service';
import { PedidoAdmin } from '../../interfaces/pedido-admin.interface';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Message } from 'primeng/message';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-admin-pedidos',
  imports: [RouterLink, DatePipe, DecimalPipe, Button, TableModule, Message, ProgressSpinner],
  templateUrl: './admin-pedidos.html',
  styleUrl: './admin-pedidos.css',
})
export class AdminPedidosComponent implements OnInit {
  private pedidosService = inject(PedidosService);

  pedidos = signal<PedidoAdmin[]>([]);
  cargando = signal(true);

  ngOnInit() {
    this.pedidosService.listarAdmin().subscribe({
      next: (data) => {
        this.pedidos.set(data);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false),
    });
  }
}
