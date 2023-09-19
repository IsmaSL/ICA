import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule, // Asegúrate de agregar CommonModule a la lista de imports
    // Otros módulos que puedas necesitar
  ],
})
export class AuthModule { }
