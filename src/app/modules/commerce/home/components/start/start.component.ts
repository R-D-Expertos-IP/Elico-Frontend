import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  fullTitle = 'Integrador de Sistemas en Automatización Industrial';
  titleDisplayed = '';

  fullDesc = 'Con más de 43 años de experiencia, brindamos soluciones industriales que combinan innovación, tecnología y conocimiento.';
  descDisplayed = '';

  solucionesText = 'Soluciones';
  solucionesDisplayed = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.revealText(this.solucionesText, 150, val => this.solucionesDisplayed = val);
    this.revealText(this.fullTitle, 80, val => this.titleDisplayed = val, () => {
      this.revealText(this.fullDesc, 50, val => this.descDisplayed = val);
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

