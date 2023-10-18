import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { RequestsComponent } from "./requests.component";

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

    ],
    declarations: [
        RequestsComponent
    ]
})
export class RequestsModule {}