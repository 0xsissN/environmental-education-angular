import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() =>
      initializeApp({
        apiKey: environment.apiKey,
        authDomain: environment.authDomain,
        projectId: environment.projectId,
        storageBucket: environment.storageBucket,
        messagingSenderId: environment.messagingSenderId,
        appId: environment.appId      
      })
    ), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
