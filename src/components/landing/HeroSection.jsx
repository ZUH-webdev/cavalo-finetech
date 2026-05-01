import React from 'react'

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-5xl font-extrabold">Financia el crecimiento de tu negocio</h2>
          <p className="mt-4 text-gray-600">Soluciones rápidas y flexibles para pymes.</p>
          <div className="mt-6">
            <a href="#contacto" className="inline-block bg-blue-600 text-white px-6 py-3 rounded">Solicita asesoría</a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="w-full h-64 bg-gray-200 rounded" />
        </div>
      </div>
    </section>
  )
}
