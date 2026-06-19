import { Component, inject, input, output, signal, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from 'primeng/button';

import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-form-producto',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    Button
  ],
  templateUrl: './form-producto.html',
  styleUrl: './form-producto.css'
})
export class FormProducto implements OnInit {

  private fb = inject(FormBuilder);

  title = signal('Crear producto');

  producto = input<Producto>();

  eventEmitterFormProducto = output<Producto>();

  form!: FormGroup;

  ngOnInit(): void {

    if (this.producto()) {
      this.title.set('Actualizar producto');
    }

    this.form = this.fb.group({
      nombre: [
        this.producto()?.nombre ?? '',
        Validators.required
      ],
      descripcion: [
        this.producto()?.descripcion ?? '',
        Validators.required
      ],
      clasificacion: [
        this.producto()?.clasificacion ?? '',
        Validators.required
      ],
      precio: [
        this.producto()?.precio ?? '',
        Validators.required
      ],
      imagen: [
        this.producto()?.imagen ?? ''
      ],
      activo: [
        this.producto()?.activo ?? true
      ]
    });

  }

  sendProducto() {

    const producto: Producto = {
      id: this.producto()?.id,
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      clasificacion: this.form.value.clasificacion,
      precio: Number(this.form.value.precio),
      imagen: this.form.value.imagen || null,
      activo: this.form.value.activo ?? true
    };

    this.eventEmitterFormProducto.emit(producto);
  }
}