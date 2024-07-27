import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'car/:id', component: CarDetailsComponent },
  { path: 'bookings',component:BookingsComponent },
  { path: '**', component: NotfoundComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);