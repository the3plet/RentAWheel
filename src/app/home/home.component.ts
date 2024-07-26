import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Car } from '../../models/type';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
homeApi = inject(HomeService)
route =inject(Router)

cars! :Car[]

ngOnInit(): void {
  this.homeApi.getCars().subscribe({
    next:(res)=>{
      this.cars=res.data
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
navigate(){
  
}
}
