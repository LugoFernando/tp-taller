import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../api/services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-recupero-contrasena',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, ButtonModule, InputTextModule, ToastModule, CardModule],
  providers: [MessageService],
  templateUrl: './recupero-contrasena.html',
  styleUrl: './recupero-contrasena.css',
})
export class RecuperoContrasenaComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  loading = false;

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const { email } = this.form.value as any;

    this.authService.recoverPassword(email).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Email enviado',
          detail: 'Si el email existe, recibirás un enlace de recuperación'
        });
        setTimeout(() => this.router.navigate(['/auth/login']), 2000);
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message ?? 'No se pudo procesar la solicitud'
        });
      }
    });
  }
}
