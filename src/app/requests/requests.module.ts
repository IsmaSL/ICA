import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { RequestsComponent } from "./requests.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from "./filter.pipe";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Requests',
            urls: [
                {
                    title: 'Requests',
                    url: '/requests'
                }
            ]
        },
        component: RequestsComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxPaginationModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        RequestsComponent,
        FilterPipe,
    ]
})
export class RequestsModule {}