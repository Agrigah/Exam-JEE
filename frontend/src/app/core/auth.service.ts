import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface CurrentUser {
  username?: string;
  fullName?: string;
  email?: string;
  role?: string;
  roles?: string[];
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials);
  }

  register(user: any) {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, user);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  saveUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  getToken(): string | null {
    return this.token;
  }

  get currentUser(): CurrentUser | null {
    const user = localStorage.getItem('user');

    if (user) {
      try {
        return JSON.parse(user);
      } catch {
        return null;
      }
    }

    const token = this.token;
    if (!token) {
      return null;
    }

    return this.decodeToken(token);
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  hasRole(role: string): boolean {
    const user = this.currentUser;

    if (!user) {
      return false;
    }

    if (user.role === role) {
      return true;
    }

    if (user.roles && user.roles.includes(role)) {
      return true;
    }

    return false;
  }

  isAdmin(): boolean {
    return this.hasRole('ROLE_ADMIN') || this.hasRole('ADMIN');
  }

  isEmployee(): boolean {
    return this.hasRole('ROLE_EMPLOYE') || this.hasRole('EMPLOYE') || this.hasRole('ROLE_EMPLOYEE') || this.hasRole('EMPLOYEE');
  }

  isClient(): boolean {
    return this.hasRole('ROLE_CLIENT') || this.hasRole('CLIENT');
  }

  canManage(): boolean {
    return this.isAdmin() || this.isEmployee();
  }

  private decodeToken(token: string): CurrentUser | null {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      const data = JSON.parse(decodedPayload);

      return {
        username: data.sub || data.username,
        fullName: data.fullName || data.name || data.sub || data.username,
        email: data.email,
        role: data.role,
        roles: data.roles || data.authorities || [],
        token
      };
    } catch {
      return null;
    }
  }
}
