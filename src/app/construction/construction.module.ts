import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser'
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
                    url: '/construction'
                }
            ]
        },
        component: ConstructionComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ConstructionComponent
    ]
})
export class ConstructionModule {}