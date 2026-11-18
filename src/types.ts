export type CategoriaProjeto = 'Todos' | 'Residencial' | 'Comercial';

export interface ImagemGaleria {
  url: string;
  legenda: string;
  aspecto?: '16:9' | '4:3' | '3:4';
}

export interface ProjetoArquitetura {
  id: string;
  codigo: string;
  titulo: string;
  categoria: Exclude<CategoriaProjeto, 'Todos'>;
  subtipo: string;
  localizacao: string;
  ano: string;
  areaM2: string;
  materiais: string;
  resumo: string;
  conceito: string;
  imagemPrincipal: string;
  altPrincipal: string;
  galeria: ImagemGaleria[];
  destaque?: boolean;
}

export interface EtapaProcesso {
  numero: string;
  titulo: string;
  duracao: string;
  descricao: string;
  entregaveis: string;
}

export interface MetricaEstudio {
  valor: number;
  prefixo?: string;
  sufixo?: string;
  unidade: string;
  rotulo: string;
  contexto: string;
}

export interface DadosContatoForm {
  nome: string;
  email: string;
  telefone: string;
  tipologia: string;
  mensagem: string;
}
