import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { ETAPAS_PROCESSO, IMAGEM_ATELIER_SOBRE } from '../data/projetos';

interface AboutProcessSectionProps {
  onNavigateContact: () => void;
}

export const AboutProcessSection: React.FC<AboutProcessSectionProps> = ({
  onNavigateContact,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="py-20 md:py-28 bg-surface border-t border-border"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Bloco 1: Visão Estética & Sobre o Estúdio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Fotografia Vertical 3:4 do Atelier */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="border border-border bg-surface-elevated p-3 shadow-architectural">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <ArchitecturalImage
                  src={IMAGEM_ATELIER_SOBRE}
                  alt="Mesa de trabalho do estúdio Kalena Uchôa com amostras de pedra travertino, concreto, aço escovado, freijó e pranchas técnicas"
                  fallbackTitle="Ateliê Kalena Uchôa"
                  className="w-full h-full"
                />
              </div>
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs text-muted-foreground">
                <span>Estudo de Materialidade</span>
                <span>Pedra · Concreto · Madeira</span>
              </div>
            </div>
          </motion.div>

          {/* Manifesto e Visão Estética */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8 lg:pt-4"
          >
            <div className="space-y-4">
              <p className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
                Sobre o Estúdio · Visão Estética
              </p>
              <h2
                id="titulo-sobre"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.04] text-foreground"
              >
                Rigor estrutural e silêncio visual como fundamento do habitar.
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground font-light max-w-2xl">
              <p>
                À frente do escritório <strong className="font-bold text-foreground">Kalena Uchôa - Arquitetura</strong>,
                conduzimos cada encomenda como uma investigação específica entre
                topografia, técnica construtiva e memória material. Rejeitamos o
                excesso ornamental para revelar a força expressiva da estrutura.
              </p>
              <p>
                Nossa prática combina precisão executiva contemporânea com o repertório
                brasileiro da matéria natural — concreto aparente, pedra bruta,
                aço e madeiras certificadas — desenhando espaços que envelhecem com
                dignidade e respondem às variações da luz ao longo do dia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="space-y-1.5">
                <p className="font-display text-2xl font-medium text-foreground">
                  Arquitetura Residencial
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Casas autorais, pavilhões de campo e interiores residenciais sob
                  medida com implantação bioclimática.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-display text-2xl font-medium text-foreground">
                  Arquitetura Comercial
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sedes institucionais, galerias, clínicas e flagships que traduzem
                  autoridade espacial e permanência de marca.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bloco 2: Processo Criativo */}
        <div className="mt-20 md:mt-28 pt-14 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-6 space-y-3">
              <p className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
                Metodologia de Trabalho
              </p>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-foreground">
                Processo Criativo
              </h3>
            </div>
            <div className="lg:col-span-6 lg:flex lg:justify-end">
              <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
                Quatro etapas transparentes que garantem previsibilidade financeira,
                compatibilização técnica rigorosa e fidelidade na execução da obra.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-border bg-background divide-y md:divide-y-0 md:divide-x divide-border">
            {ETAPAS_PROCESSO.map((etapa, idx) => (
              <motion.div
                key={etapa.numero}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: prefersReducedMotion ? 0 : idx * 0.08,
                  ease: 'easeOut',
                }}
                className="p-7 sm:p-8 flex flex-col justify-between gap-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground tabular-nums pb-4 border-b border-border">
                    <span className="font-bold text-foreground">{etapa.numero}</span>
                    <span>{etapa.duracao}</span>
                  </div>

                  <h4 className="font-display text-2xl font-medium tracking-tight text-foreground">
                    {etapa.titulo}
                  </h4>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {etapa.descricao}
                  </p>
                </div>

                <p className="text-xs text-foreground font-medium pt-4 border-t border-border">
                  {etapa.entregaveis}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <button
              type="button"
              onClick={onNavigateContact}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 min-h-[44px] bg-primary text-primary-foreground text-xs tracking-[0.08em] uppercase font-bold hover:bg-secondary transition-colors cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
