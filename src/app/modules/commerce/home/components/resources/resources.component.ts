import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})

export class ResourcesComponent {


  recursosText = "Recursos";

   pdfCards = [
    {
      title: 'ALARMA INTELIGENTE OCULTA SIMATIC PCS 7',
      image: 'img/docpdf.png',
      pdfUrl: 'https://elicogrp.com/wp-content/uploads/2020/03/Alarm-Hiding-PCS7-V90SP1.pdf'
    },
    {
      title: 'IIOT: Internet Industrial de las cosas inteligentes',
      image: 'img/docpdf.png',
      pdfUrl: 'https://elicogrp.com/wp-content/uploads/2022/11/Brochure_I4.0_V2.pdf'
    },
    {
      title: 'SOPORTE REMOTO EN LA INDUSTRIA',
      image: 'img/docpdf.png',
      pdfUrl: 'https://elicogrp.com/wp-content/uploads/2020/04/PSI-Soporte-Remoto.pdf'
    },
    {
      title: 'SEGURIDAD INTEGRADA PARA AUTOMATIZACIÓN DE PROCESOS',
      image: 'img/docpdf.png',
      pdfUrl: 'https://elicogrp.com/wp-content/uploads/2020/03/Seguridad-integrada-para-Automatizacion-de-procesos.pdf'
    },
    {
      title: 'SISTEMA DE FUEGO Y GAS',
      image: 'img/docpdf.png',
      pdfUrl: 'https://elicogrp.com/wp-content/uploads/2020/03/Sistema-de-fuego-y-Gas.pdf'
    }
  ];

}