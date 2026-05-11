import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Agency,
  AgencyRequest,
  DashboardStats,
  Rental,
  RentalRequest,
  Vehicle,
  VehicleRequest,
  VehicleStatus,
  VehicleType
} from './models';
import { environment } from '../../../environments/environment';

export interface VehicleFilter {
  status?: VehicleStatus | '';
  type?: VehicleType | '';
  agencyId?: number | '';
  keyword?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly api = environment.apiBaseUrl;

  getStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.api}/dashboard/stats`);
  }

  getAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(`${this.api}/agencies`);
  }

  createAgency(payload: AgencyRequest): Observable<Agency> {
    return this.http.post<Agency>(`${this.api}/agencies`, payload);
  }

  updateAgency(id: number, payload: AgencyRequest): Observable<Agency> {
    return this.http.put<Agency>(`${this.api}/agencies/${id}`, payload);
  }

  deleteAgency(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/agencies/${id}`);
  }

  getVehicles(filter: VehicleFilter = {}): Observable<Vehicle[]> {
    let params = new HttpParams();
    if (filter.status) params = params.set('status', filter.status);
    if (filter.type) params = params.set('type', filter.type);
    if (filter.agencyId) params = params.set('agencyId', filter.agencyId);
    if (filter.keyword) params = params.set('keyword', filter.keyword);
    return this.http.get<Vehicle[]>(`${this.api}/vehicles`, { params });
  }

  createVehicle(payload: VehicleRequest): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.api}/vehicles`, payload);
  }

  updateVehicle(id: number, payload: VehicleRequest): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${this.api}/vehicles/${id}`, payload);
  }

  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/vehicles/${id}`);
  }

  getRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(`${this.api}/rentals`);
  }

  createRental(payload: RentalRequest): Observable<Rental> {
    return this.http.post<Rental>(`${this.api}/rentals`, payload);
  }

  finishRental(id: number): Observable<Rental> {
    return this.http.patch<Rental>(`${this.api}/rentals/${id}/finish`, {});
  }

  cancelRental(id: number): Observable<Rental> {
    return this.http.patch<Rental>(`${this.api}/rentals/${id}/cancel`, {});
  }
}
