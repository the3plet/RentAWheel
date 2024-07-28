import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingResponse, CarsResponse } from '../../models/type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getCars(){
    return this.http.get<CarsResponse>('/api/CarRentalApp/GetCars')
  }
  // getBookings(){
  //   return RouterTestingHarness.http.get
  // }
  getBookings(){
    return this.http.get<BookingResponse>('/api/CarRentalApp/geAllBookings')
  }
}
