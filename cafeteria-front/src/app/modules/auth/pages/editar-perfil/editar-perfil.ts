import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../api/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './editar-perfil.html',
  styleUrl: './editar-perfil.css',
})
export class EditarPerfil implements OnInit{
  
  private fb= inject(FormBuilder);
  private authService = inject(AuthService);
  router = inject(Router);

form! : FormGroup;

ngOnInit(): void {
  this.form = this.fb.group({
    nombre: [""],
    apellido: [""],
    email: [""],
    direccion: [""]
  });

  const id = this.authService.obtenerId();
  this.authService.perfilUsuario(id).subscribe(
    usuario => {this.form.patchValue(usuario)}
  );
}

guardar() {
  const id = this.authService.obtenerId();
  this.authService.editarPerfil(id,this.form.value).subscribe({
    next: () => alert("Perfil actualizado correctamente"),
    error: () => alert("Error al actualizar perfil")
  })
  this.router.navigate(["/auth/mi-perfil"]);
}
}
