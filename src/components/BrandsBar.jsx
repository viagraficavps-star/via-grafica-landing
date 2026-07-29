import React from 'react';
import { BRANDS_DATA } from '../data/viaGraficaData';
import { Award } from 'lucide-react';

export default function BrandsBar() {
  return (
    <div className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
          Marcas e Empresas Atendidas com Excelência em Vianópolis e Região
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
          {BRANDS_DATA.map((brand, idx) => (
            <div
              key={idx}
              className="font-heading font-black text-lg sm:text-xl text-gray-400 hover:text-dark transition-colors tracking-tight flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-neon"></span>
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
