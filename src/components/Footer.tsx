import React from 'react';
import { DADOS_CONTATO } from '../data/projetos';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/15 py-12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-primary-foreground/15">
          <div className="space-y-1.5">
            <p className="font-display text-2xl font-medium tracking-tight text-primary-foreground">
              {DADOS_CONTATO.estudio}
            </p>
            <p className="text-xs text-primary-foreground/70">
              {DADOS_CONTATO.registroCau}
            </p>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs tracking-[0.08em] uppercase text-primary-foreground/80"
          >
            <a href="#inicio" className="hover:text-primary-foreground transition-colors whitespace-nowrap">
              Início
            </a>
            <a href="#portfolio" className="hover:text-primary-foreground transition-colors whitespace-nowrap">
              Portfólio
            </a>
            <a href="#sobre" className="hover:text-primary-foreground transition-colors whitespace-nowrap">
              Sobre
            </a>
            <a href="#contato" className="hover:text-primary-foreground transition-colors whitespace-nowrap">
              Contato
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-primary-foreground/65">
          <p>
            {DADOS_CONTATO.endereco} · Tel:{' '}
            <span className="tabular-nums">{DADOS_CONTATO.telefoneDisplay}</span>
          </p>
          <p>
            © {new Date().getFullYear()} {DADOS_CONTATO.estudio}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
