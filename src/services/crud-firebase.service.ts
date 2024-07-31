import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentData, DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, orderBy, query, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudFirebaseService {
  constructor() { }

  sayHello() {
    console.log('Hello from MyService!');
  }
}
