import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BookingResponse,
  CarsResponse,
  CreateBooking,
} from '../../models/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getCars() {
    return this.http.get<CarsResponse>('/api/GetCars');
  }

  getBookings() {
    return this.http.get<BookingResponse>('/api/geAllBookings');
  }

  createBooking<T>(body: CreateBooking): Observable<T> {
    return this.http.post<T>('/api/CreateNewBooking', body) as Observable<T>;
  }
}
