import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { ToolsService } from '../../services/tools.service';
import { CrudFirebaseService } from '../../services/crud-firebase.service';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive, InputTextModule, CalendarModule, FloatLabelModule, CardModule, CommonModule, TableModule, ButtonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  appointments: any[] = [];
  // try to use the Appoinments class from the shared



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




}
