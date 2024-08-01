import { Injectable } from '@angular/core';
import { DocumentData, DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, getDocs, orderBy, query, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { ToolsService } from './tools.service';

// it helps us to to inject the services and  
// provideIn  tells us where the service is accessible in the application
// it is root cus to make the service globally available.
@Injectable({
  providedIn: 'root'
})
export class CrudFirebaseService {
  errorMessage = ''
  collectionName = 'appointmentsNew'
  constructor(public firestore: Firestore, public tools: ToolsService) { }




  // crud operations

  async addAppointment(customername: string, title: string, date: Date, time: Date) {
    this.errorMessage = ''
    if (!customername || !title || !date || !time) {
      this.errorMessage = 'Please fill all the fields!'
      return
    }
    try {
      const docRef = await addDoc(collection(this.firestore, this.collectionName), {
        customername: customername,
        title: title,
        date: date,
        time: time,
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      const convertedDateAndTime = this.tools.dateCreator(date, time)

      await updateDoc(docRef, {
        _id: docRef.id,
        date: convertedDateAndTime[0],
        time: convertedDateAndTime[1],
      });

    } catch (err: any) {
      console.log(err.message)
      this.errorMessage = 'the appointment is not set!'
    } finally {
      this.tools.navigate('/')
    }
  }

  async getAllAppointments() {
    return (
      await getDocs(query(collection(this.firestore, this.collectionName)))).docs.map((appos) => appos.data()
      )
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







