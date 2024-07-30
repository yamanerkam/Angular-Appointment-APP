import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-appointment-form',
  standalone: true,
  imports: [FloatLabelModule, CardModule, FormsModule],
  templateUrl: './new-appointment-form.component.html',
  styleUrl: './new-appointment-form.component.css'
})
export class NewAppointmentFormComponent {
  customername = '';
  title = '';
  handleForm(event: any) {
    event.preventDefault()
    console.log(this.customername, this.title)
    this.customername = '';
    this.title = ''

  }
}
