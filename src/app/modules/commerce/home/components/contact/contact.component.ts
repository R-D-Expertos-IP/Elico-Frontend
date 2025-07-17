import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  contactText = '';
  formFields: any[] = [];

  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({});

    this.contactService.getFormConfig().subscribe({
      next: (config) => {
        this.contactText = config.titulo_contact;
        this.formFields = config.campos_contact;

        this.formFields.forEach(field => {
          const validators = field.required
            ? (field.type === 'email'
                ? [Validators.required, Validators.email]
                : [Validators.required])
            : [];
          this.contactForm.addControl(field.name, this.fb.control('', validators));
        });

        this.contactForm.addControl('cv', this.fb.control(null, Validators.required));
        this.contactForm.addControl('termsConditions', this.fb.control(false, Validators.requiredTrue));
        this.contactForm.addControl('receiveAds', this.fb.control(false));
      },
      error: (err) => {
        console.error('Error al cargar formulario:', err);
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

    console.log('Datos digitados (no se guardan en BD):', this.contactForm.value);
  }
}
