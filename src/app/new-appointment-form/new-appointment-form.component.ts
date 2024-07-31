import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-new-appointment-form',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    FormsModule,
    CalendarModule,
    CommonModule
  ],

  templateUrl: './new-appointment-form.component.html',
  styleUrl: './new-appointment-form.component.css'
})
export class NewAppointmentFormComponent {
  customername = '';
  title = '';
  date = '';
  time = '';
  handleForm(event: any) {
    event.preventDefault()
    console.log(this.customername, this.title, this.date, this.time)
    this.customername = '';
    this.title = ''
  }
  /*
    changeDetect(event: any) {
      console.log(event)
    }
      */
}
