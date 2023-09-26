import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './auth/auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { ConstructionComponent } from './construction/construction.component';

export const AppRoutingModule: Routes = [
    { 
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full' },
    {
        path: 'login',
        component: AuthComponent,
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'home',
        component: FullComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            // Otras rutas hijas de /home
        ]
    },
    {
        path: 'services',
        component: FullComponent,
        children: [
            {
                path: '',
                component: CategoriesComponent,
            },
            {
                path: 'construction', // Ruta para /services/construction
                loadChildren: () => import('./construction/construction.module').then(m => m.ConstructionModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/login'
    },
];