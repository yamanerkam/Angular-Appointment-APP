import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { DocumentData, DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, orderBy, query, updateDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Appointment-Application';

}
