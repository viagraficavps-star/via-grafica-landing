import React from 'react';
import { PRINCIPAIS_SERVICOS } from '../data/viaGraficaData';
import { Printer, Building2, Layers, Gift, Tag, Truck, Monitor, Package, CheckCircle2, ArrowRight } from 'lucide-react';

const serviceIconMap = {
  Printer,
  Building2,
  Layers,
  Gift,
  Tag,
  Truck,
  Monitor,
  Package,
  CheckCircle2,
};

export default function Services({ onOpenBudgetModal }) {
  return (
    <section id="servicos" className="py-24 bg-gray-50 text-dark relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header matching GraphA reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight mb-3">
            Principais <span className="text-neon-dark">Serviços</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light">
            Soluções completas em impressão gráfica e comunicação visual para impulsionar o seu negócio.
          </p>
        </div>

        {/* 3x3 Grid Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRINCIPAIS_SERVICOS.map((service) => {
            const IconComp = serviceIconMap[service.icon] || Printer;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-200 hover:border-neon transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Outline Circle Icon in Accent Green */}
                  <div className="w-16 h-16 rounded-full border-2 border-neon text-dark bg-neon/10 flex items-center justify-center mb-6 group-hover:bg-neon group-hover:text-dark transition-all duration-300 shadow-sm">
                    <IconComp size={28} />
                  </div>

                  <h3 className="font-heading font-black text-xl text-dark mb-3 group-hover:text-neon-dark transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenBudgetModal(service.title)}
                  className="w-full flex items-center justify-center gap-2 bg-dark hover:bg-neon text-white hover:text-dark font-bold text-xs py-3 rounded-full transition-all duration-300 shadow-md"
                >
                  <span>Pedir Orçamento</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
