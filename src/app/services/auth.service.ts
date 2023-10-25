import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https://icaapi-production.up.railway.app';

    constructor(private http: HttpClient) { }

    login(credentials: { username: string, password: string }) {
        return this.http.post(`${this.apiUrl}/login`, credentials);
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    sendRequest(request: { name: string; last_name: string; email: string }) {
        return this.http.post(`${this.apiUrl}/new-request`, request);
    }
}
