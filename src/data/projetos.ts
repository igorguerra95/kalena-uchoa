import heroPavilionImg from '../assets/images/hero_pavilion_1795001467957.jpg';
import projRes1Img from '../assets/images/project_residencial_1_1795001467847.jpg';
import projCom1Img from '../assets/images/project_comercial_1_1795001468416.jpg';
import projRes2Img from '../assets/images/project_residencial_2_1795001470258.jpg';
import projCom2Img from '../assets/images/project_comercial_2_1795001471406.jpg';
import projRes3Img from '../assets/images/project_residencial_3_1795001470362.jpg';
import studioAtelierImg from '../assets/images/studio_sobre_atelier_1795001471707.jpg';
import type { EtapaProcesso, MetricaEstudio, ProjetoArquitetura } from '../types';

export const IMAGEM_HERO_PRINCIPAL = heroPavilionImg;
export const IMAGEM_ATELIER_SOBRE = studioAtelierImg;

export const DADOS_CONTATO = {
  estudio: 'Kalena Uchôa - Arquitetura',
  arquiteta: 'Kalena Uchôa',
  registroCau: 'CAU/BR · Arquitetura e Urbanismo',
  endereco: 'SEU ENDEREÇO AQUI',
  telefoneDisplay: '(00) 00000-0000',
  telefoneWhatsApp: '5500000000000',
  horario: 'Não informado',
  email: 'contato@kalenauchoa.arq.br',
} as const;

export const METRICAS_ESTUDIO: MetricaEstudio[] = [
  {
    valor: 42,
    unidade: 'obras',
    rotulo: 'Projetos Entregues',
    contexto: 'Residências autorais e sedes corporativas concluídas nos últimos 12 anos',
  },
  {
    valor: 18400,
    unidade: 'm²',
    rotulo: 'Área Projetada',
    contexto: 'Metragem executada com compatibilização BIM e acompanhamento em obra',
  },
  {
    valor: 12,
    unidade: 'anos',
    rotulo: 'Atuação Autoral',
    contexto: 'Prática independente dedicada à arquitetura estrutural e desenho espacial',
  },
  {
    valor: 7,
    unidade: 'prêmios',
    rotulo: 'Reconhecimentos',
    contexto: 'Menções editoriais e destaques em bienais de arquitetura contemporânea',
  },
];

