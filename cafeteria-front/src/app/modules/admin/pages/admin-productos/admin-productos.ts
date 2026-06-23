import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../../../api/services/productos/productos.service';
import { Producto } from '../../../productos/interfaces/producto.interface';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-admin-productos',
  imports: [RouterLink, Button, TableModule, ProgressSpinner],
  templateUrl: './admin-productos.html',
  styleUrl: './admin-productos.css',
})
export class AdminProductosComponent implements OnInit {
  private productosService = inject(ProductosService);

  productos = signal<Producto[]>([]);
  cargando = signal(true);

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.cargando.set(true);
    this.productosService.listarAdmin().subscribe({
      next: (data) => {
        this.productos.set(data);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false),
    });
  }

  cambiarEstado(producto: Producto) {
    const accion = producto.activo
      ? this.productosService.desactivarProducto(producto)
      : this.productosService.activarProducto(producto);

    accion.subscribe({
      next: () => {
        alert(producto.activo ? 'Producto desactivado correctamente' : 'Producto activado correctamente');
        this.cargar();
      },
      error: () => {
        alert(producto.activo ? 'Error al desactivar producto' : 'Error al activar producto');
      },
    });
  }

  eliminar(producto: Producto) {
    if (!producto.id) return;
    this.productosService.deleteProducto(producto.id).subscribe({
      next: () => {
        alert('Producto eliminado correctamente');
        this.cargar();
      },
      error: () => {
        alert('Error al eliminar producto');
      },
    });
  }
}
