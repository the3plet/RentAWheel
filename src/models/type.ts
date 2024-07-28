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

// Define the interface for individual booking records
export type Booking = {
  bookingId: number;
  bookingDate: string; // ISO 8601 date format
  discount: number;
  totalBillAmount: number;
  customerName: string;
  mobileNo: string;
  brand: string;
  model: string;
  bookingUid: string;
};

// Define the type for the overall response structure
export type BookingResponse = {
  message: string;
  result: boolean;
  data: Booking[];
};
