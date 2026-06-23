import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductosService } from '../../../../api/services/productos/productos.service';
import { CATEGORIAS_NOMBRES } from '../../../productos/constants/categorias';
import { Producto } from '../../../productos/interfaces/producto.interface';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-admin-producto-form',
  imports: [ReactiveFormsModule, RouterLink, Button, InputText, Select, Card],
  templateUrl: './admin-producto-form.html',
  styleUrl: './admin-producto-form.css',
})
export class AdminProductoFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private productosService = inject(ProductosService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  categorias = CATEGORIAS_NOMBRES;
  esEdicion = false;
  productoId?: number;
  imagenArchivo: File | null = null;
  nombreImagen = signal('');

  form = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    clasificacion: ['', Validators.required],
    precio: [0, Validators.required],
    imagen: [''],
    activo: [true],
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.productoId = Number(id);
      this.productosService.obtener(this.productoId).subscribe({
        next: (p) => {
          this.form.patchValue({
            nombre: p.nombre,
            descripcion: p.descripcion,
            clasificacion: p.clasificacion,
            precio: p.precio,
            imagen: p.imagen ?? '',
            activo: p.activo ?? true,
          });
        },
        error: () => this.router.navigate(['/admin/productos']),
      });
    }

    this.form.get('nombre')?.valueChanges.subscribe((nombre) => {
      if (this.imagenArchivo && nombre) {
        this.actualizarNombreImagen(nombre);
      }
    });
  }

  onImagenSeleccionada(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      this.imagenArchivo = input.files[0];
      const nombre = this.form.value.nombre;
      if (nombre) {
        this.actualizarNombreImagen(nombre);
      }
    }
  }

  actualizarNombreImagen(nombre: string) {
    const slug = nombre.toLowerCase().replace(/[^a-z0-9]/g, '');
    const extension = this.imagenArchivo?.name.split('.').pop() || 'jpg';
    this.nombreImagen.set(`${slug}.${extension}`);
  }

  guardar() {
    if (this.form.invalid) return;

    const data: Partial<Producto> = {
      nombre: this.form.value.nombre!,
      descripcion: this.form.value.descripcion!,
      clasificacion: this.form.value.clasificacion!,
      precio: Number(this.form.value.precio),
      imagen: this.form.value.imagen || null,
      activo: this.form.value.activo ?? true,
    };

    if (this.esEdicion && this.productoId) {
      const producto = { ...data, id: this.productoId } as Producto;
      const peticion = this.imagenArchivo
        ? this.productosService.updateProductoConImagen(producto, this.imagenArchivo)
        : this.productosService.updateProducto(producto);

      peticion.subscribe({
        next: () => {
          alert('Producto actualizado correctamente');
          this.router.navigate(['/admin/productos']);
        },
        error: () => alert('Error al actualizar producto'),
      });
    } else {
      if (!this.imagenArchivo) {
        alert('Debes seleccionar una imagen');
        return;
      }

      this.productosService.crearProductoConImagen(data, this.imagenArchivo).subscribe({
        next: () => {
          alert('Producto creado correctamente');
          this.router.navigate(['/admin/productos']);
        },
        error: () => alert('Error al crear producto'),
      });
    }
  }
}
