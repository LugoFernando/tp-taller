import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../api/services/auth/auth.service';
import { Usuario } from '../../../auth/interfaces/usuario.interface';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-admin-cuentas',
  imports: [RouterLink, Button, TableModule, ProgressSpinner],
  templateUrl: './admin-cuentas.html',
  styleUrl: './admin-cuentas.css',
})
export class AdminCuentasComponent implements OnInit {
  private authService = inject(AuthService);

  usuarios = signal<Omit<Usuario, 'password'>[]>([]);
  cargando = signal(true);

  ngOnInit() {
    this.authService.listarUsuarios().subscribe({
      next: (data) => {
        this.usuarios.set(data);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false),
    });
  }
}
