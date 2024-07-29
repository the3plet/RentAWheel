import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Car } from '../../models/type';
import { SharedService } from '../services/shared.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss',
})
export class BookingsComponent implements OnInit {
  api = inject(ApiService);
  sharedData = inject(SharedService);
  router = inject(Router);

  bookingForm: FormGroup;
  carDetails: Car | undefined;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      CustomerName: ['', Validators.required],
      City: ['', Validators.required],
      MobileNo: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
        ],
      ],
      Email: ['', [Validators.required, Validators.email]],
      BookingDate: ['', Validators.required],
      CarId: null,
      Discount: 20,
      TotalBillAmount: null,
    });
  }

  ngOnInit(): void {
    this.carDetails = this.sharedData.getCarDetails();
    console.log(this.carDetails);

    if (this.carDetails) {
      this.bookingForm.patchValue({
        CarId: this.carDetails.carId,
        TotalBillAmount: this.carDetails.dailyRate,
      });
    } else {
      alert('Selected car details cannot be applied to this booking.');
    }
  }

  onSubmit() {
    this.api.createBooking(this.bookingForm.value).subscribe({
      next: (res) => {
        alert(
          'Your Booking is successfull, Our representative will contact you shortly.'
        );
        this,this.bookingForm.reset
        setTimeout(()=>{
          this.router.navigate([""])
        },4000)
      },
      error: (err) => {
        console.log(err);
      },
    });
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
