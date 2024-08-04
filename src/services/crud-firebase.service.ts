import { Injectable } from '@angular/core';
import { DocumentData, DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, getDocs, orderBy, query, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { ToolsService } from './tools.service';
import { Observable } from 'rxjs';


// it helps us to to inject the services and  
// provideIn  tells us where the service is accessible in the application
// it is root cus to make the service globally available.
@Injectable({
  providedIn: 'root'
})
export class CrudFirebaseService {
  errorMessage = ''
  collectionName = 'appointmentsNew22'
  constructor(public firestore: Firestore, public tools: ToolsService) { }

  // crud operations

  async addAppointment(customername: string, title: string, date: Date, time: Date) {
    console.log('working addCrud')
    this.errorMessage = ''
    // fix the date issue
    if (!customername || !title) {
      this.errorMessage = 'Please fill all the fields!'
      console.log('you dumb')
      return
    }
    try {
      console.log('working addCrud try')

      const convertedDateAndTime = this.tools.dateCreator(date, time)
      const docRef = await addDoc(collection(this.firestore, this.collectionName), {
        customername: customername,
        title: title,
        date: convertedDateAndTime[0],
        time: convertedDateAndTime[1],
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      await updateDoc(docRef, {
        _id: docRef.id,
      });

    } catch (err: any) {
      console.log(err.message)
      this.errorMessage = 'the appointment is not set!'
    } finally {
      this.tools.navigate('/')
    }
  }

  getAllAppointments(): Observable<any[]> {
    return new Observable((observer) => {

      const querySnapshot = query(collection(this.firestore, this.collectionName));

      const unsubscribe = onSnapshot(querySnapshot, (snapshot) => {
        const updatedAppointments: any[] = [];
        snapshot.forEach((doc) => {
          updatedAppointments.push({ id: doc.id, ...doc.data() });
        });
        console.log('Current appointments: ', updatedAppointments);
        observer.next(updatedAppointments);
      }, (error) => {
        observer.error(error);
      });

      return { unsubscribe };
    });
  }

  async getAppointmentById(id: string) {

    try {
      const docRef = doc(this.firestore, this.collectionName, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const appointmentData = docSnap.data();
        console.log("Document data:", appointmentData);
        return appointmentData;
      } else {
        console.log("No such document!");
        this.errorMessage = 'No appointment found with this ID!';
        console.log(this.errorMessage)
        return
      }
    } catch (err: any) {
      console.log(err.message);
      this.errorMessage = err.message;
      return
    }
  }

  async updateAppointment(id: string, customername: string, title: string, date: Date, time: Date) {
    // fix the date issue
    if (!customername || !title) {
      this.errorMessage = 'Please fill all the fields!';
      console.log(this.errorMessage)
      return;
    }
    const convertedDateAndTime = this.tools.dateCreator(date, time)


    const docRef = doc(this.firestore, this.collectionName, id);
    await updateDoc(docRef, {
      customername: customername,
      title: title,
      date: convertedDateAndTime[0],
      time: convertedDateAndTime[1],
      updatedAt: new Date()
    });
    this.tools.navigate('/')

  }

  async deleteAppointment(docId: string) {
    try {
      const docRef = doc(this.firestore, this.collectionName, docId);
      await deleteDoc(docRef);
      console.log("Document deleted with ID: ", docId);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }
}







