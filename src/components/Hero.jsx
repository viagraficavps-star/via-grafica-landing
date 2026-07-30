import React from 'react';
import { 
  ArrowRight, 
  Printer, 
  Building2, 
  Package, 
  Truck, 
  Star, 
  CheckCircle2, 
  Sparkles,
  CreditCard,
  Building,
  Tag,
  Coffee,
  Shirt,
  FileText
} from 'lucide-react';
import { QUICK_CATEGORIES } from '../data/viaGraficaData';

const categoryIcons = {
  Printer,
  Building2,
  Package,
  Truck
};

export default function Hero({ onOpenBudgetModal }) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 bg-[#0A1009] text-white overflow-hidden flex flex-col justify-between selection:bg-[#7CF503] selection:text-black">
      
      {/* Dynamic Luminous Ambient Background & Grid Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7CF503]/20 via-[#0A1009] to-[#040804] pointer-events-none"></div>
      
      {/* Blurred Luminous Green Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7CF503]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#49C926]/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle Geometric Grid & Particle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      ></div>

      {/* Luminous Micro-Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full bg-[#7CF503] shadow-[0_0_12px_#7CF503] animate-ping opacity-75"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#7CF503] shadow-[0_0_10px_#7CF503] animate-float opacity-80"></div>
        <div className="absolute top-1/4 right-10 w-2 h-2 rounded-full bg-[#49C926] shadow-[0_0_12px_#49C926] animate-pulse opacity-60"></div>
      </div>

      {/* Main Hero Layout (2 Columns) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 pb-12">
          
          {/* LADO ESQUERDO: Conteúdo Persuasivo & Chamada Principal */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Luminous Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl border border-[#7CF503]/40 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(124,245,3,0.15)] animate-fadeIn">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7CF503] animate-pulse shadow-[0_0_8px_#7CF503]"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#7CF503]">
                Soluções Premium em Impressão & Comunicação Visual
              </span>
              <Sparkles size={14} className="text-[#7CF503]" />
            </div>

            {/* Título Principal (60px - 72px) */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[66px] font-black text-white leading-[1.05] tracking-tight">
              A GRÁFICA COMPLETA <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CF503] via-[#49C926] to-[#A2FF43] drop-shadow-[0_0_35px_rgba(124,245,3,0.3)]">
                PARA SUA EMPRESA CRESCER
              </span>
            </h1>

            {/* Subtítulo Categorizado */}
            <p className="text-base sm:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
              <span className="text-white font-semibold">Impressão Digital</span> • <span className="text-white font-semibold">Comunicação Visual</span> • <span className="text-white font-semibold">Fachadas</span> • <span className="text-white font-semibold">Brindes Personalizados</span> • <span className="text-white font-semibold">Adesivação</span>
            </p>

            {/* CTAs (Botão Verde + Botão Transparente) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Botão Principal Verde #7CF503 */}
              <button
                onClick={() => onOpenBudgetModal()}
                className="group relative inline-flex items-center justify-center gap-3 bg-[#7CF503] hover:bg-[#6be002] text-black font-black text-lg px-9 py-4 rounded-2xl shadow-[0_0_30px_rgba(124,245,3,0.4)] hover:shadow-[0_0_45px_rgba(124,245,3,0.7)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Botão Secundário Transparente Glassmorphism */}
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/12 text-white font-bold text-base px-8 py-4 rounded-2xl backdrop-blur-md border border-white/20 hover:border-[#7CF503] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Conheça nossos serviços</span>
              </a>
            </div>

            {/* Social Proof & Trust Badges */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              
              {/* Avaliações do Google */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="text-amber-400" />
                  ))}
                </div>
                <span className="font-extrabold text-white text-base">4.6 / 5.0</span>
                <span className="text-gray-400 text-sm font-medium">
                  • Mais de <strong className="text-white font-bold">4.600 avaliações no Google</strong>
                </span>
              </div>

              {/* Checkmarks de Confiança */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#7CF503]" />
                  <span>Desde 2006</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#7CF503]" />
                  <span>Produção Própria</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#7CF503]" />
                  <span>Atendimento em todo Goiás</span>
                </div>
              </div>

            </div>

          </div>

          {/* LADO DIREITO: Mockup 3D Integrado com Perspectiva & Elementos Flutuantes */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Backlight Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7CF503]/30 via-transparent to-[#49C926]/20 rounded-3xl blur-2xl transform rotate-3"></div>

            {/* Main 3D Card Glass Panel Container */}
            <div className="relative w-full max-w-lg bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-3 sm:p-5 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group transition-transform duration-500 hover:scale-[1.02]">
              
              {/* Generated 3D Composition Graphic */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/hero_mockup_3d.png"
                  alt="Mockup 3D Produtos Via Gráfica: Cartão de Visita, Fachada ACM, Banner, Adesivo, Caneca, Camiseta e Papel Timbrado"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1009] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* FLOATING 3D GLASS BADGES (Organizados em Perspectiva 3D) */}

              {/* 1. Cartão de Visita */}
              <div className="absolute -top-4 -left-4 bg-[#111810]/95 backdrop-blur-xl border border-[#7CF503]/50 text-white p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-3 animate-float pointer-events-none">
                <div className="p-2 rounded-xl bg-[#7CF503]/20 text-[#7CF503]">
                  <CreditCard size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase text-[#7CF503] tracking-wide">Cartão de Visita</p>
                  <p className="text-[10px] text-gray-300 font-medium">Soft-Touch & Verniz</p>
                </div>
              </div>

              {/* 2. Fachada ACM */}
              <div className="absolute top-1/4 -right-5 bg-[#111810]/95 backdrop-blur-xl border border-[#7CF503]/50 text-white p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-3 animate-float [animation-delay:1s] pointer-events-none">
                <div className="p-2 rounded-xl bg-[#7CF503]/20 text-[#7CF503]">
                  <Building size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase text-[#7CF503] tracking-wide">Fachada ACM</p>
                  <p className="text-[10px] text-gray-300 font-medium">ACM & LED 3D</p>
                </div>
              </div>

              {/* 3. Banner & Adesivo */}
              <div className="absolute bottom-12 -left-6 bg-[#111810]/95 backdrop-blur-xl border border-[#7CF503]/50 text-white p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-3 animate-float [animation-delay:1.5s] pointer-events-none">
                <div className="p-2 rounded-xl bg-[#7CF503]/20 text-[#7CF503]">
                  <Tag size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase text-[#7CF503] tracking-wide">Adesivos & Banners</p>
                  <p className="text-[10px] text-gray-300 font-medium">Alta Resolução HD</p>
                </div>
              </div>

              {/* 4. Caneca, Camiseta & Papel Timbrado */}
              <div className="absolute -bottom-4 right-4 bg-[#111810]/95 backdrop-blur-xl border border-[#7CF503]/50 text-white p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-3 animate-float [animation-delay:2s] pointer-events-none">
                <div className="flex gap-1.5 text-[#7CF503]">
                  <Coffee size={16} />
                  <Shirt size={16} />
                  <FileText size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase text-[#7CF503] tracking-wide">Personalizados</p>
                  <p className="text-[10px] text-gray-300 font-medium">Brindes, Camisetas & Timbrados</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 4-Column Quick Category Bar (Modern Dark Glassmorphism Anchored at Bottom) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_CATEGORIES.map((cat) => {
            const IconComp = categoryIcons[cat.icon] || Printer;
            return (
              <a
                key={cat.id}
                href="#servicos"
                className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#7CF503] p-5 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300 group flex items-center gap-4 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7CF503]/15 text-[#7CF503] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7CF503] group-hover:text-black transition-all shadow-[0_0_15px_rgba(124,245,3,0.2)]">
                  <IconComp size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xs sm:text-sm text-white tracking-wider uppercase mb-0.5 group-hover:text-[#7CF503] transition-colors">
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
