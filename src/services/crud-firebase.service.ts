import { Injectable } from '@angular/core';
import { DocumentData, DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, orderBy, query, updateDoc } from '@angular/fire/firestore';
// it helps us to to inject the services and  
// provideIn  tells us where the service is accessible in the application
// it is root cus to make the service globally available.
@Injectable({
  providedIn: 'root'
})
export class CrudFirebaseService {
  constructor() { }

  sayHello() {
    console.log('Hello from MyService!');
  }
}
