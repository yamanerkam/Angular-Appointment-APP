import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { CrudFirebaseService } from '../../../services/crud-firebase.service';
import { ToolsService } from '../../../services/tools.service';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
    MessagesModule,
    ProgressSpinnerModule
  ],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  errorMessage = '';
  errorDate = new BehaviorSubject<string>('');


  isError = new BehaviorSubject<boolean>(false);
  isDataReady = new BehaviorSubject<boolean>(false);

  appointmentId: string | null = null;
  minDate = new Date();
  customername = '';
  title = '';
  date: Date | null = null;
  time: Date | null = null;

  constructor(
    private crud: CrudFirebaseService,
    private tools: ToolsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.appointmentId = this.route.snapshot.paramMap.get('id');
    if (this.appointmentId) {
      this.crud.getAppointmentById(this.appointmentId).then(appointment => {
        if (appointment) {
          this.title = appointment['title'];
          this.customername = appointment['customername'];

          const [day, month, year] = appointment['date'].split('/').map(Number);
          const dateObject = new Date(year, month - 1, day);

          const [hours, minutes] = appointment['time'].split(':').map(Number);
          dateObject.setHours(hours, minutes, 0, 0);

          this.date = dateObject;
          this.time = dateObject;

          this.isDataReady.next(true);
        } else {

          this.isError.next(true);
          this.errorMessage = this.crud.errorMessage;
        }
      }).catch(error => {
        console.error('Error fetching appointment:', error);
        this.isError.next(true);
        this.errorMessage = 'Error fetching appointment';
      });
    }
  }

  async handleForm(event: any) {
    event.preventDefault();
    this.update();
    this.errorMessage = this.crud.errorMessage
    console.log('fired form')
  }

  navigate(path: string) {
    this.tools.navigate(path);
  }

  update() {
    if (this.appointmentId && this.date && this.time) {
      console.log('fired update')
      this.crud.updateAppointment(this.appointmentId, this.customername, this.title, this.date, this.time);
    } else {
      console.log('update else')
      this.errorDate.next('Please fill all the fields!');
    }
  }
}
