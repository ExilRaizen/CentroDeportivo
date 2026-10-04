import WhatsAppButton from './WhatsAppButton.jsx'

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
      <div className="flex flex-col gap-5 rounded-[24px] bg-linear-110 from-green-700 to-blue-700 px-5 py-7 md:flex-row md:items-center md:justify-between md:gap-6 md:px-14 md:py-12">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-[34px] leading-none font-extrabold md:text-[46px]">¿ARMAMOS EL PARTIDO DE HOY?</h2>
          <p className="text-[15px] text-slate-200 md:text-lg">Los horarios de 19:00 a 22:00 se llenan rápido. Escríbenos y asegura tu cancha.</p>
        </div>
        <WhatsAppButton variant="white" />
      </div>
    </section>
  )
}
