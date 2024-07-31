import { Injectable } from '@angular/core';
import { DocumentData, DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, orderBy, query, updateDoc } from '@angular/fire/firestore';
// it helps us to to inject the services and  
// provideIn  tells us where the service is accessible in the application
// it is root cus to make the service globally available.
@Injectable({
  providedIn: 'root'
})
export class CrudFirebaseService {
  constructor(public firestore: Firestore) { }

  sayHello() {
    console.log('Hello from MyService!');
  }
  // crud operations

  async addAppointment(customername: string, title: string, date: string, time: string) {

    try {
      const docRef = await addDoc(collection(this.firestore, 'appo'), {
        customername: customername,
        title: title,
        date: date,
        time: time,
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      await updateDoc(docRef, {
        _id: docRef.id
      });

    } catch (err) {
      console.log(err)
    }

  }




  getAllAppointments() {

  }

  updateAppointment() {

  }

  deleteAppointment() {

  }






}
