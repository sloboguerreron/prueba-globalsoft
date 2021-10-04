import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSave(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);

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
