import React, { useEffect, useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Sheet } from './ui/Sheet';
import { DADOS_CONTATO } from '../data/projetos';

interface NavbarProps {
  onNavigateContact: () => void;
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onNavigateContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 border-b ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-border'
            : 'bg-background/85 backdrop-blur-sm border-border/60'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-8">
          {/* Zona 1: Wordmark em uma linha */}
          <a
            href="#inicio"
            className="font-display text-xl sm:text-2xl font-medium tracking-[-0.02em] text-foreground whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Kalena Uchôa
          </a>

          {/* Zona 2: Links de navegação concisos em linha única */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8 text-sm font-normal text-muted-foreground"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: 1 Ação primária no desktop + Gatilho de Drawer no mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onNavigateContact}
              className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[40px] bg-primary text-primary-foreground text-xs tracking-[0.06em] uppercase font-bold hover:bg-secondary transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
              className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] border border-border text-foreground hover:bg-surface transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile com Sheet / Drawer */}
      <Sheet
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title="Kalena Uchôa"
      >
        <div className="flex flex-col justify-between h-full">
          <nav aria-label="Navegação móvel" className="flex flex-col divide-y divide-border">
            {NAV_LINKS.map((link, index) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleMobileNav(link.href)}
                className="flex items-center justify-between py-4 text-left font-display text-3xl font-normal text-foreground hover:text-muted-foreground transition-colors cursor-pointer min-h-[48px]"
              >
                <span>{link.label}</span>
                <span className="font-sans text-xs text-muted-foreground tabular-nums">
                  0{index + 1}
                </span>
              </button>
            ))}
          </nav>

          <div className="pt-8 border-t border-border space-y-5">
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="font-bold text-foreground">{DADOS_CONTATO.estudio}</p>
              <p>{DADOS_CONTATO.endereco}</p>
              <p className="tabular-nums">{DADOS_CONTATO.telefoneDisplay}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateContact();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[44px] bg-primary text-primary-foreground text-xs tracking-[0.06em] uppercase font-bold hover:bg-secondary transition-colors cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Sheet>
    </>
  );
};
