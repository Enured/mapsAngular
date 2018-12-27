import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
//Rutas
import { APP_ROUTING } from './app.routes';
//credenciales
import { environment } from '../environments/environment';
@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase, "pruebas-cargamos"),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDaIwOMyM_ktCpJxJFQMD_ORmVtI9ycgoU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
