import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Home',
            urls: [
                {
                    title: 'Home',
                    url: '/home'
                }
            ]
        },
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}