import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ResultsComponent } from "./results.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Results',
            urls: [
                {
                    title: 'Results',
                    url: '/Results'
                }
            ]
        },
        component: ResultsComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ResultsComponent
    ]
})
export class ResultsModule {}