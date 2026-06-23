import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CATEGORIAS } from '../../constants/categorias';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-menu-categorias',
  imports: [
    RouterLink,
    FormsModule,
    Button,
    InputText,
    InputGroup,
    InputGroupAddon,
    Card,
  ],
  templateUrl: './menu-categorias.html',
  styleUrl: './menu-categorias.css',
})
export class MenuCategoriasComponent {
  private router = inject(Router);

  filaSuperior = CATEGORIAS.slice(0, 3);
  filaInferior = CATEGORIAS.slice(3, 5);
  busqueda = '';

  buscar() {
    if (!this.busqueda.trim()) return;
    this.router.navigate(['/menu/categoria', 'todas'], {
      queryParams: { nombre: this.busqueda.trim() },
    });
  }
}
