import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnInit {
  Math = Math;

  activeIndex = 0;

  contenido: any;
  beneficios: any;
  serviciosCards: any[];
  proyectosDestacados: any;
  bloqueTitulo: string;
  bloqueTexto: string;
  bloqueImagen: string;
  images: any[];
  marcas: any[];
  logrosData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  this.http.get<any>('http://localhost:3000/elico-backend/energia/1').subscribe({
    next: (data) => {
      console.log('✅ Data recibida:', data);

      this.contenido = {
        titulo: data.contenido_titulo,
        parrafos: data.contenido_parrafos,
        botonTexto: data.contenido_boton_texto,
        botonUrl: data.contenido_boton_url
      };

      this.beneficios = {
        titulo: data.beneficios_titulo,
        items: data.beneficios_items
      };

      this.serviciosCards = data.servicios_cards;

      this.proyectosDestacados = {
        titulo: data.proyectos_destacados_titulo,
        items: data.proyectos_destacados_items
      };

      this.bloqueTitulo = data.bloque_titulo;
      this.bloqueTexto = data.bloque_texto;
      this.bloqueImagen = data.bloque_imagen;

      this.images = data.images;
      this.marcas = data.marcas;

      this.logrosData = {
        title: data.logros_titulo,
        intro: data.logros_intro,
        items: data.logros_items,
        conclusion: data.logros_conclusion
      };
    },
    error: (error) => {
      console.error('❌ Error al cargar datos:', error);
    }
  });
}


  @HostListener('window:scroll', [])
  onScroll(): void {
    const elements = document.querySelectorAll('.timeline-item');

    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        this.serviciosCards[index].visible = true;
      }
    });
  }

  onSlide(event: any) {
    this.activeIndex = event.to;
  }
}
