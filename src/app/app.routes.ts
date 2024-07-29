import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { FindBookingsComponent } from './find-bookings/find-bookings.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AddCarComponent } from './add-car/add-car.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'car/:id', component: CarDetailsComponent },
  { path: 'find-bookings', component: FindBookingsComponent },
  { path: 'rental-bookings', component: BookingsComponent },
  {path:'add-car',component:AddCarComponent},
  { path: '**', component: NotfoundComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
