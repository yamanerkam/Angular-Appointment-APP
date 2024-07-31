import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppointmentListComponent } from "./appointment-list/appointment-list.component";
import { CrudFirebaseService } from '../services/crud-firebase.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive, ButtonModule, AppointmentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Appointment-Application';


  constructor(private crud: CrudFirebaseService) { }
  sayHello() {
    this.crud.sayHello()
  }

}
