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
        // Unidad de Digitalización
        this.unidadDigitalizacionTitle = data.unidadDigitalizacionTitle;
        this.unidadDigitalizacionParagraphs = [
          data.unidadDigitalizacionParagraph1,
          data.unidadDigitalizacionParagraph2,
          data.unidadDigitalizacionParagraph3,
          data.unidadDigitalizacionParagraph4,
          data.unidadDigitalizacionParagraph5
        ].filter(Boolean);

        // Proyectos
        this.proyectosTitle = data.proyectosTitle;
        this.proyectoText = [
          {
            title: data.proyecto1_title,
            location: data.proyecto1_location,
            solution: data.proyecto1_solution,
            impact: data.proyecto1_impact,
            image: data.proyecto1_image
          },
          {
            title: data.proyecto2_title,
            location: data.proyecto2_location,
            solution: data.proyecto2_solution,
            impact: data.proyecto2_impact,
            image: data.proyecto2_image
          },
          {
            title: data.proyecto3_title,
            location: data.proyecto3_location,
            solution: data.proyecto3_solution,
            impact: data.proyecto3_impact,
            image: data.proyecto3_image
          },
          {
            title: data.proyecto4_title,
            location: data.proyecto4_location,
            solution: data.proyecto4_solution,
            impact: data.proyecto4_impact,
            image: data.proyecto4_image
          },
          {
            title: data.proyecto5_title,
            location: data.proyecto5_location,
            solution: data.proyecto5_solution,
            impact: data.proyecto5_impact,
            image: data.proyecto5_image
          }
        ].filter(p => p.title || p.location || p.solution || p.impact || p.image);

        // Logros (estructura anterior para mantener el HTML sin cambios)
        this.logrosData = {
          title: data.logrosTitle,
          intro: data.logrosIntro,
          items: [
            data.logro_item_1,
            data.logro_item_2,
            data.logro_item_3,
            data.logro_item_4,
            data.logro_item_5
          ].filter(Boolean),
          conclusion: data.logrosConclusion
        };

        // Transformamos
        this.transformamosTitle = data.transformamosTitle;
        this.transformamosParagraph = data.transformamosParagraph;
      },
      error: (error) => {
        console.error('Error fetching digitalization data', error);
      }
    });
  }
}
