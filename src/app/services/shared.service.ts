import { Injectable } from '@angular/core';
import { Car } from '../../models/type';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  private car:Car|undefined;

  storeCarDetails(item: Car): void {
    this.car = item;
  }

  getCarDetails() {
    return this.car as Car;
  }
}
