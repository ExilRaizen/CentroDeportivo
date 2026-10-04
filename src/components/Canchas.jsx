import { canchas, formatoPrecio } from '../data/site.js'
import SectionHeader from './SectionHeader.jsx'

function CanchaFutbolito() {
  const line = 'absolute border-2 border-white/85'
  return (
    <div className="relative h-40 overflow-hidden rounded-[14px] bg-[repeating-linear-gradient(90deg,#17733A_0_75px,#1C8442_75px_150px)] md:h-64">
      <div className={`${line} inset-x-6 inset-y-5 md:inset-x-10 md:inset-y-8`} />
      <div className="absolute inset-y-5 left-1/2 w-0.5 bg-white/85 md:inset-y-8" />
      <div className={`${line} top-1/2 left-1/2 size-12 -translate-1/2 rounded-full md:size-[70px]`} />
      <div className={`${line} top-1/3 bottom-1/3 left-6 w-8 border-l-0 md:left-10 md:w-12`} />
      <div className={`${line} top-1/3 right-6 bottom-1/3 w-8 border-r-0 md:right-10 md:w-12`} />
    </div>
  )
}

function CanchaPadel() {
  return (
    <div className="relative h-40 overflow-hidden rounded-[14px] bg-linear-135 from-court-blue to-blue-800 md:h-64">
      <div className="absolute inset-x-9 inset-y-5 border-2 border-white/85 md:inset-x-16 md:inset-y-8" />
      <div className="absolute inset-y-3 left-1/2 w-[3px] bg-white md:inset-y-6" />
      <div className="absolute inset-y-5 left-[27%] w-0.5 bg-white/80 md:inset-y-8" />
      <div className="absolute inset-y-5 right-[27%] w-0.5 bg-white/80 md:inset-y-8" />
      <div className="absolute top-1/2 right-[27%] left-[27%] h-0.5 bg-white/80" />
    </div>
  )
}

export default function Canchas() {
  return (
    <section id="canchas" className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 md:items-center md:gap-12 md:px-8 md:py-24">
      <SectionHeader eyebrow="NUESTRAS CANCHAS" title="ELIGE TU DEPORTE">
        Arriendo por bloques de 1 hora entre las 10:00 y las 23:00, con iluminación para jugar de noche.
      </SectionHeader>
      <div className="grid w-full gap-5 md:grid-cols-2 md:gap-8">
        {canchas.map((c) => (
          <article key={c.id} className="flex flex-col gap-4 rounded-[20px] border border-line bg-card p-3.5 md:gap-6 md:p-5 md:pb-7">
            <div className="relative">
              {c.id === 'futbolito' ? <CanchaFutbolito /> : <CanchaPadel />}
              <span className="absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1.5 text-[13px] font-semibold md:top-4 md:left-4">
                {c.cantidad} canchas
              </span>
            </div>
            <div className="flex flex-col gap-3 px-1 md:px-2">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <h3 className="font-display text-[32px] leading-none font-extrabold md:text-[42px]">{c.nombre.toUpperCase()}</h3>
                <div className="text-right">
                  <div className="text-xs text-muted">desde</div>
                  <div className={`text-lg font-bold md:text-[23px] ${c.color === 'brand' ? 'text-brand' : 'text-court-blue-light'}`}>
                    {formatoPrecio(c.diurno)} / hora
                  </div>
                </div>
              </div>
              <p className="text-[15px] text-soft">
                Diurno {formatoPrecio(c.diurno)} · Nocturno con iluminación {formatoPrecio(c.nocturno)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
