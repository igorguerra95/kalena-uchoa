import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { PROJETOS_PORTFOLIO } from '../data/projetos';
import type { CategoriaProjeto, ProjetoArquitetura } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (projeto: ProjetoArquitetura) => void;
  onNavigateContact: () => void;
}

const CATEGORIAS: CategoriaProjeto[] = ['Todos', 'Residencial', 'Comercial'];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  onNavigateContact,
}) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaProjeto>('Todos');
  const prefersReducedMotion = useReducedMotion();

  const projetosFiltrados = useMemo(() => {
    if (categoriaAtiva === 'Todos') return PROJETOS_PORTFOLIO;
    return PROJETOS_PORTFOLIO.filter((p) => p.categoria === categoriaAtiva);
  }, [categoriaAtiva]);

  const getGridSpanClass = (index: number, total: number) => {
    if (total <= 2) return 'lg:col-span-6';
    const pattern = index % 4;
    if (pattern === 0) return 'lg:col-span-7';
    if (pattern === 1) return 'lg:col-span-5';
    if (pattern === 2) return 'lg:col-span-5';
    return 'lg:col-span-7';
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="titulo-portfolio"
      className="py-20 md:py-28 bg-background"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho da Seção em Grid Assimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4"
          >
            <p className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
              Acervo Selecionado
            </p>
            <h2
              id="titulo-portfolio"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.02] text-foreground"
            >
              Obras construídas entre o rigor estrutural e a paisagem.
            </h2>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col lg:items-end gap-6"
          >
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed lg:text-right max-w-md">
              Cada projeto nasce de uma resposta singular ao clima, ao terreno e ao
              uso cotidiano. Selecione uma obra para acessar a galeria completa e
              sua ficha técnica.
            </p>

            {/* Controles Interativos de Filtro por Categoria */}
            <div
              role="group"
              aria-label="Filtrar projetos por tipologia"
              className="inline-flex items-center p-1 bg-surface border border-border self-start lg:self-end"
            >
              {CATEGORIAS.map((cat) => {
                const ativo = categoriaAtiva === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={ativo}
                    onClick={() => setCategoriaAtiva(cat)}
                    className={`px-4 py-2 min-h-[40px] text-xs tracking-[0.06em] uppercase font-bold transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                      ativo
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Grid Editorial Assimétrico de 12 Colunas */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {projetosFiltrados.map((projeto, index) => (
            <motion.article
              key={projeto.id}
              layout={!prefersReducedMotion}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.65,
                delay: prefersReducedMotion ? 0 : (index % 2) * 0.08,
                ease: 'easeOut',
              }}
              className={`${getGridSpanClass(
                index,
                projetosFiltrados.length
              )} group border border-border bg-surface-elevated transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-elevated flex flex-col`}
            >
              <button
                type="button"
                onClick={() => onSelectProject(projeto)}
                aria-label={`Abrir galeria de fotos do projeto ${projeto.titulo}`}
                className="relative aspect-[4/3] w-full overflow-hidden text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <ArchitecturalImage
                  src={projeto.imagemPrincipal}
                  alt={projeto.altPrincipal}
                  fallbackTitle={projeto.titulo}
                  className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"
                />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 bg-background/95 text-foreground border border-border text-xs tracking-[0.06em] uppercase font-bold opacity-95 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-3.5 h-3.5 stroke-[1.75]" aria-hidden="true" />
                  <span>Ver galeria ({projeto.galeria.length})</span>
                </span>
              </button>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  {/* Metadados limpos sem caixas/pills */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted-foreground tabular-nums">
                    <span className="font-bold text-foreground">{projeto.codigo}</span>
                    <span aria-hidden="true">·</span>
                    <span>{projeto.categoria}</span>
                    <span aria-hidden="true">·</span>
                    <span>{projeto.localizacao}</span>
                    <span aria-hidden="true">·</span>
                    <span>{projeto.areaM2}</span>
                    <span aria-hidden="true">·</span>
                    <span>{projeto.ano}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                    <button
                      type="button"
                      onClick={() => onSelectProject(projeto)}
                      className="text-left hover:text-muted-foreground transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {projeto.titulo}
                    </button>
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {projeto.resumo}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
                  <span className="text-xs text-muted-foreground truncate">
                    {projeto.subtipo}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProject(projeto)}
                    className="inline-flex items-center gap-1.5 text-xs tracking-[0.06em] uppercase font-bold text-foreground hover:text-muted-foreground transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
                  >
                    <span>Ficha e fotos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Chamada discreta pós-portfólio */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
            Deseja avaliar a viabilidade arquitetônica de um terreno residencial ou
            espaço corporativo?
          </p>
          <button
            type="button"
            onClick={onNavigateContact}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[44px] bg-primary text-primary-foreground text-xs tracking-[0.08em] uppercase font-bold hover:bg-secondary transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
          >
            <span>Entrar em contato</span>
            <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
