import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  public datosUsuario: {}
  ngOnInit(): void {
    this.datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'))
  }

 @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  timelineData = [
    {
      title: '1979 - Los Orígenes',
      points: ['Fabricación de Equipo Electrónico', 'Orientación a la industria: fuentes, relés, control de fase'],
      visible: false,
    },
    {
      title: '1990 - El PLC Colombiano CP90',
      points: ['Fabricación de controladores digitales', 'Diseño nacional de PLC y estaciones de control', 'Software a medida para la industria'],
      visible: false,
    },
    {
      title: '1995 - Integradores de Automatización',
      points: ['Alianza con Siemens: Solution Partners', 'Automatización con software integrado'],
      visible: false,
    },
    {
      title: '2003 - Desarrollo con DCS',
      points: ['Proyectos con PCS7', 'Operaciones en Ecuador, Panamá y Venezuela'],
      visible: false,
    },
    {
      title: '2022 - Industria 4.0',
      points: ['Integración Elico – Mayer – Metalmáquinas', 'Aliados: Siemens, Rockwell, Mitsubishi'],
      visible: false,
    },
  ];

  ngAfterViewInit(): void {
    this.autoScroll();
  }

  autoScroll(): void {
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
      }
    });
  }
}
