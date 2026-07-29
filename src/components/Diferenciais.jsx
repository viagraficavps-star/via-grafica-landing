import React from 'react';
import { DIFERENCIAIS_DATA } from '../data/viaGraficaData';
import { Zap, Factory, Sparkles, Award, Clock, Users, FileText, ShieldCheck } from 'lucide-react';

const iconMap = {
  Zap,
  Factory,
  Sparkles,
  Award,
  Clock,
  Users,
  FileText,
  ShieldCheck
};

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-dark text-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neon bg-dark-lighter border border-neon/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Por Que Escolher A Via Gráfica
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Diferenciais que garantem o <span className="text-neon">sucesso do seu projeto.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Investimos em padrão de atendimento, velocidade de produção e insumos de primeira linha.
          </p>
        </div>

        {/* 8 Differentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFERENCIAIS_DATA.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-dark-card p-6 rounded-2xl border border-dark-border hover:border-neon/50 transition-all duration-300 group hover:-translate-y-1 shadow-dark-soft flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 text-neon flex items-center justify-center mb-5 group-hover:bg-neon group-hover:text-dark transition-all duration-300 shadow-neon/10">
                    <IconComp size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-neon transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
