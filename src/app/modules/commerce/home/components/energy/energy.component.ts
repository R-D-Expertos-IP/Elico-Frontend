import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnInit {

 

 /* Array para cards de linea */
serviciosCards = [
  {
    title: 'Ingeniería y Puesta en Marcha: Incluye ingeniería y configuración, pruebas FAT pruebas SAT, y señalización de nivel 2 y nivel 3.',
    icon: 'fas fa-bullseye',
    visible: false,
  },
  {
    title: 'Diseño e implementación de sistemas SCADA, IHM y PLC en diferentes niveles de control.',
    icon: 'fas fa-desktop',
    visible: false,
  },
  {
    title: 'Desarrollo de ingeniería básica y de detalle para sistemas de automatización y electrificación.',
    icon: 'fas fa-drafting-compass',
    visible: false,
  },
  {
    title: 'Diseño, suministro y montaje de tableros de control, potencia, CCM (Centros de Control de Motores) y Subestaciones.',
    icon: 'fas fa-bolt',
    visible: false,
  },
  {
    title: 'Diagnóstico, ajuste o intervenciones en reguladores de velocidad y tensión.',
    icon: 'fas fa-tools',
    visible: false,
  },
  {
    title: 'Levantamiento de información y acompañamiento en línea base de ciberseguridad, de acuerdo con la norma CNO 1960.',
    icon: 'fas fa-shield-alt',
    visible: false,
  },
];

/* Array para proyectos destacados */
proyectoText = [
  {
    title: 'Cliente: Siemens Energy S.A.S',
    location: 'Ubicación: Subestación Copey – Copey, Cesar',
    solution: `Tipo de solución: Implementación de señales en el sistema SICAM PAS,
      integración de señales para enclavamientos en los seccionadores de
      transferencia y de la barra 2, junto con la incorporación de señalización de fallas
      a través de repetidores.  
      Modificación en lógicas de control de relés SIPROTEC 4 para integración a S/E
      Existente de nuevas bahías.`,
    impact: `Impacto: Garantizar que la lógica operativa de la subestación se ejecute
      conforme a lo programado en el software DIGSI, asegurando así la confiabilidad
      y seguridad en la operación del sistema eléctrico.`,
    image: '/img/siemens.png'
  },
  {
    title: 'Cliente: Grupo LAREIF (PCH’s construidas por grupo HMV en Antioquia)',
    location: 'Ubicación: Antioquia, Colombia',
    solution: `Tipo de solución: Mantenimiento preventivo de PLCs, migración de sistemas
      HMI/PLC y SCADA.`,
    impact: `Impacto: Reducción de fallas en el sistema y mayor
      visibilidad de datos operativos en tiempo real.`,
    image: '/img/isagen.jpeg'
  },
  {
    title: 'Cliente: Negratín Colombia SAS',
    location: 'Ubicación: Subestación Transelca, Sabanalarga.',
    solution: `Tipo de solución: Integración de variables de medición de tensiones y
      corrientes para limitación de potencia en Bosques Solares de Bolívar (ISAGEN).
      Integración de comunicaciones entre subestaciones y habilitación del
      protocolo IEC104 para integración con sistemas de monitoreo.`,
    impact: `Impacto: Mejora en la confiabilidad de la operación de los parques por
      limitaciones de potencia en pequeñas centrales según normatividad
      colombiana.`,
    image: '/img/negratin.jpg'
  },
  {
    title: 'Cliente: Negratín Colombia SAS',
    location: 'Ubicación: Subestación Elevadora – Sabanalarga, Atlántico.',
    solution: `Tipo de solución: Migración de RTU y adecuación de señalización en sistema
      SCADA.`,
    impact: `Impacto: Se realizó la migración de los equipos SICAM A8000 para mejorar la
      confiabilidad del sistema. Se integraron y validaron las señalizaciones a Nivel 2
      en el SCADA actualizando las configuraciones necesarias para su correcta
      operación.`,
    image: '/img/negratin.jpg'
  }
];




   /* Variables de los titulos y textos de la card energia*/

  bloqueTitulo: string =
    '¿De qué forma los Sistemas de Gestión Energética en Plantas Industriales impulsan el crecimiento de la empresa?';

  bloqueTexto: string =
    'Todos los sistemas de gestión de energía mantienen al día las necesidades cambiantes de los sistemas eléctricos, manejando cargas cada vez más complejas y sensibles. Estos sistemas inteligentes son fundamentales para cumplir con estos retos, permitiendo así responder de forma más rápida a las necesidades energéticas optimizando la calidad y mitigando los riesgos.';

  bloqueImagen: string = '/img/energia.jpeg';


/* Array de los logros */

logrosData = {
  title: 'Logros, Reconocimientos y Desarrollos Tecnológicos Relevantes:',
  intro: `Nuestro equipo se distingue por su certificación y experiencia avanzada en la 
          configuración y programación de equipos y sistemas clave del sector energético, tales como:`,

  items: [
    'Equipos Siemens: SIPROTEC, SICAM PAS, SICAM S8000, SICAM A8000, WinCC SCC, RUGGEDCOM, SICAM PPC Compact.',
    'Dominio en la configuración y optimización de protocolos especializados para el sector energético, incluyendo IEC 61850 (GOOSE y MMS), Modbus RTU y TCP/IP, DNP3, e IEC 60870-5-104.',
    'Diseño y configuración de topologías de red de alta disponibilidad y seguridad, como RSTP, HSR y PRP, integrando RedBox y switches industriales avanzados.'
  ],

  conclusion: `Estos logros nos permiten ofrecer soluciones que no solo resuelven los desafíos 
              actuales de nuestros clientes, sino que también los preparan para las exigencias futuras del sector energético.`
};


  constructor() { }

  ngOnInit(): void {
    // Podrías invocar onScroll al iniciar para forzar el chequeo inicial:
    setTimeout(() => this.onScroll(), 0);
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
}
