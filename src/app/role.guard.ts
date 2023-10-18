import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (user && user.rol === 'admin') {
      return true;
    }

    // Redirige al usuario a una página de "Acceso Denegado" o a la página principal.
    this.router.navigate(['/error/403']);
    return false;
  }
}
