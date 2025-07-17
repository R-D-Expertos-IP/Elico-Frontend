/* import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  fullTitle = 'Integrador de Sistemas en Automatización Industrial';
  fullDesc = 'Con más de 43 años de experiencia, brindamos soluciones industriales que combinan innovación, tecnología y conocimiento.';
  solucionesText = 'Soluciones';



  solucionesCards = [
    {
      frontIcon: 'fas fa-comments',
      frontBgClass: 'bg-consulting',
      title: 'Generalización',
      backText: 'Te brindamos apoyo estratégico personalizado para tus proyectos.',
      link: '/servicio-asesoria'
    },
    {
      frontIcon: 'fas fa-tools',
      frontBgClass: 'bg-maintenance',
      title: 'Energía',
      backText: 'Atendemos fallas técnicas y mantenimientos preventivos.',
      link: '/servicio-mantenimiento'
    },
    {
      frontIcon: 'fas fa-chalkboard-teacher',
      frontBgClass: 'bg-training',
      title: 'Automatización',
      backText: 'Cursos presenciales y virtuales en múltiples áreas técnicas.',
      link: '/servicio-capacitaciones'
    },
    {
      frontIcon: 'fas fa-search',
      frontBgClass: 'bg-audit',
      title: 'Digitalización',
      backText: 'Evaluamos y garantizamos el cumplimiento de normativas.',
      link: '/servicio-auditorias'
    }
  ];


  constructor(private router: Router) {}

  ngOnInit(): void {
   
  }

  revealText(text: string, delay: number, update: (val: string) => void, onFinish?: () => void) {
    let index = 0;
    let lastTime = 0;

    const step = (timestamp: number) => {
      if (!lastTime || timestamp - lastTime >= delay) {
        update(text.slice(0, index + 1));
        index++;
        lastTime = timestamp;
      }

      if (index < text.length) {
        requestAnimationFrame(step);
      } else if (onFinish) {
        onFinish();
      }
    };

    requestAnimationFrame(step);
  }

  goToNosotros(): void {
    this.router.navigate(['/nosotros']);
  }
}

 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartService } from './services/start.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  tituloPrincipal = '';
  descripcionPrincipal = '';
  tituloSoluciones = '';
  solucionesCards: any[] = [];

  constructor(
    private router: Router,
    private startService: StartService
  ) {}

  ngOnInit(): void {
    this.loadStartData();
  }

  loadStartData(): void {
    this.startService.getStartData().subscribe(data => {
      this.tituloPrincipal = data.tituloPrincipal;
      this.descripcionPrincipal = data.descripcionPrincipal;
      this.tituloSoluciones = data.tituloSoluciones;
      this.solucionesCards = data.solucionesCards;
    });
  }

  revealText(text: string, delay: number, update: (val: string) => void, onFinish?: () => void) {
    let index = 0;
    let lastTime = 0;

    const step = (timestamp: number) => {
      if (!lastTime || timestamp - lastTime >= delay) {
        update(text.slice(0, index + 1));
        index++;
        lastTime = timestamp;
      }

      if (index < text.length) {
        requestAnimationFrame(step);
      } else if (onFinish) {
        onFinish();
      }
    };

    requestAnimationFrame(step);
  }

  goToNosotros(): void {
    this.router.navigate(['/nosotros']);
  }
}
