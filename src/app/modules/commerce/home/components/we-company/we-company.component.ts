import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-we-company',
  templateUrl: './we-company.component.html',
  styleUrls: ['./we-company.component.css'],
})

export class WeCompanyComponent implements AfterViewInit {
  solucionesText = 'Nuestras habilidades y experiencia';
  historiaText = "Nuestra Historia";
  documentosText = "Documentos Tecnicos"

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  private barrasAnimadas = false;

    infocards = [
    {
      title: 'Misión',
      icon: 'fas fa-bullseye',
      points: [
        'Somos un aliado estratégico de nuestros clientes, contribuimos a su continuidad y competitividad con soluciones de ingeniería y servicios de valor agregado en Automatización e Industria 4.0, generando bienestar y confianza a nuestros grupos de interés.'
      ],
      visible: false,
    },
    {
      title: 'Visión',
      icon: 'fas fa-eye',
      points: [
        'En el 2025 seguiremos siendo un excelente lugar de trabajo, en constante evolución, reconocidos por nuestra calidad e innovación, referentes en el desarrollo de proyectos de Automatización y Digitalización, construyendo relaciones de largo alcance con nuestros grupos de interés.',
        'Seguiremos siendo un excelente lugar de trabajo, en constante evolución, reconocidos por nuestra calidad e innovación, referentes en el desarrollo de proyectos de Automatización e Industria 4.0, construyendo relaciones de largo alcance con nuestros grupos de interés.'
      ],
      visible: false,
    },
    {
      title: 'Valores',
      icon: 'fa-solid fa-thumbs-up',
      points: [
        'Elico Group se ha construido a partir de lo que ahora son valores corporativos, orientados a la calidad, responsabilidad e innovación como pilares básicos: Compromiso, Trabajo en equipo, Ética en los negocios - Honestidad, Innovación, Respeto, Calidad, Responsabilidad Social, Crecimiento personal y profesional.',
      ],
      visible: false,
    },
    {
      title: 'Política de gestión',
      icon: 'fas fa-cogs',
      points: [
        'En Elico Group, queremos ser un aliado estratégico de nuestros clientes, comprometidos con el desarrollo de soluciones de Ingeniería en Automatización y Digitalización, garantizando el cumplimiento de requisitos y de altos estándares de calidad, generando valor agregado, asegurando la satisfacción de las partes interesadas y el mejoramiento continuo de nuestros procesos.'
      ],
      visible: false,
    },
  ];

timelineData = [
  {
    title: '1979 - Los Orígenes',
    points: [
      'Fabricación de Equipo Electrónico',
      'Orientación a la industria: fuentes, relés, control de fase',
    ],
    icon: 'fas fa-microchip',
    image: 'img/historia1.jpg',
    visible: false,
  },
  {
    title: '1990 - El PLC Colombiano CP90',
    points: [
      'Fabricación de controladores digitales',
      'Diseño nacional de PLC y estaciones de control',
      'Software a medida para la industria',
    ],
    icon: 'fas fa-cogs',
    image: 'img/historia2.jpg',
    visible: false,
  },
  {
    title: '1995 - Integradores de Automatización',
    points: [
      'Alianza con Siemens: Solution Partners',
      'Automatización con software integrado',
    ],
    icon: 'fas fa-project-diagram',
    image: 'img/historia3.jpg',
    visible: false,
  },
  {
    title: '2003 - Desarrollo con DCS',
    points: ['Proyectos con PCS7', 'Operaciones en Ecuador, Panamá y Venezuela'],
    icon: 'fas fa-network-wired',
    image: 'img/historia4.jpg',
    visible: false,
  },
  {
    title: '2022 - Industria 4.0',
    points: [
      'Integración Elico – Mayer – Metalmáquinas',
      'Aliados: Siemens, Rockwell, Mitsubishi',
    ],
    icon: 'fas fa-robot',
    image: 'img/historia5.jpg',
    visible: false,
  },
];


