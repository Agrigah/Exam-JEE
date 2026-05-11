import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: any) {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, {
      params: this.buildParams(params)
    });
  }

  post<T>(endpoint: string, data: any) {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, data);
  }

  put<T>(endpoint: string, data: any) {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, data);
  }

  patch<T>(endpoint: string, data?: any) {
    return this.http.patch<T>(`${this.baseUrl}${endpoint}`, data || {});
  }

  delete<T>(endpoint: string) {
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`);
  }

  getAgencies() {
    return this.get<any[]>('/agencies');
  }

  createAgency(agency: any) {
    return this.post<any>('/agencies', agency);
  }

  updateAgency(id: number, agency: any) {
    return this.put<any>(`/agencies/${id}`, agency);
  }

  deleteAgency(id: number) {
    return this.delete<void>(`/agencies/${id}`);
  }

  getVehicles(params?: any) {
    return this.get<any[]>('/vehicles', params);
  }

  createVehicle(vehicle: any) {
    return this.post<any>('/vehicles', vehicle);
  }

  updateVehicle(id: number, vehicle: any) {
    return this.put<any>(`/vehicles/${id}`, vehicle);
  }

  deleteVehicle(id: number) {
    return this.delete<void>(`/vehicles/${id}`);
  }

  getRentals() {
    return this.get<any[]>('/rentals');
  }

  createRental(rental: any) {
    return this.post<any>('/rentals', rental);
  }

  finishRental(id: number) {
    return this.patch<any>(`/rentals/${id}/finish`);
  }

  cancelRental(id: number) {
    return this.patch<any>(`/rentals/${id}/cancel`);
  }

  getStats() {
    return this.get<any>('/dashboard/stats');
  }

  private buildParams(params?: any): HttpParams {
    let httpParams = new HttpParams();

    if (!params) {
      return httpParams;
    }

    Object.keys(params).forEach(key => {
      const value = params[key];

      if (value !== null && value !== undefined && value !== '') {
        httpParams = httpParams.set(key, value);
      }
    });

    return httpParams;
  }
}