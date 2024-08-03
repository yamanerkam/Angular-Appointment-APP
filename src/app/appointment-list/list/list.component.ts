import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { ToolsService } from '../../../services/tools.service';
import { CrudFirebaseService } from '../../../services/crud-firebase.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardModule, TableModule, ButtonModule, CommonModule, ProgressSpinnerModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private crud: CrudFirebaseService, private tools: ToolsService) {
  }
  @Input() appointments: any[] = [];

  del(id: string) {
    this.crud.deleteAppointment(id)
  }
  navigate(id: string) {
    console.log(id)
    this.tools.navigate(`/update/${id}`);
  }


}
