import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductosService } from '../../../../api/services/productos/productos.service';
import { Producto } from '../../../productos/interfaces/producto.interface';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-admin-producto-detalle',
  imports: [RouterLink, Button, Card],
  templateUrl: './admin-producto-detalle.html',
  styleUrl: './admin-producto-detalle.css',
})
export class AdminProductoDetalleComponent implements OnInit {
  private productosService = inject(ProductosService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  producto = signal<Producto | undefined>(undefined);

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productosService.obtener(id).subscribe({
      next: (p) => this.producto.set(p),
      error: () => this.router.navigate(['/admin/productos']),
    });
  }

  cambiarEstado() {
    const p = this.producto();
    if (!p) return;

    const accion = p.activo
      ? this.productosService.desactivarProducto(p)
      : this.productosService.activarProducto(p);

    accion.subscribe({
      next: () => {
        alert(p.activo ? 'Producto desactivado correctamente' : 'Producto activado correctamente');
        this.cargar();
      },
      error: () => {
        alert(p.activo ? 'Error al desactivar producto' : 'Error al activar producto');
      },
    });
  }

  eliminar() {
    const p = this.producto();
    if (!p?.id) return;

    this.productosService.deleteProducto(p.id).subscribe({
      next: () => {
        alert('Producto eliminado correctamente');
        this.router.navigate(['/admin/productos']);
      },
      error: () => {
        alert('Error al eliminar producto');
      },
    });
  }
}
