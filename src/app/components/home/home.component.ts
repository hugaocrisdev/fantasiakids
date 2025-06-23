import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  goToStart() {
    this.playSound()
    this.router.navigate(['/inicio']);
  }


  private audio = new Audio('../../../assets/click-21156.mp3');

  playSound(): void {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}
