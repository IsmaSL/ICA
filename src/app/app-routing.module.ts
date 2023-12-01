import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
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
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: CategoriesComponent,
            },
            {
                path: 'construction',
                children: [
                    {
                        path: '',
                        component: ConstructionComponent
                    },
                    {
                        path: 'floors',
                        loadChildren: () => import('./construction/floors/floors.module').then(m => m.FloorsModule)
                    },
                    {
                        path: 'slabs',
                        loadChildren: () => import('./construction/slabs/slabs.module').then(m => m.SlabsModule)
                    }
                ]
            },
            {
                path: 'results',
                loadChildren: () => import('./results/results.module').then(m => m.ResultsModule)
            },
        ]
    },
    {
        path: 'requests',
        component: FullComponent,
        canActivate: [
            AuthGuard,
            RoleGuard,
        ],
        children: [
            {
                path: '',
                loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule)
            },
        ]
    },
    {
        path: 'users',
        component: FullComponent,
        canActivate: [
            AuthGuard,
            RoleGuard,
        ],
        children: [
            {
                path: '',
                loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
            },
        ]
    },
    {
        path: 'profile',
        component: FullComponent,
        canActivate: [
            AuthGuard,
        ],
        children: [
            {
                path: '',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
            },
        ]
    },
    {
        path: 'error',
        component: FullComponent,
        canActivate: [
            AuthGuard,
        ],
        children: [
            {
                path: '403',
                loadChildren: () => import('./errors/e403/e403.module').then(m => m.E403Module)
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/login'
    },
];