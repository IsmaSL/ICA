import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private apiUrl = 'https://icaapi-production.up.railway.app';

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<any> {
        // Obtiene el token y el correo del usuario en sesión
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const userEmail = user.correo; // Asegúrate de usar la clave correcta para obtener el correo del usuario

        // Configura los headers de la petición
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        });

        // Realiza la petición GET a la API, incluyendo el correo del usuario actual como parámetro
        return this.http.get<any>(`${this.apiUrl}/all-users?current_user=${userEmail}`, {
            headers,
        });
    }

    updateUserStatus(email: string, newStatus: string): Observable<any> {
        const token = localStorage.getItem('token'); // Asumiendo que guardas el token en localStorage
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });

        const body = {
            email: email,
            newStatus: newStatus
        };

        return this.http.patch(`${this.apiUrl}/update-user-status`, body, { headers: headers });
    }
}
