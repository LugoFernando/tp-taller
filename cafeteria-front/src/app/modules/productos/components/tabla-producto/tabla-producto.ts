import { Component, inject, input, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Producto } from '../../interfaces/producto.interface';
import { Router } from '@angular/router';
import { ProductosService } from '../../../../api/services/productos/productos.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tabla-producto',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './tabla-producto.html',
  styleUrl: './tabla-producto.css'
})
export class TablaProducto {

  router = inject(Router);
  productosService = inject(ProductosService);

  productos = input.required<Producto[]>();

  eventEmitterTableDeleteProducto = output<boolean>();

  messageService = inject(MessageService);

  createProducto() {
    this.router.navigate(['productos/create-producto']);
  }

  editarProducto(producto: Producto) {
    this.router.navigate(['productos/update-producto', producto.id]);
  }

  verProducto(producto: Producto) {
    this.router.navigate(['productos/detail-producto', producto.id]);
  }

  eliminarProducto(producto: Producto) {

    console.log('Eliminar producto:', producto);

    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Función eliminar pendiente'
    });

  }
}