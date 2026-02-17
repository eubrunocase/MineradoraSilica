import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface PricingPlan {
  readonly name: string;
  readonly description: string;
  readonly volumeRange: string;
  readonly features: string[];
  readonly highlighted: boolean;
  readonly ctaLabel: string;
}

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.scss',
})
export class PricingSectionComponent {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly plans: PricingPlan[] = [
    {
      name: 'Básico',
      description: 'Ideal para pequenas demandas e projetos pontuais.',
      volumeRange: 'Até 100 ton/mês',
      features: [
        'Areia sílica padrão',
        'Entrega programada',
        'Certificado de análise',
        'Suporte por e-mail',
      ],
      highlighted: false,
      ctaLabel: 'Solicitar Orçamento',
    },
    {
      name: 'Profissional',
      description: 'Para indústrias com demanda regular e contínua.',
      volumeRange: '100 – 1.000 ton/mês',
      features: [
        'Areia sílica beneficiada',
        'Granulometria customizada',
        'Entrega recorrente',
        'Suporte técnico dedicado',
        'Relatórios de qualidade',
      ],
      highlighted: true,
      ctaLabel: 'Falar com Consultor',
    },
    {
      name: 'Corporativo',
      description: 'Solução completa para grandes operações industriais.',
      volumeRange: 'Acima de 1.000 ton/mês',
      features: [
        'Produto sob especificação',
        'Contrato de fornecimento',
        'Logística dedicada',
        'Gestor de conta exclusivo',
        'SLA de entrega garantido',
        'Laboratório on-site',
      ],
      highlighted: false,
      ctaLabel: 'Contato Corporativo',
    },
  ];

  scrollTo(fragment: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
