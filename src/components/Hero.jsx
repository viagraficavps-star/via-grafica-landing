import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Printer, 
  Building2, 
  Package, 
  Truck, 
  CheckCircle2, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { QUICK_CATEGORIES, GALLERY_DATA } from '../data/viaGraficaData';

const categoryIcons = {
  Printer,
  Building2,
  Package,
  Truck
};

export default function Hero({ onOpenBudgetModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel every 3.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_DATA.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % GALLERY_DATA.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
  };

  const activeWork = GALLERY_DATA[currentSlide];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 bg-gradient-to-b from-[#0b1a11] via-[#102418] to-[#08120b] text-white overflow-hidden flex flex-col justify-between selection:bg-[#8DFBB0] selection:text-black">
      
      {/* Sophisticated Vibrant Green (#8DFBB0) Ambient Radial Glow & Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8DFBB0]/25 via-[#102418]/60 to-[#050c07] pointer-events-none"></div>
      
      {/* Blurred Luminous Spotlight centered behind Content */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8DFBB0]/18 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#49C926]/20 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Luminous Floating Micro-Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#8DFBB0] shadow-[0_0_12px_#8DFBB0] animate-ping opacity-75"></div>
        <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 rounded-full bg-[#8DFBB0] shadow-[0_0_10px_#8DFBB0] animate-float opacity-80"></div>
      </div>

      {/* Main Hero Layout (2 Columns) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center pt-4 pb-10">
          
          {/* LADO ESQUERDO: Conteúdo Persuasivo, Limpo & Tipografia ALL CAPS */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Top Luminous Badge (#8DFBB0 Accent) */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl border border-[#8DFBB0]/40 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(141,251,176,0.15)] animate-fadeIn">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8DFBB0] animate-pulse shadow-[0_0_8px_#8DFBB0]"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8DFBB0]">
                SOLUÇÕES PREMIUM EM IMPRESSÃO & COMUNICAÇÃO VISUAL
              </span>
              <Sparkles size={14} className="text-[#8DFBB0]" />
            </div>

            {/* Título Principal 100% ALL CAPS (Letras Maiúsculas) */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tight uppercase">
              A GRÁFICA COMPLETA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8DFBB0] via-[#49C926] to-[#A2FF43] drop-shadow-[0_0_35px_rgba(141,251,176,0.4)]">
                PARA SUA EMPRESA CRESCER
              </span>
            </h1>

            {/* Subtítulo Categorizado */}
            <p className="text-base sm:text-xl text-gray-200 font-light leading-relaxed max-w-xl">
              <span className="text-white font-semibold">IMPRESSÃO DIGITAL</span> • <span className="text-white font-semibold">COMUNICAÇÃO VISUAL</span> • <span className="text-white font-semibold">FACHADAS</span> • <span className="text-white font-semibold">BRINDES</span> • <span className="text-white font-semibold">ADESIVAÇÃO</span>
            </p>

            {/* CTAs (Botão Verde + Botão Transparente) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Botão Principal Verde #49C926 com detalhes #8DFBB0 */}
              <button
                onClick={() => onOpenBudgetModal()}
                className="group relative inline-flex items-center justify-center gap-3 bg-[#49C926] hover:bg-[#3da71f] text-white font-black text-lg px-9 py-4 rounded-2xl shadow-[0_0_30px_rgba(73,201,38,0.45)] hover:shadow-[0_0_45px_rgba(141,251,176,0.65)] transition-all duration-300 transform hover:-translate-y-1 border border-[#8DFBB0]/40"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Botão Secundário Transparente Glassmorphism */}
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/12 text-white font-bold text-base px-8 py-4 rounded-2xl backdrop-blur-md border border-white/20 hover:border-[#8DFBB0] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Conheça nossos serviços</span>
              </a>
            </div>

            {/* Trust Checkmarks Row */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm sm:text-base font-semibold text-gray-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#8DFBB0]" />
                  <span>Desde 2006</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#8DFBB0]" />
                  <span>Produção Própria</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#8DFBB0]" />
                  <span>Atendimento em todo Goiás</span>
                </div>
              </div>
            </div>

          </div>

          {/* LADO DIREITO: Vitrine de Imagens Expandida (Sem Card Superior, Card Inferior Simplificado) */}
          <div 
            className="lg:col-span-6 relative flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            
            {/* Ambient Backlight Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8DFBB0]/30 via-transparent to-[#49C926]/20 rounded-3xl blur-2xl transform rotate-1 pointer-events-none"></div>

            {/* Main Showcase Frame Container */}
            <div className="relative w-full bg-gradient-to-b from-white/12 via-white/5 to-white/0 p-2 sm:p-3 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
              
              {/* Maximized Image Showcase Area (h-[420px] sm:h-[480px] lg:h-[520px]) */}
              <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
                
                {/* Active Image (Maximum Usable Area) */}
                <img
                  key={activeWork.image}
                  src={activeWork.image}
                  alt={activeWork.title}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-700 animate-fadeIn"
                />

                {/* Subtle Gradient Overlay for Text Readability at Bottom Only */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>

                {/* Navigation Arrow Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#49C926] text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 hover:border-[#8DFBB0] shadow-lg"
                  aria-label="Trabalho Anterior"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#49C926] text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 hover:border-[#8DFBB0] shadow-lg"
                  aria-label="Próximo Trabalho"
                >
                  <ChevronRight size={22} />
                </button>

                {/* SIMPLIFIED BOTTOM CARD: ONLY Title (No description, no secondary text) */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/75 backdrop-blur-xl py-3 px-5 rounded-2xl border border-white/15 text-center">
                  <h3 className="font-heading font-black text-base sm:text-xl text-white tracking-wide">
                    {activeWork.title}
                  </h3>
                </div>

              </div>

              {/* Carousel Slide Indicators */}
              <div className="flex items-center justify-center gap-2 mt-3.5 pb-1">
                {GALLERY_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentSlide
                        ? 'w-8 h-2.5 bg-[#8DFBB0] shadow-[0_0_12px_#8DFBB0]'
                        : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Ir para trabalho ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 4-Column Quick Category Bar (Modern Dark Glassmorphism Anchored at Bottom) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_CATEGORIES.map((cat) => {
            const IconComp = categoryIcons[cat.icon] || Printer;
            return (
              <a
                key={cat.id}
                href="#servicos"
                className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#8DFBB0] p-5 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300 group flex items-center gap-4 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8DFBB0]/15 text-[#8DFBB0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#49C926] group-hover:text-white transition-all shadow-[0_0_15px_rgba(141,251,176,0.2)]">
                  <IconComp size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xs sm:text-sm text-white tracking-wider uppercase mb-0.5 group-hover:text-[#8DFBB0] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-light leading-snug">
                    {cat.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

    </section>
  );
}
