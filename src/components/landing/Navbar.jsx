import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? 'bg-white/90 backdrop-blur shadow' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold">C</div>
          <span className={`font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>Cavalo Financing</span>
        </a>
        <div className="hidden md:flex gap-6 items-center">
          <button className={`text-sm ${scrolled ? 'text-primary' : 'text-white'}`}>¿Por qué nosotros?</button>
          <button className={`text-sm ${scrolled ? 'text-primary' : 'text-white'}`}>Soluciones</button>
          <button className={`text-sm ${scrolled ? 'text-primary' : 'text-white'}`}>Contacto</button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 p-6 pt-24">
          <button className="block w-full text-left py-3">¿Por qué nosotros?</button>
          <button className="block w-full text-left py-3">Soluciones</button>
          <button className="block w-full text-left py-3">Contacto</button>
        </div>
      )}
    </nav>
  )
}
