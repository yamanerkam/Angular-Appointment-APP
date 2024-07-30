import { Component } from '@angular/core';
import { Appointment } from '../../shared/models/appoinment';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { CalendarModule } from 'primeng/calendar';
@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive, InputTextModule, CalendarModule, FloatLabelModule, CardModule, CommonModule, TableModule, ButtonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
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
