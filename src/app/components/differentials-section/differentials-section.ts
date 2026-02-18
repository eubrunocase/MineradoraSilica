import { Component } from '@angular/core';

interface Differential {
  readonly image: string;
  readonly imageAlt: string;
  readonly title: string;
  readonly description: string;
  readonly link: string;
}

@Component({
  selector: 'app-differentials-section',
  standalone: true,
  templateUrl: './differentials-section.html',
  styleUrl: './differentials-section.scss',
})
export class DifferentialsSectionComponent {
  protected readonly differentials: Differential[] = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1664298450627-0073be5650cc?w=640&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udHJvbGUlMjBkZSUyMHF1YWxpZGFkZXxlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: 'Técnico realizando análise laboratorial',
      title: 'Controle de Qualidade',
      description:
        'Laboratório próprio com análises químicas e granulométricas em cada lote produzido, garantindo conformidade técnica.',
      link: '/diferenciais/controle-qualidade',
    },
    {
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=640&q=80',
      imageAlt: 'Área verde com vegetação recuperada',
      title: 'Sustentabilidade',
      description:
        'Operação com licenciamento ambiental completo, recuperação de áreas degradadas e gestão responsável de recursos hídricos.',
      link: '/diferenciais/sustentabilidade',
    },
    {
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=640&q=80',
      imageAlt: 'Caminhões de carga em rodovia',
      title: 'Logística Integrada',
      description:
        'Frota própria e parceiros logísticos estratégicos para entrega em todo o território nacional com agilidade.',
      link: '/diferenciais/logistica',
    },
    {
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
      imageAlt: 'Operação de mineração em larga escala',
      title: 'Capacidade de Escala',
      description:
        'Produção de até 50.000 toneladas por mês, com estoque regulador para atender demandas sazonais e urgentes.',
      link: '/diferenciais/capacidade',
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&q=80',
      imageAlt: 'Engenheiro analisando especificações técnicas',
      title: 'Customização',
      description:
        'Produtos desenvolvidos sob medida para cada cliente, com granulometria e especificações técnicas personalizadas.',
      link: '/diferenciais/customizacao',
    },
    {
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=640&q=80',
      imageAlt: 'Equipe técnica em reunião de projeto',
      title: 'Atendimento Técnico',
      description:
        'Equipe de engenheiros e geólogos disponíveis para suporte técnico, desde a especificação até a aplicação final.',
      link: '/diferenciais/atendimento',
    },
  ];
}
