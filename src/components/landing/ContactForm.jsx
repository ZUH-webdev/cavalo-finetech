import React from 'react'

export default function ContactForm() {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Contacto</h3>
        <form className="mt-6 grid gap-4">
          <input className="p-3 border rounded" placeholder="Nombre" />
          <input className="p-3 border rounded" placeholder="Email" />
          <textarea className="p-3 border rounded" placeholder="Mensaje" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
        </form>
      </div>
    </section>
  )
}
