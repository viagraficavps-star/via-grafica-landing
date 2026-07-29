import React from 'react';

export default function Logo({ className = "h-12", variant = "dark" }) {
  // Uses the official brand logo provided by Via Gráfica
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/logo_official.png"
        alt="Via Gráfica - A Gráfica de Vianópolis"
        className={`h-full w-auto object-contain transition-all ${
          variant === 'light' ? 'brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : ''
        }`}
      />
    </div>
  );
}
