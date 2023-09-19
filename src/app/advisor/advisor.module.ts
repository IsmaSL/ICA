import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AdvisorComponent } from "./advisor.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Advisor',
            urls: [
                {
                    title: 'Advisor',
                    url: '/advisor'
                }
            ]
        },
        component: AdvisorComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        AdvisorComponent
    ]
})
export class AdvisorModule {}