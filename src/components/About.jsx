import React from 'react';
import { Clock, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data/viaGraficaData';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white text-dark border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tagline Superior */}
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#49C926] bg-[#49C926]/10 px-4 py-1.5 rounded-full mb-4 border border-[#49C926]/30">
              TRADIÇÃO & CONFIANÇA
            </span>

            {/* Título Principal */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight leading-tight mb-6">
              Há 18 anos entregando a <span className="text-[#49C926] underline decoration-[#49C926] decoration-4 underline-offset-4">melhor qualidade no menor prazo.</span>
            </h2>

            {/* Texto Apoiador */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Quando o prazo é curto e a qualidade não pode falhar, a Via Gráfica é a sua parceira definitiva. Com 18 anos de experiência no mercado, oferecemos a solidez de quem domina cada detalhe da impressão e da comunicação visual em Vianópolis e em todo o interior de Goiás.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Desenvolvemos materiais que impressionam e geram resultados: desde cartões executivos e panfletos promocionais até projetos completos de fachadas em ACM, letras caixa 3D iluminadas e sacos de sementes para o agronegócio.
            </p>

            {/* Diferenciais Rápidos (Pílulas) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#49C926] text-white font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock size={18} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800">
                  18 Anos de Tradição e Cumprimento de Prazos
                </span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#49C926] text-white font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800">
                  Acabamento Gráfico Premium e Sede Própria
                </span>
              </div>
            </div>

          </div>

          {/* Right Image Showcase Column (Real 2-Story Building Photo) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 group">
              <img
                src={IMAGES.facadeAcm}
                alt="Sede Própria da Via Gráfica em Vianópolis - GO"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white bg-dark/85 backdrop-blur-md p-4 rounded-2xl border border-[#49C926]/40">
                <p className="text-xs font-bold text-[#49C926] uppercase mb-0.5">Sede Própria em Vianópolis – GO</p>
                <h4 className="font-bold text-sm text-white">Parque Gráfico & Atendimento Presencial desde 2006</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
