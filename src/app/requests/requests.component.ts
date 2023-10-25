import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

    requests: any[] = [];
    searchText: string = "";
    p: number = 1;
    loading = false;
    passGenerated: string = "";

    newUser = {
        email: '',
        name: '',
        last_name: '',
        password: '',
        role: ''
    };

    constructor(private requestsService: RequestsService, config: NgbModalConfig, private modalService: NgbModal) {
        config.backdrop = 'static';
        config.keyboard = false;
        config.centered = true;
        config.animation = true;
        config.size = "md"
    }

    ngOnInit(): void {
        this.loading = true;
        this.requestsService.getAllRequests().subscribe(
            (response) => {
                this.loading = false;
                this.requests = response;
            },
            (error) => {
                console.log("Error al obtener la lista de solicitudes: \n", error);
                this.loading = false;
            }
        );
    }

    newUserModal(content: any, request: any) {
        this.modalService.open(content);

        this.newUser.email = request.email;
        this.newUser.name = request.name;
        this.newUser.last_name = request.last_name;
    }

    addNewUser() {
        // Aquí puedes añadir los valores por defecto antes de enviar la solicitud
        const userData = {
            ...this.newUser,
            url_img: null,
            teléfono: 'xxxxxxxxxx',
            status: 1
        };

        console.log(userData);
        

        // this.requestsService.addNewUser(userData).subscribe(
        //     (response) => {
        //         console.log(response);

        //     },
        //     (error) => {
        //         console.log(error);
        //     }
        // );
    }

    generatePassword() {
        const length = Math.floor(Math.random() * 3) + 8; // Genera un número aleatorio entre 8 y 10
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_#$&";
        let password = "";
        while (!this.validatePassword(password)) {
            password = "";
            for (let i = 0, n = charset.length; i < length; ++i) {
                password += charset.charAt(Math.floor(Math.random() * n));
            }
        }
        this.newUser.password = password;
        this.passGenerated = password
    }

    validatePassword(password: string): boolean {
        return (
            /[A-Z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[.-_#$&]/.test(password) &&
            password.length >= 8 &&
            password.length <= 10
        );
    }
}       
