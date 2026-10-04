import { site, canchas, formatoPrecio } from '../data/site.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import { ClockIcon, PinIcon, LightIcon } from './icons.jsx'

const stats = [
  { valor: '6', label: 'Canchas de futbolito' },
  { valor: '4', label: 'Canchas de pádel' },
  { valor: '10–23h', label: 'Todos los días' },
]

const info = [
  { Icon: ClockIcon, titulo: 'Horario', texto: `${site.horarioDias}, ${site.horarioHoras}` },
  { Icon: PinIcon, titulo: 'Ubicación', texto: `${site.direccion}, ${site.ciudad}` },
  { Icon: LightIcon, titulo: 'Iluminación nocturna', texto: 'Desde las 18:00 en todas las canchas' },
]

export default function Hero() {
  return (
    <section className="bg-[radial-gradient(900px_520px_at_0%_40%,rgba(34,197,94,0.13),transparent_70%)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pt-12 pb-16 md:px-8 lg:flex-row lg:items-center lg:gap-14 lg:pt-22 lg:pb-24">
        <div className="flex min-w-0 flex-col lg:flex-[999_1_520px] gap-6 md:gap-7">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-brand/35 bg-brand/12 px-3.5 py-1.5 text-sm font-semibold text-brand-light">
            <span className="size-2 rounded-full bg-brand" />
            Abierto todos los días · 10:00 a 23:00
          </span>
          <h1 className="font-display text-[52px] leading-[0.95] font-extrabold md:text-7xl lg:text-[92px]">
            FUTBOLITO Y PÁDEL <br className="hidden md:block" />
            EN EL CORAZÓN DE <br className="hidden md:block" />
            <span className="text-brand">RANCAGUA</span>
          </h1>
          <p className="max-w-xl text-[17px] leading-relaxed text-soft md:text-[19px]">
            6 canchas de futbolito y 4 de pádel con iluminación para jugar de día o de noche. Escríbenos por WhatsApp y te confirmamos tu hora.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton />
            <a
              href="#canchas"
              className="inline-flex min-h-[54px] items-center justify-center rounded-[10px] border border-line bg-card px-7 font-semibold transition-colors hover:bg-elevated"
            >
              Ver canchas
            </a>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 sm:flex sm:gap-11">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[34px] leading-none font-extrabold whitespace-nowrap md:text-[44px]">{s.valor}</div>
                <div className="mt-1 text-[13px] text-muted md:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <aside
          aria-label="Información rápida"
          className="flex flex-col gap-5 lg:flex-[1_1_400px] rounded-[20px] border border-line bg-card p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:p-7 lg:max-w-[460px]"
        >
          <h2 className="text-[23px] font-bold">Información rápida</h2>
          {info.map(({ Icon, titulo, texto }) => (
            <div key={titulo} className="flex items-start gap-3.5">
              <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-brand/12 text-brand">
                <Icon className="size-[22px]" />
              </span>
              <div className="flex flex-col gap-0.5">
                <b className="text-base">{titulo}</b>
                <span className="text-[15px] text-soft">{texto}</span>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2.5">
            {canchas.map((c) => (
              <div key={c.id} className="rounded-xl border border-line bg-ink p-3.5">
                <div className="text-[13px] text-muted">{c.nombre} desde</div>
                <div className={`text-[22px] font-bold ${c.color === 'brand' ? 'text-brand-light' : 'text-court-blue-light'}`}>
                  {formatoPrecio(c.diurno)}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
