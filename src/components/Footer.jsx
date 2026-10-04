import { site, whatsappUrl } from '../data/site.js'

const titulo = 'font-display text-sm font-bold tracking-[0.12em] text-muted'

export default function Footer() {
  const wa = whatsappUrl()
  return (
    <footer className="border-t border-line bg-card/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pt-12 pb-8 md:px-8 md:pt-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="flex flex-col gap-3.5">
            <span className="font-display text-[22px] font-extrabold tracking-wide">{site.nombre.toUpperCase()}</span>
            <span className="text-[15px] leading-relaxed text-soft">6 canchas de futbolito y 4 de pádel en {site.ciudad}.</span>
          </div>
          <div className="flex flex-col gap-2.5 text-[15px] text-soft">
            <span className={titulo}>HORARIO</span>
            <span>{site.horarioDias}</span>
            <span>{site.horarioHoras}</span>
          </div>
          <div className="flex flex-col gap-2.5 text-[15px] text-soft">
            <span className={titulo}>UBICACIÓN</span>
            <span>{site.direccion}</span>
            <span>{site.region}</span>
          </div>
          <div className="flex flex-col gap-2.5 text-[15px] text-soft">
            <span className={titulo}>CONTACTO</span>
            <a
              href={wa ?? '#'}
              target={wa ? '_blank' : undefined}
              rel={wa ? 'noopener noreferrer' : undefined}
              onClick={wa ? undefined : (e) => e.preventDefault()}
              className="text-brand-light hover:text-green-300"
            >
              WhatsApp {site.whatsappTexto}
            </a>
            <span>Instagram {site.instagram}</span>
          </div>
        </div>
        <div className="border-t border-line pt-6 text-sm text-muted">© {new Date().getFullYear()} Centro Deportivo {site.nombre}</div>
      </div>
    </footer>
  )
}
