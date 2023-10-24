import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Users',
            urls: [
                {
                    title: 'Users',
                    url: '/users'
                }
            ]
        },
        component: ProfileComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule {}