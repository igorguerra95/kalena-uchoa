import React, { useCallback, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutProcessSection } from './components/AboutProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectLightbox } from './components/ProjectLightbox';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import type { ProjetoArquitetura } from './types';

export default function App() {
  const [projetoSelecionado, setProjetoSelecionado] =
    useState<ProjetoArquitetura | null>(null);
  const [contatoContexto, setContatoContexto] = useState<{
    tipologia?: string;
    projeto?: string;
  }>({});

  const scrollToContact = useCallback(() => {
    const contatoEl = document.getElementById('contato');
    if (contatoEl) {
      contatoEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleRequestContactFromLightbox = useCallback(
    (tipologia: string, tituloProjeto: string) => {
      setProjetoSelecionado(null);
      setContatoContexto({ tipologia, projeto: tituloProjeto });
      window.setTimeout(() => {
        scrollToContact();
      }, 150);
    },
    [scrollToContact]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:text-xs focus:uppercase focus:tracking-wider"
        >
          Ir para o conteúdo principal
        </a>

        <Navbar onNavigateContact={scrollToContact} />

        <main id="conteudo-principal" className="flex-1">
          <HeroSection onNavigateContact={scrollToContact} />
          <PortfolioSection
            onSelectProject={setProjetoSelecionado}
            onNavigateContact={scrollToContact}
          />
          <AboutProcessSection onNavigateContact={scrollToContact} />
          <ContactSection
            tipologiaInicial={contatoContexto.tipologia}
            projetoReferencia={contatoContexto.projeto}
          />
        </main>

        <Footer />

        <ProjectLightbox
          projeto={projetoSelecionado}
          onClose={() => setProjetoSelecionado(null)}
          onRequestContact={handleRequestContactFromLightbox}
        />

        <WhatsAppFloatingButton />
      </div>
    </MotionConfig>
  );
}