export const PROJETOS_PORTFOLIO: ProjetoArquitetura[] = [
  {
    id: 'casa-serra-verde',
    codigo: '01',
    titulo: 'Residência Serra do Cipó',
    categoria: 'Residencial',
    subtipo: 'Arquitetura Unifamiliar',
    localizacao: 'Nova Lima, MG',
    ano: '2025',
    areaM2: '680 m²',
    materiais: 'Concreto aparente em fôrma de tábuas, travertino bruto e vidro temperado',
    resumo:
      'Volume horizontal em balanço que preserva a topografia natural e integra a área social a um jardim de samambaias nativas.',
    conceito:
      'Concebida como um plano suspenso sobre o declive suave do terreno, a residência utiliza o concreto estrutural como elemento de sombra e proteção térmica. A planta libera vãos contínuos de 11 metros sem pilares intermediários, permitindo ventilação cruzada permanente e leitura contínua da mata ao redor.',
    imagemPrincipal: projRes1Img,
    altPrincipal:
      'Fachada contemporânea em concreto aparente e pedra travertino da Residência Serra do Cipó cercada por vegetação tropical',
    destaque: true,
    galeria: [
      {
        url: projRes1Img,
        legenda: 'Fachada sudoeste em balanço estrutural e jardim térreo integrado ao estar.',
      },
      {
        url: heroPavilionImg,
        legenda: 'Estudo de iluminação crepuscular e reflexo no espelho d’água em ardósia.',
      },
      {
        url: projRes2Img,
        legenda: 'Ambiente interno de convivência com marcenaria em madeira carbonizada.',
      },
    ],
  },
  {
    id: 'galeria-atrio-paulista',
    codigo: '02',
    titulo: 'Atrio Fundação Paulista',
    categoria: 'Comercial',
    subtipo: 'Sede Corporativa & Galeria',
    localizacao: 'São Paulo, SP',
    ano: '2025',
    areaM2: '1.420 m²',
    materiais: 'Concreto branco moldado in loco, carvalho americano e piso em ardósia',
    resumo:
      'Átrio de pé-direito triplo articulado por uma escada helicoidal escultural sob iluminação zenital difusa.',
    conceito:
      'O desafio central foi transformar um edifício corporativo rígido em uma sede institucional permeável à arte e ao encontro. A remoção parcial de duas lajes originou o átrio central, onde a luz filtrada pela claraboia modulada orienta o fluxo de visitantes entre os pavimentos expositivos e os escritórios executivos.',
    imagemPrincipal: projCom1Img,
    altPrincipal:
      'Átrio corporativo com escada helicoidal em concreto branco, painéis de madeira clara e claraboia zenital',
    destaque: true,
    galeria: [
      {
        url: projCom1Img,
        legenda: 'Átrio principal com escada autoportante em concreto branco e iluminação zenital.',
      },
      {
        url: projCom2Img,
        legenda: 'Relação urbana da fachada principal com brises verticais em pedra natural.',
      },
      {
        url: studioAtelierImg,
        legenda: 'Estudo de paleta material: pedra natural, aço escovado e lâminas de madeira.',
      },
    ],
  },
  {
    id: 'apartamento-alto-jardins',
    codigo: '03',
    titulo: 'Apartamento Jardim Europa',
    categoria: 'Residencial',
    subtipo: 'Arquitetura de Interiores',
    localizacao: 'São Paulo, SP',
    ano: '2024',
    areaM2: '390 m²',
    materiais: 'Calcário levigado, freijó ebanizado, aço preto e linho cru',
    resumo:
      'Reconfiguração completa de planta para privilegiar a galeria de estar, a lareira monolítica e o desenho luminotécnico silencioso.',
    conceito:
      'A intervenção removeu divisórias fragmentadas para instaurar uma sequência contínua entre biblioteca, sala de estar e jantar. O painel em madeira freijó ebanizada oculta acessos de serviço e infraestrutura acústica, criando um fundo neutro e tátil que valoriza as obras de arte e as sombras projetadas pelas esquadrias metálicas.',
    imagemPrincipal: projRes2Img,
    altPrincipal:
      'Sala de estar minimalista com piso em calcário claro, marcenaria escura, lareira e grandes esquadrias metálicas',
    galeria: [
      {
        url: projRes2Img,
        legenda: 'Estar principal com painel em madeira ebanizada e incidência solar natural.',
      },
      {
        url: projRes3Img,
        legenda: 'Referência de continuidade espacial entre pedra mineral e áreas externas.',
      },
    ],
  },
  {
    id: 'flagship-maison-ardosia',
    codigo: '04',
    titulo: 'Edifício Comercial Jardins',
    categoria: 'Comercial',
    subtipo: 'Edifício Flagship & Varejo',
    localizacao: 'Belo Horizonte, MG',
    ano: '2024',
    areaM2: '960 m²',
    materiais: 'Brises verticais em ardósia preta, alumínio anodizado e vidro extra-clear',
    resumo:
      'Fachada rítmica com lâminas verticais de pedra que modulam a insolação e conferem identidade atemporal ao passeio urbano.',
    conceito:
      'Projetado para abrigar uma marca de alfaiataria e galeria de objetos, o edifício utiliza a modulação estrutural como linguagem de fachada. Durante o dia, os brises de ardósia protegem o acervo da radiação direta; ao entardecer, a iluminação arquitetônica interna transforma o conjunto em uma lanterna urbana precisa e contida.',
    imagemPrincipal: projCom2Img,
    altPrincipal:
      'Fachada comercial contemporânea ao entardecer com brises verticais em ardósia escura e vitrines iluminadas',
    galeria: [
      {
        url: projCom2Img,
        legenda: 'Alçado frontal no crepúsculo com iluminação cênica e ritmo estrutural vertical.',
      },
      {
        url: projCom1Img,
        legenda: 'Linguagem de circulação vertical interna e tratamento acústico em madeira.',
      },
    ],
  },
  {
    id: 'casa-pateo-agua',
    codigo: '05',
    titulo: 'Casa Pátio das Águas',
    categoria: 'Residencial',
    subtipo: 'Residência Térrea & Paisagismo',
    localizacao: 'Campinas, SP',
    ano: '2024',
    areaM2: '540 m²',
    materiais: 'Pérgola em concreto armado, granito apicoado e cumaru certificado',
    resumo:
      'Arquitetura organizada em torno de um espelho d’água central e pérgola ritmada que desenha horas de sombra no piso mineral.',
    conceito:
      'A casa se volta para dentro, construindo seu próprio microclima através de um pátio central com lâmina d’água rasa e jardim tropical sombreado. A pérgola em vigas pré-moldadas atua como relógio solar natural ao longo do dia, reduzindo a carga térmica interna e valorizando a transição entre o abrigo e o jardim.',
    imagemPrincipal: projRes3Img,
    altPrincipal:
      'Pátio residencial modernista com pérgola em concreto aparente, banco monolítico de pedra e espelho d’água',
    galeria: [
      {
        url: projRes3Img,
        legenda: 'Pátio interno com pérgola estrutural em concreto e espelho d’água em pedras naturais.',
      },
      {
        url: projRes1Img,
        legenda: 'Relação entre cobertura em balanço e paisagismo nativo de sombra.',
      },
    ],
  },
  {
    id: 'pavilhao-alvorada',
    codigo: '06',
    titulo: 'Pavilhão Alvorada',
    categoria: 'Residencial',
    subtipo: 'Residência de Campo',
    localizacao: 'Brasília, DF',
    ano: '2023',
    areaM2: '720 m²',
    materiais: 'Concreto aparente, perfis metálicos I, freijó natural e basalto',
    resumo:
      'Pavilhão elevado sobre lâmina de basalto e água, combinando precisão industrial metálica com a calidez da madeira brasileira.',
    conceito:
      'Implantado no cerrado em plataforma contínua, o Pavilhão Alvorada articula dois volumes ortogonais que flutuam sobre o espelho d’água. A estrutura metálica aparente possibilita beirais generosos que protegem as grandes aberturas envidraçadas, enquadrando o horizonte do planalto com rigor silencioso.',
    imagemPrincipal: heroPavilionImg,
    altPrincipal:
      'Vista crepuscular do Pavilhão Alvorada em concreto e madeira refletido sobre espelho d’água escuro',
    galeria: [
      {
        url: heroPavilionImg,
        legenda: 'Perspectiva noturna do conjunto principal e passarela em pedra sobre espelho d’água.',
      },
      {
        url: projRes3Img,
        legenda: 'Detalhe do pátio descoberto e bancos em pedra bruta.',
      },
    ],
  },
];

