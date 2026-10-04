import { useState } from 'react'
import { site } from '../data/site.js'
import { BallIcon, MenuIcon, CloseIcon } from './icons.jsx'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#canchas', label: 'Canchas' },
  { href: '#tarifas', label: 'Tarifas' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-[10px] bg-brand text-ink">
            <BallIcon className="size-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-wide md:text-[21px]">{site.nombre.toUpperCase()}</span>
            <span className="mt-1 font-display text-[11px] font-bold tracking-[0.16em] text-brand">CENTRO DEPORTIVO · RANCAGUA</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium text-muted transition-colors hover:text-slate-50">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="flex size-11 items-center justify-center rounded-[10px] border border-line bg-card md:hidden"
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Principal móvil" className="flex flex-col border-t border-line px-4 pb-5 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-line text-[17px] font-semibold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
