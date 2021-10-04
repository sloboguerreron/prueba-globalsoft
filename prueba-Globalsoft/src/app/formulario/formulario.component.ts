import { async } from '@angular/core/testing';
import { FormularioService } from './../services/formulario.services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [FormularioService]
})
export class FormularioComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private formSvc: FormularioService) { }

  ngOnInit(): void {
    this.initForm();
  }

 async onSave(): Promise<void> {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
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
    const validateField = this.contactForm.get(field);
    return (!validateField.valid && validateField.touched)
      ? "is-invalid" : validateField.touched ? "is-valid" : "";
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      numeroCel: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10), Validators.maxLength(10)]],
      mensaje: [],
    })
  }
}
