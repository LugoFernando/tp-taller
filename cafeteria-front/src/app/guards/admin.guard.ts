import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../api/services/auth/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.estaAutenticado()) {
    router.navigate(['/auth/login']);
    return false;
  }

  if (!authService.esAdmin()) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
