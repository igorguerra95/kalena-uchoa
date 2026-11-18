import React from 'react';
import { MessageCircle } from 'lucide-react';
import { DADOS_CONTATO } from '../data/projetos';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${DADOS_CONTATO.telefoneWhatsApp}?text=${encodeURIComponent(
    'Olá, gostaria de conversar sobre um projeto com o escritório Kalena Uchôa - Arquitetura.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <span
        aria-hidden="true"
        className="whatsapp-ring-pulse absolute inset-0 rounded-full bg-emerald-600/35 pointer-events-none"
      />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Entrar em contato via WhatsApp pelo número ${DADOS_CONTATO.telefoneDisplay}`}
        title={`WhatsApp: ${DADOS_CONTATO.telefoneDisplay}`}
        className="relative flex items-center justify-center w-[52px] h-[52px] rounded-full bg-primary text-primary-foreground border border-primary-foreground/20 shadow-elevated hover:bg-secondary transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <MessageCircle className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
      </a>
    </div>
  );
};
