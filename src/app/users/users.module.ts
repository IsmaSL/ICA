import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Users',
            urls: [
                {
                    title: 'Users',
                    url: '/users'
                }
            ]
        },
        component: UsersComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxPaginationModule,
        FormsModule,
    ],
    declarations: [
        UsersComponent,
        FilterPipe,
    ]
})
export class UsersModule {}