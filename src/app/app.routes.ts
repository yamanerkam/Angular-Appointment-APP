import { Routes } from '@angular/router';
import { NewAppointmentFormComponent } from '../app/new-appointment-form/new-appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
export const routes: Routes = [
    { path: '', component: AppointmentListComponent },
    { path: 'new', component: NewAppointmentFormComponent },
];
