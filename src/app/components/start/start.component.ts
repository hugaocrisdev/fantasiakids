import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '1000ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})

export class StartComponent {

  constructor(private router: Router) {}

  goToAcao() {
    this.playSound();
    this.router.navigateByUrl('acao');
  }

  goToAventura() {
    this.playSound();
    this.router.navigateByUrl('aventura');
  }

  goToEsporte() {
    this.playSound();
    this.router.navigateByUrl('esporte');
  }

  goToFantasia() {
    this.playSound();
    this.router.navigateByUrl('fantasia');
  }

  goToHome() {
    this.playSound();
    this.router.navigateByUrl('home');
  }

  voltar(){
    this.playSound();
    this.router.navigateByUrl('start');
  }

  private audio = new Audio('../../../assets/click-21156.mp3');

  playSound(): void {
    this.audio.currentTime = 0;
    this.audio.play();
  }

  private audio2 = new Audio('../../../assets/menu-selection-102220.mp3');

  playSound2(): void {
    this.audio2.currentTime = 0;
    this.audio2.play();
  }
}
