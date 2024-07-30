import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Appointment } from '../shared/models/appoinment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Appointment-Application';
  appointments = [
    new Appointment("Erkam Yaman", new Date(), "Hair"),
    new Appointment("Erkam Yaman", new Date(), "Nail"),
    new Appointment("Erkam Yaman", new Date(), "Shave")]
}
