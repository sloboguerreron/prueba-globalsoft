import { CrudService } from './../services/crud.services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  providers: [CrudService]
})
export class CrudComponent implements OnInit {

  crudForm: FormGroup;

  constructor(private fb: FormBuilder, private formSvc: CrudService) { }

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
