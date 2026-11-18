import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Clock, MapPin, Phone } from 'lucide-react';
import { DADOS_CONTATO } from '../data/projetos';
import type { DadosContatoForm } from '../types';

interface ContactSectionProps {
  tipologiaInicial?: string;
  projetoReferencia?: string;
}

const ESTADO_INICIAL: DadosContatoForm = {
  nome: '',
  email: '',
  telefone: '',
  tipologia: 'Residencial',
  mensagem: '',
};

export const ContactSection: React.FC<ContactSectionProps> = ({
  tipologiaInicial,
  projetoReferencia,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState<DadosContatoForm>(ESTADO_INICIAL);
  const [erros, setErros] = useState<Partial<Record<keyof DadosContatoForm, string>>>({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (tipologiaInicial) {
      setFormData((prev) => ({
        ...prev,
        tipologia: tipologiaInicial,
        mensagem: projetoReferencia
          ? `Gostaria de conversar sobre um novo projeto com referência estética na obra "${projetoReferencia}".`
          : prev.mensagem,
      }));
      setEnviado(false);
    }
  }, [tipologiaInicial, projetoReferencia]);

  const validar = (): boolean => {
    const novosErros: Partial<Record<keyof DadosContatoForm, string>> = {};

    if (!formData.nome.trim() || formData.nome.trim().length < 3) {
      novosErros.nome = 'Informe seu nome completo para atendimento formal.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      novosErros.email = 'Insira um endereço de e-mail válido.';
    }

    const digitosTelefone = formData.telefone.replace(/\D/g, '');
    if (digitosTelefone.length < 10) {
      novosErros.telefone = 'Informe um telefone ou WhatsApp com DDD.';
    }

    if (!formData.mensagem.trim() || formData.mensagem.trim().length < 12) {
      novosErros.mensagem = 'Descreva brevemente o terreno, metragem ou escopo desejado.';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validar()) return;

    setEnviando(true);
    window.setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 450);
  };

  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="py-20 md:py-28 bg-obsidian-surface text-primary-foreground border-t border-border-strong"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Convite Formal e Dados Reais */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-4">
              <p className="text-xs tracking-[0.14em] uppercase text-primary-foreground/70">
                Novos Projetos & Consultoria
              </p>
              <h2
                id="titulo-contato"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.03] text-primary-foreground"
              >
                Inicie uma conversa sobre o seu próximo espaço.
              </h2>
              <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed max-w-md font-light">
                Atendemos um número restrito de encomendas por semestre para
                assegurar dedicação autoral integral em cada prancha e visita de obra.
              </p>
            </div>

            {/* Bloco de Informações de Contato Solicitadas */}
            <dl className="border-t border-primary-foreground/20 divide-y divide-primary-foreground/15 text-sm">
              <div className="py-5 flex items-start gap-4">
                <MapPin
                  className="w-4 h-4 stroke-[1.5] text-primary-foreground/75 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div className="space-y-1">
                  <dt className="text-xs uppercase tracking-[0.1em] text-primary-foreground/65">
                    Endereço
                  </dt>
                  <dd className="text-base text-primary-foreground font-normal">
                    {DADOS_CONTATO.endereco}
                  </dd>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <Phone
                  className="w-4 h-4 stroke-[1.5] text-primary-foreground/75 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div className="space-y-1">
                  <dt className="text-xs uppercase tracking-[0.1em] text-primary-foreground/65">
                    Telefone e WhatsApp
                  </dt>
                  <dd className="text-base text-primary-foreground tabular-nums font-normal">
                    <a
                      href={`https://wa.me/${DADOS_CONTATO.telefoneWhatsApp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
                    >
                      {DADOS_CONTATO.telefoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <Clock
                  className="w-4 h-4 stroke-[1.5] text-primary-foreground/75 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div className="space-y-1">
                  <dt className="text-xs uppercase tracking-[0.1em] text-primary-foreground/65">
                    Horário de Atendimento
                  </dt>
                  <dd className="text-base text-primary-foreground font-normal">
                    {DADOS_CONTATO.horario}
                  </dd>
                </div>
              </div>
            </dl>
          </motion.div>

          {/* Coluna Direita: Formulário de Briefing Arquitetônico */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7 border border-primary-foreground/20 bg-primary/40 p-6 sm:p-10"
          >
            {enviado ? (
              <div className="py-12 space-y-6">
                <div className="inline-flex items-center gap-3 text-primary-foreground">
                  <CheckCircle2 className="w-6 h-6 stroke-[1.5]" aria-hidden="true" />
                  <span className="text-xs tracking-[0.12em] uppercase font-bold">
                    Solicitação Registrada
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-primary-foreground">
                  Agradecemos o seu contato, {formData.nome.split(' ')[0]}.
                </h3>
                <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed max-w-lg">
                  Recebemos as informações preliminares para o seu projeto{' '}
                  <strong className="text-primary-foreground font-bold">
                    {formData.tipologia}
                  </strong>
                  . Nossa coordenação técnica retornará pelo telefone{' '}
                  <span className="tabular-nums">{formData.telefone}</span> ou e-mail{' '}
                  {formData.email} para agendar uma reunião inicial.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(ESTADO_INICIAL);
                      setErros({});
                      setEnviado(false);
                    }}
                    className="px-6 py-3 min-h-[44px] border border-primary-foreground/30 text-xs tracking-[0.08em] uppercase font-bold text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contato-nome"
                      className="block text-xs tracking-[0.08em] uppercase text-primary-foreground/80"
                    >
                      Nome completo
                    </label>
                    <input
                      id="contato-nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => {
                        setFormData({ ...formData, nome: e.target.value });
                        if (erros.nome) setErros({ ...erros, nome: undefined });
                      }}
                      placeholder="Ex.: Mariana Vasconcelos"
                      className="w-full min-h-[46px] px-4 py-3 bg-primary/60 border border-primary-foreground/25 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none focus:border-primary-foreground transition-colors"
                    />
                    {erros.nome && (
                      <p className="text-xs text-red-300" role="alert">
                        {erros.nome}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contato-email"
                      className="block text-xs tracking-[0.08em] uppercase text-primary-foreground/80"
                    >
                      E-mail
                    </label>
                    <input
                      id="contato-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (erros.email) setErros({ ...erros, email: undefined });
                      }}
                      placeholder="nome@empresa.com.br"
                      className="w-full min-h-[46px] px-4 py-3 bg-primary/60 border border-primary-foreground/25 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none focus:border-primary-foreground transition-colors"
                    />
                    {erros.email && (
                      <p className="text-xs text-red-300" role="alert">
                        {erros.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contato-telefone"
                      className="block text-xs tracking-[0.08em] uppercase text-primary-foreground/80"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="contato-telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => {
                        setFormData({ ...formData, telefone: e.target.value });
                        if (erros.telefone) setErros({ ...erros, telefone: undefined });
                      }}
                      placeholder="(00) 00000-0000"
                      className="w-full min-h-[46px] px-4 py-3 bg-primary/60 border border-primary-foreground/25 text-sm text-primary-foreground placeholder:text-primary-foreground/45 tabular-nums focus:outline-none focus:border-primary-foreground transition-colors"
                    />
                    {erros.telefone && (
                      <p className="text-xs text-red-300" role="alert">
                        {erros.telefone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contato-tipologia"
                      className="block text-xs tracking-[0.08em] uppercase text-primary-foreground/80"
                    >
                      Tipologia do Projeto
                    </label>
                    <select
                      id="contato-tipologia"
                      name="tipologia"
                      value={formData.tipologia}
                      onChange={(e) =>
                        setFormData({ ...formData, tipologia: e.target.value })
                      }
                      className="w-full min-h-[46px] px-4 py-3 bg-primary border border-primary-foreground/25 text-sm text-primary-foreground focus:outline-none focus:border-primary-foreground transition-colors"
                    >
                      <option value="Residencial">Residencial</option>
                      <option value="Comercial">Comercial e Corporativo</option>
                      <option value="Interiores">Arquitetura de Interiores</option>
                      <option value="Consultoria">Estudo de Viabilidade</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contato-mensagem"
                    className="block text-xs tracking-[0.08em] uppercase text-primary-foreground/80"
                  >
                    Escopo, localidade e prazo desejado
                  </label>
                  <textarea
                    id="contato-mensagem"
                    name="mensagem"
                    rows={4}
                    required
                    value={formData.mensagem}
                    onChange={(e) => {
                      setFormData({ ...formData, mensagem: e.target.value });
                      if (erros.mensagem) setErros({ ...erros, mensagem: undefined });
                    }}
                    placeholder="Descreva a localização do terreno ou imóvel, área aproximada em m² e expectativas principais."
                    className="w-full px-4 py-3 bg-primary/60 border border-primary-foreground/25 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none focus:border-primary-foreground transition-colors resize-y"
                  />
                  {erros.mensagem && (
                    <p className="text-xs text-red-300" role="alert">
                      {erros.mensagem}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-primary-foreground/65">
                    Atendimento confidencial sob agendamento prévio.
                  </p>
                  <button
                    type="submit"
                    disabled={enviando}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] bg-primary-foreground text-primary text-xs tracking-[0.08em] uppercase font-bold hover:bg-surface transition-colors disabled:opacity-60 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>{enviando ? 'Enviando...' : 'Entrar em contato'}</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
