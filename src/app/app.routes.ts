import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { BookingsComponent } from './bookings/bookings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: CarDetailsComponent },
  {path:'bookings',component:BookingsComponent}
];
