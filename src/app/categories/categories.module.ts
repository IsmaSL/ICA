import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { CategoriesComponent } from "./categories.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Services',
            urls: [
                {
                    title: 'Services',
                    url: '/Services'
                }
            ]
        },
        component: CategoriesComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        CategoriesComponent
    ]
})
export class CategoriesModule {}