import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../api/services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-restablecer-contrasena',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, ButtonModule, InputTextModule, PasswordModule, ToastModule, CardModule],
  providers: [MessageService],
  templateUrl: './restablecer-contrasena.html',
  styleUrl: './restablecer-contrasena.css',
})
export class RestablecerContrasenaComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  token = '';

  form = this.fb.group({
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  loading = false;

  ngOnInit() {
    this.route.queryParams.subscribe(p => this.token = p['token'] ?? '');
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const { password, confirmPassword } = this.form.value as any;

    this.authService.resetPassword(this.token, password, confirmPassword).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Listo', detail: 'Contraseña reestablecida' });
        setTimeout(() => this.router.navigate(['/auth/login']), 1200);
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.message ?? 'No se pudo reestablecer la contraseña' });
      }
    });
  }
}
