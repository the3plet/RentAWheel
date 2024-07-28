import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Booking } from '../../../models/type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-ticket.component.html',
  styleUrl: './booking-ticket.component.scss',
})
export class BookingTicketComponent {
  @Input() ticketData: Booking | undefined;
  @Output() modelStateChange = new EventEmitter<boolean>();
  modelState: boolean = true;
  closeModel() {
    this.modelState = false;
    this.modelStateChange.emit(this.modelState);
  }
}
