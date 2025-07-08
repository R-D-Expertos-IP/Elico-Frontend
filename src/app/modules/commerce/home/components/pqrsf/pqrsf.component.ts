import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
  
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pqrsf',
  templateUrl: './pqrsf.component.html',
  styleUrls: ['./pqrsf.component.css'],
})
export class PqrsfComponent {
  pqrsText = "PQRSF";
  contactForm!: FormGroup;
    contactText = 'PQRSF';
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        company: ['', Validators.required],
        position: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        interestArea: ['', Validators.required],
        reasonVisit: ['', Validators.required],
        cv: [null, Validators.required],
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
  }
  
