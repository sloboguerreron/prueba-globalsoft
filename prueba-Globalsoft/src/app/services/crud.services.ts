import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Crud {
  id: string,
  nombreTarea: string,
  area: string,
  fechaEntrega: string,
  latitud: string,
  longitud: string,
}

@Injectable()
export class CrudService {

  actividades: Observable<any>;
  private actividadesCollection: AngularFirestoreCollection<any>


  constructor(private readonly afs: AngularFirestore) {
    this.actividadesCollection = afs.collection<any>('tareas')
  }

  async onSaveContact (crudForm: any):Promise<void> {
    return new Promise(async (resolve, rejects) => {
      try {
        const id = this.afs.createId();
        const data = {id, ...crudForm};
        const result = this.actividadesCollection.doc(id).set(data);
        resolve(result)
      } catch (error){
        rejects(error.message);
      }
    })

  }
}
