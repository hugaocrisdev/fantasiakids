import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Historia } from 'src/app/model/historia';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-acao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acao.component.html',
  styleUrl: './acao.component.css',
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
export class AcaoComponent implements OnInit {

  historias: Historia[] = [];
  mostrarAnuncio = false;

  constructor(private router: Router, private db: StoryService) {}

  ngOnInit() {
    this.db.listarAcao().subscribe((data) => {
      this.historias = data;
      this.mostrarAnuncio = true;
    });

    setTimeout(() => {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({});
    }, 1000);
  }

  goToStart() {
    this.playSound();
    this.router.navigateByUrl('inicio');
  }

  private audio = new Audio('../../../assets/click-21156.mp3');

  playSound(): void {
    this.audio.currentTime = 0;
    this.audio.play();
  }

  fecharAnuncio() {
    this.mostrarAnuncio = false;
  }
}
