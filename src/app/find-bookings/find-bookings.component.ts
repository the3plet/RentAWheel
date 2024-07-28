import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Booking } from '../../models/type';
import { BookingTicketComponent } from '../components/booking-ticket/booking-ticket.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-bookings',
  standalone: true,
  imports: [FormsModule, BookingTicketComponent, CommonModule],
  templateUrl: './find-bookings.component.html',
  styleUrl: './find-bookings.component.scss',
})
export class FindBookingsComponent implements OnInit {
  http = inject(ApiService);

  inputText: string = '';
  bookings: Booking[] = [];
  filteredBookingData: Booking | undefined;
  openModel: boolean = false;
  img = '/images/booking-cover-image.jpg';

  ngOnInit(): void {
    this.http.getBookings().subscribe({
      next: (res) => {
        this.bookings = res.data;
        console.log(this.bookings);
      },
    });
  }

  filterBooking(): void {
    this.filteredBookingData = this.bookings.find((data) => {
      return data.mobileNo === this.inputText;
    });
    if (!this.filteredBookingData) {
      alert(`Unfortunately there are no bookings with ${this.inputText}`);
    } else this.openModel = !this.openModel;
    console.log(this.filteredBookingData);
    this.inputText = '';
  }

  handleModelStateChange(updatedState: boolean) {
    this.openModel = updatedState;
  }
}
