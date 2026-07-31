import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/viaGraficaData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white text-[#1F2937] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#49C926]/10 text-[#2E8B1E] font-bold text-xs rounded-full uppercase tracking-wider">
            <HelpCircle size={15} className="text-[#49C926]" />
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal">
            Confira as respostas para as dúvidas mais comuns dos nossos clientes.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#49C926] bg-[#F7F7F7] shadow-md' 
                    : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#111827] focus:outline-none"
                >
                  <span className="hover:text-[#49C926] transition-colors">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#49C926] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 font-normal leading-relaxed border-t border-gray-200/60">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
