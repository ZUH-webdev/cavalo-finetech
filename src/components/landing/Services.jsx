import React from 'react'

export default function Services() {
  return (
    <section id="soluciones" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Nuestras soluciones</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded shadow">Crédito rápido</div>
          <div className="p-4 bg-white rounded shadow">Factoraje</div>
          <div className="p-4 bg-white rounded shadow">Línea revolvente</div>
        </div>
      </div>
    </section>
  )
}
