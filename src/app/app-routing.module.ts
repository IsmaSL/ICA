import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './auth/auth.guard';

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
        path: '**',
        redirectTo: '/login'
    },
    // {
    //     path: 'login',
    //     component: AuthComponent,
    //     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    // },
    // {
    //     path:'',
    //     component: FullComponent,
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: '/home',
    //             pathMatch: 'full'
    //         },
    //         {
    //             path: 'home',
    //             loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    //         },
    //         {
    //             path: 'advisor',
    //             loadChildren: () => import('./advisor/advisor.module').then(m => m.AdvisorModule)
    //         }
    //     ]
    // },
    // {
    //     path: '**',
    //     redirectTo: '/login'
    // },
];


// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
