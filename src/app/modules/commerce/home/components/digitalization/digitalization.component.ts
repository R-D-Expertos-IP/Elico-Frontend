import { Component, OnInit } from '@angular/core';
import { DigitalizationService } from './services/digitalization.service';

@Component({
  selector: 'app-digitalization',
  templateUrl: './digitalization.component.html',
  styleUrls: ['./digitalization.component.css']
})
export class DigitizationComponent implements OnInit {

  unidadDigitalizacionTitle = '';
  unidadDigitalizacionParagraphs: string[] = [];
  proyectosTitle = '';
  proyectoText: any[] = [];
  logrosData = {
    title: '',
    intro: '',
    items: [] as string[],
    conclusion: ''
  };
  transformamosTitle = '';
  transformamosParagraph = '';

  constructor(private digitalizationService: DigitalizationService) {}

  ngOnInit(): void {
    this.digitalizationService.getDigitalization().subscribe({
      next: (data) => {
        this.unidadDigitalizacionTitle = data.unidadDigitalizacionTitle;
        this.unidadDigitalizacionParagraphs = data.unidadDigitalizacionParagraphs;
        this.proyectosTitle = data.proyectosTitle;
        this.proyectoText = data.proyectoText;
        this.logrosData = data.logrosData;
        this.transformamosTitle = data.transformamosTitle;
        this.transformamosParagraph = data.transformamosParagraph;
      },
      error: (error) => {
        console.error('Error fetching digitalization data', error);
      }
    });
  }
}
