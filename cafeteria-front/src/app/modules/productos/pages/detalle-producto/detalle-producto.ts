import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../../../api/services/productos/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'app-detalle-producto',
  imports: [RouterLink, DecimalPipe, Button, Card, Tag, InputNumber, FormsModule],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProductoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productosService = inject(ProductosService);
  private router = inject(Router);

  producto = signal<Producto | undefined>(undefined);
  cantidad = 1;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productosService.obtener(id).subscribe({
      next: (p) => this.producto.set(p),
      error: () => this.router.navigate(['/menu']),
    });
  }

  agregarAlCarrito() {
    // Carrito no implementado aun
  }

  categoriaClass(clasificacion: string): string {
    return 'cat-' + clasificacion.toLowerCase().replace(/\s+/g, '-');
  }
}
