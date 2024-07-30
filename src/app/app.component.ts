import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Appointment } from '../shared/models/appoinment';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TableModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Appointment-Application';
  appointments: Appointment[] = [
    new Appointment("Erkam Yaman", new Date(), "Hair"),
    new Appointment("Erkam Yaman", new Date(), "Nail"),
    new Appointment("Erkam Yaman", new Date(), "Shave")
  ]
  handleClick() {
    console.log('clicked')
  }
}
