import { Component } from '@angular/core';
import { ToolsService } from '../../services/tools.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(private tools: ToolsService) {
  }
  navigate(id: string) {
    this.tools.navigate(id)
  }
}
