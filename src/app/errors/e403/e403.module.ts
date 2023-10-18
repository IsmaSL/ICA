import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { E403Component } from "./e403.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: '403',
            urls: [
                {
                    title: '403',
                    url: '/403'
                }
            ]
        },
        component: E403Component
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        E403Component
    ]
})
export class E403Module {}