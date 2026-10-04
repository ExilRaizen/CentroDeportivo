export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="flex flex-col gap-3 text-left md:items-center md:text-center">
      <span className="font-display text-sm font-bold tracking-[0.14em] text-brand">{eyebrow}</span>
      <h2 className="font-display text-4xl font-extrabold leading-none md:text-[54px]">{title}</h2>
      {children && <p className="max-w-2xl text-lg leading-relaxed text-soft">{children}</p>}
    </div>
  )
}
