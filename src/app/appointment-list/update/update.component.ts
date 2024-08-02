import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CrudFirebaseService } from '../../../services/crud-firebase.service';
import { ToolsService } from '../../../services/tools.service';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';

import { FloatLabelModule } from 'primeng/floatlabel';
@Component({
  selector: 'app-update',
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
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  appointmentId: string | null = null;
  minDate = new Date()
  customername = '';
  title = '';
  date: Date | null = null
  time: Date | null = null
  constructor(private crud: CrudFirebaseService, private tools: ToolsService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.appointmentId = this.route.snapshot.paramMap.get('id');
    if (this.appointmentId) {
      this.crud.getAppointmentById(this.appointmentId).then(appointment => {
        if (appointment) {
          this.title = appointment['title']
          this.customername = appointment['customername']

          const [day, month, year] = appointment['date'].split('/').map(Number);
          const dateObject = new Date(year, month - 1, day);

          const [hours, minutes] = appointment['time'].split(':').map(Number);
          dateObject.setHours(hours, minutes, 0, 0);
          appointment['time']

          this.date = dateObject
          this.time = dateObject


        }
      }).catch(error => {
        console.error('Error fetching appointment:', error);
      });
    }
  }



  errorMessage = ''

  async handleForm(event: any) {

    event.preventDefault()

    this.errorMessage = this.crud.errorMessage;

    this.customername = '';
    this.title = ''
  }
  navigate(path: string) {
    this.tools.navigate(path)
  }

}
