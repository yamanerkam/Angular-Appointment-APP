import { Routes } from '@angular/router';
import { NewAppointmentFormComponent } from '../app/new-appointment-form/new-appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { UpdateComponent } from './appointment-list/update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
    { path: '', component: AppointmentListComponent },
    { path: 'new', component: NewAppointmentFormComponent },
    { path: 'update/:id', component: UpdateComponent },
    { path: '**', component: NotFoundComponent }
];
