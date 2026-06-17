import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductosService } from '../../../../api/services/productos/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { TableModule } from 'primeng/table';
import { TablaProducto } from "../../components/tabla-producto/tabla-producto";
import { Spinner } from '../../../../shared/primeng/spinner/spinner';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-list-producto',
  imports: [TableModule, TablaProducto, Spinner, ToastModule],
  templateUrl: './list-producto.html',
  styleUrl: './list-producto.css',
})
export class ListProducto implements OnInit, OnDestroy {

  spinner = signal(true);

  productos = signal<Producto[]>([]);

  productoService = inject(ProductosService);

  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.listarProductos();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  listarProductos() {
    this.productoService.listProductos().pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res: Producto[]) => {
        this.productos.set(res);
      },
      error: (error) => {
        console.log("Error al obtener productos", error);
      },
      complete: () => {
        this.spinner.set(false);
      }
    });
  }
}