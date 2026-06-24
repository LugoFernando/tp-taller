import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';
import { PedidosService } from '../../../../api/services/pedidos/pedidos.service';
import { Pedido } from '../../interfaces/pedido.interface';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Message } from 'primeng/message';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-mis-pedidos',
  imports: [RouterLink, DatePipe, DecimalPipe, Button, Card, Message, ProgressSpinner],
  templateUrl: './mis-pedidos.html',
  styleUrl: './mis-pedidos.css',
})
export class MisPedidosComponent implements OnInit {
  private pedidosService = inject(PedidosService);

  pedidos = signal<Pedido[]>([]);
  cargando = signal(true);

  ngOnInit() {
    this.pedidosService.listarMisPedidos().subscribe({
      next: (data) => {
        this.pedidos.set(data);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false),
    });
  }

  cantidadItems(pedido: Pedido): number {
    return pedido.items.reduce((sum, item) => sum + item.cantidad, 0);
  }
}
