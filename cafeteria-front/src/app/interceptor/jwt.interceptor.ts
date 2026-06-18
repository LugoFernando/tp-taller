import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { CryptService } from '../api/services/auth/crypt.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const cryptService = inject(CryptService);
  const token = cryptService.obtenerToken();

  if (token) {
    const reqConToken = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(reqConToken);
  }

  return next(req);
};
