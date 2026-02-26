import {
  Component,
  computed,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Modelo de produto */
interface Product {
  readonly image: string;
  readonly imageAlt: string;
  readonly name: string;
  readonly description: string;
  readonly specs: string[];
  readonly link: string;
}

/** Modelo de modalidade de venda */
interface SalesModality {
  readonly icon: string;
  readonly title: string;
  readonly subtitle: string;
  readonly price: string;
  readonly unit: string;
  readonly details: string[];
  readonly highlight?: boolean;
}

@Component({
  selector: 'app-product-section',
  standalone: true,
  templateUrl: './product-section.html',
  styleUrl: './product-section.scss',
})
export class ProductSectionComponent implements OnInit, OnDestroy {
  // Controle do índice ativo (carrossel de produtos)
  protected activeIndex = signal(0);
  private intervalId: any;

  // Controle do carrossel horizontal de modalidades
  @ViewChild('modalitiesTrack') modalitiesTrack!: ElementRef<HTMLDivElement>;
  protected modalityScrollPosition = signal(0);

  /** Modalidades de venda */
  protected readonly salesModalities: SalesModality[] = [
    {
      icon: '🚚',
      title: 'A Granel',
      subtitle: 'Grandes volumes direto da mineradora',
      price: 'R$ 1.000',
      unit: 'por caminhão',
      details: ['Valor por m³: R$ 130,00', 'Capacidade: ~8m³ por caminhão', 'Entrega programada'],
      highlight: true,
    },
    {
      icon: '📦',
      title: 'Big Bags',
      subtitle: 'Embalagem industrial de 1 tonelada',
      price: 'R$ 250',
      unit: 'por big bag (1t)',
      details: ['Peso: 1.000 kg por unidade', 'Fácil movimentação com empilhadeira', 'Pedido mínimo: 5 unidades'],
    },
    {
      icon: '🛍️',
      title: 'Sacos / Ensacada',
      subtitle: 'Embalagens de 25kg ou 50kg',
      price: 'R$ 80',
      unit: 'por saco de 50kg',
      details: ['Disponível em 25kg e 50kg', 'Ideal para pequenas obras', 'Pronta entrega'],
    },
    {
      icon: '⚖️',
      title: 'Embalagens Fracionadas',
      subtitle: 'Quantidades menores para varejo',
      price: 'R$ 15',
      unit: 'por kg',
      details: ['Embalagens de 1kg a 10kg', 'Ideal para artesanato e paisagismo', 'Disponível em diversas granulometrias'],
    },
  ];

  // Dados (Mantidos os originais)
  protected readonly products: Product[] = [
    {
      image: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=1600&q=800',
      imageAlt: 'Canteiro de obras com concreto e areia',
      name: 'Areia Sílica para Construção',
      description:
        'Areia de alta qualidade para argamassas, concretos especiais e revestimentos de alto desempenho.',
      specs: ['Granulometria: 0,1 – 0,5 mm', 'SiO₂ ≥ 98%', 'Umidade < 0,5%'],
      link: '/produtos/construcao',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661952346976-ac9d2ea8825a?w=1600&auto=format&fit=crop&q=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHZpZHJvJTIwaW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: 'Painéis de vidro industrial',
      name: 'Sílica para Vidros',
      description:
        'Matéria-prima com altíssima pureza para fabricação de vidros planos, embalagens e vidros especiais.',
      specs: ['Granulometria: 0,1 – 0,8 mm', 'SiO₂ ≥ 99,5%', 'Fe₂O₃ < 0,01%'],
      link: '/produtos/vidros',
    },
    {
      image: 'https://images.unsplash.com/photo-1572277603731-6941cdb65597?w=1600&auto=format&fit=crop&q=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVuZGklQzMlQTclQzMlQTNvfGVufDB8fDB8fHww',
      imageAlt: 'Processo de fundição industrial',
      name: 'Areia para Fundição',
      description:
        'Areia com distribuição granulométrica controlada para moldes e machos de fundição industrial.',
      specs: ['AFS 45–65', 'SiO₂ ≥ 98,5%', 'Baixo LOI'],
      link: '/produtos/fundicao',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661962384749-bec17bc69dfd?w=1600&auto=format&fit=crop&q=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhaW50JTIwaW5kdXN0cnl8ZW58MHx8MHx8fDA%3D',
      imageAlt: 'Latas de tinta industrial',
      name: 'Sílica para Tintas e Revestimentos',
      description:
        'Sílica micronizada e moída para uso como carga funcional em tintas, vernizes e revestimentos.',
      specs: ['D50: 5 – 20 μm', 'Brancura > 92%', 'Alta dispersão'],
      link: '/produtos/tintas',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1682144318933-fcab743fb527?w=1600&auto=format&fit=crop&q=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpbHRyYXRpb258ZW58MHx8MHx8fDA%3D',
      imageAlt: 'Sistema de filtração e tratamento de água',
      name: 'Areia para Filtração',
      description:
        'Areia sílica com granulometria específica para sistemas de filtração e tratamento de água.',
      specs: ['Granulometria sob medida', 'SiO₂ ≥ 96%', 'Certificada ABNT'],
      link: '/produtos/filtracao',
    },
    {
      image: 'https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?w=1600&auto=format&fit=crop&q=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2lsJTIwYW5kJTIwZ2FzfGVufDB8fDB8fHww',
      imageAlt: 'Plataforma de petróleo e gás',
      name: 'Sílica para Petróleo e Gás',
      description:
        'Proppant natural de areia sílica para operações de fraturamento hidráulico (frac sand).',
      specs: ['Crush resistance 4K+', 'Roundness ≥ 0,7', 'SiO₂ ≥ 99%'],
      link: '/produtos/petroleo',
    },
  ];

  // Produto atualmente selecionado
  protected activeProduct = computed(() => this.products[this.activeIndex()]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Inicia o timer apenas no navegador (evita erro no SSR)
    if (isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  // Define um produto manualmente ao clicar
  setActive(index: number): void {
    this.activeIndex.set(index);
    this.resetTimer();
  }

  /** Scroll do carrossel horizontal de modalidades */
  scrollModalities(direction: 'left' | 'right'): void {
    const track = this.modalitiesTrack?.nativeElement;
    if (!track) return;
    const cardWidth = 320;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    const newPos =
      direction === 'left'
        ? Math.max(0, track.scrollLeft - scrollAmount)
        : track.scrollLeft + scrollAmount;
    track.scrollTo({ left: newPos, behavior: 'smooth' });
  }

  onModalitiesScroll(): void {
    const track = this.modalitiesTrack?.nativeElement;
    if (track) {
      this.modalityScrollPosition.set(track.scrollLeft);
    }
  }

  get canScrollLeft(): boolean {
    return this.modalityScrollPosition() > 0;
  }

  get canScrollRight(): boolean {
    const track = this.modalitiesTrack?.nativeElement;
    if (!track) return true;
    return track.scrollLeft < track.scrollWidth - track.clientWidth - 1;
  }

  private startTimer(): void {
    this.intervalId = setInterval(() => {
      this.nextProduct();
    }, 5000); // Troca a cada 5 segundos
  }

  private stopTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private resetTimer(): void {
    this.stopTimer();
    this.startTimer();
  }

  private nextProduct(): void {
    this.activeIndex.update((index) => (index + 1) % this.products.length);
  }
}