import { ChatComponent } from './chat/chat.component';
import { MapaComponent } from './mapa/mapa.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CrudComponent } from './crud/crud.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Galeria', component: GaleriaComponent},
  { path: 'Crud', component: CrudComponent},
  { path: 'Formulario', component: FormularioComponent},
  { path: 'Mapa', component: MapaComponent},
  { path: 'Chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
