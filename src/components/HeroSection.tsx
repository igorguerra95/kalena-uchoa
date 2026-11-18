import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { CountUpStat } from './CountUpStat';
import { IMAGEM_HERO_PRINCIPAL, METRICAS_ESTUDIO } from '../data/projetos';

interface HeroSectionProps {
  onNavigateContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateContact }) => {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: (step: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: prefersReducedMotion ? 0 : step * 0.08,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="inicio"
      aria-label="Apresentação do estúdio Kalena Uchôa - Arquitetura"
      className="pt-24 md:pt-32 pb-12 md:pb-20 bg-architectural-grain"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Divisão Editorial Assimétrica em 12 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Coluna Esquerda: Hierarquia Tipográfica */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2 lg:py-4">
            <div className="space-y-6 md:space-y-8">
              <motion.p
                custom={0}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="text-xs sm:text-sm tracking-[0.14em] uppercase text-muted-foreground font-normal"
              >
                Kalena Uchôa · Arquitetura Autoral e Design Espacial
              </motion.p>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="font-display text-[clamp(3rem,5.4vw,5.75rem)] leading-[0.96] tracking-[-0.03em] font-medium text-foreground"
              >
                Espaços onde a matéria encontra a permanência.
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground font-light"
              >
                Projetamos residências singulares e sedes corporativas guiadas pela
                honestidade estrutural, pelo domínio da luz natural e pela precisão
                construtiva em cada detalhe.
              </motion.p>
            </div>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="mt-8 lg:mt-12 pt-6 border-t border-border flex flex-wrap items-center gap-6"
            >
              <button
                type="button"
                onClick={onNavigateContact}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 min-h-[48px] bg-primary text-primary-foreground text-xs tracking-[0.08em] uppercase font-bold hover:bg-secondary transition-colors duration-200 shadow-architectural cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring whitespace-nowrap shrink-0"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 py-2.5 text-sm font-normal text-foreground hover:text-muted-foreground transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <span>Explorar obras selecionadas</span>
                <ArrowDownRight className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Coluna Direita: Fotografia Arquitetônica Dominante */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="lg:col-span-6 relative min-h-[340px] sm:min-h-[440px] lg:min-h-[560px] border border-border shadow-architectural overflow-hidden group"
          >
            <ArchitecturalImage
              src={IMAGEM_HERO_PRINCIPAL}
              alt="Pavilhão Alvorada projetado por Kalena Uchôa em concreto aparente, madeira freijó e espelho d’água ao entardecer"
              fallbackTitle="Pavilhão Alvorada"
              priority
              className="w-full h-full lg:absolute lg:inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Scrim de Contraste Medido para Legibilidade sobre Fotografia */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent pointer-events-none"
            />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-primary-foreground">
              <div>
                <p className="text-xs tracking-[0.12em] uppercase text-primary-foreground/80">
                  Obra em Destaque
                </p>
                <p className="font-display text-2xl sm:text-3xl font-medium tracking-tight mt-0.5">
                  Pavilhão Alvorada
                </p>
              </div>
              <p className="text-xs sm:text-sm text-primary-foreground/85 tracking-wide">
                Brasília, DF · 720 m² · Concreto e Freijó
              </p>
            </div>
          </motion.div>
        </div>

        {/* Faixa de Métricas Arquitetônicas (Full-width abaixo da divisão hero) */}
        <div className="mt-14 md:mt-20 border-t border-b border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {METRICAS_ESTUDIO.map((metrica, idx) => (
            <motion.div
              key={metrica.rotulo}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.65,
                delay: prefersReducedMotion ? 0 : idx * 0.08,
                ease: 'easeOut',
              }}
              className="py-7 sm:px-6 first:sm:pl-0 last:sm:pr-0 flex flex-col justify-between"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-foreground">
                  <CountUpStat
                    value={metrica.valor}
                    padZero={metrica.valor < 10}
                  />
                </span>
                <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  {metrica.unidade}
                </span>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-foreground">
                  {metrica.rotulo}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground mt-1">
                  {metrica.contexto}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