export const ETAPAS_PROCESSO: EtapaProcesso[] = [
  {
    numero: '01',
    titulo: 'Escuta e Leitura do Sítio',
    duracao: 'Semanas 01–03',
    descricao:
      'Imersão no programa de necessidades, levantamento topográfico, estudo de insolação, ventos dominantes e legislação urbanística aplicável.',
    entregaveis: 'Estudo de Viabilidade · Diretrizes Bioclimáticas',
  },
  {
    numero: '02',
    titulo: 'Conceito Volumétrico e Materialidade',
    duracao: 'Semanas 04–08',
    descricao:
      'Definição do partido arquitetônico, proporções estruturais, maquetes digitais em escala real e curadoria física de pedras, madeiras e metais.',
    entregaveis: 'Anteprojeto Arquitetônico · Caderno de Materiais',
  },
  {
    numero: '03',
    titulo: 'Projeto Executivo e Compatibilização',
    duracao: 'Semanas 09–16',
    descricao:
      'Detalhamento construtivo minucioso em modelagem BIM, compatibilizando estrutura, luminotécnica, climatização, marcenaria e hidráulica.',
    entregaveis: 'Pranchas Executivas · Memorial Descritivo',
  },
  {
    numero: '04',
    titulo: 'Direção Estética e Entrega',
    duracao: 'Durante a Obra',
    descricao:
      'Visitas técnicas periódicas para aferição de acabamentos, alinhamento com engenheiros e artesãos e validação fiel do projeto concebido.',
    entregaveis: 'Acompanhamento de Obra · Curadoria Final',
  },
];
