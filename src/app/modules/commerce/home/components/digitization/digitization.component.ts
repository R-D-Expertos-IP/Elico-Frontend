import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitization',
  templateUrl: './digitization.component.html',
  styleUrls: ['./digitization.component.css']
})
export class DigitizationComponent implements OnInit {

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

logrosData = {
  title: 'Logros, Reconocimientos y Desarrollos Tecnológicos Relevantes:',
  intro: ``,

  items: [
    'Soluciones propias desarrolladas en Elico Group. ',
    'Implementaciones exitosas en sectores como alimentos, bebidas, cemento, farmacéutica y manufactura. ',
    'Uso real de tecnologías abiertas como OpenModelica, Python, Factory IO.',
    'Cumplimiento de estándares internacionales: ISO 50001, IEC 62443, NIST 800-82, GMP, FDA. ',
    'Participación en eventos líderes: AndinaPack, Expoindustria, Automation Fair.'
  ],

  conclusion: `Estos logros nos permiten ofrecer soluciones que no solo resuelven los desafíos 
              actuales de nuestros clientes, sino que también los preparan para las exigencias futuras del sector energético.`
};



  constructor() { }

  ngOnInit() {
  }

}
