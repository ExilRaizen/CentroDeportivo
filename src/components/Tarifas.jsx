import { canchas, formatoPrecio } from '../data/site.js'
import SectionHeader from './SectionHeader.jsx'
import { RainIcon } from './icons.jsx'

export default function Tarifas() {
  return (
    <section id="tarifas" className="bg-card/45">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 md:items-center md:gap-10 md:px-8 md:py-24">
        <SectionHeader eyebrow="PRECIOS CLAROS" title="TARIFAS POR HORA">
          El horario nocturno incluye iluminación.
        </SectionHeader>
        <div className="w-full max-w-[860px] overflow-hidden rounded-2xl border border-line bg-card">
          <table className="w-full border-collapse text-[15px] md:text-[17px]">
            <thead>
              <tr className="bg-elevated text-left font-display text-[13px] tracking-[0.1em] text-muted md:text-sm">
                <th className="px-4 py-3.5 md:px-7 md:py-4">DEPORTE</th>
                <th className="px-4 py-3.5 md:px-7 md:py-4">
                  DIURNO <span className="hidden md:inline">· 10:00–18:00</span>
                </th>
                <th className="px-4 py-3.5 md:px-7 md:py-4">
                  NOCTURNO <span className="hidden md:inline">· 18:00–23:00</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {canchas.map((c) => (
                <tr key={c.id} className="border-t border-line">
                  <td className="px-4 py-4 font-semibold md:px-7 md:py-5.5">
                    <span className={`mr-2.5 inline-block size-2.5 rounded-full ${c.color === 'brand' ? 'bg-brand' : 'bg-court-blue'}`} />
                    {c.nombre}
                  </td>
                  <td className="px-4 py-4 md:px-7 md:py-5.5">{formatoPrecio(c.diurno)}</td>
                  <td className="px-4 py-4 md:px-7 md:py-5.5">{formatoPrecio(c.nocturno)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-soft md:hidden">Diurno: 10:00–18:00 · Nocturno: 18:00–23:00</p>
        <div className="flex items-center gap-3 rounded-xl border border-blue-500/35 bg-blue-500/10 px-4 py-3.5 text-[15px] text-blue-200 md:px-5 md:py-4 md:text-base">
          <RainIcon className="size-[22px] flex-none text-court-blue-light" />
          ¿Llueve o tuviste un imprevisto? Escríbenos y reagendamos tu hora.
        </div>
      </div>
    </section>
  )
}
