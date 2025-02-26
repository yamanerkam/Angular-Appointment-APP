import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrudFirebaseService } from '../../services/crud-firebase.service';
import { ToolsService } from '../../services/tools.service';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BehaviorSubject } from 'rxjs';


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

  errorDate = new BehaviorSubject<string>('');
  constructor(private crud: CrudFirebaseService, private tools: ToolsService) {

  }

  minDate = new Date()
  customername = '';
  title = '';
  date = '';
  time = '';

  errorMessage = ''

  async handleForm(event: any) {
    console.log('working form')
    event.preventDefault()
    if (this.date && this.time) {
      console.log('fired update')
      this.crud.addAppointment(this.customername, this.title, new Date(this.date), new Date(this.time))
      this.errorMessage = this.crud.errorMessage;

      this.customername = '';
      this.title = ''
      this.date = ''
      this.time = ''
    } else {
      console.log('update else')
      this.errorDate.next('Please fill all the fields!');
    }


  }

  navigate(path: string) {
    this.tools.navigate(path)
  }
  /*
    changeDetect(event: any) {
      console.log(event)
    }
      */
}