 certificadoCards = [
    {
      title: 'Sistema de control de procesos',
      image: 'https://elicogrp.com/wp-content/uploads/2022/11/Sistema-de-control-de-procesos-725x1024.jpg',
      pdfUrl: 'https://elicogrp.com/wp-content/uploads/2022/11/Sistema-de-control-de-procesos.pdf'
    },
    {
      title: 'Comunicaciones industriales',
      image: 'https://elicogrp.com/wp-content/uploads/2022/11/comunicaciones-industriales-725x1024.jpg',
      pdfUrl: 'https://elicogrp.com/wp-content/uploads/2022/11/comunicaciones-industriales.pdf'
    },
    {
      title: 'Automatización industrial',
      image: 'https://elicogrp.com/wp-content/uploads/2022/11/Automatizacion-industrial-725x1024.jpg',
      pdfUrl: 'https://elicogrp.com/wp-content/uploads/2022/11/Automatizacion-industrial-1.jpg'
    }
  ];

   cards = [
    {
      title: 'Políticas de seguridad y salud en el trabajo',
      descShort: 'ELECTRÓNICA INDUSTRIAL COLOMBIANA GROUP S.A.S., se compromete con la protección de la seguridad y salud de sus empleados, contratistas y sub contratistas,',
      descFull: 'ELECTRÓNICA INDUSTRIAL COLOMBIANA GROUP S.A.S., se compromete con la protección de la seguridad y salud de sus empleados, contratistas y sub contratistas, durante el desarrollo de proyectos integrales en las áreas de automatización industrial, sistemas de información y actividades conexas, promoviendo una cultura preventiva y de cuidado mutuo, gestionando eficazmente los riesgos ocupacionales identificados para prevenir accidentes de trabajo o enfermedades laborales e implementando las directrices que sobre seguridad y salud en el trabajo le sean aplicables por la legislación colombiana de acuerdo a su objeto social. Nuestra organización asume la responsabilidad de destinar los recursos humanos, físicos y financieros necesarios para la mejora continua en la gestión de seguridad y salud en el trabajo. La presente política tiene alcance sobre todos los centros de trabajo y todos los trabajadores, independientemente de su forma vinculación y/o contratación. Y es responsabilidad de todos los trabajadores cumplir con la política, normas y procedimientos establecidos.',
      titleDisplayed: '',
      descDisplayed: '',
      icon: 'fas fa-balance-scale',
      buttonText: 'Nuestros Servicios',
      route: '/servicios',
      image: '/img/seguridad.jpg',
      expanded: false
    }
  ];
/* Funsion que expande la card de "Leer más" */
   toggleExpand(card: any) {
    card.expanded = !card.expanded;
    card.descDisplayed = card.expanded
      ? card.descFull
      : card.descShort;
  }

  ngAfterViewInit(): void {
    this.autoScroll();

    // Esperamos a que el DOM esté completamente cargado
    setTimeout(() => {
      this.initBarObserver();
    }, 0);
  }

  autoScroll(): void {
    if (!this.scrollContainer) return;

    const scrollEl = this.scrollContainer.nativeElement;
    let scrollAmount = 0;
    const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;

    const interval = setInterval(() => {
      if (scrollAmount >= maxScroll) {
        clearInterval(interval);
      } else {
        scrollEl.scrollTop += 1;
        scrollAmount += 1;
      }
    }, 20);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        this.timelineData[index].visible = true;
        this.infocards[index].visible = true;
      }
    });
  }

  initBarObserver(): void {
    const barsSection = document.querySelector('.skills-bars');
    if (!barsSection) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.barrasAnimadas) {
          this.barrasAnimadas = true;
          this.animarBarras();
          obs.disconnect();
        }
      });
    }, {
      threshold: 0.3,
    });

    observer.observe(barsSection);
  }

  animarBarras(): void {
    const bars = document.querySelectorAll<HTMLElement>('.progress-bar');

    bars.forEach(bar => {
      const innerBar = bar.querySelector<HTMLElement>('.bar');
      const textSpan = innerBar?.querySelector<HTMLElement>('.bar-value');
      const target = parseInt(textSpan?.dataset.value ?? '0');
      const width = bar.getAttribute('data-width');

      if (innerBar && textSpan) {
        innerBar.classList.add('animado');
        innerBar.style.transition = 'width 2s ease-in-out';
        innerBar.style.width = width ?? '0%';

        let count = 0;
        const interval = setInterval(() => {
          textSpan.innerText = count.toString();
          count++;
          if (count > target) clearInterval(interval);
        }, 20);
      }
    });
  }
}


