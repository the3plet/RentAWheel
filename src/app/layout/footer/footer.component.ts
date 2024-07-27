import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  qoutes: string = 'Sometimes the best therapy is to go for a long drive';
  maker: string = '#PoweredByTeamRentACar';
}
