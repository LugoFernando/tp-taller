import { Injectable, computed, signal } from '@angular/core';
import { Producto } from '../../../modules/productos/interfaces/producto.interface';
import { CarritoItem } from '../../../modules/carrito/interfaces/carrito-item.interface';

const STORAGE_KEY = 'cafeteria_carrito';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private items = signal<CarritoItem[]>(this.cargarDesdeStorage());

  readonly carrito = this.items.asReadonly();
  readonly cantidadTotal = computed(() =>
    this.items().reduce((sum, item) => sum + item.cantidad, 0)
  );
  readonly total = computed(() =>
    this.items().reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0)
  );

  agregar(producto: Producto, cantidad: number) {
    if (!producto.id || cantidad < 1) return;

    const actuales = [...this.items()];
    const existente = actuales.find((item) => item.producto.id === producto.id);

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      actuales.push({ producto, cantidad });
    }

    this.guardar(actuales);
  }

  disminuir(productoId: number) {
    const actuales = this.items()
      .map((item) =>
        item.producto.id === productoId
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter((item) => item.cantidad > 0);

    this.guardar(actuales);
  }

  aumentar(productoId: number) {
    const actuales = this.items().map((item) =>
      item.producto.id === productoId
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
    this.guardar(actuales);
  }

  eliminar(productoId: number) {
    const actuales = this.items().filter((item) => item.producto.id !== productoId);
    this.guardar(actuales);
  }

  vaciar() {
    this.guardar([]);
  }

  obtenerItemsParaPedido() {
    return this.items()
      .filter((item) => item.producto.id)
      .map((item) => ({
        productoId: item.producto.id!,
        cantidad: item.cantidad,
      }));
  }

  private guardar(items: CarritoItem[]) {
    this.items.set(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  private cargarDesdeStorage(): CarritoItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CarritoItem[]) : [];
    } catch {
      return [];
    }
  }
}
