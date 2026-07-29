import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsBar from './components/BrandsBar';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import PreFooterCTA from './components/PreFooterCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import BudgetModal from './components/BudgetModal';

export default function App() {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBudgetModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBudgetModalOpen(true);
  };

  const handleCloseBudgetModal = () => {
    setIsBudgetModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-white text-dark font-sans selection:bg-neon selection:text-white">
      {/* 1. Header Navbar */}
      <Navbar onOpenBudgetModal={handleOpenBudgetModal} />

      {/* Main Content Flow */}
      <main>
        {/* 2. Hero Section + 4-Column Quick Category Bar */}
        <Hero onOpenBudgetModal={handleOpenBudgetModal} />

        {/* 3. Brands Bar */}
        <BrandsBar />

        {/* 4. About */}
        <About />

        {/* 5. Principais Serviços */}
        <Services onOpenBudgetModal={handleOpenBudgetModal} />

        {/* 6. Alguns Trabalhos (Portfolio & Lightbox Gallery) */}
        <Gallery onOpenBudgetModal={handleOpenBudgetModal} />

        {/* 7. Como Funciona (Timeline) */}
        <HowItWorks onOpenBudgetModal={handleOpenBudgetModal} />

        {/* 8. Os Clientes Têm Sempre Razão (Testimonials Cards) */}
        <Testimonials />

        {/* 9. Pre-Footer Callout Bar */}
        <PreFooterCTA onOpenBudgetModal={handleOpenBudgetModal} />

        {/* 10. Contato & Google Maps */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer onOpenBudgetModal={handleOpenBudgetModal} />

      {/* Floating WhatsApp & Back-To-Top */}
      <FloatingButtons />

      {/* Interactive Budget Form Modal */}
      <BudgetModal
        isOpen={isBudgetModalOpen}
        onClose={handleCloseBudgetModal}
        initialService={selectedService}
      />
    </div>
  );
}
