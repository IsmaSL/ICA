import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from './animation'; // Importa las animaciones
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    animations: [fadeInOutAnimation],
})
export class AuthComponent implements OnInit {

    loginDiv: boolean = true;
    requestDiv: boolean = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    toggleDiv() {
        this.loginDiv = !this.loginDiv;
        this.requestDiv = !this.requestDiv;
    }

    login() {
        // this.router.navigateByUrl('/home', { skipLocationChange: true });
        this.router.navigate(['/home']);
    }

}
