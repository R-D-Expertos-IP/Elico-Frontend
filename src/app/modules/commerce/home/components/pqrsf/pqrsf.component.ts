import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PqrsfService } from './services/pqrsf.service';

@Component({
  selector: 'app-pqrsf',
  templateUrl: './pqrsf.component.html',
  styleUrls: ['./pqrsf.component.css'],
})
export class PqrsfComponent implements OnInit {
  pqrsText = '';
  contactForm!: FormGroup;
  formFields: any[] = [];

  constructor(private fb: FormBuilder, private pqrsfService: PqrsfService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({});

    this.pqrsfService.getFormConfig().subscribe({
      next: (config) => {
        this.pqrsText = config.titulo_pqrsf;
        this.formFields = config.campos_pqrsf;

        this.formFields.forEach(field => {
          const validators = field.required
            ? (field.type === 'email'
                ? [Validators.required, Validators.email]
                : [Validators.required])
            : [];
          this.contactForm.addControl(field.name, this.fb.control('', validators));
        });

        this.contactForm.addControl('accept', this.fb.control(null, Validators.required));
      },
      error: (err) => {
        console.error('Error al cargar PQRSF:', err);
      }
    });
  }

  chunkFields(fields: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < fields.length; i += size) {
      result.push(fields.slice(i, i + size));
    }
    return result;
  }

  onRadioClick(option: string): void {
    const currentValue = this.contactForm.get('accept')?.value;
    if (currentValue === option) {
      this.contactForm.get('accept')?.setValue(null);
    } else {
      this.contactForm.get('accept')?.setValue(option);
    }
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    console.log('Formulario PQRSF enviado:', this.contactForm.value);
  }
}
