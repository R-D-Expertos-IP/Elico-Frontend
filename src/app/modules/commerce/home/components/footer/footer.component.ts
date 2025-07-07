import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  name: string = '';
  message: string = '';
 mapUrl: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.50606487709!2d-75.58330605593588!3d6.196763288890655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46826353ea0c5d%3A0xc8096595340de598!2sSosty%20Servicios!5e0!3m2!1ses-419!2sco!4v1743426367922!5m2!1ses-419!2sco';
  sendMessage() {

    const phoneNumber = '573136492489';
    const text = `Hola, mi nombre es ${this.name}. \n${this.message}`;

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(text);

    // Crear el enlace de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirigir a WhatsApp
    window.open(whatsappURL, '_blank');
  }
}
