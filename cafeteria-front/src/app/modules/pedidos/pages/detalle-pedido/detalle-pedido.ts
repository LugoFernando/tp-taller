import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';
import { PedidosService } from '../../../../api/services/pedidos/pedidos.service';
import { Pedido } from '../../interfaces/pedido.interface';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-detalle-pedido',
  imports: [RouterLink, DatePipe, DecimalPipe, Button, Card, Tag, ProgressSpinner],
  templateUrl: './detalle-pedido.html',
  styleUrl: './detalle-pedido.css',
})
export class DetallePedidoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private pedidosService = inject(PedidosService);
  private router = inject(Router);

  pedido = signal<Pedido | undefined>(undefined);
  cargando = signal(true);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pedidosService.obtenerPedido(id).subscribe({
      next: (data) => {
        this.pedido.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.cargando.set(false);
        this.router.navigate(['/pedidos']);
      },
    });
  }

  categoriaClass(clasificacion?: string | null): string {
    if (!clasificacion) return 'product-img-default';
    return 'cat-' + clasificacion.toLowerCase().replace(/\s+/g, '-');
  }
}
