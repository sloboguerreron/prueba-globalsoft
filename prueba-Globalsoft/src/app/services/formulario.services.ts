import { async } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { resolve } from 'dns';
import { rejects } from 'assert';

export interface Formulario {
  id: string,
  email: string,
  nombre: string,
  numeroCel: number,
  mensaje?: string
}

@Injectable()
export class FormularioService {

  contacts: Observable<any>;
  private contactsCollection: AngularFirestoreCollection<any>


  constructor(private readonly afs: AngularFirestore) {
    this.contactsCollection = afs.collection<any>('contacto')
  }

  async onSaveContact (contactForm: any):Promise<void> {
    return new Promise(async (resolve, rejects) => {
      try {
        const id = this.afs.createId();
        const data = {id, ...contactForm};
        const result = this.contactsCollection.doc(id).set(data);
        resolve(result)
      } catch (error){
        rejects(error.message);
      }
    })

  }
}
