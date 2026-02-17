import { Component } from '@angular/core';

/** Modelo de produto */
interface Product {
  readonly icon: string;
  readonly name: string;
  readonly description: string;
  readonly specs: string[];
}

@Component({
  selector: 'app-product-section',
  standalone: true,
  templateUrl: './product-section.html',
  styleUrl: './product-section.scss',
})
export class ProductSectionComponent {
  protected readonly products: Product[] = [
    {
      icon: '🏗️',
      name: 'Areia Sílica para Construção',
      description:
        'Areia de alta qualidade para argamassas, concretos especiais e revestimentos de alto desempenho.',
      specs: ['Granulometria: 0,1 – 0,5mm', 'SiO₂ ≥ 98%', 'Umidade < 0,5%'],
    },
    {
      icon: '🔬',
      name: 'Sílica para Vidros',
      description:
        'Matéria-prima com altíssima pureza para fabricação de vidros planos, embalagens e vidros especiais.',
      specs: ['Granulometria: 0,1 – 0,8mm', 'SiO₂ ≥ 99.5%', 'Fe₂O₃ < 0,01%'],
    },
    {
      icon: '⚙️',
      name: 'Areia para Fundição',
      description:
        'Areia com distribuição granulométrica controlada para moldes e machos de fundição industrial.',
      specs: ['AFS 45-65', 'SiO₂ ≥ 98.5%', 'Baixo LOI'],
    },
    {
      icon: '🎨',
      name: 'Sílica para Tintas e Revestimentos',
      description:
        'Sílica micronizada e moída para uso como carga funcional em tintas, vernizes e revestimentos.',
      specs: ['D50: 5 – 20 μm', 'Brancura > 92%', 'Alta dispersão'],
    },
    {
      icon: '💧',
      name: 'Areia para Filtração',
      description:
        'Areia sílica com granulometria específica para sistemas de filtração e tratamento de água.',
      specs: ['Granulometria sob medida', 'SiO₂ ≥ 96%', 'Certificada ABNT'],
    },
    {
      icon: '🛢️',
      name: 'Sílica para Petróleo e Gás',
      description:
        'Proppant natural de areia sílica para operações de fraturamento hidráulico (frac sand).',
      specs: ['Crush resistance 4K+', 'Roundness ≥ 0.7', 'SiO₂ ≥ 99%'],
    },
  ];
}
