import { Component, signal, inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';

/** Link de navegação para scroll entre seções */
interface NavLink {
  readonly label: string;
  readonly fragment: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  private readonly platformId = inject(PLATFORM_ID);

  /** Estado do menu mobile */
  protected readonly mobileMenuOpen = signal(false);

  /** Estado de scroll (navbar com background) */
  protected readonly scrolled = signal(false);

  /** Links de navegação */
  protected readonly navLinks: NavLink[] = [
    { label: 'Início', fragment: 'hero' },
    { label: 'Sobre', fragment: 'sobre' },
    { label: 'Produtos', fragment: 'produtos' },
    { label: 'Aplicações', fragment: 'aplicacoes' },
    { label: 'Diferenciais', fragment: 'diferenciais' },
    { label: 'Planos', fragment: 'planos' },
    { label: 'Contato', fragment: 'contato' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled.set(window.scrollY > 50);
    }
  }

  /** Scroll suave até a seção alvo */
  scrollTo(fragment: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(fragment);
      element?.scrollIntoView({ behavior: 'smooth' });
      this.mobileMenuOpen.set(false);
    }
  }

  /** Alterna menu mobile */
  toggleMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }
}
