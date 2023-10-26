import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
        FormsModule,
        NgbModule
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule {}