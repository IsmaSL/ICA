import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SlabsComponent } from "./slabs.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Slabs',
            urls: [
                {
                    title: 'Slabs',
                    url: '/slabs'
                }
            ]
        },
        component: SlabsComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        SlabsComponent
    ]
})
export class SlabsModule {}