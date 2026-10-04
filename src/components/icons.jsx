const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const BallIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} strokeLinecap="butt" strokeLinejoin="miter" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 7l4.2 3-1.6 5H9.4L7.8 10z" fill="currentColor" />
    <path d="M12 2v5M16.2 10l5.3-1.5M14.6 15l3 4.6M9.4 15l-3 4.6M7.8 10L2.5 8.5" strokeWidth="1.6" />
  </svg>
)

export const ChatIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.6A8.4 8.4 0 1 1 21 11.5z" />
  </svg>
)

export const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const LightIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M12 3v3M12 18v3M4.6 6.6l2.1 2.1M17.3 15.3l2.1 2.1M3 12h3M18 12h3M4.6 17.4l2.1-2.1M17.3 8.7l2.1-2.1" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const RainIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M20 16.6A5 5 0 0 0 18 7h-1.3A8 8 0 1 0 4 15.3" />
    <path d="M16 14v6M8 14v6M12 16v6" />
  </svg>
)

export const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)
