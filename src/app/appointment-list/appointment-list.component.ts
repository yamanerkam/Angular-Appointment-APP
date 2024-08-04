import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { BehaviorSubject } from 'rxjs';


import { ListComponent } from './list/list.component';

import { LoaderService } from '../../services/loader.service';
import { ToolsService } from '../../services/tools.service';
import { CrudFirebaseService } from '../../services/crud-firebase.service';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive, InputTextModule, ProgressSpinnerModule, CalendarModule, FloatLabelModule, CommonModule, ListComponent],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription;

  appointments: any[] = [];

  loader = new BehaviorSubject<boolean>(true);



  constructor(private tools: ToolsService, private crud: CrudFirebaseService) { }

  ngOnInit() {

    this.subscription = this.crud.getAllAppointments().subscribe(
      (appointments) => {
        this.appointments = appointments;
        this.loader.next(false)
      },
      (error) => {
        console.error('Error fetching appointments: ', error);
        this.loader.next(false)
      }


    );
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
