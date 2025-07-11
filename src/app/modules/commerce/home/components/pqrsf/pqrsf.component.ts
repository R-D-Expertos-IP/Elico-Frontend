import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pqrsf',
  templateUrl: './pqrsf.component.html',
  styleUrls: ['./pqrsf.component.css'],
})
export class PqrsfComponent {
  pqrsText = 'PQRSF';
  contactText = 'PQRSF';
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      company: [''], // Opcional
      position: [''], // Opcional
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      interestArea: ['', Validators.required],
      reasonVisit: ['', Validators.required],
      accept: [null, Validators.required],
      cv: [null], // Puede o no ser obligatorio según tu lógica
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.contactForm.patchValue({
        cv: file,
      });
    }
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    console.log('Formulario enviado:', this.contactForm.value);
  }

  onRadioClick(option: string): void {
    const currentValue = this.contactForm.get('accept')?.value;
    if (currentValue === option) {
      this.contactForm.get('accept')?.setValue(null);
    } else {
      this.contactForm.get('accept')?.setValue(option);
    }
  }
}
