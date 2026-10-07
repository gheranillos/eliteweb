export const eventTypes = [
  { value: "privado", label: "Privado" },
  { value: "festival", label: "Festival" },
  { value: "otro", label: "Otro" },
] as const;

export type EventType = (typeof eventTypes)[number]["value"];

export const site = {
  name: "Élite Prod",
  description:
    "Productora boutique y firma de entretenimiento. Fiestas privadas y curadas, y grandes formatos y festivales, con un mismo estándar de ejecución.",
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/eliteprod",
  },
  nav: [
    { href: "#privadas", label: "Privadas" },
    { href: "#festivales", label: "Festivales" },
    { href: "#proceso", label: "Proceso" },
    { href: "#contacto", label: "Contacto" },
  ],
  hero: {
    line: "Experiencias de nivel internacional",
  },
  manifesto: {
    id: "manifiesto",
    lines: [
      "ÉLITE",
      "ES UN ESTÁNDAR.",
      "UN FILTRO",
      "DE CALIDAD",
      "QUE NO SE NEGOCIA.",
      "DEL EVENTO",
      "MÁS PRIVADO",
      "AL FESTIVAL",
      "MÁS MASIVO.",
    ],
    support:
      "Una productora boutique y una firma de entretenimiento. El mismo criterio, del salón más cerrado al formato más grande.",
  },
  lines: {
    id: "lineas",
    index: "01",
    title: "Dos líneas",
    items: [
      {
        id: "privadas",
        index: "01",
        title: "Privadas & Curadas",
        description:
          "Encuentros cerrados donde la elegancia, la privacidad y el estatus se resuelven sin ruido.",
        includes: [
          "Acceso controlado y lista cerrada",
          "Ambientación y servicio discreto",
          "Dirección de la experiencia",
        ],
      },
      {
        id: "festivales",
        index: "02",
        title: "Grandes Formatos & Festivales",
        description:
          "Eventos de gran escala: tarima, montaje técnico y contrataciones artísticas con estándar internacional.",
        includes: [
          "Diseño y montaje de tarimas",
          "Producción técnica integral",
          "Booking y operación de sitio",
        ],
      },
    ],
  },
  capabilities: {
    id: "capacidades",
    index: "02",
    title: "Capacidades",
    intro: "Lo que ejecutamos, de principio a fin.",
    items: [
      {
        title: "Diseño de experiencia",
        text: "Recorrido, ritmo y atmósfera. El evento se siente dirigido, no improvisado.",
      },
      {
        title: "Producción técnica",
        text: "Audio, iluminación y sistemas de show, dimensionados al formato.",
      },
      {
        title: "Infraestructura de tarimas",
        text: "Estructura, cubierta y seguridad de escenario para grandes aforos.",
      },
      {
        title: "Contratación artística",
        text: "Selección y cierre de talento, con criterio y con tiempo.",
      },
      {
        title: "Logística y operación",
        text: "Tiempos, proveedores y control de sitio. Nada queda al aire.",
      },
      {
        title: "Dirección creativa",
        text: "Un criterio visual único, de la invitación al último foco.",
      },
    ],
  },
  process: {
    id: "proceso",
    index: "03",
    title: "Proceso",
    intro: "Cuatro pasos. Un solo responsable de la ejecución.",
    steps: [
      {
        title: "Brief",
        text: "Escuchamos el objetivo, el lugar y el nivel de reserva.",
      },
      {
        title: "Diseño",
        text: "Definimos concepto, formato y alcance antes de producir.",
      },
      {
        title: "Producción",
        text: "Cerramos talento, técnica, proveedores y logística.",
      },
      {
        title: "Ejecución",
        text: "Dirigimos el evento en sitio, hasta el último detalle.",
      },
    ],
  },
  gallery: {
    id: "eventos",
    index: "04",
    title: "Eventos",
    intro: "Una selección de formatos. Las fotografías se sustituyen aquí.",
    items: [
      { title: "Cena privada", place: "Valle de Bravo" },
      { title: "After cerrado", place: "Ciudad de México" },
      { title: "Festival de playa", place: "Riviera Maya" },
      { title: "Lanzamiento", place: "Polanco" },
      { title: "Noche de marca", place: "Monterrey" },
      { title: "Escenario principal", place: "Festival" },
    ],
  },
  contact: {
    id: "contacto",
    index: "05",
    title: "Contacto",
    intro:
      "Cuéntanos el formato, la fecha y el nivel de privacidad. Respondemos con un alcance claro.",
    whatsappLabel: "Escribir por WhatsApp",
    whatsappMessage: "Hola. Quiero cotizar un evento con Élite Prod.",
    submit: "Enviar solicitud",
    sending: "Enviando",
    another: "Nueva solicitud",
    success: "Recibimos tu solicitud. Te contactaremos en breve.",
    error: "No pudimos enviar la solicitud. Inténtalo de nuevo.",
    unavailable: "El formulario no está disponible en este momento.",
    invalid: "Revisa los campos e inténtalo de nuevo.",
    fields: {
      name: { label: "Nombre", error: "Ingresa tu nombre." },
      email: { label: "Email", error: "Ingresa un correo válido." },
      phone: { label: "Teléfono", error: "Ingresa un teléfono válido." },
      event_type: {
        label: "Tipo de evento",
        error: "Selecciona un tipo de evento.",
      },
      event_date: {
        label: "Fecha estimada",
        error: "Indica una fecha estimada.",
        range: "Indica una fecha de hoy en adelante, dentro de los próximos tres años.",
      },
      message: {
        label: "Mensaje",
        error: "Cuéntanos el evento, con un poco más de detalle.",
      },
    },
  },
} as const;
