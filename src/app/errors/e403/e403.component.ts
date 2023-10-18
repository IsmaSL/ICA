import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-e403',
    templateUrl: './e403.component.html',
    styleUrls: ['./e403.component.scss']
})
export class E403Component implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    backToHome() {
        this.router.navigate(['/home']);
    }

}
