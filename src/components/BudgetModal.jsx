import React, { useState } from 'react';
import { X, UploadCloud, File, Trash2, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/viaGraficaData';

export default function BudgetModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'Impressão Gráfica',
    quantity: '',
    details: '',
  });

  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    const validExtensions = ['pdf', 'jpg', 'jpeg', 'png', 'cdr', 'ai'];
    
    const validFiles = selected.filter(file => {
      const ext = file.name.split('.').pop().toLowerCase();
      return validExtensions.includes(ext);
    });

    setFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fileListNames = files.map(f => f.name).join(', ');
    const textMessage = `*SOLICITAÇÃO DE ORÇAMENTO - VIA GRÁFICA*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📞 *Telefone:* ${formData.phone}\n` +
      `📧 *E-mail:* ${formData.email || 'Não informado'}\n` +
      `🎯 *Serviço:* ${formData.service}\n` +
      `📦 *Quantidade/Tamanho:* ${formData.quantity || 'A combinar'}\n` +
      `📝 *Detalhes:* ${formData.details || 'Sem observações'}\n` +
      (files.length > 0 ? `📁 *Arquivos anexados (${files.length}):* ${fileListNames}\n` : '');

    const encoded = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encoded}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-dark text-white p-6 sm:p-8 flex items-center justify-between relative border-b border-dark-border">
          <div>
            <span className="text-xs font-bold text-neon uppercase tracking-widest bg-dark-lighter px-3 py-1 rounded-full border border-neon/30">
              Orçamento sem Compromisso
            </span>
            <h3 className="font-heading text-2xl font-bold text-white mt-2">
              Solicitar Orçamento
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Preencha os dados abaixo e receba nossa proposta via WhatsApp em poucos minutos.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-dark-lighter text-gray-300 hover:text-neon flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 rounded-full bg-neon/20 text-neon-dark flex items-center justify-center mb-4">
              <CheckCircle2 size={40} />
            </div>
            <h4 className="font-heading text-2xl font-bold text-dark mb-2">
              Redirecionando para o WhatsApp!
            </h4>
            <p className="text-gray-600 text-sm max-w-md mb-6">
              Sua solicitação de orçamento foi formatada com sucesso. Nossa equipe já está de prontidão para responder.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-dark text-white hover:bg-neon font-bold px-6 py-2.5 rounded-full text-sm transition-colors"
            >
              Fechar Janela
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-neon focus:ring-2 focus:ring-neon/30 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(62) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-neon focus:ring-2 focus:ring-neon/30 text-sm outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Categoria do Serviço
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-neon focus:ring-2 focus:ring-neon/30 text-sm outline-none transition-all bg-white"
                >
                  <option value="Impressão Gráfica (Cartões, Flyers, Pastas)">Impressão Gráfica (Cartões, Flyers, Pastas)</option>
                  <option value="Comunicação Visual (Placas ACM, Fachadas, Lonas)">Comunicação Visual (Placas ACM, Fachadas, Lonas)</option>
                  <option value="Letras Caixa 3D & LED">Letras Caixa 3D & LED</option>
                  <option value="Personalizados & Sacos de Sementes">Personalizados & Sacos de Sementes</option>
                  <option value="Plotagem de Veículos & Frotas">Plotagem de Veículos & Frotas</option>
                  <option value="Outros Serviços">Outros Serviços</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Quantidade / Medidas aproximadas
                </label>
                <input
                  type="text"
                  placeholder="Ex: 1.000 un ou 3m x 1m"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-neon focus:ring-2 focus:ring-neon/30 text-sm outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Descrição do Projeto
              </label>
              <textarea
                rows={3}
                placeholder="Descreva detalhes como acabamento desejado, aplicação ou qualquer dúvida..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-neon focus:ring-2 focus:ring-neon/30 text-sm outline-none transition-all"
              ></textarea>
            </div>

            {/* File Upload Dropzone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Anexar Arte ou Logomarca (PDF, JPG, PNG, CDR, AI)
              </label>

              <div className="relative border-2 border-dashed border-gray-300 hover:border-neon rounded-2xl p-6 text-center cursor-pointer transition-colors bg-gray-50 hover:bg-neon/5">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.cdr,.ai"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <UploadCloud size={32} className="mx-auto text-gray-400 mb-2 group-hover:text-neon" />
                <p className="text-xs font-bold text-gray-700">
                  Clique ou arraste seus arquivos aqui
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  Suporta arquivos de até 50MB (PDF, CorelDraw, Illustrator, Imagens)
                </p>
              </div>

              {files.length > 0 && (
                <div className="mt-3 space-y-2">
                  {files.map((file, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-100 border border-gray-200 text-xs">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <File size={16} className="text-neon-dark flex-shrink-0" />
                        <span className="truncate font-medium text-gray-800">{file.name}</span>
                        <span className="text-[10px] text-gray-400">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-neon hover:bg-[#3da71f] text-white font-black text-base py-4 rounded-xl shadow-neon transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <Send size={18} />
              <span>Enviar via WhatsApp Agora</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
