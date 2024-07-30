import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Appointment } from '../shared/models/appoinment';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTextModule, CalendarModule, FloatLabelModule, CardModule, CommonModule, TableModule, ButtonModule],
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

  dateTime: Date;

  constructor() {
    this.dateTime = new Date();
  }
}
