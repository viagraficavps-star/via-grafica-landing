import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/viaGraficaData';
import { ZoomIn, X, ExternalLink } from 'lucide-react';

export default function Gallery({ onOpenBudgetModal }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galeria" className="py-24 bg-white text-dark border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header matching GraphA reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight mb-3">
            Alguns <span className="text-neon-dark">Trabalhos</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light">
            Confira a qualidade real dos nossos impressos, acabamentos e fachadas entregues em Vianópolis e região.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_DATA.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border-2 border-gray-100 hover:border-neon transition-all duration-300 shadow-sm hover:shadow-xl bg-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity"></div>

              {/* Category Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-white/90 backdrop-blur-md text-dark text-[11px] font-bold px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-9 h-9 rounded-full bg-neon text-white flex items-center justify-center shadow-md">
                  <ZoomIn size={18} />
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-neon transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Corrected Frame Enquadramento) */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 my-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-dark text-white hover:bg-neon hover:text-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Fechar Janela"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-12 items-stretch">
              {/* Image Container with Perfect Aspect Ratio and No Crop */}
              <div className="md:col-span-7 bg-dark-card flex items-center justify-center p-4 sm:p-6 min-h-[320px] sm:min-h-[460px]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-xl transition-all"
                />
              </div>

              {/* Right Details Column */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-dark bg-white">
                <div>
                  <span className="text-xs font-bold text-neon-dark uppercase tracking-wider bg-neon/20 px-3 py-1 rounded-full border border-neon/40 mb-4 inline-block">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-dark mb-3 leading-snug">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {selectedImage.desc}
                  </p>
                  <p className="text-xs text-gray-500">
                    Trabalho produzido com máquinas próprias e padrão de acabamento <strong>Via Gráfica</strong>.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-4">
                  <button
                    onClick={() => {
                      const title = selectedImage.title;
                      setSelectedImage(null);
                      onOpenBudgetModal(title);
                    }}
                    className="w-full bg-neon hover:bg-[#3da71f] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Quero um projeto similar</span>
                    <ExternalLink size={16} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
