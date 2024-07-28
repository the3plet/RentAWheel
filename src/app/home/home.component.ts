import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Car } from '../../models/type';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  homeApi = inject(ApiService);
  route = inject(Router);
  sharedService = inject(SharedService);

  cars!: Car[];

  ngOnInit(): void {
    this.homeApi.getCars().subscribe({
      next: (res) => {
        this.cars = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getCarDetails(item: Car) {
    this.sharedService.storeCarDetails(item);
    console.log('clicked');
    this.route.navigate(['/car', item.carId]);
  }
}
