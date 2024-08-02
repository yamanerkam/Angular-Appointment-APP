import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

import { CrudFirebaseService } from '../../../services/crud-firebase.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardModule, TableModule, ButtonModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private crud: CrudFirebaseService) {

  }
  @Input() appointments: any[] = [];

  del(id: string) {
    this.crud.deleteAppointment(id)
  }

  update(id: string) {
    this.crud.getAppointmentById(id)
  }
}
