import React from 'react';
import { BRANDS_DATA } from '../data/viaGraficaData';

export default function BrandsBar() {
  return (
    <div className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title updated to black text and 'ALGUMAS MARCAS...' */}
        <p className="text-xs sm:text-sm font-black text-dark uppercase tracking-widest mb-10">
          ALGUMAS MARCAS E EMPRESAS ATENDIDAS COM EXCELÊNCIA EM VIANÓPOLIS E REGIÃO
        </p>

        {/* Logos Flex Row (Full Color) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {BRANDS_DATA.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className={`${brand.heightClass || 'h-10 sm:h-12'} w-auto object-contain opacity-95 hover:opacity-100 transition-all duration-300 cursor-pointer`}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
