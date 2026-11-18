import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import type { ProjetoArquitetura } from '../types';

interface ProjectLightboxProps {
  projeto: ProjetoArquitetura | null;
  onClose: () => void;
  onRequestContact: (tipologia: string, tituloProjeto: string) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  projeto,
  onClose,
  onRequestContact,
}) => {
  const [indiceFoto, setIndiceFoto] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIndiceFoto(0);
  }, [projeto?.id]);

  useEffect(() => {
    if (!projeto) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        setIndiceFoto((prev) => (prev + 1) % projeto.galeria.length);
      } else if (event.key === 'ArrowLeft') {
        setIndiceFoto(
          (prev) => (prev - 1 + projeto.galeria.length) % projeto.galeria.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projeto, onClose]);

  const fotoAtual = projeto ? projeto.galeria[indiceFoto] ?? projeto.galeria[0] : null;

  return (
    <AnimatePresence>
      {projeto && fotoAtual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria e ficha técnica: ${projeto.titulo}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Container Modal */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-6xl max-h-[92vh] bg-background text-foreground border border-border shadow-elevated overflow-y-auto grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Coluna de Mídia (Galeria) */}
            <div className="lg:col-span-7 bg-primary text-primary-foreground flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <ArchitecturalImage
                  src={fotoAtual.url}
                  alt={`${projeto.titulo} — ${fotoAtual.legenda}`}
                  fallbackTitle={projeto.titulo}
                  priority
                  className="w-full h-full"
                />

                {projeto.galeria.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Fotografia anterior"
                      onClick={() =>
                        setIndiceFoto(
                          (prev) =>
                            (prev - 1 + projeto.galeria.length) %
                            projeto.galeria.length
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-primary/80 text-primary-foreground border border-primary-foreground/20 hover:bg-primary transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label="Próxima fotografia"
                      onClick={() =>
                        setIndiceFoto((prev) => (prev + 1) % projeto.galeria.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-primary/80 text-primary-foreground border border-primary-foreground/20 hover:bg-primary transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              {/* Legenda e Miniaturas */}
              <div className="p-5 sm:p-6 border-t border-primary-foreground/15 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs sm:text-sm text-primary-foreground/85 leading-relaxed">
                    {fotoAtual.legenda}
                  </p>
                  <span className="text-xs text-primary-foreground/70 tabular-nums whitespace-nowrap shrink-0">
                    {indiceFoto + 1} / {projeto.galeria.length}
                  </span>
                </div>

                {projeto.galeria.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-1">
                    {projeto.galeria.map((img, i) => {
                      const selecionada = i === indiceFoto;
                      return (
                        <button
                          key={`${projeto.id}-thumb-${i}`}
                          type="button"
                          onClick={() => setIndiceFoto(i)}
                          aria-label={`Selecionar imagem ${i + 1} de ${projeto.galeria.length}`}
                          className={`relative w-20 aspect-[4/3] shrink-0 overflow-hidden border transition-all cursor-pointer ${
                            selecionada
                              ? 'border-primary-foreground opacity-100'
                              : 'border-primary-foreground/25 opacity-55 hover:opacity-90'
                          }`}
                        >
                          <ArchitecturalImage
                            src={img.url}
                            alt={img.legenda}
                            className="w-full h-full"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Coluna Editorial & Ficha Técnica */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-border">
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground">
                      {projeto.categoria} · {projeto.subtipo}
                    </p>
                    <h3 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-foreground mt-1">
                      {projeto.titulo}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Fechar galeria"
                    className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] border border-border text-foreground hover:bg-surface transition-colors shrink-0 cursor-pointer"
                  >
                    <X className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
                  </button>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {projeto.conceito}
                </p>

                {/* Ficha Técnica Tabular */}
                <dl className="border-t border-border divide-y divide-border text-sm">
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-muted-foreground">Localização</dt>
                    <dd className="font-medium text-foreground text-right">
                      {projeto.localizacao}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-muted-foreground">Área Construída</dt>
                    <dd className="font-medium text-foreground tabular-nums text-right">
                      {projeto.areaM2}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-muted-foreground">Ano de Conclusão</dt>
                    <dd className="font-medium text-foreground tabular-nums text-right">
                      {projeto.ano}
                    </dd>
                  </div>
                  <div className="py-3 space-y-1">
                    <dt className="text-muted-foreground">Paleta Material</dt>
                    <dd className="font-medium text-foreground leading-relaxed">
                      {projeto.materiais}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => onRequestContact(projeto.categoria, projeto.titulo)}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 min-h-[48px] bg-primary text-primary-foreground text-xs tracking-[0.08em] uppercase font-bold hover:bg-secondary transition-colors cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
