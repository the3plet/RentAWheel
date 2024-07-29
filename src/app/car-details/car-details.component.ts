import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Car } from '../../models/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss',
})
export class CarDetailsComponent implements OnInit {

router = inject(Router)

  carInfo: Car | undefined;

  constructor(private sharedInfo: SharedService) {}

  ngOnInit(): void {
    this.carInfo = this.sharedInfo.getCarDetails();
    if (!this.carInfo) {
      console.log('shared data issue, data has not passed from home component');
    }
    console.log(this.carInfo);
  }
  handleBooking(){
    this.router.navigate(['rental-bookings'])

  }
}
