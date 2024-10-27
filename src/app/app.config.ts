import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyAWyobMe9sjDsNL3Ij-kZ6Sng76pKjzkMY",
        authDomain: "environmental-education-30f7b.firebaseapp.com",
        projectId: "environmental-education-30f7b",
        storageBucket: "environmental-education-30f7b.appspot.com",
        messagingSenderId: "706397050741",
        appId: "1:706397050741:web:295013dc19eed7e7b5a53c"      
      })
    ), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
