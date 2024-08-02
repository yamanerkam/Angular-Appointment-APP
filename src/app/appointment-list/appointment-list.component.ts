import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { ToolsService } from '../../services/tools.service';
import { CrudFirebaseService } from '../../services/crud-firebase.service';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive, InputTextModule, CalendarModule, FloatLabelModule, CardModule, CommonModule, TableModule, ButtonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})

export class AppointmentListComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription;
  appointments: any[] = [];


  constructor(private tools: ToolsService, private crud: CrudFirebaseService) {
  }

  ngOnInit() {
    this.subscription = this.crud.getAllAppointments().subscribe(
      (appointments) => {
        this.appointments = appointments;
      },
      (error) => {
        console.error('Error fetching appointments: ', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  del(id: string) {
    this.crud.deleteAppointment(id)
  }



  // try to make this function usable everywhere
  /* navigate(path: string) {
     this._router.navigate([path])
   } */

  // i managed to do it. now i have a function that works from a service
  // this function is now injectiable to anywhere

  navigate(path: string) {
    this.tools.navigate(path)
  }




}
