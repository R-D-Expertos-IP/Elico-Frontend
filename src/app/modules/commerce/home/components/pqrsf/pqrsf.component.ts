import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PqrsfService } from './services/pqrsf.service';

@Component({
  selector: 'app-pqrsf',
  templateUrl: './pqrsf.component.html'
})
export class PqrsfComponent implements OnInit {
  form!: FormGroup;
  campos: any[] = [];

  constructor(private fb: FormBuilder, private pqrsfService: PqrsfService) {}

  ngOnInit(): void {
    this.pqrsfService.getCampos().subscribe({
      next: (data) => {
        this.campos = data;
        this.crearFormulario();
      },
      error: (err) => {
        console.error('Error al cargar campos:', err);
      }
    });
  }

  crearFormulario(): void {
    const group: any = {};

    this.campos.forEach((campo) => {
      group[campo.name] = campo.required
        ? [null, Validators.required]
        : [null];
    });

    group['accept'] = [null, Validators.required];
    this.form = this.fb.group(group);
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Datos enviados:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  chunkFields(fields: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < fields.length; i += chunkSize) {
      chunks.push(fields.slice(i, i + chunkSize));
    }
    return chunks;
  }

  onRadioClick(value: string): void {
    this.form.get('accept')?.setValue(value);
    this.form.get('accept')?.markAsTouched();
  }
}
