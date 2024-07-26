import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarsResponse } from '../../models/type';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  getCars(){
    return this.http.get<CarsResponse>('/api/CarRentalApp/GetCars')
  }
}
