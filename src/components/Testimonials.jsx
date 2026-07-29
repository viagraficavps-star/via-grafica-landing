import React from 'react';
import { TESTIMONIALS_DATA } from '../data/viaGraficaData';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 bg-gray-50 text-dark border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header matching GraphA reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight mb-3">
            Os clientes têm <span className="text-neon-dark underline decoration-neon decoration-4 underline-offset-4">sempre razão</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light">
            Depoimentos de quem confiou e comprovou a agilidade e qualidade da Via Gráfica.
          </p>
        </div>

        {/* 3 Quote Cards Grid matching GraphA reference blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-dark text-white rounded-3xl p-8 shadow-xl border-t-4 border-neon flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300"
            >
              <Quote size={36} className="text-neon mb-4 opacity-80" />

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 font-light italic">
                "{item.text}"
              </p>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neon font-medium">
                    {item.role}
                  </p>
                </div>

                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
