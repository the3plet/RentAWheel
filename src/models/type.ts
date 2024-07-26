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