import React from 'react';
import { Phone, Instagram, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/viaGraficaData';
import Logo from './Logo';

export default function Footer({ onOpenBudgetModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8 border-t border-dark-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-dark-border">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center">
              <Logo className="h-10 sm:h-12" variant="light" />
            </a>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Soluções completas em impressão gráfica e comunicação visual. Tradição, qualidade e a tecnologia que a sua empresa precisa para se destacar em Vianópolis e região.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/via.grafica/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-lighter text-gray-300 hover:text-neon hover:border-neon border border-dark-border flex items-center justify-center transition-colors"
                aria-label="Instagram Via Gráfica"
              >
                <Instagram size={18} />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neon text-white hover:bg-[#3da71f] flex items-center justify-center font-bold shadow-neon transition-colors"
                aria-label="WhatsApp Via Gráfica"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-bold text-sm text-neon uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre a Empresa</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galeria de Projetos</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
              <li><a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações de Clientes</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato & Mapa</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-bold text-sm text-neon uppercase tracking-wider mb-4">
              Serviços Principais
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">Placas ACM & Fachadas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Letras Caixa 3D & LED</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Cartões de Visita Executivos</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Panfletos & Folders</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Sacos para Sementes</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Plotagem de Veículos</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-sm text-neon uppercase tracking-wider mb-4">
              Atendimento Direct
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              {COMPANY_INFO.address}, {COMPANY_INFO.district}, {COMPANY_INFO.cityState}
            </p>
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neon font-bold text-base hover:underline mb-4"
            >
              <Phone size={16} />
              {COMPANY_INFO.phoneDisplay}
            </a>

            <button
              onClick={() => onOpenBudgetModal()}
              className="w-full bg-dark-lighter hover:bg-neon hover:text-white text-white font-bold py-2.5 px-4 rounded-xl border border-dark-border transition-colors text-xs flex items-center justify-center gap-2"
            >
              <span>Solicitar Orçamento</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>© {currentYear} Via Gráfica. Todos os direitos reservados. Vianópolis – GO.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <span className="text-neon">✦ High Standard Design</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
