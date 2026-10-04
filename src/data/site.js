export const site = {
  nombre: 'Alex Retamal Lobos',
  ciudad: 'Rancagua',
  region: "Rancagua, O'Higgins",
  direccion: '[Dirección del recinto]',
  horarioDias: 'Lunes a domingo',
  horarioHoras: '10:00 a 23:00 hrs',
  // Número sin + ni espacios, ej: '56912345678'. Vacío = botones sin enlace.
  whatsapp: '',
  whatsappTexto: '[+56 9 XXXX XXXX]',
  whatsappMensaje: 'Hola, quiero reservar una cancha',
  instagram: '[@usuario]',
  // URL de "Insertar un mapa" de Google Maps. Vacío = se muestra el espacio reservado.
  mapaEmbedUrl: '',
}

export const canchas = [
  { id: 'futbolito', nombre: 'Futbolito', cantidad: 6, diurno: 28000, nocturno: 36000, color: 'brand' },
  { id: 'padel', nombre: 'Pádel', cantidad: 4, diurno: 16000, nocturno: 24000, color: 'blue' },
]

export const formatoPrecio = (n) => '$' + n.toLocaleString('es-CL')

export const whatsappUrl = () =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMensaje)}`
    : undefined
