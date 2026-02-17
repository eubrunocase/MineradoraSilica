import { Component } from '@angular/core';

interface Application {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-applications-section',
  standalone: true,
  templateUrl: './applications-section.html',
  styleUrl: './applications-section.scss',
})
export class ApplicationsSectionComponent {
  protected readonly applications: Application[] = [
    {
      icon: '🏠',
      title: 'Construção Civil',
      description:
        'Argamassas, concretos especiais, pisos industriais e revestimentos de alto desempenho.',
    },
    {
      icon: '🪟',
      title: 'Indústria Vidreira',
      description:
        'Vidros planos, embalagens, fibra de vidro e vidros especiais de alta transparência.',
    },
    {
      icon: '🏭',
      title: 'Fundição',
      description:
        'Moldes e machos para fundição de metais ferrosos e não-ferrosos com precisão dimensional.',
    },
    {
      icon: '⚗️',
      title: 'Indústria Química',
      description:
        'Silicatos, sílica gel, catalisadores e insumos para processos químicos industriais.',
    },
    {
      icon: '🎨',
      title: 'Tintas e Revestimentos',
      description:
        'Carga funcional e extender para tintas imobiliárias, industriais e automotivas.',
    },
    {
      icon: '💧',
      title: 'Tratamento de Água',
      description:
        'Meio filtrante para estações de tratamento de água (ETA) e efluentes industriais.',
    },
    {
      icon: '⚡',
      title: 'Energia e Petróleo',
      description:
        'Frac sand para fraturamento hidráulico e insumos para cadeia de energia renovável.',
    },
    {
      icon: '🧱',
      title: 'Cerâmica e Refratários',
      description:
        'Cerâmica branca, porcelanato, louças sanitárias e materiais refratários especiais.',
    },
  ];
}
