import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../../api/services/auth/auth.service';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css',
})
export class MiPerfil implements OnInit{

  authService = inject(AuthService);
  cd= inject(ChangeDetectorRef);

  usuario : Usuario | null = null;

  ngOnInit(): void {
    const id = this.authService.obtenerId();
    this.authService.perfilUsuario(id).subscribe({
      next : (res : Usuario) => {
        this.usuario = res;
        this.cd.detectChanges();
      },
      error: (err) => {console.log(err);}
    })
  }
}
