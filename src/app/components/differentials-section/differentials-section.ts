import { Component } from '@angular/core';

interface Differential {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
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
      icon: '🔬',
      title: 'Controle de Qualidade',
      description:
        'Laboratório próprio com análises químicas e granulométricas em cada lote produzido, garantindo conformidade técnica.',
    },
    {
      icon: '🌱',
      title: 'Sustentabilidade',
      description:
        'Operação com licenciamento ambiental completo, recuperação de áreas degradadas e gestão responsável de recursos hídricos.',
    },
    {
      icon: '🚛',
      title: 'Logística Integrada',
      description:
        'Frota própria e parceiros logísticos estratégicos para entrega em todo o território nacional com agilidade.',
    },
    {
      icon: '📦',
      title: 'Capacidade de Escala',
      description:
        'Produção de até 50.000 toneladas por mês, com estoque regulador para atender demandas sazonais e urgentes.',
    },
    {
      icon: '🎯',
      title: 'Customização',
      description:
        'Produtos desenvolvidos sob medida para cada cliente, com granulometria e especificações técnicas personalizadas.',
    },
    {
      icon: '🤝',
      title: 'Atendimento Técnico',
      description:
        'Equipe de engenheiros e geólogos disponíveis para suporte técnico, desde a especificação até a aplicação final.',
    },
  ];
}
