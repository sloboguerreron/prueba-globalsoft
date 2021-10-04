
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';

//componentes
import { GaleriaComponent } from './galeria/galeria.component';
import { CrudComponent } from './crud/crud.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MapaComponent } from './mapa/mapa.component';
import { ChatComponent } from './chat/chat.component';

//firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    CrudComponent,
    FormularioComponent,
    MapaComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSliderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
