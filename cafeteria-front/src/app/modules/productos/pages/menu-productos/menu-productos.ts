import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ProductosService } from '../../../../api/services/productos/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { slugToCategoria } from '../../constants/categorias';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-menu-productos',
  imports: [
    RouterLink,
    FormsModule,
    DecimalPipe,
    Button,
    InputText,
    InputGroup,
    InputGroupAddon,
    Card,
    Tag,
    ProgressSpinner,
    Message,
  ],
  templateUrl: './menu-productos.html',
  styleUrl: './menu-productos.css',
})
export class MenuProductosComponent implements OnInit {
  private productosService = inject(ProductosService);
  private route = inject(ActivatedRoute);

  productos = signal<Producto[]>([]);
  busqueda = '';
  cargando = signal(true);
  categoriaSlug = '';
  categoriaDb = '';

  ngOnInit() {
    this.categoriaSlug = this.route.snapshot.paramMap.get('categoria') ?? '';
    this.categoriaDb = slugToCategoria(this.categoriaSlug) ?? '';
    this.busqueda = this.route.snapshot.queryParamMap.get('nombre') ?? '';
    this.cargar();
  }

  tituloCategoria(): string {
    if (this.categoriaSlug === 'todas') return 'Resultados de busqueda';
    return this.categoriaDb || 'Productos';
  }

  cargar() {
    this.cargando.set(true);
    const params: { nombre?: string; clasificacion?: string } = {};
    if (this.busqueda) params.nombre = this.busqueda;
    if (this.categoriaDb && this.categoriaSlug !== 'todas') {
      params.clasificacion = this.categoriaDb;
    }
    this.productosService.listar(params).subscribe({
      next: (data) => {
        this.productos.set(data);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false),
    });
  }

  buscar() {
    this.cargar();
  }

  agregarAlCarrito() {
    // Carrito no implementado aun
  }

  categoriaClass(clasificacion: string): string {
    return 'cat-' + clasificacion.toLowerCase().replace(/\s+/g, '-');
  }
}
