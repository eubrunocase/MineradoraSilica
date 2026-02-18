import { Component } from '@angular/core';

interface Application {
  readonly image: string;
  readonly imageAlt: string;
  readonly title: string;
  readonly description: string;
  readonly link: string;
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
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=640&q=80',
      imageAlt: 'Construção civil com estrutura de concreto',
      title: 'Construção Civil',
      description:
        'Argamassas, concretos especiais, pisos industriais e revestimentos de alto desempenho.',
      link: '/aplicacoes/construcao-civil',
    },
    {
      image: 'https://media.istockphoto.com/id/913441706/pt/foto/workers-packaging-glass-sheets-in-warehouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=AiMoNx6UJs7pE7hoZr13rEtroilczwZYfcA-X6a-3rk=',
      imageAlt: 'Fachada de vidro em edifício moderno',
      title: 'Indústria Vidreira',
      description:
        'Vidros planos, embalagens, fibra de vidro e vidros especiais de alta transparência.',
      link: '/aplicacoes/industria-vidreira',
    },
    {
      image: 'https://images.unsplash.com/photo-1571590946238-a0ba990d12a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVuZGklQzMlQTclQzMlQTNvfGVufDB8fDB8fHww',
      imageAlt: 'Processo de fundição de metais',
      title: 'Fundição',
      description:
        'Moldes e machos para fundição de metais ferrosos e não-ferrosos com precisão dimensional.',
      link: '/aplicacoes/fundicao',
    },
    {
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=640&q=80',
      imageAlt: 'Laboratório de indústria química',
      title: 'Indústria Química',
      description:
        'Silicatos, sílica gel, catalisadores e insumos para processos químicos industriais.',
      link: '/aplicacoes/industria-quimica',
    },
    {
      image: 'https://media.istockphoto.com/id/1312666158/pt/foto/carpenter-in-protection-wear-varnishing-wooden-panel.webp?a=1&b=1&s=612x612&w=0&k=20&c=4KV02MafEbeYSEIUaobAtZlIz-LsPjivAkhSVWCIFNw=',
      imageAlt: 'Bancada com latas de tinta',
      title: 'Tintas e Revestimentos',
      description:
        'Carga funcional e extender para tintas imobiliárias, industriais e automotivas.',
      link: '/aplicacoes/tintas',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1682144326897-4a7149b991f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdGFtZW50byUyMGRlJTIwYWd1YXxlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: 'Estação de tratamento de água',
      title: 'Tratamento de Água',
      description:
        'Meio filtrante para estações de tratamento de água (ETA) e efluentes industriais.',
      link: '/aplicacoes/tratamento-agua',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1682148782647-d6565344ecce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5lcmdpYSUyMGUlMjBwZXRyb2xlb3xlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: 'Plataforma de extração de petróleo',
      title: 'Energia e Petróleo',
      description:
        'Frac sand para fraturamento hidráulico e insumos para cadeia de energia renovável.',
      link: '/aplicacoes/energia-petroleo',
    },
    {
      image: 'https://media.istockphoto.com/id/1461007001/pt/foto/ceramic-dishes-in-working-process-handcrafted-pottery.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y2cYqdbIyi7a5jaMtB6YaeSZ2vQBnf98b8kc4hr6xmM=',
      imageAlt: 'Peças cerâmicas em forno industrial',
      title: 'Cerâmica e Refratários',
      description:
        'Cerâmica branca, porcelanato, louças sanitárias e materiais refratários especiais.',
      link: '/aplicacoes/ceramica',
    },
  ];
}
