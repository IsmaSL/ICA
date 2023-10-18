import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from './animation'; // Importa las animaciones
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    animations: [fadeInOutAnimation],
})
export class AuthComponent implements OnInit {

    credentials = { username: '', password: '' };

    loginDiv: boolean = true;
    requestDiv: boolean = false;

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
    }

    toggleDiv() {
        this.loginDiv = !this.loginDiv;
        this.requestDiv = !this.requestDiv;
    }

    login() {
        this.authService.login(this.credentials).subscribe(response => {
            const data: any = response;
    
            // Almacena el token y la información del usuario en localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            // Procesa la respuesta, guarda el token, navega a otra página, etc.
            this.router.navigate(['/home']);
        }, error => {
            alert("Ups... " + error.error.error)
        });
    }
}
