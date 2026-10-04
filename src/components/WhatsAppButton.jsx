import { whatsappUrl } from '../data/site.js'
import { ChatIcon } from './icons.jsx'

const variants = {
  green: 'bg-brand text-ink hover:bg-brand-light',
  white: 'bg-white text-ink hover:bg-slate-200',
}

export default function WhatsAppButton({ children = 'Reservar por WhatsApp', variant = 'green', className = '' }) {
  const href = whatsappUrl()
  return (
    <a
      href={href ?? '#'}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      onClick={href ? undefined : (e) => e.preventDefault()}
      className={`inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-[10px] px-7 font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      <ChatIcon className="size-5" />
      {children}
    </a>
  )
}
