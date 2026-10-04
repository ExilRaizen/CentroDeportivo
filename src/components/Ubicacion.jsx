import { site } from '../data/site.js'
import SectionHeader from './SectionHeader.jsx'
import { PinIcon } from './icons.jsx'

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 md:gap-10 md:px-8 md:py-24">
      <SectionHeader eyebrow="DÓNDE ESTAMOS" title="UBICACIÓN" />
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {site.mapaEmbedUrl ? (
          <iframe
            src={site.mapaEmbedUrl}
            title="Mapa del recinto"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[240px] w-full rounded-2xl border border-line md:h-[360px] lg:flex-[999_1_520px]"
          />
        ) : (
          <div
            role="img"
            aria-label="Espacio para el mapa de Google"
            className="flex h-[240px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-dashed border-slate-600 bg-[repeating-linear-gradient(45deg,#1E293B_0_14px,#1B2536_14px_28px)] text-muted md:h-[360px] lg:flex-[999_1_520px]"
          >
            <PinIcon className="size-9 text-slate-500" />
            [Mapa de Google del recinto]
          </div>
        )}
        <div className="flex flex-col gap-1.5 self-start rounded-2xl border border-line bg-card p-5 md:p-6 lg:flex-[1_1_340px]">
          <span className="text-sm text-muted">Dirección</span>
          <b className="text-lg">{site.direccion}</b>
          <span className="text-[15px] text-soft">{site.region}</span>
        </div>
      </div>
    </section>
  )
}
