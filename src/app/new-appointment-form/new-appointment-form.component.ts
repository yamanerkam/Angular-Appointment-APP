import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudFirebaseService } from '../../services/crud-firebase.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';


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
    CommonModule,
    MessagesModule
  ],

  templateUrl: './new-appointment-form.component.html',
  styleUrl: './new-appointment-form.component.css'
})
export class NewAppointmentFormComponent {
  constructor(private crud: CrudFirebaseService) {

  }
  customername = '';
  title = '';
  date = '';
  time = '';
  errorMessage = ''

  async handleForm(event: any) {

    this.crud.deleteAppointment('6MM8o9t2FJxOZHfGXrDF')
    event.preventDefault()
    console.log(this.customername, this.title, this.date, this.time)
    this.crud.addAppointment(this.customername, this.title, this.date, this.time)
    this.errorMessage = this.crud.errorMessage;
    console.log(this.errorMessage, this.crud.errorMessage)

    this.customername = '';
    this.title = ''
    this.date = ''
    this.time = ''
  }
  /*
    changeDetect(event: any) {
      console.log(event)
    }
      */
}
