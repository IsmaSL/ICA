import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FloorsComponent } from "./floors.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Floors',
            urls: [
                {
                    title: 'Floors',
                    url: '/floors'
                }
            ]
        },
        component: FloorsComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        FloorsComponent
    ]
})
export class FloorsModule {}