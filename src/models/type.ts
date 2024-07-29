export type Car = {
  carId: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  dailyRate: number;
  carImage: string;
  regNo: string;
};

export type CarsResponse = {
  message: string;
  result: boolean;
  data: Car[];
};

export type Booking = {
  bookingId: number;
  bookingDate: string;
  discount: number;
  totalBillAmount: number;
  customerName: string;
  mobileNo: string;
  brand: string;
  model: string;
  bookingUid: string;
};

export type CreateBooking = {
  CustomerName: string;
  CustomerCity: string;
  MobileNo: string;
  Email: string;
  CarId: number;
  BookingDate: string;
  Discount: number;
  TotalBillAmount: number;
};

export type BookingResponse = {
  message: string;
  result: boolean;
  data: Booking[];
};
