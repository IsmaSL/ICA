import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ConstructionComponent } from "./construction.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Construction',
            urls: [
                {
                    title: 'Construction',
                    url: '/Construction'
                }
            ]
        },
        component: ConstructionComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ConstructionComponent
    ]
})
export class ConstructionModule {}