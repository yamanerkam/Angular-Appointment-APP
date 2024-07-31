import { Component } from '@angular/core';
import { Appointment } from '../../shared/models/appoinment';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ToolsService } from '../../services/tools.service';
import { CalendarModule } from 'primeng/calendar';
import { CrudFirebaseService } from '../../services/crud-firebase.service';
@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive, InputTextModule, CalendarModule, FloatLabelModule, CardModule, CommonModule, TableModule, ButtonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  appointments: any[] = [];




  constructor(private _tools: ToolsService, private crud: CrudFirebaseService) {
    this.getData()
  }

  async getData() {
    this.appointments = await this.crud.getAllAppointments();
    console.log(this.appointments);
  }


  // try to make this function usable everywhere
  /* navigate(path: string) {
     this._router.navigate([path])
   } */

  // i managed to do it. now i have a function that works from a service
  // this function is now injectiable to anywhere

  navigate(path: string) {
    this._tools.navigate(path)
  }

  dateCreator(): string[] {
    const date: Date = new Date()

    const year: string = date.getFullYear().toString();
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const day: string = date.getDate().toString().padStart(2, '0');

    const finalDate: string = `${day}/${month}/${year}`

    const hour = date.getHours().toString().padStart(2, '0')
    const minute = date.getMinutes().toString().padStart(2, '0')
    const finalTime = `${hour}:${minute}`
    return [finalDate, finalTime]
  }


}
