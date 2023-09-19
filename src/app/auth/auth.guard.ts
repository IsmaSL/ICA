import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Implementa tu lógica de autenticación aquí
    const isAuthenticated = true;

    if (isAuthenticated) {
      return true; // Permite el acceso a la ruta protegida
    } else {
      // Si no está autenticado, redirige al login y guarda la URL actual para redirigir después de iniciar sesión
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
