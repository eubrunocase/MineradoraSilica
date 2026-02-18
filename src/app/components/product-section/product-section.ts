import { Component } from '@angular/core';

/** Modelo de produto */
interface Product {
  readonly image: string;
  readonly imageAlt: string;
  readonly name: string;
  readonly description: string;
  readonly specs: string[];
  readonly link: string;
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
      image: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=640&q=80',
      imageAlt: 'Canteiro de obras com concreto e areia',
      name: 'Areia Sílica para Construção',
      description:
        'Areia de alta qualidade para argamassas, concretos especiais e revestimentos de alto desempenho.',
      specs: ['Granulometria: 0,1 – 0,5 mm', 'SiO₂ ≥ 98%', 'Umidade < 0,5%'],
      link: '/produtos/construcao',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661952346976-ac9d2ea8825a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHZpZHJvJTIwaW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: 'Painéis de vidro industrial',
      name: 'Sílica para Vidros',
      description:
        'Matéria-prima com altíssima pureza para fabricação de vidros planos, embalagens e vidros especiais.',
      specs: ['Granulometria: 0,1 – 0,8 mm', 'SiO₂ ≥ 99,5%', 'Fe₂O₃ < 0,01%'],
      link: '/produtos/vidros',
    },
    {
      image: 'https://images.unsplash.com/photo-1572277603731-6941cdb65597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVuZGklQzMlQTclQzMlQTNvfGVufDB8fDB8fHww',
      imageAlt: 'Processo de fundição industrial',
      name: 'Areia para Fundição',
      description:
        'Areia com distribuição granulométrica controlada para moldes e machos de fundição industrial.',
      specs: ['AFS 45–65', 'SiO₂ ≥ 98,5%', 'Baixo LOI'],
      link: '/produtos/fundicao',
    },
    {
      image: 'https://media.istockphoto.com/id/148659116/pt/foto/revestimento-do-pó-em-uma-câmera-especial.webp?a=1&b=1&s=612x612&w=0&k=20&c=d8ig_ZbXrc95LILYWAyad0_gZAJlaNU-90jjo84vWOg=',
      imageAlt: 'Latas de tinta industrial',
      name: 'Sílica para Tintas e Revestimentos',
      description:
        'Sílica micronizada e moída para uso como carga funcional em tintas, vernizes e revestimentos.',
      specs: ['D50: 5 – 20 μm', 'Brancura > 92%', 'Alta dispersão'],
      link: '/produtos/tintas',
    },
    {
      image: 'https://media.istockphoto.com/id/1324181880/pt/foto/pool-water-filtration-system-outdoor-sand-pump-maintaining-the-purity-of-water-cleaning-from.webp?a=1&b=1&s=612x612&w=0&k=20&c=wEjkX2QeHxq1-iLNpD1DCvZfj0DBebqOgVi78YcThZA=',
      imageAlt: 'Sistema de filtração e tratamento de água',
      name: 'Areia para Filtração',
      description:
        'Areia sílica com granulometria específica para sistemas de filtração e tratamento de água.',
      specs: ['Granulometria sob medida', 'SiO₂ ≥ 96%', 'Certificada ABNT'],
      link: '/produtos/filtracao',
    },
    {
      image: 'https://media.istockphoto.com/id/485339173/pt/foto/fábrica.webp?a=1&b=1&s=612x612&w=0&k=20&c=K5SipsJzCSyOGsGgNdVFe2rB8exGlIycJCtpnXauT-A=',
      imageAlt: 'Plataforma de petróleo e gás',
      name: 'Sílica para Petróleo e Gás',
      description:
        'Proppant natural de areia sílica para operações de fraturamento hidráulico (frac sand).',
      specs: ['Crush resistance 4K+', 'Roundness ≥ 0,7', 'SiO₂ ≥ 99%'],
      link: '/produtos/petroleo',
    },
  ];
}
