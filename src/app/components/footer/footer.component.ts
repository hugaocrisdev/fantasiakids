import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class AppFooterComponent implements OnInit {
  showAds: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const contentRoutes = [
        '/acao',       
        '/aventura',  
        '/fantasia',   
        '/esporte',
        '/categorias', 
        '/historia/', 
        '/home',       
   
      ];

      const isContentRoute = contentRoutes.some(route => event.urlAfterRedirects.startsWith(route));

      if (isContentRoute) {
        this.showAds = true; 
        if (typeof window.adsbygoogle !== 'undefined') {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("Erro ao tentar carregar anúncio do AdSense/AdMob:", e);
            }
        }
      } else {
        this.showAds = false;
      }
    });
  }
}
