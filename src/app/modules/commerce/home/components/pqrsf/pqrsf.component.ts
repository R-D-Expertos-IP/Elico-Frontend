import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pqrsf',
  templateUrl: './pqrsf.component.html',
  styleUrls: ['./pqrsf.component.css'],
})
export class PqrsfComponent implements OnInit {
  pqrsText = 'PQRSF';
  contactForm!: FormGroup;

  // Array de campos para renderizar dinámicamente
  formFields = [
    {
      name: 'firstName',
      label: 'Nombre',
      icon: 'fa-user',
      type: 'text',
      required: true,
      col: '6',
    },
    {
      name: 'lastName',
      label: 'Apellidos',
      icon: 'fa-user',
      type: 'text',
      required: true,
      col: '6',
    },
    {
      name: 'documentType',
      label: 'Tipo de Identificación',
      icon: 'fa-id-card',
      type: 'select',
      options: [
        { value: '', text: 'Seleccione una opción' },
        { value: 'CC', text: 'Cédula de ciudadanía' },
        { value: 'CE', text: 'Cédula de extranjería' },
        { value: 'NIT', text: 'NIT' },
        { value: 'Pasaporte', text: 'Pasaporte' },
      ],
      required: true,
      col: '6',
    },
    {
      name: 'documentNumber',
      label: 'Número de Identificación',
      icon: 'fa-hashtag',
      type: 'text',
      required: true,
      col: '6',
    },
    {
      name: 'company',
      label: 'Empresa',
      icon: 'fa-building',
      type: 'text',
      required: false,
      col: '6',
    },
    {
      name: 'position',
      label: 'Cargo',
      icon: 'fa-briefcase',
      type: 'text',
      required: false,
      col: '6',
    },
    {
      name: 'phone',
      label: 'Celular',
      icon: 'fa-phone',
      type: 'text',
      required: true,
      col: '6',
    },
    {
      name: 'interestArea',
      label: 'Área de Interés',
      icon: 'fa-layer-group',
      type: 'text',
      required: true,
      col: '6',
    },
    {
      name: 'email',
      label: 'Correo Electrónico',
      icon: 'fa-envelope',
      type: 'email',
      required: true,
      col: '12',
    },
    {
      name: 'reasonVisit',
      label: '¿Por qué nos visita?',
      icon: 'fa-comment-dots',
      type: 'textarea',
      required: true,
      col: '12',
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({});
    this.formFields.forEach(field => {
      const validators = field.required
        ? (field.type === 'email'
            ? [Validators.required, Validators.email]
            : [Validators.required])
        : [];
      this.contactForm.addControl(field.name, this.fb.control('', validators));
    });

    this.contactForm.addControl('accept', this.fb.control(null, Validators.required));
  }

  chunkFields(fields: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < fields.length; i += size) {
      result.push(fields.slice(i, i + size));
    }
    return result;
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
