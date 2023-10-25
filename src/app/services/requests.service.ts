import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
    private apiUrl = 'https://icaapi-production.up.railway.app';

    constructor(private http: HttpClient) { }

    getAllRequests(): Observable<any> {
        // Obtiene el token y el correo del usuario en sesión
        const token = localStorage.getItem('token');

        // Configura los headers de la petición
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        });

        // Realiza la petición GET a la API, incluyendo el correo del usuario actual como parámetro
        return this.http.get<any>(`${this.apiUrl}/all-requests`, {
            headers,
        });
    }

    updateRequestStatus(email: string, newStatus: string): Observable<any> {
        // Obtiene el token y el correo del usuario en sesión
        const token = localStorage.getItem('token');

        // Configura los headers de la petición
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        });

        const body = {
            email: email,
            newStatus: newStatus
        };

        return this.http.patch(`${this.apiUrl}/update-request-status`, body, { headers: headers });
    }

    addNewUser(userData: any): Observable<any> {
        // Obtiene el token y el correo del usuario en sesión
        const token = localStorage.getItem('token');

        // Configura los headers de la petición
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        });

        return this.http.patch(`${this.apiUrl}/update-request-status`, { headers: headers });
    }
}
