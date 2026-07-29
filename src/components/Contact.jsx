import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/viaGraficaData';
import Logo from './Logo';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white text-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-dark bg-neon/30 border border-neon/50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Onde Estamos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight mb-4">
            Venha tomar um café conosco.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Estamos prontos para atender você pessoalmente no centro de Vianópolis ou via canais digitais.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card (Left Column) */}
          <div className="lg:col-span-5 bg-dark text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-dark-border flex flex-col justify-between relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              {/* Header with Official Logo Image */}
              <div className="mb-8 pb-4 border-b border-gray-800">
                <Logo className="h-12 sm:h-14" variant="light" />
              </div>

              <div className="space-y-6">
                
                {/* Endereço */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-dark-lighter text-neon border border-dark-border flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider mb-1">Endereço</h4>
                    <p className="text-white text-base font-semibold leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {COMPANY_INFO.district} – {COMPANY_INFO.cityState}
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-dark-lighter text-neon border border-dark-border flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider mb-1">Telefone & WhatsApp</h4>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon hover:underline font-extrabold text-xl tracking-wide flex items-center gap-2"
                    >
                      {COMPANY_INFO.phoneDisplay}
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>

                {/* Horário de Funcionamento */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-dark-lighter text-neon border border-dark-border flex-shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider mb-1">Horário de Atendimento</h4>
                    {COMPANY_INFO.hours.map((h, i) => (
                      <p key={i} className="text-gray-200 text-sm font-medium">
                        <strong className="text-white">{h.days}:</strong> {h.time}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Google Directions Button */}
            <div className="pt-8 mt-8 border-t border-gray-800">
              <a
                href="https://maps.google.com/?q=Via+Grafica+Vianopolis+GO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-dark-lighter hover:bg-neon hover:text-white text-white font-bold py-3.5 px-6 rounded-2xl border border-gray-700 hover:border-neon transition-all"
              >
                <Navigation size={18} />
                <span>Como Chegar no GPS</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Map with Via Gráfica Location Pin (Right Column) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 min-h-[420px]">
            <iframe
              title="Mapa de Localização da Via Gráfica em Vianópolis"
              src="https://maps.google.com/maps?q=Via%20Gr%C3%A1fica%2C%20Rua%20Euz%C3%A9bio%20de%20Oliveira%2C%20367%2C%20Vian%C3%B3polis%20-%20GO&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
