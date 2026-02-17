import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly currentYear = new Date().getFullYear();

  protected readonly quickLinks = [
    { label: 'Início', fragment: 'hero' },
    { label: 'Sobre', fragment: 'sobre' },
    { label: 'Produtos', fragment: 'produtos' },
    { label: 'Aplicações', fragment: 'aplicacoes' },
    { label: 'Diferenciais', fragment: 'diferenciais' },
    { label: 'Planos', fragment: 'planos' },
    { label: 'Contato', fragment: 'contato' },
  ];

  scrollTo(fragment: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
