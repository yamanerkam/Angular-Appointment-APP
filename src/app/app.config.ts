import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimations(), provideFirebaseApp(() => initializeApp({"projectId":"angularappointmentapplication","appId":"1:1042427161552:web:d9ef13eb1bfed230fca7d5","storageBucket":"angularappointmentapplication.appspot.com","apiKey":"AIzaSyBV8hjJvy2d52F6asIW5kDIkeqJaQMObVQ","authDomain":"angularappointmentapplication.firebaseapp.com","messagingSenderId":"1042427161552","measurementId":"G-CRJNY4RZCW"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
