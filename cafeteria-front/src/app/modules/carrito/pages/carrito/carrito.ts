import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { CarritoService } from '../../../../api/services/carrito/carrito.service';
import { PedidosService } from '../../../../api/services/pedidos/pedidos.service';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Message } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink, DecimalPipe, Button, Card, Message, Toast],
  providers: [MessageService],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class CarritoComponent {
  carritoService = inject(CarritoService);
  private pedidosService = inject(PedidosService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  generando = false;

  categoriaClass(clasificacion: string): string {
    return 'cat-' + clasificacion.toLowerCase().replace(/\s+/g, '-');
  }

  generarPedido() {
    const items = this.carritoService.obtenerItemsParaPedido();
    if (items.length === 0) return;

    this.generando = true;
    this.pedidosService.crearPedido({ items }).subscribe({
      next: () => {
        this.carritoService.vaciar();
        this.generando = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Pedido generado',
          detail: 'Tu pedido fue registrado correctamente',
        });
        this.router.navigate(['/pedidos']);
      },
      error: (err) => {
        this.generando = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message ?? 'No se pudo generar el pedido',
        });
      },
    });
  }
}
