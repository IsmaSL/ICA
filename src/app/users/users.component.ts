import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: any[] = [];
    searchText: string = "";
    p: number = 1; 
    loading = false;

    constructor(private usersService: UsersService) { }

    ngOnInit(): void {
        this.loading = true;
        this.usersService.getAllUsers().subscribe(
            (response) => {
                this.loading = false;
                this.users = response;
            }, (error) => {
                console.log("Error al obtener la lista de usuarios: \n", error);
                this.loading = false;
            }
        );
    }

    getStatusLabel(status: string) {
        return status === '1' ? 'Activo' : 'Inactivo';
    }

    getStatusClass(status: string) {
        return status === '1' ? 'bg-success text-white' : 'bg-danger text-white';
    }

    getRoleLabel(role: string) {
        return role === 'admin' ? 'Admin' : 'Básico';
    }

    getRoleClass(role: string) {
        return role === 'admin' ? 'bg-purple text-white' : 'bg-cyan text-white';
    }

    getPicProfileUser(url_img: string) {
        return url_img === 'null' ? 'assets/images/users/user1.jpg' : 'assets/images/users/user2.jpg'
    }

    changeUserStatus(user: any) {
        const newStatus = user.status === '1' ? '0' : '1';

        console.log(user.correo + " | " + user.status);
        console.log("new user.status: " + newStatus);
        
        this.usersService.updateUserStatus(user.correo, newStatus)
            .subscribe(
                (response) => {
                    console.log(response);
                    // Actualizar el estado del usuario en la lista
                    const index = this.users.findIndex(u => u.correo === user.correo);
                    if (index !== -1) {
                        this.users[index].status = newStatus;
                    }
                },
                error => {
                    console.log(error);
                }
            );
    }
}
