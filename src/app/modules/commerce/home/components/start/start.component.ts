import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StartService } from './services/start.service';

interface SolucionCard {
  frontIcon: string;
  title: string;
  backText: string;
  link: string;
}

interface CarruselSlide {
  img: string;
  alt?: string;
}

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  tituloPrincipal = '';
  descripcionPrincipal = '';
  tituloSoluciones = '';
  solucionesCards: SolucionCard[] = [];
  carrusel: CarruselSlide[] = [];

  constructor(
    private startService: StartService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.cargarInicioDesdeBD();
  }

  cargarInicioDesdeBD(): void {
    this.startService.getInicioData().subscribe({
      next: (res) => {
        this.tituloPrincipal = res.tituloPrincipal || '';
        this.descripcionPrincipal = res.descripcionPrincipal || '';
        this.tituloSoluciones = res.tituloSoluciones || '';

        this.solucionesCards = [
          {
            frontIcon: res.card1_frontIcon || '',
            title: res.card1_title || '',
            backText: res.card1_backText || '',
            link: res.card1_link || '',
          },
          {
            frontIcon: res.card2_frontIcon || '',
            title: res.card2_title || '',
            backText: res.card2_backText || '',
            link: res.card2_link || '',
          },
          {
            frontIcon: res.card3_frontIcon || '',
            title: res.card3_title || '',
            backText: res.card3_backText || '',
            link: res.card3_link || '',
          },
          {
            frontIcon: res.card4_frontIcon || '',
            title: res.card4_title || '',
            backText: res.card4_backText || '',
            link: res.card4_link || '',
          },
        ];

        try {
          this.carrusel = JSON.parse(res.carruselJson || '[]');
        } catch (e) {
          this.carrusel = [];
          console.error('Error al parsear carruselJson:', e);
        }
      },
      error: () => {
        this.toast.error('Error al cargar datos del inicio');
      },
    });
  }

  goToNosotros(): void {
    window.location.href = '/nosotros';
  }

  goToServicio(link: string): void {
    if (link) {
      window.location.href = link;
    }
  }
}
