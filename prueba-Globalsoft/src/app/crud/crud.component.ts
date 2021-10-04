import { CrudService } from './../services/crud.services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tarea {
  id: string,
  nombreTarea: string,
  area: string,
  fechaEntrega: string,
  latitud: string,
  longitud: string,
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  providers: [CrudService]
})
export class CrudComponent implements OnInit {

  tareasCollection: AngularFirestoreCollection<Tarea>;
  crudForm: FormGroup;

  tareas: Observable<Tarea[]>;

  constructor(private fb: FormBuilder, private formSvc: CrudService, private afs: AngularFirestore) {
    this.tareasCollection = afs.collection<Tarea>('tareas');
    this.tareas = this.tareasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tarea;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  ngOnInit(): void {
    this.initForm();
  }



  async onSave(): Promise<void> {
    if (this.crudForm.valid) {
      const formValue = this.crudForm.value;
      await this.formSvc.onSaveContact(formValue);

      Swal.fire(
        'Formulario enviado!',
        'Revisa la base de Datos!',
        'success'
      )

    } else {
      console.log("no es valido");

    }
  }

  isValidField(field: string): string {
    const validateField = this.crudForm.get(field);
    return (!validateField.valid && validateField.touched)
      ? "is-invalid" : validateField.touched ? "is-valid" : "";
  }

  onDeleteTarea(id: string): void {
    const confirmacion = confirm('Esta seguro de eliminar la tarea');
    if (confirmacion) {
      this.formSvc.deleteTarea(id);
    }


  }

  private initForm(): void {
    this.crudForm = this.fb.group({
      nombreTarea: ['', [Validators.required]],
      area: ['', [Validators.required]],
      fechaEntrega: ['', [Validators.required]],
      latitud: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      longitud: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    })
  }

}
