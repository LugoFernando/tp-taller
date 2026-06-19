import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login-component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register-component').then(c => c.RegisterComponent)
  },
  {
    path:'mi-perfil',
    loadComponent: () => 
      import('./pages/mi-perfil/mi-perfil').then(c => c.MiPerfil)
  },
  {
    path:'editar-perfil',
    loadComponent: () => 
      import('./pages/editar-perfil/editar-perfil').then(c=>c.EditarPerfil)
  },
  {
    path: 'recupero-contrasena',
    loadComponent: () =>
      import('./pages/recupero-contrasena/recupero-contrasena').then(c => c.RecuperoContrasenaComponent)
  },
  {
    path: 'restablecer-contrasena',
    loadComponent: () =>
      import('./pages/restablecer-contrasena/restablecer-contrasena').then(c => c.RestablecerContrasenaComponent)
  }
];
