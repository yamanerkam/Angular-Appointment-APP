import { Injectable } from '@angular/core';
import { DocumentData, DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, getDocs, orderBy, query, updateDoc } from '@angular/fire/firestore';
// it helps us to to inject the services and  
// provideIn  tells us where the service is accessible in the application
// it is root cus to make the service globally available.
@Injectable({
  providedIn: 'root'
})
export class CrudFirebaseService {
  errorMessage = ''
  constructor(public firestore: Firestore) { }

  sayHello() {
    console.log('Hello from MyService!');
  }
  // crud operations

  async addAppointment(customername: string, title: string, date: string, time: string) {
    this.errorMessage = ''
    if (!customername || !title || !date || !time) {
      this.errorMessage = 'Please fill all the fields!'
      return
    }
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

    } catch (err: any) {
      console.log(err.message)
      // add here errorMessageUpdate
    }
  }

  async getAllAppointments() {
    return (
      await getDocs(query(collection(this.firestore, 'appo')))).docs.map((appos) => appos.data())
  }




  updateAppointment() {

  }

  async deleteAppointment(docId: string) {
    try {
      const docRef = doc(this.firestore, 'appo', docId);
      await deleteDoc(docRef);
      console.log("Document deleted with ID: ", docId);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }
}







