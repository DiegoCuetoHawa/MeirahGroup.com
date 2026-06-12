const STORAGE = {
  properties: "meirahgroup.properties",
  propertyCodeCounter: "meirahgroup.propertyCodeCounter",
  favorites: "meirahgroup.favorites",
  leads: "meirahgroup.leads",
  reservations: "meirahgroup.reservations",
  appointments: "meirahgroup.appointments",
  staff: "meirahgroup.staff",
  session: "meirahgroup.session",
  lang: "meirahgroup.lang",
  currency: "meirahgroup.currency",
  theme: "meirahgroup.theme",
  members: "meirahgroup.members",
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=82",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=82",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=82",
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1800&q=82",
];

const LANGUAGES = ["es", "en", "pt"];
const CURRENCIES = ["USD", "EUR", "DOP"];
const CURRENCY_RATES = {
  USD: 1,
  EUR: 0.92,
  DOP: 59,
};
const CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "\u20AC",
  DOP: "$",
};
const BUSINESS_NAME = "Meirah Group";
const BUSINESS_PHONE_DISPLAY = "+1 (829) 393-5951";
const BUSINESS_WHATSAPP = "18293935951";
const PROPERTY_CODE_WIDTH = 3;
const PROPERTY_ROUTE_PREFIX = "/propiedades/";
const STAFF_ROLES = ["super_admin", "admin", "agent", "assistant", "editor"];
const STAFF_PERMISSION_DEFAULTS = {
  super_admin: {
    manageProperties: true,
    manageAppointments: true,
    manageStaff: true,
    manageSchedules: true,
    viewAppointments: true,
    viewLeads: true,
    ownAppointments: true,
    ownAvailability: true,
  },
  admin: {
    manageProperties: true,
    manageAppointments: true,
    manageStaff: true,
    manageSchedules: true,
    viewAppointments: true,
    viewLeads: true,
    ownAppointments: true,
    ownAvailability: true,
  },
  agent: {
    manageProperties: false,
    manageAppointments: false,
    manageStaff: false,
    manageSchedules: false,
    viewAppointments: true,
    viewLeads: false,
    ownAppointments: true,
    ownAvailability: true,
  },
  assistant: {
    manageProperties: false,
    manageAppointments: false,
    manageStaff: false,
    manageSchedules: false,
    viewAppointments: true,
    viewLeads: true,
    ownAppointments: false,
    ownAvailability: false,
  },
  editor: {
    manageProperties: false,
    manageAppointments: false,
    manageStaff: false,
    manageSchedules: false,
    viewAppointments: false,
    viewLeads: false,
    ownAppointments: false,
    ownAvailability: false,
  },
};
const APPOINTMENT_STATUSES = ["pending", "confirmed", "cancelled", "completed"];
const ACTIVE_APPOINTMENT_STATUSES = ["pending", "confirmed"];
const WEEKDAY_KEYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const DEFAULT_STAFF = [
  {
    id: "staff-diego-cueto",
    name: "Diego Cueto Hawa",
    username: "Diego C. Hawa",
    password: "1234",
    role: "agent",
    permissions: STAFF_PERMISSION_DEFAULTS.agent,
    active: true,
    acceptsAppointments: true,
    availabilityConfigured: true,
    phone: BUSINESS_WHATSAPP,
    email: "diegocuetohawa05@hotmail.com",
    avatar: "",
    availability: {
      slotDuration: 60,
      weekly: {
        monday: [{ start: "09:00", end: "12:00" }, { start: "14:00", end: "17:00" }],
        tuesday: [{ start: "09:00", end: "15:00" }],
        wednesday: [],
        thursday: [{ start: "10:00", end: "16:00" }],
        friday: [{ start: "09:00", end: "13:00" }],
        saturday: [{ start: "09:00", end: "12:00" }],
        sunday: [],
      },
      blockedDates: ["2026-06-18", "2026-06-25"],
      blockedSlots: [{ date: "2026-06-20", start: "10:00", end: "11:00", reason: "Reunión interna" }],
    },
  },
  {
    id: "staff-agent-demo",
    name: "Agente Demo",
    username: "agente",
    password: "demo123",
    role: "agent",
    permissions: STAFF_PERMISSION_DEFAULTS.agent,
    active: true,
    acceptsAppointments: true,
    availabilityConfigured: true,
    phone: BUSINESS_WHATSAPP,
    email: "agente@meirahgroup.com",
    avatar: "",
    availability: {
      slotDuration: 45,
      weekly: {
        monday: [{ start: "10:00", end: "16:00" }],
        tuesday: [{ start: "10:00", end: "13:00" }, { start: "14:00", end: "18:00" }],
        wednesday: [{ start: "10:00", end: "16:00" }],
        thursday: [{ start: "10:00", end: "13:00" }, { start: "14:00", end: "18:00" }],
        friday: [{ start: "10:00", end: "16:00" }],
        saturday: [],
        sunday: [],
      },
      blockedDates: [],
      blockedSlots: [],
    },
  },
  {
    id: "staff-admin-meirah",
    name: "Admin Meirah",
    username: "admin",
    password: "admin1025",
    role: "admin",
    permissions: STAFF_PERMISSION_DEFAULTS.admin,
    active: true,
    acceptsAppointments: false,
    availabilityConfigured: false,
    phone: BUSINESS_WHATSAPP,
    email: "contacto@meirahgroup.com",
    avatar: "",
    availability: {
      slotDuration: 60,
      weekly: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      },
      blockedDates: [],
      blockedSlots: [],
    },
  },
  {
    id: "staff-assistant-meirah",
    name: "Asistente Meirah",
    username: "asistente",
    password: "demo123",
    role: "assistant",
    permissions: STAFF_PERMISSION_DEFAULTS.assistant,
    active: true,
    acceptsAppointments: false,
    availabilityConfigured: false,
    phone: BUSINESS_WHATSAPP,
    email: "asistente@meirahgroup.com",
    avatar: "",
    availability: {
      slotDuration: 60,
      weekly: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      },
      blockedDates: [],
      blockedSlots: [],
    },
  },
];
const VIDEO_SOURCE_PATTERN = /\.(mp4|webm|ogg|mov|m4v)(?:$|[?#])/i;
const JARABACOA_CENTER = { lat: 19.1218, lng: -70.6422 };
const DEFAULT_PROPERTY_COORDS = {
  "villa-altos-del-yaque": { lat: 19.1245, lng: -70.6408 },
  "casa-pinar-dorado": { lat: 19.1272, lng: -70.6344 },
  "apartamento-vista-real": { lat: 19.1291, lng: -70.6228 },
  "solar-manabao": { lat: 19.0698, lng: -70.7848 },
  "casa-la-confluencia": { lat: 19.0988, lng: -70.6503 },
  "villa-riverstone": { lat: 19.1456, lng: -70.6254 },
};
const RIVERSTONE_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=82",
];

const BASE_PROPERTIES = [
  {
    id: "villa-altos-del-yaque",
    title: "Villa Altos del Yaque",
    titleEn: "Altos del Yaque Villa",
    type: "Villa",
    operations: ["sale", "rent"],
    status: "sale",
    zone: "Jarabacoa Centro",
    price: 385000,
    rentNight: 320,
    beds: 4,
    baths: 4.5,
    area: 360,
    lot: 1250,
    featured: true,
    lat: DEFAULT_PROPERTY_COORDS["villa-altos-del-yaque"].lat,
    lng: DEFAULT_PROPERTY_COORDS["villa-altos-del-yaque"].lng,
    coords: { x: 34, y: 42 },
    distances: {
      Supermercado: "6 min",
      Banco: "8 min",
      Clinica: "10 min",
      Parque: "7 min",
    },
    description:
      "Villa de montaña con piscina, vista al valle, terraza social y distribución ideal para alquiler vacacional o residencia familiar.",
    descriptionEn:
      "Mountain villa with pool, valley views, social terrace, and a layout suited for vacation rental or family living.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=82",
    ],
  },
  {
    id: "casa-pinar-dorado",
    title: "Casa Pinar Dorado",
    titleEn: "Pinar Dorado Home",
    type: "Casa",
    operations: ["rent"],
    status: "rent",
    zone: "Pinar Dorado",
    price: 0,
    rentNight: 185,
    beds: 3,
    baths: 2.5,
    area: 210,
    lot: 720,
    featured: true,
    lat: DEFAULT_PROPERTY_COORDS["casa-pinar-dorado"].lat,
    lng: DEFAULT_PROPERTY_COORDS["casa-pinar-dorado"].lng,
    coords: { x: 58, y: 34 },
    distances: {
      Supermercado: "4 min",
      Banco: "5 min",
      Clinica: "8 min",
      Parque: "3 min",
    },
    description:
      "Casa acogedora con patio, área de BBQ y acceso rápido al centro. Perfecta para estadías familiares de fin de semana.",
    descriptionEn:
      "Cozy home with yard, BBQ area, and quick access to town. Perfect for family weekend stays.",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=82",
    ],
  },
  {
    id: "apartamento-vista-real",
    title: "Apartamento Vista Real",
    titleEn: "Vista Real Apartment",
    type: "Apartamento",
    operations: ["sale"],
    status: "sale",
    zone: "La Vega",
    price: 148000,
    rentNight: 0,
    beds: 2,
    baths: 2,
    area: 118,
    lot: 0,
    featured: false,
    lat: DEFAULT_PROPERTY_COORDS["apartamento-vista-real"].lat,
    lng: DEFAULT_PROPERTY_COORDS["apartamento-vista-real"].lng,
    coords: { x: 71, y: 58 },
    distances: {
      Supermercado: "3 min",
      Banco: "4 min",
      Clinica: "6 min",
      Parque: "9 min",
    },
    description:
      "Apartamento moderno con balcón, seguridad, parqueo techado y excelente acceso para quienes buscan vivir cerca de servicios.",
    descriptionEn:
      "Modern apartment with balcony, security, covered parking, and strong access to daily services.",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1400&q=82",
    ],
  },
  {
    id: "solar-manabao",
    title: "Solar Manabao Verde",
    titleEn: "Manabao Green Lot",
    type: "Terreno",
    operations: ["sale"],
    status: "sale",
    zone: "Manabao",
    price: 92000,
    rentNight: 0,
    beds: 0,
    baths: 0,
    area: 2200,
    lot: 2200,
    featured: true,
    lat: DEFAULT_PROPERTY_COORDS["solar-manabao"].lat,
    lng: DEFAULT_PROPERTY_COORDS["solar-manabao"].lng,
    coords: { x: 24, y: 68 },
    distances: {
      Supermercado: "14 min",
      Banco: "18 min",
      Clinica: "17 min",
      Parque: "12 min",
    },
    description:
      "Solar amplio con acceso vehicular, vista verde y vocación para proyecto de cabañas, villa privada o desarrollo familiar.",
    descriptionEn:
      "Large lot with vehicle access, green views, and strong potential for cabins, a private villa, or a family compound.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=82",
    ],
  },
  {
    id: "casa-la-confluencia",
    title: "Casa La Confluencia",
    titleEn: "La Confluencia Home",
    type: "Casa",
    operations: ["sale"],
    status: "reserved",
    zone: "La Confluencia",
    price: 265000,
    rentNight: 0,
    beds: 3,
    baths: 3,
    area: 245,
    lot: 900,
    featured: false,
    lat: DEFAULT_PROPERTY_COORDS["casa-la-confluencia"].lat,
    lng: DEFAULT_PROPERTY_COORDS["casa-la-confluencia"].lng,
    coords: { x: 46, y: 74 },
    distances: {
      Supermercado: "9 min",
      Banco: "12 min",
      Clinica: "14 min",
      Parque: "5 min",
    },
    description:
      "Residencia de una planta con jardín, techos altos, oficina privada y cercanía a rutas de aventura.",
    descriptionEn:
      "Single-level residence with garden, high ceilings, private office, and proximity to adventure routes.",
    images: [
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=82",
    ],
  },
  {
    id: "villa-riverstone",
    title: "Villa Riverstone",
    titleEn: "Riverstone Villa",
    type: "Villa",
    operations: ["rent"],
    status: "rent",
    zone: "Buena Vista",
    price: 0,
    rentNight: 410,
    beds: 5,
    baths: 5,
    area: 430,
    lot: 1800,
    featured: true,
    lat: DEFAULT_PROPERTY_COORDS["villa-riverstone"].lat,
    lng: DEFAULT_PROPERTY_COORDS["villa-riverstone"].lng,
    coords: { x: 78, y: 31 },
    distances: {
      Supermercado: "11 min",
      Banco: "15 min",
      Clinica: "16 min",
      Parque: "9 min",
    },
    description:
      "Villa premium junto a zona verde, con jacuzzi, área de fogata y cocina abierta para grupos o escapadas corporativas.",
    descriptionEn:
      "Premium villa by a green area with jacuzzi, firepit, and open kitchen for groups or corporate retreats.",
    images: RIVERSTONE_IMAGES,
  },
];

const I18N = {
  es: {
    brandTag: "Bienes Raíces",
    navProperties: "Propiedades",
    navAppointment: "Agenda tu cita",
    navFinancing: "Calculadoras",
    navAbout: "Sobre nosotros",
    navOwners: "Vende/Alquila",
    navContact: "Contacto",
    heroSlogan: "Tu Esencia • Tu Espacio • Tu Patrimonio",
    heroEyebrow: "Jarabacoa como base, República Dominicana como alcance",
    heroCopy:
      "Casas, villas, solares y propiedades de inversión con asesoría cercana, procesos claros y seguimiento real desde el primer mensaje hasta la entrega de llaves.",
    heroPrimary: "Explorar propiedades",
    heroSecondary: "Quiero asesoría",
    statProperties: "propiedades curadas",
    statFollow: "asesoría activa",
    statLang: "idiomas",
    statReviews: "referencias verificadas",
    filtersEyebrow: "Búsqueda inteligente",
    filtersTitle: "Encuentra tu propiedad",
    filterOperation: "Operación",
    filterType: "Tipo",
    filterZone: "Zona",
    filterMin: "Min. USD",
    filterMax: "Max. USD",
    filterBeds: "Habitaciones",
    filterArea: "m² min.",
    filterApply: "Filtrar",
    filterClear: "Limpiar",
    optionAll: "Todas",
    optionAllTypes: "Todos",
    optionAllZones: "Todas",
    optionSale: "Venta",
    optionRent: "Renta larga",
    optionNight: "Renta corta",
    optionAny: "Cualquiera",
    typeHouse: "Casa",
    typeApartment: "Apartamento",
    typeLand: "Terreno",
    typeFarm: "Finca",
    propertiesEyebrow: "Inventario destacado",
    propertiesTitle: "Propiedades disponibles",
    sortLabel: "Ordenar",
    sortFeatured: "Destacadas",
    sortPriceAsc: "Precio menor",
    sortPriceDesc: "Precio mayor",
    sortArea: "Más m²",
    favoritesButton: "Favoritos",
    appointmentEyebrow: "Atención personalizada",
    appointmentTitle: "Agenda tu cita",
    appointmentCopy:
      "Elige el motivo, la modalidad y el horario que mejor te convenga. El equipo recibirá todos los detalles para preparar la conversación antes de contactarte.",
    appointmentTypeTitle: "¿Qué necesitas?",
    appointmentTypeBuy: "Comprar",
    appointmentTypeSell: "Vender",
    appointmentTypeRent: "Alquilar",
    appointmentTypeInvest: "Invertir",
    appointmentTypeVisit: "Visitar propiedad",
    appointmentModeTitle: "Modalidad",
    appointmentModeCall: "Llamada",
    appointmentModeVideo: "Videollamada",
    appointmentModeInPerson: "Presencial",
    appointmentCalendarHint: "Los días deshabilitados no están disponibles para citas.",
    appointmentTimeEyebrow: "Disponibilidad",
    appointmentTimeTitle: "Selecciona un horario",
    appointmentSelectDate: "Primero selecciona una fecha.",
    appointmentAdvisor: "Agente",
    appointmentAdvisorGeneral: "Equipo Meirah Group",
    appointmentAdvisorInvestment: "Asesor de inversiones",
    appointmentName: "Nombre completo",
    appointmentNamePlaceholder: "Tu nombre completo",
    appointmentPhone: "Teléfono o WhatsApp",
    appointmentEmail: "Correo electrónico (opcional)",
    appointmentMessage: "Mensaje adicional",
    appointmentMessagePlaceholder: "Cuéntanos qué propiedad o tema deseas tratar",
    appointmentConfirm: "Confirmar cita",
    appointmentConfirmedEyebrow: "Cita registrada",
    appointmentConfirmedTitle: "Tu solicitud está lista",
    appointmentSendWhatsApp: "Enviar resumen por WhatsApp",
    appointmentBooked: "Ocupado",
    appointmentNoTimes: "No quedan horarios disponibles para este día y agente.",
    appointmentChooseDateError: "Selecciona una fecha disponible.",
    appointmentChooseTimeError: "Selecciona uno de los horarios disponibles.",
    appointmentConflictError: "Ese horario acaba de ocuparse. Selecciona otro.",
    appointmentSaved: "Cita guardada. Puedes enviar el resumen por WhatsApp.",
    appointmentAdvisorTitle: "Selecciona tu agente",
    appointmentAdvisorHint: "El calendario mostrará únicamente la disponibilidad del agente elegido.",
    appointmentNoStaff: "No hay agentes activos con disponibilidad configurada.",
    appointmentChooseStaffError: "Selecciona un agente para ver disponibilidad",
    appointmentPrivacyTitle: "Seguro y confidencial",
    appointmentPrivacyCopy: "Tu información está protegida.",
    appointmentScheduleTitle: "Selecciona fecha y hora",
    appointmentDetailsTitle: "Tus datos",
    appointmentDetailsCopy: "Completa tu información",
    appointmentSummaryTitle: "Resumen de tu cita",
    appointmentSelectAgentPlaceholder: "Selecciona un agente",
    appointmentBack: "Volver",
    staffLogout: "Cerrar sesión",
    staffAdminEyebrow: "Gestión interna",
    staffAdminTitle: "Equipo y disponibilidad",
    staffNew: "Crear usuario",
    staffName: "Nombre completo",
    staffUsername: "Usuario",
    staffPassword: "Contraseña demo",
    staffRole: "Rol",
    staffRoleSuperAdmin: "Super admin",
    staffRoleAdvisor: "Agente",
    staffRoleAssistant: "Asistente",
    staffRoleEditor: "Editor",
    staffPhone: "Teléfono/WhatsApp",
    staffEmail: "Correo",
    staffAvatar: "Avatar opcional",
    staffAvatarLinkMode: "Poner enlace",
    staffAvatarFileMode: "Cargar archivo",
    staffAvatarHint: "Archivo máximo 10 MB.",
    staffAvatarEmpty: "Sin avatar",
    staffDuration: "Duración de cada cita",
    staffActive: "Usuario activo",
    staffAcceptsAppointments: "Acepta citas públicas",
    staffAvailabilityConfigured: "Disponibilidad configurada",
    staffWeeklyTitle: "Disponibilidad semanal",
    staffWeeklyHint: "Selecciona un día, define la jornada y marca hasta dos bloqueos internos.",
    staffBlockedDates: "Días bloqueados",
    staffBlockedDatesHint: "Usa fechas AAAA-MM-DD separadas por coma o línea.",
    staffPasswordShow: "Ver",
    staffPasswordHide: "Ocultar",
    staffSave: "Guardar usuario y horario",
    staffDelete: "Eliminar usuario",
    staffLoginEyebrow: "Acceso interno",
    staffLoginTitle: "Iniciar sesión",
    staffLoginCopy: "Acceso para colaboradores internos de Meirah Group.",
    staffLoginSubmit: "Entrar",
    staffPinLogin: "Usar PIN demo 1025",
    appointmentAdminEyebrow: "Seguimiento",
    appointmentAdminTitle: "Citas con agentes",
    appointmentFilterStaff: "Agente",
    appointmentFilterDate: "Fecha",
    appointmentFilterStatus: "Estado",
    appointmentFilterMode: "Modalidad",
    appointmentStatusPending: "Pendiente",
    appointmentStatusConfirmed: "Confirmada",
    appointmentStatusCancelled: "Cancelada",
    appointmentStatusCompleted: "Completada",
    adminLeadsTitle: "Leads recientes",
    financeEyebrow: "Compra con claridad",
    financeTitle: "Calculadoras financieras",
    calculatorsTitle: "Calculadoras",
    mortgageTitle: "Calculadora hipotecaria",
    mortgageCardCopy: "Calcula tu pago mensual de la hipoteca.",
    refinanceTitle: "Calculadora de refinanciación",
    refinanceCardCopy: "Compara tu cuota actual contra una nueva tasa.",
    affordabilityTitle: "Calculadora de asequibilidad",
    affordabilityCardCopy: "Calcula el precio de casa que puedes permitirte.",
    rentBuyTitle: "Alquilar vs. comprar",
    rentBuyCardCopy: "Estima cuando tiene sentido comprar o alquilar.",
    homePrice: "Precio de la propiedad",
    downPayment: "Inicial",
    interestRate: "Tasa anual",
    loanYears: "Plazo en años",
    calculate: "Calcular",
    autopayTitle: "Auto-cobro para pagos a plazos",
    autopayCardCopy: "Genera un calendario de pagos recurrentes.",
    currentBalance: "Balance actual",
    currentRate: "Tasa actual",
    newRate: "Nueva tasa",
    remainingYears: "Años restantes",
    closingCosts: "Gastos de cierre",
    monthlyIncome: "Ingreso mensual",
    monthlyDebt: "Deudas mensuales",
    affordDown: "Inicial disponible",
    monthlyRent: "Alquiler mensual",
    yearsInHome: "Años en la propiedad",
    clientName: "Nombre del cliente",
    paymentAmount: "Monto mensual",
    paymentDay: "Día de cobro",
    paymentMonths: "Cantidad de pagos",
    scheduleAutopay: "Generar plan",
    reservationEyebrow: "Alquileres y estadías",
    reservationTitle: "Reserva igual de fácil que en Airbnb con confirmación rápida",
    reservationCopy:
      "Disponibilidad de renta corta y larga, cálculo de cargos, seguimiento de procesos y solicitud para una experiencia fluida.",
    aboutEyebrow: "Nuestra historia",
    aboutTitle: "Una firma cercana para decisiones grandes",
    aboutTextOne:
      "En Meirah Group creemos que cada espacio cuenta una historia. Por eso acompañamos a nuestros clientes en la búsqueda, adquisición y desarrollo de propiedades que reflejen su estilo de vida, sus metas y su visión de futuro.",
    aboutTextTwo:
      "Combinamos asesoría inmobiliaria, conocimiento del mercado y una perspectiva orientada al patrimonio para ayudar a las personas a tomar decisiones con confianza. Más que encontrar una propiedad, buscamos conectar a cada cliente con un espacio que represente quién es hoy y lo que desea construir mañana.",
    aboutTextThree: "Tu esencia. Tu espacio. Tu patrimonio.",
    valueOne: "Transparencia",
    valueTwo: "Acompañamiento",
    valueThree: "Visión de inversión",
    reviewsEyebrow: "Referencias",
    reviewsTitle: "Clientes que ya dieron el paso",
    reviewOne: "El equipo nos ayudó a comparar zonas, negociar y entender los costos reales antes de firmar.",
    reviewTwo: "Reservamos una villa para un fin de semana familiar. Todo fue rápido, claro y sin sorpresas.",
    reviewThree: "Vivo fuera del país y necesitaba alguien que respondiera con precisión. Meirah Group lo hizo fácil.",
    ownersEyebrow: "Para propietarios",
    ownersTitle: "Vendemos o alquilamos tu propiedad como tu agente inmobiliario",
    ownersCopy:
      "Si tienes una casa, villa, apartamento, terreno, finca o local, Meirah Group puede representarte con estrategia de precio, fotos, promoción, filtros de clientes, visitas, negociación y seguimiento hasta el cierre.",
    ownersPrimary: "Quiero vender o alquilar",
    ownersWhatsApp: "Evaluar por WhatsApp",
    ownersSaleTitle: "Representación para venta",
    ownersSaleCopy: "Análisis de precio, publicación, prospectos calificados, visitas y negociación.",
    ownersRentTitle: "Gestión para renta",
    ownersRentCopy: "Promoción para renta corta y larga, reservas, disponibilidad y perfilado de clientes.",
    ownersLandTitle: "Terrenos y fincas",
    ownersLandCopy: "Presentamos potencial de uso, accesos, servicios cercanos y datos clave de inversión.",
    ownersDocsTitle: "Preparación comercial",
    ownersDocsCopy: "Ordenamos fotos, descripción, documentos base y argumentos para vender con confianza.",
    blogEyebrow: "Blog y noticias",
    blogTitle: "Guías para comprar mejor",
    blogCta: "Pedir una guía personalizada",
    blogOneMeta: "Inversión",
    blogOneTitle: "Qué mirar antes de comprar una villa en zona turística",
    blogTwoMeta: "Financiamiento",
    blogTwoTitle: "Inicial, tasa y flujo: cómo estimar tu cuota mensual",
    blogThreeMeta: "Legal",
    blogThreeTitle: "Documentos básicos que debes validar antes de separar",
    contactEyebrow: "Captura de leads",
    contactTitle: "Cuéntanos qué buscas y te contactamos",
    contactHours: "Lunes a viernes 9 a.m. - 5 p.m. | Sábados citas previas.",
    leadName: "Nombre",
    leadPhone: "Teléfono o WhatsApp",
    leadInterest: "Interés",
    leadBuy: "Comprar",
    leadRent: "Alquilar",
    leadSell: "Vender mi propiedad",
    leadInvest: "Invertir",
    leadMessage: "Mensaje",
    leadConsent: "Acepto que Meirah Group me contacte sobre mi solicitud.",
    leadSend: "Enviar solicitud",
    adminEyebrow: "Modo interno",
    adminTitle: "Panel interno Meirah Group",
    resetDemo: "Restaurar demo",
    adminSelect: "Editar propiedad",
    newProperty: "Nueva",
    deleteProperty: "Eliminar",
    adminName: "Nombre",
    adminType: "Tipo",
    adminOperation: "Operación",
    adminStatus: "Estado",
    adminPrice: "Precio venta",
    adminNight: "Precio noche",
    adminBeds: "Hab.",
    adminBaths: "Baños",
    adminArea: "m² construcción",
    adminLotArea: "m² terreno",
    adminZone: "Zona",
    adminImages: "Imágenes y videos de la propiedad",
    adminUploadLocal: "Cargar",
    adminUploadDrive: "Subir",
    adminUploadLink: "Enlace",
    adminDesc: "Descripción",
    saveProperty: "Guardar propiedad",
    adminInsights: "Pendientes recomendados",
    adminReserveTitle: "Calendario de reservas (admin)",
    adminReserveProperty: "Propiedad reservada",
    adminReserveStart: "Entrada",
    adminReserveEnd: "Salida",
    adminReserveSave: "Guardar reserva",
    adminReserveClear: "Limpiar reservas",
    adminReserveEmpty: "Sin reservas registradas para esta propiedad.",
    adminReserveSaved: "Reserva guardada en calendario admin.",
    adminReserveCleared: "Reservas limpiadas para esta propiedad.",
    missingOne: "Conectar pasarela local o Stripe para cargos reales y webhooks.",
    missingTwo: "Agregar CRM con seguimiento por etapa: nuevo, calificado, visita, oferta, cierre.",
    missingThree: "Subir documentos legales por propiedad: título, deslinde, impuestos y autorizaciones.",
    missingFour: "Crear panel de analíticas: leads, propiedades más vistas y tasa de reservas.",
    missingFive: "Activar SEO técnico con URLs por propiedad y schema inmobiliario.",
    footerTag: "Compra, venta y alquiler de propiedades",
    footerCopy:
      "Asesoría inmobiliaria desde Jarabacoa para clientes locales, inversionistas y visitantes que buscan comprar, vender o alquilar con confianza.",
    footerCompany: "Compañía",
    footerServices: "Servicios",
    footerContact: "Contacto",
    footerFinancing: "Calculadoras",
    aiAdvisory: "ChatBOT 24/7",
    memberEyebrow: "Acceso privado",
    memberTitle: "Inicio de sesión para socios e interesados",
    memberCopy:
      "Recibe alertas de nuevas propiedades, cambios de disponibilidad, oportunidades de inversión y publicaciones del blog antes de que se pierdan entre mensajes.",
    memberEmail: "Correo electrónico",
    memberRole: "Perfil",
    memberPartner: "Socio",
    memberInvestor: "Inversionista",
    memberOwner: "Propietario",
    memberBuyer: "Comprador interesado",
    notifyProperties: "Nuevas propiedades",
    notifyBlogs: "Blog y noticias",
    notifyUpdates: "Actualizaciones del mercado",
    memberSubmit: "Entrar y recibir alertas",
    chatPlaceholder: "Escribe tu pregunta",
    footerReservations: "Reservas",
    footerOwners: "Vende o alquila con nosotros",
    footerManagement: "Administración de inventario",
    chatStatus: "Responde con datos del negocio",
    results: "propiedades encontradas",
    noResults: "No encontramos propiedades con esos filtros.",
    viewDetails: "Ver detalles",
    shareProperty: "Compartir",
    propertyCode: "Código",
    constructionArea: "estructura",
    landArea: "terreno",
    totalArea: "propiedad total",
    shareTitle: "Compartir propiedad",
    shareCopy: "Elige dónde deseas compartir este enlace.",
    shareCopyLink: "Copiar enlace",
    shareCopied: "Enlace copiado.",
    shareInstagramCopied: "Enlace copiado para compartir en Instagram",
    shareTikTokCopied: "Enlace copiado para compartir en TikTok",
    gallery: "Galería",
    reserve: "Reservar",
    ask: "Consultar",
    beds: "hab.",
    baths: "baños",
    area: "m²",
    perNight: "por noche",
    saleStatus: "En Venta",
    rentStatus: "En Alquiler",
    reservedStatus: "Reservado",
    soldStatus: "Vendido",
    monthlyEstimate: "Pago mensual estimado",
    financedAmount: "Monto financiado",
    totalInterest: "Interés estimado",
    currentPayment: "Pago actual",
    newPayment: "Nuevo pago",
    monthlySavings: "Ahorro mensual",
    breakEven: "Punto de equilibrio",
    maxHomePrice: "Precio máximo estimado",
    targetPayment: "Pago recomendado",
    buyCost: "Costo estimado de comprar",
    rentCost: "Costo estimado de alquilar",
    betterOption: "Opción sugerida",
    firstPayments: "Primeros pagos",
    modalBooking: "Reserva estimada",
    checkIn: "Entrada",
    checkOut: "Salida",
    guests: "Huéspedes",
    reservedDates: "Fechas reservadas",
    availabilityHint: "Rojo = ocupado",
    availabilityConflict: "Esas fechas ya están reservadas. Elige otro rango.",
    calculateStay: "Calcular estadía",
    sendReservation: "Solicitar reserva",
    modalPayment: "Plan de pagos",
    additionalComments: "Comentarios adicionales",
    months: "Meses",
    annualRate: "Tasa anual",
    generate: "Generar",
    contactAdvisor: "Hablar con asesor",
  },
  en: {
    brandTag: "Real Estate",
    navProperties: "Properties",
    navAppointment: "Schedule your meeting",
    navFinancing: "Calculators",
    navAbout: "About",
    navOwners: "Sell/Rent",
    navContact: "Contact",
    heroSlogan: "Tu Esencia • Tu Espacio • Tu Patrimonio",
    heroEyebrow: "Based in Jarabacoa, serving the Dominican Republic",
    heroCopy:
      "Homes, villas, land, and investment properties with clear guidance, clean processes, and real follow-up from the first message to key handoff.",
    heroPrimary: "Explore properties",
    heroSecondary: "Get guidance",
    statProperties: "curated properties",
    statFollow: "active advisory",
    statLang: "languages",
    statReviews: "verified references",
    filtersEyebrow: "Smart search",
    filtersTitle: "Find your property",
    filterOperation: "Operation",
    filterType: "Type",
    filterZone: "Area",
    filterMin: "Min. USD",
    filterMax: "Max. USD",
    filterBeds: "Bedrooms",
    filterArea: "min. sqm",
    filterApply: "Filter",
    filterClear: "Clear",
    optionAll: "All",
    optionAllTypes: "All",
    optionAllZones: "All",
    optionSale: "Sale",
    optionRent: "Long-term rent",
    optionNight: "Short-term rent",
    optionAny: "Any",
    typeHouse: "House",
    typeApartment: "Apartment",
    typeLand: "Land",
    typeFarm: "Farm",
    propertiesEyebrow: "Featured inventory",
    propertiesTitle: "Available properties",
    sortLabel: "Sort",
    sortFeatured: "Featured",
    sortPriceAsc: "Lowest price",
    sortPriceDesc: "Highest price",
    sortArea: "Most sqm",
    favoritesButton: "Favorites",
    appointmentEyebrow: "Personalized service",
    appointmentTitle: "Schedule your meeting",
    appointmentCopy:
      "Choose the purpose, format, and time that work best for you. The team will receive the details before contacting you.",
    appointmentTypeTitle: "What do you need?",
    appointmentTypeBuy: "Buy",
    appointmentTypeSell: "Sell",
    appointmentTypeRent: "Rent",
    appointmentTypeInvest: "Investment",
    appointmentTypeVisit: "Property visit",
    appointmentModeTitle: "Meeting format",
    appointmentModeCall: "Phone call",
    appointmentModeVideo: "Video call",
    appointmentModeInPerson: "In person",
    appointmentCalendarHint: "Disabled days are not available for appointments.",
    appointmentTimeEyebrow: "Availability",
    appointmentTimeTitle: "Choose a time",
    appointmentSelectDate: "Select a date first.",
    appointmentAdvisor: "Agent",
    appointmentAdvisorGeneral: "Meirah Group team",
    appointmentAdvisorInvestment: "Investment advisor",
    appointmentName: "Full name",
    appointmentNamePlaceholder: "Your full name",
    appointmentPhone: "Phone or WhatsApp",
    appointmentEmail: "Email (optional)",
    appointmentMessage: "Additional message",
    appointmentMessagePlaceholder: "Tell us which property or topic you want to discuss",
    appointmentConfirm: "Confirm appointment",
    appointmentConfirmedEyebrow: "Appointment registered",
    appointmentConfirmedTitle: "Your request is ready",
    appointmentSendWhatsApp: "Send summary by WhatsApp",
    appointmentBooked: "Booked",
    appointmentNoTimes: "No times remain for this day and agent.",
    appointmentChooseDateError: "Select an available date.",
    appointmentChooseTimeError: "Select one of the available times.",
    appointmentConflictError: "That time was just booked. Choose another one.",
    appointmentSaved: "Appointment saved. You can send the summary by WhatsApp.",
    appointmentAdvisorTitle: "Choose your agent",
    appointmentAdvisorHint: "The calendar will only show the selected agent's real availability.",
    appointmentNoStaff: "No active agents have availability configured.",
    appointmentChooseStaffError: "Select an agent to view availability",
    appointmentPrivacyTitle: "Secure and confidential",
    appointmentPrivacyCopy: "Your information is protected.",
    appointmentScheduleTitle: "Choose date and time",
    appointmentDetailsTitle: "Your details",
    appointmentDetailsCopy: "Complete your information",
    appointmentSummaryTitle: "Appointment summary",
    appointmentSelectAgentPlaceholder: "Select an agent",
    appointmentBack: "Back",
    staffLogout: "Sign out",
    staffAdminEyebrow: "Internal management",
    staffAdminTitle: "Team and availability",
    staffNew: "Create user",
    staffName: "Full name",
    staffUsername: "Username",
    staffPassword: "Demo password",
    staffRole: "Role",
    staffRoleSuperAdmin: "Super admin",
    staffRoleAdvisor: "Agent",
    staffRoleAssistant: "Assistant",
    staffRoleEditor: "Editor",
    staffPhone: "Phone/WhatsApp",
    staffEmail: "Email",
    staffAvatar: "Optional avatar",
    staffAvatarLinkMode: "Use link",
    staffAvatarFileMode: "Upload file",
    staffAvatarHint: "Maximum file size 10 MB.",
    staffAvatarEmpty: "No avatar",
    staffDuration: "Appointment duration",
    staffActive: "Active user",
    staffAcceptsAppointments: "Accepts public appointments",
    staffAvailabilityConfigured: "Availability configured",
    staffWeeklyTitle: "Weekly availability",
    staffWeeklyHint: "Select a day, define work hours, and set up to two internal blocked windows.",
    staffBlockedDates: "Blocked dates",
    staffBlockedDatesHint: "Use YYYY-MM-DD dates separated by commas or lines.",
    staffPasswordShow: "Show",
    staffPasswordHide: "Hide",
    staffSave: "Save user and schedule",
    staffDelete: "Delete user",
    staffLoginEyebrow: "Internal access",
    staffLoginTitle: "Sign in",
    staffLoginCopy: "Access for Meirah Group internal collaborators.",
    staffLoginSubmit: "Sign in",
    staffPinLogin: "Use demo PIN 1025",
    appointmentAdminEyebrow: "Follow-up",
    appointmentAdminTitle: "Agent appointments",
    appointmentFilterStaff: "Agent",
    appointmentFilterDate: "Date",
    appointmentFilterStatus: "Status",
    appointmentFilterMode: "Format",
    appointmentStatusPending: "Pending",
    appointmentStatusConfirmed: "Confirmed",
    appointmentStatusCancelled: "Cancelled",
    appointmentStatusCompleted: "Completed",
    adminLeadsTitle: "Recent leads",
    financeEyebrow: "Buy with clarity",
    financeTitle: "Financial calculators for better decisions",
    calculatorsTitle: "Calculators",
    mortgageTitle: "Mortgage calculator",
    mortgageCardCopy: "Calculate your estimated monthly mortgage payment.",
    refinanceTitle: "Refinance calculator",
    refinanceCardCopy: "Compare your current payment with a new rate.",
    affordabilityTitle: "Affordability calculator",
    affordabilityCardCopy: "Estimate the home price you may be able to afford.",
    rentBuyTitle: "Rent vs. buy",
    rentBuyCardCopy: "Estimate when buying or renting makes more sense.",
    homePrice: "Property price",
    downPayment: "Down payment",
    interestRate: "Annual rate",
    loanYears: "Term in years",
    calculate: "Calculate",
    autopayTitle: "Auto-payment for installment plans",
    autopayCardCopy: "Generate a recurring payment schedule.",
    currentBalance: "Current balance",
    currentRate: "Current rate",
    newRate: "New rate",
    remainingYears: "Remaining years",
    closingCosts: "Closing costs",
    monthlyIncome: "Monthly income",
    monthlyDebt: "Monthly debt",
    affordDown: "Available down payment",
    monthlyRent: "Monthly rent",
    yearsInHome: "Years in property",
    clientName: "Client name",
    paymentAmount: "Monthly amount",
    paymentDay: "Billing day",
    paymentMonths: "Number of payments",
    scheduleAutopay: "Generate plan",
    reservationEyebrow: "Rentals and stays",
    reservationTitle: "Book as easily as on Airbnb with quick confirmation",
    reservationCopy:
      "Short and long stay availability, charge calculation, process follow-up, and request flow for a smoother experience.",
    aboutEyebrow: "Our story",
    aboutTitle: "A close firm for big decisions",
    aboutTextOne:
      "At Meirah Group, we believe every space tells a story. That is why we guide our clients through the search, acquisition, and development of properties that reflect their lifestyle, goals, and vision for the future.",
    aboutTextTwo:
      "We combine real estate advisory, market knowledge, and a wealth-oriented perspective to help people make decisions with confidence. More than finding a property, we aim to connect each client with a space that represents who they are today and what they want to build tomorrow.",
    aboutTextThree: "Your essence. Your space. Your legacy.",
    valueOne: "Transparency",
    valueTwo: "Guidance",
    valueThree: "Investment vision",
    reviewsEyebrow: "References",
    reviewsTitle: "Clients who already moved forward",
    reviewOne: "The team helped us compare areas, negotiate, and understand real costs before signing.",
    reviewTwo: "We booked a villa for a family weekend. Everything was fast, clear, and without surprises.",
    reviewThree: "I live abroad and needed precise answers. Meirah Group made it easy.",
    ownersEyebrow: "For owners",
    ownersTitle: "We sell or rent your property as your real estate agent",
    ownersCopy:
      "If you own a house, villa, apartment, land parcel, farm, or commercial space, Meirah Group can represent you with pricing strategy, photos, promotion, client filtering, showings, negotiation, and closing follow-up.",
    ownersPrimary: "I want to sell or rent",
    ownersWhatsApp: "Evaluate by WhatsApp",
    ownersSaleTitle: "Sales representation",
    ownersSaleCopy: "Price analysis, listing, qualified prospects, showings, and negotiation.",
    ownersRentTitle: "Rental management",
    ownersRentCopy: "Promotion for short- and long-term rentals, bookings, availability, and client profiling.",
    ownersLandTitle: "Land and farms",
    ownersLandCopy: "We present use potential, access, nearby services, and key investment details.",
    ownersDocsTitle: "Commercial preparation",
    ownersDocsCopy: "We organize photos, description, base documents, and selling arguments with confidence.",
    blogEyebrow: "Blog and news",
    blogTitle: "Guides to buy better",
    blogCta: "Request a custom guide",
    blogOneMeta: "Investment",
    blogOneTitle: "What to review before buying a villa in a tourism area",
    blogTwoMeta: "Financing",
    blogTwoTitle: "Down payment, rate, and cash flow: estimating your monthly payment",
    blogThreeMeta: "Legal",
    blogThreeTitle: "Basic documents to validate before reserving",
    contactEyebrow: "Lead capture",
    contactTitle: "Tell us what you need and we will contact you",
    contactHours: "Monday to Friday 9 a.m. - 5 p.m. | Saturdays by appointment.",
    leadName: "Name",
    leadPhone: "Phone or WhatsApp",
    leadInterest: "Interest",
    leadBuy: "Buy",
    leadRent: "Rent",
    leadSell: "Sell my property",
    leadInvest: "Invest",
    leadMessage: "Message",
    leadConsent: "I agree that Meirah Group may contact me about my request.",
    leadSend: "Send request",
    adminEyebrow: "Internal mode",
    adminTitle: "Meirah Group internal panel",
    resetDemo: "Reset demo",
    adminSelect: "Edit property",
    newProperty: "New",
    deleteProperty: "Delete",
    adminName: "Name",
    adminType: "Type",
    adminOperation: "Operation",
    adminStatus: "Status",
    adminPrice: "Sale price",
    adminNight: "Nightly price",
    adminBeds: "Beds",
    adminBaths: "Baths",
    adminArea: "built sqm",
    adminLotArea: "land sqm",
    adminZone: "Area",
    adminImages: "Property images and videos",
    adminUploadLocal: "Load",
    adminUploadDrive: "Upload",
    adminUploadLink: "Link",
    adminDesc: "Description",
    saveProperty: "Save property",
    adminInsights: "Recommended next steps",
    adminReserveTitle: "Reservation calendar (admin)",
    adminReserveProperty: "Reserved property",
    adminReserveStart: "Check-in",
    adminReserveEnd: "Check-out",
    adminReserveSave: "Save booking",
    adminReserveClear: "Clear bookings",
    adminReserveEmpty: "No bookings saved for this property.",
    adminReserveSaved: "Booking saved in admin calendar.",
    adminReserveCleared: "Bookings cleared for this property.",
    missingOne: "Connect a local gateway or Stripe for real charges and webhooks.",
    missingTwo: "Add CRM follow-up stages: new, qualified, showing, offer, closing.",
    missingThree: "Upload legal documents per property: title, survey, taxes, and authorizations.",
    missingFour: "Create analytics: leads, most viewed properties, and booking conversion.",
    missingFive: "Enable technical SEO with property URLs and real estate schema.",
    footerTag: "Buying, selling, and renting properties",
    footerCopy:
      "Real estate guidance from Jarabacoa for local clients, investors, and visitors who want to buy, sell, or rent with confidence.",
    footerCompany: "Company",
    footerServices: "Services",
    footerContact: "Contact",
    footerFinancing: "Calculators",
    aiAdvisory: "ChatBOT 24/7",
    memberEyebrow: "Private access",
    memberTitle: "Login for partners and interested clients",
    memberCopy:
      "Receive alerts for new properties, availability changes, investment opportunities, and blog posts before they get lost between messages.",
    memberEmail: "Email",
    memberRole: "Profile",
    memberPartner: "Partner",
    memberInvestor: "Investor",
    memberOwner: "Owner",
    memberBuyer: "Interested buyer",
    notifyProperties: "New properties",
    notifyBlogs: "Blog and news",
    notifyUpdates: "Market updates",
    memberSubmit: "Sign in and receive alerts",
    chatPlaceholder: "Write your question",
    footerReservations: "Bookings",
    footerOwners: "Sell or rent with us",
    footerManagement: "Inventory management",
    chatStatus: "Answers with business data",
    results: "properties found",
    noResults: "No properties match those filters.",
    viewDetails: "Details",
    shareProperty: "Share",
    propertyCode: "Code",
    constructionArea: "structure",
    landArea: "land",
    totalArea: "total area",
    shareTitle: "Share property",
    shareCopy: "Choose where you want to share this link.",
    shareCopyLink: "Copy link",
    shareCopied: "Link copied.",
    shareInstagramCopied: "Link copied to share on Instagram",
    shareTikTokCopied: "Link copied to share on TikTok",
    gallery: "Gallery",
    reserve: "Book",
    ask: "Ask",
    beds: "beds",
    baths: "baths",
    area: "sqm",
    perNight: "per night",
    saleStatus: "For Sale",
    rentStatus: "For Rent",
    reservedStatus: "Reserved",
    soldStatus: "Sold",
    monthlyEstimate: "Estimated monthly payment",
    financedAmount: "Financed amount",
    totalInterest: "Estimated interest",
    currentPayment: "Current payment",
    newPayment: "New payment",
    monthlySavings: "Monthly savings",
    breakEven: "Break-even point",
    maxHomePrice: "Estimated max home price",
    targetPayment: "Recommended payment",
    buyCost: "Estimated buying cost",
    rentCost: "Estimated renting cost",
    betterOption: "Suggested option",
    firstPayments: "First payments",
    modalBooking: "Stay estimate",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    reservedDates: "Booked dates",
    availabilityHint: "Red = unavailable",
    availabilityConflict: "Those dates are already booked. Choose another range.",
    calculateStay: "Calculate stay",
    sendReservation: "Request booking",
    modalPayment: "Payment plan",
    additionalComments: "Additional comments",
    months: "Months",
    annualRate: "Annual rate",
    generate: "Generate",
    contactAdvisor: "Talk to advisor",
  },
};

I18N.pt = {
  ...I18N.es,
  brandTag: "Imóveis",
  navProperties: "Imóveis",
  navAppointment: "Agende sua reunião",
  navFinancing: "Calculadoras",
  navAbout: "Sobre nós",
  navOwners: "Venda/Alugue",
  navContact: "Contato",
  heroSlogan: "Tu Esencia • Tu Espacio • Tu Patrimonio",
  heroEyebrow: "Jarabacoa como base, República Dominicana como alcance",
  heroCopy:
    "Casas, villas, terrenos e propriedades de investimento com assessoria próxima, processos claros e acompanhamento real desde a primeira mensagem até a entrega das chaves.",
  heroPrimary: "Explorar imóveis",
  heroSecondary: "Quero assessoria",
  statProperties: "imóveis selecionados",
  statFollow: "assessoria ativa",
  statLang: "idiomas",
  filtersEyebrow: "Busca inteligente",
  filtersTitle: "Encontre seu imóvel",
  filterOperation: "Operação",
  filterType: "Tipo",
  filterZone: "Zona",
  filterBeds: "Quartos",
  filterApply: "Filtrar",
  filterClear: "Limpar",
  optionSale: "Venda",
  optionRent: "Aluguel longo",
  optionNight: "Aluguel curto",
  typeHouse: "Casa",
  typeApartment: "Apartamento",
  typeLand: "Terreno",
  typeFarm: "Fazenda",
  propertiesEyebrow: "Inventário em destaque",
  propertiesTitle: "Imóveis disponíveis",
  appointmentEyebrow: "Atendimento personalizado",
  appointmentTitle: "Agende sua reunião",
  appointmentCopy:
    "Escolha o motivo, a modalidade e o horário mais conveniente. A equipe receberá todos os detalhes antes de entrar em contato.",
  appointmentTypeTitle: "O que você precisa?",
  appointmentTypeBuy: "Comprar",
  appointmentTypeSell: "Vender",
  appointmentTypeRent: "Alugar",
  appointmentTypeInvest: "Investir",
  appointmentTypeVisit: "Visitar imóvel",
  appointmentModeTitle: "Modalidade",
  appointmentModeCall: "Ligação",
  appointmentModeVideo: "Videochamada",
  appointmentModeInPerson: "Presencial",
  appointmentCalendarHint: "Os dias desativados não estão disponíveis para reuniões.",
  appointmentTimeEyebrow: "Disponibilidade",
  appointmentTimeTitle: "Selecione um horário",
  appointmentSelectDate: "Primeiro selecione uma data.",
  appointmentAdvisor: "Agente",
  appointmentAdvisorGeneral: "Equipe Meirah Group",
  appointmentAdvisorInvestment: "Assessor de investimentos",
  appointmentName: "Nome completo",
  appointmentNamePlaceholder: "Seu nome completo",
  appointmentPhone: "Telefone ou WhatsApp",
  appointmentEmail: "E-mail (opcional)",
  appointmentMessage: "Mensagem adicional",
  appointmentMessagePlaceholder: "Conte qual imóvel ou assunto deseja tratar",
  appointmentConfirm: "Confirmar reunião",
  appointmentConfirmedEyebrow: "Reunião registrada",
  appointmentConfirmedTitle: "Sua solicitação está pronta",
  appointmentSendWhatsApp: "Enviar resumo por WhatsApp",
  appointmentBooked: "Ocupado",
  appointmentNoTimes: "Não há horários disponíveis para este dia e agente.",
  appointmentChooseDateError: "Selecione uma data disponível.",
  appointmentChooseTimeError: "Selecione um dos horários disponíveis.",
  appointmentConflictError: "Esse horário acabou de ser ocupado. Escolha outro.",
  appointmentSaved: "Reunião salva. Você pode enviar o resumo pelo WhatsApp.",
  appointmentAdvisorTitle: "Selecione seu agente",
  appointmentAdvisorHint: "O calendário mostrará somente a disponibilidade real do agente escolhido.",
  appointmentNoStaff: "Não há agentes ativos com disponibilidade configurada.",
  appointmentChooseStaffError: "Selecione um agente para ver a disponibilidade",
  appointmentPrivacyTitle: "Seguro e confidencial",
  appointmentPrivacyCopy: "Suas informações estão protegidas.",
  appointmentScheduleTitle: "Selecione data e horário",
  appointmentDetailsTitle: "Seus dados",
  appointmentDetailsCopy: "Complete suas informações",
  appointmentSummaryTitle: "Resumo da sua reunião",
  appointmentSelectAgentPlaceholder: "Selecione um agente",
  appointmentBack: "Voltar",
  staffLogout: "Sair",
  staffAdminEyebrow: "Gestão interna",
  staffAdminTitle: "Equipe e disponibilidade",
  staffNew: "Criar usuário",
  staffName: "Nome completo",
  staffUsername: "Usuário",
  staffPassword: "Senha demo",
  staffRole: "Função",
  staffRoleSuperAdmin: "Super admin",
  staffRoleAdvisor: "Agente",
  staffRoleAssistant: "Assistente",
  staffRoleEditor: "Editor",
  staffPhone: "Telefone/WhatsApp",
  staffEmail: "E-mail",
  staffAvatar: "Avatar opcional",
  staffAvatarLinkMode: "Usar link",
  staffAvatarFileMode: "Carregar arquivo",
  staffAvatarHint: "Arquivo máximo de 10 MB.",
  staffAvatarEmpty: "Sem avatar",
  staffDuration: "Duração de cada reunião",
  staffActive: "Usuário ativo",
  staffAcceptsAppointments: "Aceita reuniões públicas",
  staffAvailabilityConfigured: "Disponibilidade configurada",
  staffWeeklyTitle: "Disponibilidade semanal",
  staffWeeklyHint: "Selecione um dia, defina a jornada e marque até dois bloqueios internos.",
  staffBlockedDates: "Datas bloqueadas",
  staffBlockedDatesHint: "Use datas AAAA-MM-DD separadas por vírgulas ou linhas.",
  staffPasswordShow: "Ver",
  staffPasswordHide: "Ocultar",
  staffSave: "Salvar usuário e horário",
  staffDelete: "Excluir usuário",
  staffLoginEyebrow: "Acesso interno",
  staffLoginTitle: "Entrar",
  staffLoginCopy: "Acesso para colaboradores internos da Meirah Group.",
  staffLoginSubmit: "Entrar",
  staffPinLogin: "Usar PIN demo 1025",
  appointmentAdminEyebrow: "Acompanhamento",
  appointmentAdminTitle: "Reuniões com agentes",
  appointmentFilterStaff: "Agente",
  appointmentFilterDate: "Data",
  appointmentFilterStatus: "Status",
  appointmentFilterMode: "Modalidade",
  appointmentStatusPending: "Pendente",
  appointmentStatusConfirmed: "Confirmada",
  appointmentStatusCancelled: "Cancelada",
  appointmentStatusCompleted: "Concluída",
  adminLeadsTitle: "Leads recentes",
  financeEyebrow: "Compre com clareza",
  financeTitle: "Calculadoras financeiras para decidir melhor",
  mortgageTitle: "Calculadora hipotecária",
  mortgageCardCopy: "Calcule o pagamento mensal da hipoteca.",
  affordabilityTitle: "Calculadora de acessibilidade",
  affordabilityCardCopy: "Calcule o preço de casa que você pode pagar.",
  rentBuyTitle: "Alugar vs. comprar",
  rentBuyCardCopy: "Estime quando faz sentido comprar ou alugar.",
  calculate: "Calcular",
  reservationTitle: "Reserve com a mesma facilidade do Airbnb e confirmação rápida",
  reservationCopy:
    "Disponibilidade para aluguel curto e longo, cálculo de encargos, acompanhamento do processo e solicitação para uma experiência fluida.",
  aboutEyebrow: "Nossa história",
  aboutTitle: "Uma empresa próxima para grandes decisões",
  aboutTextOne:
    "Na Meirah Group, acreditamos que cada espaço conta uma história. Por isso acompanhamos nossos clientes na busca, aquisição e desenvolvimento de propriedades que reflitam seu estilo de vida, suas metas e sua visão de futuro.",
  aboutTextTwo:
    "Combinamos assessoria imobiliária, conhecimento de mercado e uma perspectiva orientada ao patrimônio para ajudar as pessoas a tomar decisões com confiança. Mais do que encontrar um imóvel, buscamos conectar cada cliente a um espaço que represente quem ele é hoje e o que deseja construir amanhã.",
  aboutTextThree: "Sua essência. Seu espaço. Seu patrimônio.",
  ownersEyebrow: "Para proprietários",
  ownersTitle: "Vendemos ou alugamos seu imóvel como seu agente imobiliário",
  ownersPrimary: "Quero vender ou alugar",
  ownersWhatsApp: "Avaliar por WhatsApp",
  blogEyebrow: "Blog e notícias",
  blogTitle: "Guias para comprar melhor",
  contactTitle: "Conte-nos o que você procura e entraremos em contato",
  contactHours: "Segunda a sexta, 9h - 17h | Sábados com agendamento prévio.",
  leadName: "Nome",
  leadPhone: "Telefone ou WhatsApp",
  leadInterest: "Interesse",
  leadBuy: "Comprar",
  leadRent: "Alugar",
  leadSell: "Vender meu imóvel",
  leadInvest: "Investir",
  leadMessage: "Mensagem",
  leadSend: "Enviar solicitação",
  adminTitle: "Painel interno Meirah Group",
  adminImages: "Imagens e vídeos do imóvel",
  adminUploadLocal: "Carregar",
  adminUploadDrive: "Subir",
  adminUploadLink: "Link",
  adminReserveTitle: "Calendário de reservas (admin)",
  adminReserveProperty: "Imóvel reservado",
  adminReserveStart: "Entrada",
  adminReserveEnd: "Saída",
  adminReserveSave: "Salvar reserva",
  adminReserveClear: "Limpar reservas",
  adminReserveEmpty: "Sem reservas registradas para este imóvel.",
  adminReserveSaved: "Reserva salva no calendário admin.",
  adminReserveCleared: "Reservas limpas para este imóvel.",
  adminArea: "m² construídos",
  adminLotArea: "m² terreno",
  footerTag: "Compra, venda e aluguel de imóveis",
  footerFinancing: "Calculadoras",
  footerReservations: "Reservas",
  footerOwners: "Venda ou alugue conosco",
  chatStatus: "Responde com dados do negócio",
  chatPlaceholder: "Escreva sua pergunta",
  results: "imóveis encontrados",
  noResults: "Não encontramos imóveis com esses filtros.",
  viewDetails: "Ver detalhes",
  shareProperty: "Compartilhar",
  propertyCode: "Código",
  shareTitle: "Compartilhar imóvel",
  shareCopy: "Escolha onde deseja compartilhar este link.",
  shareCopyLink: "Copiar link",
  shareCopied: "Link copiado.",
  shareInstagramCopied: "Link copiado para compartilhar no Instagram",
  shareTikTokCopied: "Link copiado para compartilhar no TikTok",
  reserve: "Reservar",
  ask: "Consultar",
  beds: "quartos",
  baths: "banheiros",
  constructionArea: "construção",
  landArea: "terreno",
  totalArea: "área total",
  perNight: "por noite",
  saleStatus: "À venda",
  rentStatus: "Para aluguel",
  reservedStatus: "Reservado",
  soldStatus: "Vendido",
  calculateStay: "Calcular estadia",
  reservedDates: "Datas reservadas",
  availabilityHint: "Vermelho = indisponível",
  availabilityConflict: "Essas datas já estão reservadas. Escolha outro período.",
  sendReservation: "Solicitar reserva",
  additionalComments: "Comentários adicionais",
  contactAdvisor: "Falar com assessor",
  aiAdvisory: "ChatBOT 24/7",
  memberEyebrow: "Acesso privado",
  memberTitle: "Login para sócios e interessados",
  memberCopy:
    "Receba alertas de novos imóveis, mudanças de disponibilidade, oportunidades de investimento e posts do blog.",
  memberEmail: "E-mail",
  memberRole: "Perfil",
  memberPartner: "Sócio",
  memberInvestor: "Investidor",
  memberOwner: "Proprietário",
  memberBuyer: "Comprador interessado",
  notifyProperties: "Novos imóveis",
  notifyBlogs: "Blog e notícias",
  notifyUpdates: "Atualizações do mercado",
  memberSubmit: "Entrar e receber alertas",
};

let state = {
  lang: LANGUAGES.includes(localStorage.getItem(STORAGE.lang)) ? localStorage.getItem(STORAGE.lang) : "es",
  currency: CURRENCIES.includes(localStorage.getItem(STORAGE.currency)) ? localStorage.getItem(STORAGE.currency) : "USD",
  theme: localStorage.getItem(STORAGE.theme) === "dark" ? "dark" : "light",
  properties: loadProperties(),
  staff: loadStaff(),
  session: null,
  favorites: new Set(JSON.parse(localStorage.getItem(STORAGE.favorites) || "[]")),
  showFavorites: false,
};
state.session = loadStaffSession(state.staff);

const propertyGalleryTimers = new Map();
let modalGalleryTimer = null;
let appointmentCalendarMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let selectedAppointmentDate = "";
let selectedAppointmentTime = "";
let lastConfirmedAppointment = null;
let openAppointmentSelector = "";
let staffBlockedSlotsDraft = [];
let selectedStaffScheduleDay = WEEKDAY_KEYS[0];
let staffWeeklyDraft = {};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const DISABLED_FINANCE_CALCULATORS = new Set(["autopay"]);

function emptyWeeklyAvailability() {
  return Object.fromEntries(WEEKDAY_KEYS.map((day) => [day, []]));
}

function emptyStaffDayDraft() {
  return {
    active: false,
    start: "09:00",
    end: "17:00",
    blocks: [
      { start: "", end: "" },
      { start: "", end: "" },
    ],
  };
}

function emptyStaffWeeklyDraft() {
  return Object.fromEntries(WEEKDAY_KEYS.map((day) => [day, emptyStaffDayDraft()]));
}

function normalizeTimeRange(range) {
  if (!range || typeof range !== "object") return null;
  const start = /^\d{2}:\d{2}$/.test(range.start || "") ? range.start : "";
  const end = /^\d{2}:\d{2}$/.test(range.end || "") ? range.end : "";
  if (!start || !end || start >= end) return null;
  return { start, end };
}

function weekdayShortLabel(day) {
  return localized({
    es: {
      monday: "Lun",
      tuesday: "Mar",
      wednesday: "Mié",
      thursday: "Jue",
      friday: "Vie",
      saturday: "Sáb",
      sunday: "Dom",
    },
    en: {
      monday: "Mon",
      tuesday: "Tue",
      wednesday: "Wed",
      thursday: "Thu",
      friday: "Fri",
      saturday: "Sat",
      sunday: "Sun",
    },
    pt: {
      monday: "Seg",
      tuesday: "Ter",
      wednesday: "Qua",
      thursday: "Qui",
      friday: "Sex",
      saturday: "Sáb",
      sunday: "Dom",
    },
  })[day];
}

function formatStaffPhone(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 15);
  if (!digits) return "";
  if (digits.length <= 3) return `+${digits}`;
  const countryLength = digits.length > 10 ? digits.length - 10 : 1;
  const country = digits.slice(0, countryLength);
  const remaining = digits.slice(countryLength);
  const area = remaining.slice(0, 3);
  const prefix = remaining.slice(3, 6);
  const line = remaining.slice(6, 10);
  let output = `+${country}`;
  if (area) output += ` (${area}`;
  if (area.length === 3) output += ")";
  if (prefix) output += ` ${prefix}`;
  if (line) output += `-${line}`;
  return output.trim();
}

function avatarPreviewMarkup(value, name = "") {
  if (!value) {
    const initials = name
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0] || "")
      .join("")
      .toUpperCase();
    return `
      <span class="avatar-fallback">${escapeHtml(initials || "MG")}</span>
      <div>
        <strong>${escapeHtml(text("staffAvatarEmpty"))}</strong>
        <p>${escapeHtml(localized({
          es: "Puedes usar un enlace o subir un archivo.",
          en: "Use a link or upload a file.",
          pt: "Use um link ou carregue um arquivo.",
        }))}</p>
      </div>
    `;
  }
  return `
    <img src="${escapeHtml(value)}" alt="${escapeHtml(name || "Avatar")}" />
    <div>
      <strong>${escapeHtml(name || "Avatar")}</strong>
      <p>${escapeHtml(localized({
        es: "Vista previa del colaborador.",
        en: "Staff preview.",
        pt: "Pré-visualização do colaborador.",
      }))}</p>
    </div>
  `;
}

function refreshStaffAvatarPreview() {
  const preview = $("#staffAvatarPreview");
  if (!preview) return;
  preview.innerHTML = avatarPreviewMarkup($("#staffAvatarInput")?.value || "", $("#staffNameInput")?.value || "");
}

function setStaffAvatarValue(value = "") {
  const normalized = String(value || "").trim();
  const hiddenInput = $("#staffAvatarInput");
  const linkInput = $("#staffAvatarLinkInput");
  if (hiddenInput) hiddenInput.value = normalized;
  if (linkInput) linkInput.value = /^https?:\/\//i.test(normalized) ? normalized : "";
  refreshStaffAvatarPreview();
}

function setStaffPasswordVisibility(visible) {
  const input = $("#staffPasswordInput");
  const button = $("#toggleStaffPassword");
  if (!input || !button) return;
  input.type = visible ? "text" : "password";
  button.textContent = text(visible ? "staffPasswordHide" : "staffPasswordShow");
}

async function resizeStaffAvatarFile(file) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  const image = await new Promise((resolve, reject) => {
    const preview = new Image();
    preview.onload = () => resolve(preview);
    preview.onerror = reject;
    preview.src = dataUrl;
  });
  const canvas = document.createElement("canvas");
  const maxSide = 640;
  const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.82);
}

function upgradeDefaultStaffProfiles(staff) {
  return staff.map((member) => {
    if (member.id !== "staff-diego-cueto") return member;
    const updated = { ...member };
    if (!updated.name || /^diego cueto$/i.test(updated.name)) updated.name = "Diego Cueto Hawa";
    if (!updated.username || /^(diego|diego cueto|diego c\. hawa)$/i.test(updated.username)) updated.username = "Diego C. Hawa";
    if (!updated.password || updated.password === "demo123") updated.password = "1234";
    if (!updated.email || /^diego@meirahgroup\.com$/i.test(updated.email)) {
      updated.email = "diegocuetohawa05@hotmail.com";
    }
    return normalizeStaffMember(updated);
  });
}

function defaultStaffPermissions(role) {
  return structuredClone(STAFF_PERMISSION_DEFAULTS[role] || STAFF_PERMISSION_DEFAULTS.editor);
}

function normalizeStaffRole(role) {
  const legacyRoles = {
    asesor: "agent",
    advisor: "agent",
    asistente: "assistant",
  };
  const normalized = legacyRoles[role] || role;
  return STAFF_ROLES.includes(normalized) ? normalized : "agent";
}

function normalizeStaffMember(member, index = 0) {
  const weekly = emptyWeeklyAvailability();
  WEEKDAY_KEYS.forEach((day) => {
    weekly[day] = (Array.isArray(member?.availability?.weekly?.[day]) ? member.availability.weekly[day] : [])
      .map(normalizeTimeRange)
      .filter(Boolean)
      .sort((a, b) => a.start.localeCompare(b.start));
  });

  const role = normalizeStaffRole(member?.role);
  const hasWeeklyAvailability = WEEKDAY_KEYS.some((day) => weekly[day].length > 0);
  const permissions = {
    ...defaultStaffPermissions(role),
    ...(member?.permissions && typeof member.permissions === "object" ? member.permissions : {}),
  };

  return {
    id: String(member?.id || `staff-${Date.now()}-${index}`),
    name: repairMojibakeText(String(member?.name || `Usuario ${index + 1}`)),
    username: String(member?.username || `usuario${index + 1}`).trim(),
    password: String(member?.password || "demo123"),
    role,
    permissions,
    active: member?.active !== false,
    acceptsAppointments:
      typeof member?.acceptsAppointments === "boolean"
        ? member.acceptsAppointments
        : role === "agent" && hasWeeklyAvailability,
    availabilityConfigured:
      typeof member?.availabilityConfigured === "boolean"
        ? member.availabilityConfigured
        : role === "agent" && hasWeeklyAvailability,
    phone: String(member?.phone || BUSINESS_WHATSAPP).replace(/\D/g, "") || BUSINESS_WHATSAPP,
    email: String(member?.email || "").trim(),
    avatar: String(member?.avatar || "").trim(),
    availability: {
      slotDuration: [30, 45, 60, 90].includes(Number(member?.availability?.slotDuration))
        ? Number(member.availability.slotDuration)
        : 60,
      weekly,
      blockedDates: [...new Set(Array.isArray(member?.availability?.blockedDates) ? member.availability.blockedDates : [])]
        .filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date))
        .sort(),
      blockedSlots: (Array.isArray(member?.availability?.blockedSlots) ? member.availability.blockedSlots : [])
        .map((slot) => {
          const range = normalizeTimeRange(slot);
          if (!range || !/^\d{4}-\d{2}-\d{2}$/.test(slot.date || "")) return null;
          return { date: slot.date, ...range, reason: repairMojibakeText(String(slot.reason || "")) };
        })
        .filter(Boolean),
    },
  };
}

function loadStaff() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE.staff) || "null");
    const legacyDefaultIds = ["staff-meirah-team", "staff-diego-cueto", "staff-laura-mendez"];
    const isLegacyDefault =
      Array.isArray(saved) &&
      saved.length === legacyDefaultIds.length &&
      legacyDefaultIds.every((id) => saved.some((member) => member?.id === id));
    const source = Array.isArray(saved) && saved.length && !isLegacyDefault ? saved : structuredClone(DEFAULT_STAFF);
    const staff = upgradeDefaultStaffProfiles(source.map(normalizeStaffMember));
    localStorage.setItem(STORAGE.staff, JSON.stringify(staff));
    return staff;
  } catch {
    const staff = upgradeDefaultStaffProfiles(structuredClone(DEFAULT_STAFF).map(normalizeStaffMember));
    localStorage.setItem(STORAGE.staff, JSON.stringify(staff));
    return staff;
  }
}

function saveStaff(staff = state.staff) {
  state.staff = upgradeDefaultStaffProfiles(staff.map(normalizeStaffMember));
  localStorage.setItem(STORAGE.staff, JSON.stringify(state.staff));
}

function loadStaffSession(staff = []) {
  try {
    const session = JSON.parse(localStorage.getItem(STORAGE.session) || "null");
    if (!session?.staffId) return null;
    const member = staff.find((item) => item.id === session.staffId && item.active);
    return member ? { staffId: member.id, createdAt: session.createdAt || new Date().toISOString() } : null;
  } catch {
    return null;
  }
}

function saveStaffSession(member) {
  state.session = member ? { staffId: member.id, createdAt: new Date().toISOString() } : null;
  if (state.session) localStorage.setItem(STORAGE.session, JSON.stringify(state.session));
  else localStorage.removeItem(STORAGE.session);
}

function currentStaffMember() {
  return state.staff.find((member) => member.id === state.session?.staffId && member.active) || null;
}

function hasStaffRole(...roles) {
  return roles.includes(currentStaffMember()?.role);
}

function hasStaffPermission(permission) {
  return currentStaffMember()?.permissions?.[permission] === true;
}

function isManagementRole(member = currentStaffMember()) {
  return member?.role === "super_admin" || member?.role === "admin";
}

function propertyCodeNumber(value) {
  const numeric = Number.parseInt(String(value || "").replace(/\D/g, ""), 10);
  return Number.isInteger(numeric) && numeric > 0 ? numeric : 0;
}

function formatPropertyCode(value) {
  return String(Math.max(0, propertyCodeNumber(value))).padStart(PROPERTY_CODE_WIDTH, "0");
}

function slugifyPropertyTitle(value) {
  return String(value || "propiedad")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/gi, (letter) => (letter === "Ñ" ? "N" : "n"))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "propiedad";
}

function createPropertySlug(title, code) {
  return `${slugifyPropertyTitle(title)}-${formatPropertyCode(code)}`;
}

function storedPropertyCodeCounter() {
  return propertyCodeNumber(localStorage.getItem(STORAGE.propertyCodeCounter));
}

function syncPropertyCodeCounter(value) {
  const nextValue = Math.max(storedPropertyCodeCounter(), propertyCodeNumber(value));
  localStorage.setItem(STORAGE.propertyCodeCounter, String(nextValue));
  return nextValue;
}

function allocatePropertyCode() {
  const existingMaximum = Math.max(0, ...(state?.properties || []).map((property) => propertyCodeNumber(property.code)));
  const nextValue = Math.max(storedPropertyCodeCounter(), existingMaximum) + 1;
  syncPropertyCodeCounter(nextValue);
  return formatPropertyCode(nextValue);
}

function loadProperties() {
  const saved = localStorage.getItem(STORAGE.properties);
  if (!saved) {
    const properties = normalizeProperties(structuredClone(BASE_PROPERTIES));
    localStorage.setItem(STORAGE.properties, JSON.stringify(properties));
    return properties;
  }

  try {
    const parsed = JSON.parse(saved);
    const properties = Array.isArray(parsed) && parsed.length
      ? normalizeProperties(parsed)
      : normalizeProperties(structuredClone(BASE_PROPERTIES));
    localStorage.setItem(STORAGE.properties, JSON.stringify(properties));
    return properties;
  } catch {
    const properties = normalizeProperties(structuredClone(BASE_PROPERTIES));
    localStorage.setItem(STORAGE.properties, JSON.stringify(properties));
    return properties;
  }
}

function repairMojibakeText(value) {
  if (typeof value !== "string" || !/(?:Ã.|Â)/.test(value)) return value;
  try {
    const bytes = Uint8Array.from(value, (character) => character.charCodeAt(0) & 255);
    return new TextDecoder("utf-8").decode(bytes);
  } catch {
    return value;
  }
}

function normalizePropertyType(type) {
  const normalized = repairMojibakeText(String(type || "")).trim();
  if (normalized === "Solar") return "Terreno";
  return normalized || "Casa";
}

function isValidCoordinate(value) {
  return Number.isFinite(Number(value));
}

function legacyCoordsToLatLng(coords = {}) {
  const x = Number(coords.x);
  const y = Number(coords.y);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return {
    lat: JARABACOA_CENTER.lat + (50 - y) * 0.001,
    lng: JARABACOA_CENTER.lng + (x - 50) * 0.0012,
  };
}

function fallbackPropertyCoordinates(property, index = 0) {
  if (DEFAULT_PROPERTY_COORDS[property.id]) return DEFAULT_PROPERTY_COORDS[property.id];
  const fromLegacyCoords = legacyCoordsToLatLng(property.coords);
  if (fromLegacyCoords) return fromLegacyCoords;
  const angle = index * 1.7;
  return {
    lat: JARABACOA_CENTER.lat + Math.sin(angle) * 0.018,
    lng: JARABACOA_CENTER.lng + Math.cos(angle) * 0.018,
  };
}

function normalizeProperties(list) {
  const usedCodes = new Set();
  let nextCode = Math.max(
    storedPropertyCodeCounter(),
    ...list.map((property) => propertyCodeNumber(property.code))
  );

  return list.map((property, index) => {
    let codeNumber = propertyCodeNumber(property.code);
    if (!codeNumber || usedCodes.has(codeNumber)) {
      do {
        nextCode += 1;
      } while (usedCodes.has(nextCode));
      codeNumber = nextCode;
    }
    usedCodes.add(codeNumber);
    nextCode = Math.max(nextCode, codeNumber);
    const code = formatPropertyCode(codeNumber);
    const normalizedMedia = (Array.isArray(property.images) ? property.images : [])
      .map(normalizeMediaItem)
      .filter(Boolean)
      .map((item) => item.src);
    const fallbackCoords = fallbackPropertyCoordinates(property, index);
    const normalized = {
      ...property,
      code,
      slug: createPropertySlug(property.title, code),
      title: repairMojibakeText(property.title),
      titleEn: repairMojibakeText(property.titleEn),
      type: normalizePropertyType(property.type),
      zone: repairMojibakeText(property.zone),
      description: repairMojibakeText(property.description),
      descriptionEn: repairMojibakeText(property.descriptionEn),
      area: Number(property.area) || 0,
      lot: Number(property.lot) || 0,
      lat: isValidCoordinate(property.lat) ? Number(property.lat) : fallbackCoords.lat,
      lng: isValidCoordinate(property.lng) ? Number(property.lng) : fallbackCoords.lng,
      images: normalizedMedia.length ? normalizedMedia : [DEFAULT_IMAGE],
    };
    if (normalized.id === "villa-riverstone") {
      normalized.images = RIVERSTONE_IMAGES;
    }
    syncPropertyCodeCounter(codeNumber);
    return normalized;
  });
}

function saveProperties() {
  state.properties = normalizeProperties(state.properties);
  localStorage.setItem(STORAGE.properties, JSON.stringify(state.properties));
}

function saveFavorites() {
  localStorage.setItem(STORAGE.favorites, JSON.stringify([...state.favorites]));
}

function text(key) {
  return I18N[state.lang]?.[key] || I18N.es[key] || key;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function propertyRouteBase() {
  const pathname = window.location.pathname || "/";
  const routeIndex = pathname.indexOf(PROPERTY_ROUTE_PREFIX);
  if (routeIndex >= 0) return pathname.slice(0, routeIndex).replace(/\/$/, "");
  if (/\/[^/]+\.[a-z0-9]+$/i.test(pathname)) return pathname.replace(/\/[^/]+$/, "").replace(/\/$/, "");
  return pathname.replace(/\/$/, "");
}

function propertyRoutePath(property) {
  return `${propertyRouteBase()}${PROPERTY_ROUTE_PREFIX}${property.slug}`.replace(/\/{2,}/g, "/");
}

function propertyShareUrl(property) {
  if (/^https?:$/.test(window.location.protocol)) {
    return new URL(propertyRoutePath(property), window.location.origin).href;
  }
  const base = window.location.href.split(/[?#]/)[0];
  return `${base}#propiedad=${encodeURIComponent(property.slug)}`;
}

function propertyFromCurrentRoute() {
  const routeMatch = window.location.pathname.match(/\/propiedades\/([^/?#]+)/i);
  const hashMatch = window.location.hash.match(/^#propiedad=([^&]+)/i);
  const slug = routeMatch?.[1] || (hashMatch?.[1] ? decodeURIComponent(hashMatch[1]) : "");
  return slug ? state.properties.find((property) => property.slug === slug) : null;
}

function propertyShareText(property) {
  const price = property.operations.includes("sale") && property.price
    ? formatCurrency(property.price)
    : formatCurrency(property.rentNight);
  return [
    getTitle(property),
    `${text("propertyCode")}: ${property.code}`,
    `${localized({ es: "Ubicación", en: "Location", pt: "Localização" })}: ${property.zone}`,
    `${localized({ es: "Precio", en: "Price", pt: "Preço" })}: ${price}`,
    propertyShareUrl(property),
  ].join("\n");
}

async function copyTextToClipboard(value) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function openShareFallback(property) {
  const modal = $("#shareModal");
  modal.dataset.propertyId = property.id;
  $("#shareModalProperty").innerHTML = `
    <strong>${escapeHtml(getTitle(property))}</strong>
    <span>${text("propertyCode")} ${escapeHtml(property.code)} · ${escapeHtml(property.zone)}</span>
  `;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  if (window.lucide) window.lucide.createIcons();
}

function closeShareFallback() {
  $("#shareModal").hidden = true;
  $("#shareModal").dataset.propertyId = "";
  if ($("#propertyModal").hidden && $("#staffLoginModal").hidden) document.body.classList.remove("modal-open");
}

async function shareProperty(property) {
  const url = propertyShareUrl(property);
  const shareData = { title: `${getTitle(property)} · ${property.code}`, text: propertyShareText(property), url };
  if (typeof navigator.share === "function") {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  openShareFallback(property);
}

async function handleShareChannel(channel, property) {
  const url = propertyShareUrl(property);
  const shareText = propertyShareText(property);
  if (channel === "whatsapp") {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank", "noopener,noreferrer");
    return;
  }
  if (channel === "facebook") {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
    return;
  }
  if (channel === "x") {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, "_blank", "noopener,noreferrer");
    return;
  }
  await copyTextToClipboard(url);
  const message = channel === "instagram"
    ? text("shareInstagramCopied")
    : channel === "tiktok"
      ? text("shareTikTokCopied")
      : text("shareCopied");
  showToast(message);
}

function isVideoSource(source = "") {
  if (typeof source !== "string") return false;
  const value = source.trim().toLowerCase();
  return value.startsWith("data:video/") || VIDEO_SOURCE_PATTERN.test(value);
}

function normalizeMediaItem(entry) {
  if (!entry) return null;
  if (typeof entry === "string") {
    const source = repairMojibakeText(entry).trim();
    if (!source) return null;
    return { type: isVideoSource(source) ? "video" : "image", src: source };
  }

  if (typeof entry === "object") {
    const source = repairMojibakeText(String(entry.src || entry.url || "")).trim();
    if (!source) return null;
    const forcedType = entry.type === "video" || entry.type === "image" ? entry.type : null;
    return { type: forcedType || (isVideoSource(source) ? "video" : "image"), src: source };
  }

  return null;
}

function getPropertyMediaItems(property) {
  const rawItems = Array.isArray(property?.images) ? property.images : [];
  const normalized = rawItems.map(normalizeMediaItem).filter(Boolean);
  return normalized.length ? normalized : [{ type: "image", src: DEFAULT_IMAGE }];
}

function getPropertyImageSources(property) {
  return getPropertyMediaItems(property)
    .filter((item) => item.type === "image")
    .map((item) => item.src);
}

function getPropertyCoverImage(property) {
  const images = getPropertyImageSources(property);
  return images[0] || DEFAULT_IMAGE;
}

function formatCurrency(value) {
  const currency = CURRENCIES.includes(state.currency) ? state.currency : "USD";
  const converted = (Number(value) || 0) * CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency] || "$";
  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(converted);
  return `${currency} ${symbol}${formatted}`;
}

function formatNumber(value, decimals = 0) {
  const number = Number(value) || 0;
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);
}

function parseNumericInput(value) {
  const sanitized = String(value ?? "").replace(/,/g, "").trim();
  const number = Number(sanitized);
  return Number.isFinite(number) ? number : 0;
}

function setupFormattedNumericInputs() {
  $$("input[data-format-number]").forEach((input) => {
    input.addEventListener("focus", () => {
      const current = parseNumericInput(input.value);
      if (input.value.trim() === "") return;
      input.value = String(current);
    });

    input.addEventListener("blur", () => {
      if (input.value.trim() === "") return;
      const current = parseNumericInput(input.value);
      input.value = formatNumber(current, 0);
    });

    if (input.value.trim() !== "") {
      input.value = formatNumber(parseNumericInput(input.value), 0);
    }
  });
}

function formatSpecValue(value) {
  const number = Number(value) || 0;
  return Number.isInteger(number) ? formatNumber(number, 0) : formatNumber(number, 1);
}

function getPropertyTotalArea(property) {
  return Number(property?.lot) || Number(property?.area) || 0;
}

function renderModalPropertySpecs(property) {
  const specs = [];
  const isTerrain = normalizePropertyType(property.type) === "Terreno";
  const totalArea = getPropertyTotalArea(property);
  const structureArea = Number(property.area) || 0;

  if ((Number(property.beds) || 0) > 0) {
    specs.push({
      value: formatSpecValue(property.beds),
      label: text("beds"),
    });
  }

  if ((Number(property.baths) || 0) > 0) {
    specs.push({
      value: formatSpecValue(property.baths),
      label: text("baths"),
    });
  }

  if (totalArea > 0) {
    specs.push({
      value: `${formatSpecValue(totalArea)} m²`,
      label: text("totalArea"),
    });
  }

  if (!isTerrain && structureArea > 0) {
    specs.push({
      value: `${formatSpecValue(structureArea)} m²`,
      label: text("constructionArea"),
    });
  }

  return specs
    .map(
      (spec) => `
        <span>
          <strong>${escapeHtml(spec.value)}</strong>
          <small>${escapeHtml(spec.label)}</small>
        </span>
      `
    )
    .join("");
}

function toUsd(value) {
  const currency = CURRENCIES.includes(state.currency) ? state.currency : "USD";
  const normalized = typeof value === "string" ? value.replace(/[^0-9.-]/g, "") : value;
  return (Number(normalized) || 0) / CURRENCY_RATES[currency];
}

function formatDate(date) {
  const locales = {
    es: "es-DO",
    en: "en-US",
    pt: "pt-BR",
  };
  return new Intl.DateTimeFormat(locales[state.lang] || "es-DO", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function setBookingDateConstraints(form) {
  if (!form) return;
  const checkInInput = $("input[name='checkIn']", form);
  const checkOutInput = $("input[name='checkOut']", form);
  if (!checkInInput || !checkOutInput) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayIso = formatDateInput(today);
  checkInInput.min = todayIso;
  if (!checkInInput.value || checkInInput.value < todayIso) {
    checkInInput.value = todayIso;
  }

  const checkInDate = parseDateOnly(checkInInput.value) || today;
  const nextDay = new Date(checkInDate);
  nextDay.setDate(nextDay.getDate() + 1);
  const minCheckOut = formatDateInput(nextDay);
  checkOutInput.min = minCheckOut;
  if (!checkOutInput.value || checkOutInput.value <= checkInInput.value) {
    checkOutInput.value = minCheckOut;
  }
}

function getTitle(property) {
  return state.lang === "en" ? property.titleEn || property.title : property.title;
}

function getDescription(property) {
  return state.lang === "en" ? property.descriptionEn || property.description : property.description;
}

function statusLabel(status) {
  const labels = {
    sale: text("saleStatus"),
    rent: text("rentStatus"),
    reserved: text("reservedStatus"),
    sold: text("soldStatus"),
  };
  return labels[status] || status;
}

function typeLabel(type) {
  const normalizedType = normalizePropertyType(type);
  if (state.lang === "en") {
    return {
      Casa: "House",
      Apartamento: "Apartment",
      Terreno: "Land",
      Finca: "Farm",
      Villa: "Villa",
    }[normalizedType] || normalizedType;
  }
  if (state.lang === "pt") {
    return {
      Casa: "Casa",
      Apartamento: "Apartamento",
      Terreno: "Terreno",
      Finca: "Fazenda",
      Villa: "Villa",
    }[normalizedType] || normalizedType;
  }
  return normalizedType;
}

function shouldShowReservation(property) {
  return property.operations.includes("rent") && property.status !== "sale";
}

function primaryPrice(property) {
  if (property.operations.includes("sale") && property.price) return property.price;
  return property.rentNight || 0;
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (I18N[state.lang]?.[key] || I18N.es[key]) node.textContent = text(key);
  });
  $$("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (I18N[state.lang]?.[key] || I18N.es[key]) node.placeholder = text(key);
  });
  $("#languageToggleValue").textContent = state.lang.toUpperCase();
  $("#languageToggle").setAttribute("aria-label", `${text("brandTag")} - ES, EN, PT`);
  $("#chatInput").placeholder = text("chatPlaceholder");
  syncHeaderSelectStates();
  applyCurrencyLabels();
  if (window.lucide) window.lucide.createIcons();
}

function applyCurrencyLabels() {
  $("#currencyToggleValue").textContent = state.currency;
  const minLabel = $("[data-i18n='filterMin']");
  const maxLabel = $("[data-i18n='filterMax']");
  if (minLabel) minLabel.textContent = `Min. ${state.currency}`;
  if (maxLabel) maxLabel.textContent = `Max. ${state.currency}`;
  const minInput = $("#filterMin");
  const maxInput = $("#filterMax");
  const symbol = CURRENCY_SYMBOLS[state.currency] || "$";
  if (minInput) minInput.placeholder = `${state.currency} ${symbol}100,000.00`;
  if (maxInput) maxInput.placeholder = `${state.currency} ${symbol}450,000.00`;
}

function syncHeaderSelectStates() {
  $$("[data-lang-option]").forEach((option) => {
    const selected = option.dataset.langOption === state.lang;
    option.classList.toggle("is-active", selected);
    option.setAttribute("aria-pressed", selected ? "true" : "false");
  });
  $$("[data-currency-option]").forEach((option) => {
    const selected = option.dataset.currencyOption === state.currency;
    option.classList.toggle("is-active", selected);
    option.setAttribute("aria-pressed", selected ? "true" : "false");
  });
}

function closeHeaderMenus() {
  $$("[data-header-dropdown]").forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    const toggle = $(".header-select-toggle", dropdown);
    const menu = $(".header-dropdown-menu", dropdown);
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    if (menu) menu.hidden = true;
  });
}

function toggleHeaderMenu(name) {
  const dropdown = $(`[data-header-dropdown="${name}"]`);
  if (!dropdown) return;
  const menu = $(".header-dropdown-menu", dropdown);
  const toggle = $(".header-select-toggle", dropdown);
  const shouldOpen = !dropdown.classList.contains("is-open");
  closeHeaderMenus();
  dropdown.classList.toggle("is-open", shouldOpen);
  if (toggle) toggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  if (menu) menu.hidden = !shouldOpen;
}

function getAppBasePath() {
  if (window.location.protocol === "file:") return "";
  const pathname = window.location.pathname || "/";
  const propertyIndex = pathname.indexOf(PROPERTY_ROUTE_PREFIX);
  if (propertyIndex >= 0) {
    return pathname.slice(0, propertyIndex + 1) || "/";
  }
  if (pathname.endsWith(".html")) {
    return pathname.slice(0, pathname.lastIndexOf("/") + 1) || "/";
  }
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function resolveStaticAssetPath(assetPath) {
  const cleanPath = String(assetPath || "").replace(/^\/+/, "");
  if (!cleanPath) return "";
  if (window.location.protocol === "file:") return cleanPath;
  return new URL(cleanPath, `${window.location.origin}${getAppBasePath()}`).href;
}

function syncStaticAssets() {
  $$("[data-asset-path]").forEach((asset) => {
    const targetPath = resolveStaticAssetPath(asset.dataset.assetPath);
    if (!targetPath) return;
    if (asset.tagName === "LINK") {
      asset.href = targetPath;
    } else if ("src" in asset) {
      asset.src = targetPath;
    }
  });
}

function syncBrandLogos() {
  $$("[data-logo-light][data-logo-dark]").forEach((logo) => {
    const primaryPath = state.theme === "dark" ? logo.dataset.logoDark : logo.dataset.logoLight;
    const secondaryPath = state.theme === "dark" ? logo.dataset.logoLight : logo.dataset.logoDark;
    const fallbackPath = logo.dataset.logoFallback;
    logo.onerror = () => {
      if (secondaryPath && logo.src !== resolveStaticAssetPath(secondaryPath)) {
        logo.src = resolveStaticAssetPath(secondaryPath);
        return;
      }
      if (fallbackPath && logo.src !== resolveStaticAssetPath(fallbackPath)) {
        logo.onerror = null;
        logo.src = resolveStaticAssetPath(fallbackPath);
        return;
      }
      logo.onerror = null;
    };
    logo.src = resolveStaticAssetPath(primaryPath);
  });
}

function applyTheme() {
  document.body.dataset.theme = state.theme;
  syncStaticAssets();
  syncBrandLogos();
  const themeToggle = $("#themeToggle");
  if (!themeToggle) return;
  themeToggle.innerHTML = state.theme === "dark" ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
  themeToggle.setAttribute("aria-label", state.theme === "dark" ? "Modo claro" : "Modo oscuro");
  if (window.lucide) window.lucide.createIcons();
}

function initHeroSlideshow() {
  const heroMedia = $(".hero-media");
  if (!heroMedia || HERO_IMAGES.length < 2) return;
  HERO_IMAGES.forEach((src) => {
    const preload = new Image();
    preload.src = src;
  });

  let images = $$("img", heroMedia);
  images[0].classList.add("is-active");

  if (images.length < 2) {
    const nextImage = document.createElement("img");
    nextImage.src = HERO_IMAGES[1];
    nextImage.alt = "";
    nextImage.setAttribute("aria-hidden", "true");
    heroMedia.appendChild(nextImage);
    images = $$("img", heroMedia);
  }

  let activeSlot = 0;
  let currentIndex = 0;
  setInterval(() => {
    const nextSlot = activeSlot === 0 ? 1 : 0;
    currentIndex = (currentIndex + 1) % HERO_IMAGES.length;
    images[nextSlot].src = HERO_IMAGES[currentIndex];
    images[nextSlot].setAttribute("aria-hidden", "false");
    images[activeSlot].setAttribute("aria-hidden", "true");

    requestAnimationFrame(() => {
      images[nextSlot].classList.add("is-active");
      images[activeSlot].classList.remove("is-active");
    });

    activeSlot = nextSlot;
  }, 5000);
}

function populateZoneOptions() {
  const zoneSelect = $("#filterZone");
  const selected = zoneSelect.value || "all";
  const zones = [...new Set(state.properties.map((property) => property.zone).filter(Boolean))].sort();
  zoneSelect.innerHTML = `<option value="all">${text("optionAllZones")}</option>${zones
    .map((zone) => `<option value="${escapeHtml(zone)}">${escapeHtml(zone)}</option>`)
    .join("")}`;
  zoneSelect.value = zones.includes(selected) ? selected : "all";
}

function getFilteredProperties() {
  const operation = $("#filterOperation").value;
  const type = $("#filterType").value;
  const zone = $("#filterZone").value;
  const min = $("#filterMin").value ? toUsd($("#filterMin").value) : 0;
  const max = $("#filterMax").value ? toUsd($("#filterMax").value) : Infinity;
  const beds = Number($("#filterBeds").value) || 0;
  const area = Number($("#filterArea").value) || 0;
  const sort = $("#sortProperties").value;

  let properties = state.properties.filter((property) => {
    if (state.showFavorites && !state.favorites.has(property.id)) return false;
    if (operation === "night" && !property.rentNight) return false;
    if (operation !== "all" && operation !== "night" && !property.operations.includes(operation)) return false;
    if (type !== "all" && property.type !== type) return false;
    if (zone !== "all" && property.zone !== zone) return false;
    const filterPrice = operation === "rent" || operation === "night" ? property.rentNight : primaryPrice(property);
    if (filterPrice < min) return false;
    if (filterPrice > max) return false;
    if (property.beds < beds) return false;
    if (property.area < area) return false;
    return true;
  });

  properties = properties.slice().sort((a, b) => {
    if (sort === "price-asc") return primaryPrice(a) - primaryPrice(b);
    if (sort === "price-desc") return primaryPrice(b) - primaryPrice(a);
    if (sort === "area-desc") return b.area - a.area;
    return Number(b.featured) - Number(a.featured);
  });

  return properties;
}

function renderProperties() {
  const grid = $("#propertyGrid");
  const properties = getFilteredProperties();
  $("#resultsSummary").textContent = properties.length
    ? `${formatNumber(properties.length)} ${text("results")}`
    : text("noResults");

  grid.innerHTML = properties.map(renderPropertyCard).join("");
  setupPropertyImageHovers();
  if (window.lucide) window.lucide.createIcons();
}

function swapPropertyImage(media, imageSources, nextIndex) {
  const images = $$(".property-image", media);
  if (images.length < 2 || imageSources.length < 2) return;

  const activeSlot = Number(media.dataset.activeSlot || 0);
  const nextSlot = activeSlot === 0 ? 1 : 0;
  images[nextSlot].src = imageSources[nextIndex];
  images[nextSlot].setAttribute("aria-hidden", "false");
  images[activeSlot].setAttribute("aria-hidden", "true");

  requestAnimationFrame(() => {
    images[nextSlot].classList.add("active");
    images[activeSlot].classList.remove("active");
  });

  media.dataset.activeSlot = String(nextSlot);
  media.dataset.imageIndex = String(nextIndex);
}

function resetPropertyImage(media, imageSources) {
  if (!imageSources.length) return;
  if (Number(media.dataset.imageIndex || 0) === 0) return;
  swapPropertyImage(media, imageSources, 0);
}

function setupPropertyImageHovers() {
  propertyGalleryTimers.forEach((timer) => clearInterval(timer));
  propertyGalleryTimers.clear();

  $$("[data-property-gallery]").forEach((media) => {
    const property = state.properties.find((item) => item.id === media.dataset.propertyGallery);
    if (!property) return;

    const cardVideo = $(".property-video", media);
    if (cardVideo) {
      media.addEventListener("mouseenter", () => {
        cardVideo.play().catch(() => {});
      });
      media.addEventListener("mouseleave", () => {
        cardVideo.pause();
      });
      return;
    }

    const imageSources = getPropertyImageSources(property);
    if (imageSources.length < 2) return;

    media.addEventListener("mouseenter", () => {
      if (propertyGalleryTimers.has(media)) return;
      const timer = setInterval(() => {
        const currentIndex = Number(media.dataset.imageIndex || 0);
        const nextIndex = (currentIndex + 1) % imageSources.length;
        swapPropertyImage(media, imageSources, nextIndex);
      }, 1900);
      propertyGalleryTimers.set(media, timer);
    });

    media.addEventListener("mouseleave", () => {
      const timer = propertyGalleryTimers.get(media);
      if (timer) clearInterval(timer);
      propertyGalleryTimers.delete(media);
      resetPropertyImage(media, imageSources);
    });
  });
}

function renderPropertyCardMedia(property) {
  const mediaItems = getPropertyMediaItems(property);
  const first = mediaItems[0];

  if (first.type === "video") {
    const poster = getPropertyCoverImage(property);
    return `
      <video
        class="property-video active"
        src="${escapeHtml(first.src)}"
        ${poster ? `poster="${escapeHtml(poster)}"` : ""}
        muted
        loop
        playsinline
        preload="metadata"
      ></video>
    `;
  }

  const imageSources = getPropertyImageSources(property);
  const image = imageSources[0] || DEFAULT_IMAGE;
  const secondImage = imageSources[1] || image;
  return `
    <img class="property-image active" src="${escapeHtml(image)}" alt="${escapeHtml(getTitle(property))}" loading="lazy" />
    <img class="property-image" src="${escapeHtml(secondImage)}" alt="${escapeHtml(getTitle(property))}" loading="lazy" aria-hidden="true" />
  `;
}

function renderPropertyCard(property) {
  const isFavorite = state.favorites.has(property.id);
  const price = property.operations.includes("sale") && property.price
    ? formatCurrency(property.price)
    : formatCurrency(property.rentNight);
  const rentButton = shouldShowReservation(property)
    ? `<button class="button button-light" type="button" data-open-property="${property.id}" data-focus-booking="true">
        <i data-lucide="calendar-check"></i><span>${text("reserve")}</span>
      </button>`
    : `<a class="button button-light" href="https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
        `Hola ${BUSINESS_NAME}, quiero consultar ${getTitle(property)}.`
      )}" target="_blank" rel="noreferrer"><i data-lucide="message-circle"></i><span>${text("ask")}</span></a>`;

  return `
    <article class="property-card">
      <div class="property-media" data-property-gallery="${property.id}" data-image-index="0" data-active-slot="0">
        ${renderPropertyCardMedia(property)}
        <div class="badge-row">
          <span class="badge ${escapeHtml(property.status)}">${statusLabel(property.status)}</span>
          <button class="favorite-button ${isFavorite ? "active" : ""}" type="button" data-favorite="${
            property.id
          }" aria-label="Favorito">
            <i data-lucide="heart"></i>
          </button>
        </div>
      </div>
      <div class="property-body">
        <h3>${escapeHtml(getTitle(property))}</h3>
        <p class="property-zone">${escapeHtml(property.zone)} · ${escapeHtml(typeLabel(property.type))} · ${text("propertyCode")} ${escapeHtml(property.code)}</p>
        <p class="property-price"><strong>${price}</strong></p>
        <div class="property-specs property-specs-detailed">
          ${renderModalPropertySpecs(property)}
        </div>
        <p>${escapeHtml(getDescription(property))}</p>
        <div class="property-actions">
          <button class="button button-primary" type="button" data-open-property="${property.id}">
            <i data-lucide="home"></i><span>${text("viewDetails")}</span>
          </button>
          ${rentButton}
          <button class="button button-light property-share-button" type="button" data-share-property="${property.id}">
            <i data-lucide="share-2"></i><span>${text("shareProperty")}</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function updateFavoriteCount() {
  $("#favoriteCount").textContent = state.favorites.size;
  $("#showFavorites").classList.toggle("button-primary", state.showFavorites);
  $("#showFavorites").classList.toggle("button-light", !state.showFavorites);
}

function renderReservationPreview() {
  const rentals = state.properties.filter((property) => shouldShowReservation(property)).slice(0, 2);
  $("#reservationPreview").innerHTML = rentals
    .map(
      (property) => `
      <button class="mini-stay" type="button" data-open-property="${property.id}" data-focus-booking="true">
        <img src="${escapeHtml(getPropertyCoverImage(property))}" alt="${escapeHtml(getTitle(property))}" loading="lazy" />
        <div>
          <h3>${escapeHtml(getTitle(property))}</h3>
          <p>${formatCurrency(property.rentNight)}</p>
        </div>
      </button>
    `
    )
    .join("");
}

function calculateMortgage(price, down, annualRate, years) {
  const principal = Math.max(price - down, 0);
  const months = Math.max(years * 12, 1);
  const monthlyRate = annualRate / 100 / 12;
  const payment = monthlyRate
    ? (principal * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1)
    : principal / months;
  return {
    principal,
    payment,
    interest: payment * months - principal,
  };
}

function renderMortgage() {
  const price = parseNumericInput($("#homePrice").value);
  const down = parseNumericInput($("#downPayment").value);
  const rate = Number($("#interestRate").value) || 0;
  const years = Number($("#loanYears").value) || 1;
  const result = calculateMortgage(price, down, rate, years);
  $("#mortgageOutput").innerHTML = `
    <strong>${text("monthlyEstimate")}: ${formatCurrency(result.payment)}</strong><br />
    ${text("financedAmount")}: ${formatCurrency(result.principal)}<br />
    ${text("totalInterest")}: ${formatCurrency(Math.max(result.interest, 0))}
  `;
}

function getLoanFromPayment(payment, annualRate, years) {
  const months = Math.max(years * 12, 1);
  const monthlyRate = annualRate / 100 / 12;
  if (!monthlyRate) return payment * months;
  return (payment * ((1 + monthlyRate) ** months - 1)) / (monthlyRate * (1 + monthlyRate) ** months);
}

function renderRefinance() {
  const balance = parseNumericInput($("#currentBalance").value);
  const currentRate = Number($("#currentRate").value) || 0;
  const newRate = Number($("#newRate").value) || 0;
  const years = Number($("#remainingYears").value) || 1;
  const closingCosts = parseNumericInput($("#closingCosts").value);
  const current = calculateMortgage(balance, 0, currentRate, years);
  const refinanced = calculateMortgage(balance + closingCosts, 0, newRate, years);
  const savings = current.payment - refinanced.payment;
  const breakEvenMonths = savings > 0 ? Math.ceil(closingCosts / savings) : 0;
  const breakEvenText = breakEvenMonths
    ? `${formatNumber(breakEvenMonths)} ${state.lang === "es" ? "meses" : "months"}`
    : state.lang === "es"
      ? "Sin ahorro mensual"
      : "No monthly savings";

  $("#refinanceOutput").innerHTML = `
    <strong>${text("monthlySavings")}: ${formatCurrency(Math.max(savings, 0))}</strong><br />
    ${text("currentPayment")}: ${formatCurrency(current.payment)}<br />
    ${text("newPayment")}: ${formatCurrency(refinanced.payment)}<br />
    ${text("breakEven")}: ${breakEvenText}
  `;
}

function renderAffordability() {
  const income = parseNumericInput($("#monthlyIncome").value);
  const debt = parseNumericInput($("#monthlyDebt").value);
  const down = parseNumericInput($("#affordDown").value);
  const rate = Number($("#affordRate").value) || 0;
  const years = Number($("#affordYears").value) || 1;
  const targetPayment = Math.max(income * 0.32 - debt, 0);
  const loan = getLoanFromPayment(targetPayment, rate, years);
  const maxPrice = loan + down;

  $("#affordabilityOutput").innerHTML = `
    <strong>${text("maxHomePrice")}: ${formatCurrency(maxPrice)}</strong><br />
    ${text("targetPayment")}: ${formatCurrency(targetPayment)}<br />
    ${text("financedAmount")}: ${formatCurrency(loan)}
  `;
}

function renderRentBuy() {
  const rent = parseNumericInput($("#monthlyRent").value);
  const price = parseNumericInput($("#compareHomePrice").value);
  const down = parseNumericInput($("#compareDownPayment").value);
  const rate = Number($("#compareRate").value) || 0;
  const years = Number($("#yearsInHome").value) || 1;
  const months = years * 12;
  const mortgage = calculateMortgage(price, down, rate, 20);
  const rentCost = rent * months;
  const closingCosts = price * 0.03;
  const maintenance = price * 0.01 * years;
  const appreciation = price * ((1.03) ** years - 1);
  const principalBuilt = Math.max((price - down) - Math.max((price - down) - mortgage.payment * months * 0.42, 0), 0);
  const buyCost = down + mortgage.payment * months + closingCosts + maintenance - appreciation - principalBuilt;
  const buyWins = buyCost <= rentCost;
  const suggestion = buyWins
    ? state.lang === "es"
      ? "Comprar puede tener más sentido"
      : "Buying may make more sense"
    : state.lang === "es"
      ? "Alquilar puede ser más flexible"
      : "Renting may be more flexible";

  $("#rentBuyOutput").innerHTML = `
    <strong>${text("betterOption")}: ${suggestion}</strong><br />
    ${text("buyCost")}: ${formatCurrency(Math.max(buyCost, 0))}<br />
    ${text("rentCost")}: ${formatCurrency(rentCost)}<br />
    ${text("monthlyEstimate")}: ${formatCurrency(mortgage.payment)}
  `;
}

function renderFinanceCalculators() {
  renderMortgage();
  renderRefinance();
  renderAffordability();
  renderRentBuy();
}

function buildPaymentRows(amount, months, day) {
  const rows = [];
  const today = new Date();
  for (let i = 1; i <= Math.min(months, 6); i += 1) {
    const date = new Date(today.getFullYear(), today.getMonth() + i, Math.min(day, 28));
    rows.push({ date, amount });
  }
  return rows;
}

function renderAutopaySchedule(container, amount, months, day) {
  const rows = buildPaymentRows(amount, months, day);
  container.innerHTML = `
    <strong>${text("firstPayments")}</strong>
    ${rows
      .map(
        (row, index) => `
        <div class="schedule-row">
          <span>${index + 1}. ${formatDate(row.date)}</span>
          <strong>${formatCurrency(row.amount)}</strong>
        </div>
      `
      )
      .join("")}
  `;
}

function stopModalGalleryRotation() {
  if (modalGalleryTimer) {
    clearInterval(modalGalleryTimer);
    modalGalleryTimer = null;
  }
}

function getModalMediaItems(modal) {
  try {
    const parsed = JSON.parse(modal.dataset.media || "[]");
    const mediaItems = Array.isArray(parsed) ? parsed.map(normalizeMediaItem).filter(Boolean) : [];
    return mediaItems.length ? mediaItems : [{ type: "image", src: DEFAULT_IMAGE }];
  } catch {
    return [{ type: "image", src: DEFAULT_IMAGE }];
  }
}

function renderModalMainMedia(mediaItem, title, poster) {
  if (mediaItem.type === "video") {
    return `
      <video
        class="modal-gallery-main modal-gallery-video"
        src="${escapeHtml(mediaItem.src)}"
        ${poster ? `poster="${escapeHtml(poster)}"` : ""}
        controls
        playsinline
        preload="metadata"
        muted
      ></video>
    `;
  }

  return `<img class="modal-gallery-main" src="${escapeHtml(mediaItem.src)}" alt="${escapeHtml(title)}" />`;
}

function renderModalThumbnail(mediaItem, index, title, poster, isActive = false) {
  const activeClass = isActive ? "active" : "";
  if (mediaItem.type === "video") {
    return `
      <button class="${activeClass}" type="button" data-thumbnail="${index}">
        <video src="${escapeHtml(mediaItem.src)}" ${poster ? `poster="${escapeHtml(poster)}"` : ""} muted playsinline preload="metadata"></video>
        <span class="thumbnail-type">Video</span>
      </button>
    `;
  }

  return `
    <button class="${activeClass}" type="button" data-thumbnail="${index}">
      <img src="${escapeHtml(mediaItem.src)}" alt="${escapeHtml(title)} ${index + 1}" />
    </button>
  `;
}

function setModalImageByIndex(index) {
  const modal = $("#propertyModal");
  const mediaItems = getModalMediaItems(modal);
  if (!mediaItems.length) return;
  const safeIndex = (index + mediaItems.length) % mediaItems.length;
  modal.dataset.modalIndex = String(safeIndex);
  const mediaFrame = $("#modalMainMedia");
  if (mediaFrame) {
    const item = mediaItems[safeIndex] || { type: "image", src: DEFAULT_IMAGE };
    mediaFrame.innerHTML = renderModalMainMedia(item, modal.dataset.title || "Propiedad", modal.dataset.poster || DEFAULT_IMAGE);
    const mainVideo = $("video", mediaFrame);
    if (mainVideo) {
      mainVideo.currentTime = 0;
      mainVideo.play().catch(() => {});
    }
    const mainImage = $("img", mediaFrame);
    if (mainImage) {
      mainImage.dataset.fallbackAttempts = "0";
    }
  }
  $$("[data-thumbnail]", modal).forEach((button) => button.classList.remove("active"));
  $(`[data-thumbnail="${safeIndex}"]`, modal)?.classList.add("active");
  bindModalImageFallback();
}

function bindModalImageFallback() {
  const modal = $("#propertyModal");
  const mediaItems = getModalMediaItems(modal);
  if (!mediaItems.length) return;
  const mainImage = $("#modalMainMedia img");
  if (!mainImage) return;

  mainImage.dataset.fallbackAttempts = "0";
  mainImage.onerror = () => {
    const attempts = Number(mainImage.dataset.fallbackAttempts || 0);
    if (attempts >= mediaItems.length) {
      mainImage.onerror = null;
      mainImage.src = DEFAULT_IMAGE;
      return;
    }
    mainImage.dataset.fallbackAttempts = String(attempts + 1);
    const currentIndex = Number(modal.dataset.modalIndex || 0);
    setModalImageByIndex(currentIndex + 1);
  };

  $$("[data-thumbnail] img", modal).forEach((thumbnail, index) => {
    thumbnail.onerror = () => {
      thumbnail.closest("button")?.remove();
      if (Number(modal.dataset.modalIndex || 0) === index) {
        setModalImageByIndex(index + 1);
      }
    };
  });
}

function startModalGalleryRotation(mediaItems) {
  stopModalGalleryRotation();
  if (!mediaItems || mediaItems.length < 2) return;
  const imageIndexes = mediaItems.map((item, index) => (item.type === "image" ? index : -1)).filter((index) => index >= 0);
  if (imageIndexes.length < 2) return;
  modalGalleryTimer = setInterval(() => {
    const modal = $("#propertyModal");
    if (modal.hidden) return;
    const currentIndex = Number(modal.dataset.modalIndex || 0);
    const currentPosition = imageIndexes.indexOf(currentIndex);
    const safePosition = currentPosition >= 0 ? currentPosition : 0;
    const nextIndex = imageIndexes[(safePosition + 1) % imageIndexes.length];
    setModalImageByIndex(nextIndex);
  }, 2400);
}

function openPropertyModal(propertyId, focusBooking = false, updateHistory = false) {
  const property = state.properties.find((item) => item.id === propertyId);
  if (!property) return;

  const mediaItems = getPropertyMediaItems(property);
  const poster = getPropertyCoverImage(property);
  const price = property.operations.includes("sale") && property.price
    ? formatCurrency(property.price)
    : formatCurrency(property.rentNight);

  $("#modalBody").innerHTML = `
    <div class="modal-grid">
      <div class="modal-gallery">
        <div id="modalMainMedia" class="modal-main-frame">${renderModalMainMedia(
          mediaItems[0],
          getTitle(property),
          poster
        )}</div>
        <div class="thumbnail-row">
          ${mediaItems
            .map(
              (item, index) => `
                ${renderModalThumbnail(item, index, getTitle(property), poster, index === 0)}
              `
            )
            .join("")}
        </div>
      </div>
      <div class="modal-details">
        <span class="badge ${escapeHtml(property.status)}">${statusLabel(property.status)}</span>
        <h2 id="modalTitle">${escapeHtml(getTitle(property))}</h2>
        <p class="property-zone">${escapeHtml(property.zone)} · ${escapeHtml(typeLabel(property.type))} · ${text("propertyCode")} ${escapeHtml(property.code)}</p>
        <p class="property-price"><strong>${price}</strong></p>
        <div class="property-specs">
          <span>${formatSpecValue(property.beds)} ${text("beds")}</span>
          <span>${formatSpecValue(property.baths)} ${text("baths")}</span>
          <span>${formatSpecValue(property.area)} ${text("area")}</span>
        </div>
        <p>${escapeHtml(getDescription(property))}</p>
        <div class="modal-tools">
          <button class="button button-light" type="button" data-share-property="${property.id}">
            <i data-lucide="share-2"></i><span>${text("shareProperty")}</span>
          </button>
          ${shouldShowReservation(property) ? renderBookingTool(property) : ""}
          ${property.operations.includes("sale") && property.price ? renderPaymentTool(property) : ""}
          <a class="button button-primary" href="https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
            `Hola ${BUSINESS_NAME}, quiero información sobre ${getTitle(property)}.`
          )}" target="_blank" rel="noreferrer">
            <i data-lucide="message-circle"></i><span>${text("contactAdvisor")}</span>
          </a>
        </div>
      </div>
    </div>
  `;

  $("#propertyModal").hidden = false;
  document.body.classList.add("modal-open");
  $("#propertyModal").dataset.propertyId = property.id;
  $("#propertyModal").dataset.media = JSON.stringify(mediaItems);
  $("#propertyModal").dataset.poster = poster;
  $("#propertyModal").dataset.title = getTitle(property);
  $("#propertyModal").dataset.modalIndex = "0";
  if (updateHistory) {
    try {
      const route = /^https?:$/.test(window.location.protocol)
        ? propertyRoutePath(property)
        : `#propiedad=${encodeURIComponent(property.slug)}`;
      window.history.pushState({ propertySlug: property.slug }, "", route);
    } catch {}
  }
  bindModalImageFallback();
  startModalGalleryRotation(mediaItems);
  $$("[data-booking-form]", $("#propertyModal")).forEach((form) => setBookingDateConstraints(form));
  if (focusBooking) {
    setTimeout(() => $("[data-booking-tool]", $("#propertyModal"))?.scrollIntoView({ block: "center" }), 60);
  }
  if (window.lucide) window.lucide.createIcons();
}

function parseDateOnly(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  date.setHours(0, 0, 0, 0);
  return date;
}

function getReservationRanges(propertyId) {
  const saved = JSON.parse(localStorage.getItem(STORAGE.reservations) || "[]");
  return saved
    .filter((reservation) => reservation.propertyId === propertyId)
    .map((reservation) => ({
      start: parseDateOnly(reservation.checkIn),
      end: parseDateOnly(reservation.checkOut),
    }))
    .filter((range) => range.start && range.end && range.end > range.start);
}

function renderBookingTool(property) {
  const today = new Date();
  const next = new Date();
  next.setDate(today.getDate() + 2);
  const checkInDate = formatDateInput(today);
  const checkOutDate = formatDateInput(next);

  return `
    <form class="booking-tool" data-booking-tool data-booking-form="${property.id}">
      <h3>${text("modalBooking")}</h3>
      <div class="mini-form-grid">
        <label><span>${text("checkIn")}</span><input name="checkIn" type="date" min="${checkInDate}" value="${checkInDate}" /></label>
        <label><span>${text("checkOut")}</span><input name="checkOut" type="date" min="${checkOutDate}" value="${checkOutDate}" /></label>
        <label><span>${text("guests")}</span><input name="guests" type="number" min="1" value="4" /></label>
        <label><span>${text("leadPhone")}</span><input name="phone" type="tel" placeholder="+1 829 000 0000" /></label>
      </div>
      <button class="button button-primary" type="submit">
        <i data-lucide="calendar-check"></i><span>${text("calculateStay")}</span>
      </button>
      <div class="payment-schedule" data-booking-output></div>
    </form>
  `;
}

function renderPaymentTool(property) {
  return `
    <form class="payment-tool" data-payment-form="${property.id}">
      <h3>${text("modalPayment")}</h3>
      <div class="mini-form-grid">
        <label><span>${text("downPayment")}</span><input name="down" type="number" value="${Math.round(
          property.price * 0.2
        )}" /></label>
        <label><span>${text("months")}</span><input name="months" type="number" min="1" max="60" value="24" /></label>
        <label><span>${text("annualRate")}</span><input name="rate" type="number" min="0" step="0.1" value="8.5" /></label>
        <label><span>${text("paymentDay")}</span><input name="day" type="number" min="1" max="28" value="15" /></label>
      </div>
      <button class="button button-primary" type="submit">
        <i data-lucide="credit-card"></i><span>${text("generate")}</span>
      </button>
      <div class="payment-schedule" data-payment-output></div>
    </form>
  `;
}

function closeModal(updateHistory = true) {
  stopModalGalleryRotation();
  $$("video", $("#propertyModal")).forEach((video) => video.pause());
  $("#propertyModal").hidden = true;
  if ($("#shareModal").hidden && $("#staffLoginModal").hidden) document.body.classList.remove("modal-open");
  if (updateHistory && propertyFromCurrentRoute()) {
    try {
      const basePath = propertyRouteBase() || "/";
      const target = /^https?:$/.test(window.location.protocol) ? basePath : window.location.href.split("#")[0];
      window.history.replaceState({}, "", target);
    } catch {}
  }
}

function handlePropertyRoute() {
  const property = propertyFromCurrentRoute();
  if (property) {
    if ($("#propertyModal").hidden || $("#propertyModal").dataset.propertyId !== property.id) {
      openPropertyModal(property.id, false, false);
    }
    return;
  }
  if (!$("#propertyModal").hidden) closeModal(false);
}

function handleBookingSubmit(form) {
  const property = state.properties.find((item) => item.id === form.dataset.bookingForm);
  if (!property) return;

  const data = new FormData(form);
  const checkIn = new Date(data.get("checkIn"));
  const checkOut = new Date(data.get("checkOut"));
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  checkIn.setHours(0, 0, 0, 0);
  checkOut.setHours(0, 0, 0, 0);

  if (checkIn < today || checkOut <= checkIn) {
    showToast(
      localized({
        es: "Selecciona fechas válidas desde hoy en adelante.",
        en: "Select valid dates from today onward.",
        pt: "Selecione datas válidas a partir de hoje.",
      })
    );
    return;
  }

  const guests = Number(data.get("guests")) || 1;
  const nights = Math.max(Math.round((checkOut - checkIn) / 86400000), 1);
  const subtotal = nights * property.rentNight;
  const cleaning = 55;
  const total = subtotal + cleaning;

  const reservation = {
    propertyId: property.id,
    property: getTitle(property),
    checkIn: data.get("checkIn"),
    checkOut: data.get("checkOut"),
    guests,
    phone: data.get("phone"),
    comments: String(data.get("comments") || "").trim(),
    total,
    createdAt: new Date().toISOString(),
  };
  const saved = JSON.parse(localStorage.getItem(STORAGE.reservations) || "[]");
  saved.push(reservation);
  localStorage.setItem(STORAGE.reservations, JSON.stringify(saved));

  $("[data-booking-output]", form).innerHTML = `
    <div class="schedule-row"><span>${formatNumber(nights)} ${
    state.lang === "en" ? "nights" : state.lang === "pt" ? "noites" : "noches"
  } x ${formatCurrency(
    property.rentNight
  )}</span><strong>${formatCurrency(subtotal)}</strong></div>
    <div class="schedule-row"><span>${
      state.lang === "en" ? "Cleaning" : state.lang === "pt" ? "Limpeza" : "Limpieza"
    }</span><strong>${formatCurrency(
    cleaning
  )}</strong></div>
    <div class="schedule-row"><span>Total</span><strong>${formatCurrency(total)}</strong></div>
    <a class="button button-primary" href="https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
      `Hola ${BUSINESS_NAME}, quiero reservar ${getTitle(property)} del ${data.get("checkIn")} al ${data.get("checkOut")}.`
    )}" target="_blank" rel="noreferrer">${text("sendReservation")}</a>
  `;
  showToast(
    state.lang === "en"
      ? "Booking estimate saved."
      : state.lang === "pt"
        ? "Estimativa de reserva salva."
        : "Reserva calculada y guardada."
  );
  setBookingDateConstraints(form);
}

function getAllReservations() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE.reservations) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveAllReservations(reservations) {
  localStorage.setItem(STORAGE.reservations, JSON.stringify(reservations));
}

function getReservedDateSet(propertyId) {
  const set = new Set();
  getReservationRanges(propertyId).forEach((range) => {
    const cursor = new Date(range.start);
    while (cursor < range.end) {
      set.add(formatDateInput(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
  });
  return set;
}

function ensureAdminReservationDates() {
  const checkInInput = $("#adminReservationCheckIn");
  const checkOutInput = $("#adminReservationCheckOut");
  if (!checkInInput || !checkOutInput) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayIso = formatDateInput(today);

  checkInInput.min = todayIso;
  if (!checkInInput.value || checkInInput.value < todayIso) {
    checkInInput.value = todayIso;
  }

  const checkInDate = parseDateOnly(checkInInput.value) || today;
  const nextDay = new Date(checkInDate);
  nextDay.setDate(nextDay.getDate() + 1);
  const minCheckOut = formatDateInput(nextDay);
  checkOutInput.min = minCheckOut;
  if (!checkOutInput.value || checkOutInput.value <= checkInInput.value) {
    checkOutInput.value = minCheckOut;
  }
}

function getAdminReservationPropertyId() {
  return $("#adminReservationProperty")?.value || "";
}

function renderAdminReservationCalendar(propertyId) {
  const container = $("#adminReservationCalendar");
  if (!container) return;
  if (!propertyId) {
    container.innerHTML = "";
    return;
  }

  const localeDays =
    state.lang === "en"
      ? ["MO", "TU", "WE", "TH", "FR", "SA", "SU"]
      : state.lang === "pt"
        ? ["SE", "TE", "QU", "QI", "SE", "SA", "DO"]
        : ["LU", "MA", "MI", "JU", "VI", "SA", "DO"];

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const mondayOffset = (monthStart.getDay() + 6) % 7;
  const gridStart = new Date(monthStart);
  gridStart.setDate(monthStart.getDate() - mondayOffset);
  const reservedDates = getReservedDateSet(propertyId);
  const todayIso = formatDateInput(today);

  const dayHeaders = localeDays.map((label) => `<div class="admin-reservation-day-head">${label}</div>`).join("");
  const days = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    const iso = formatDateInput(date);
    const classes = ["admin-reservation-day"];
    if (date.getMonth() !== monthStart.getMonth()) classes.push("muted");
    if (iso === todayIso) classes.push("today");
    if (reservedDates.has(iso)) classes.push("reserved");
    return `<div class="${classes.join(" ")}"><span>${date.getDate()}</span></div>`;
  }).join("");

  container.innerHTML = `
    <div class="admin-reservation-legend">${text("availabilityHint")}</div>
    <div class="admin-reservation-grid">${dayHeaders}${days}</div>
  `;
}

function renderAdminReservationList(propertyId) {
  const list = $("#adminReservationList");
  if (!list) return;
  if (!propertyId) {
    list.innerHTML = "";
    return;
  }

  const reservations = getAllReservations()
    .filter((reservation) => reservation.propertyId === propertyId)
    .sort((a, b) => new Date(a.checkIn) - new Date(b.checkIn));

  if (!reservations.length) {
    list.innerHTML = `<p>${text("adminReserveEmpty")}</p>`;
    return;
  }

  list.innerHTML = reservations
    .map((reservation) => {
      const checkIn = parseDateOnly(reservation.checkIn);
      const checkOut = parseDateOnly(reservation.checkOut);
      if (!checkIn || !checkOut) return "";
      return `
        <article class="admin-reservation-item">
          <strong>${formatDate(checkIn)} → ${formatDate(checkOut)}</strong>
          <span>${escapeHtml(reservation.property || "")}</span>
        </article>
      `;
    })
    .filter(Boolean)
    .join("");
}

function syncAdminReservationViews(propertyId = getAdminReservationPropertyId()) {
  renderAdminReservationCalendar(propertyId);
  renderAdminReservationList(propertyId);
}

function saveAdminReservation() {
  const propertyId = getAdminReservationPropertyId();
  const checkIn = $("#adminReservationCheckIn")?.value;
  const checkOut = $("#adminReservationCheckOut")?.value;
  if (!propertyId || !checkIn || !checkOut) return;

  const start = parseDateOnly(checkIn);
  const end = parseDateOnly(checkOut);
  if (!start || !end || end <= start) {
    showToast(
      localized({
        es: "Selecciona un rango válido de reserva.",
        en: "Select a valid reservation range.",
        pt: "Selecione um período de reserva válido.",
      })
    );
    return;
  }

  const property = state.properties.find((item) => item.id === propertyId);
  const reservations = getAllReservations();
  reservations.push({
    propertyId,
    property: property ? getTitle(property) : propertyId,
    checkIn,
    checkOut,
    source: "admin",
    createdAt: new Date().toISOString(),
  });
  saveAllReservations(reservations);
  syncAdminReservationViews(propertyId);
  showToast(text("adminReserveSaved"));
}

function clearAdminReservations() {
  const propertyId = getAdminReservationPropertyId();
  if (!propertyId) return;

  const reservations = getAllReservations();
  const filtered = reservations.filter((reservation) => reservation.propertyId !== propertyId);
  saveAllReservations(filtered);
  syncAdminReservationViews(propertyId);
  showToast(text("adminReserveCleared"));
}

function handlePaymentSubmit(form) {
  const property = state.properties.find((item) => item.id === form.dataset.paymentForm);
  if (!property) return;

  const data = new FormData(form);
  const down = Number(data.get("down")) || 0;
  const months = Number(data.get("months")) || 1;
  const rate = Number(data.get("rate")) || 0;
  const day = Number(data.get("day")) || 15;
  const result = calculateMortgage(property.price, down, rate, months / 12);
  renderAutopaySchedule($("[data-payment-output]", form), result.payment, months, day);
  showToast(
    localized({
      es: "Plan generado. Para cobrar de verdad hay que conectar pasarela y autorización del cliente.",
      en: "Plan generated. Real charging requires a payment gateway and client authorization.",
      pt: "Plano gerado. A cobrança real precisa de passarela e autorização do cliente.",
    })
  );
}

function setupAdmin() {
  const current = currentStaffMember();
  setupStaffLogin();
  if (!current) return;
  applyAdminPermissions();
  if (hasStaffPermission("manageProperties")) {
    populateAdminSelect();
    populateAdminReservationSelect();
    ensureAdminReservationDates();
    syncAdminReservationViews();
    const first = state.properties[0];
    if (first) fillAdminForm(first);
  }
  setupStaffAdmin(current.id);
  setupAppointmentAdmin();
  if (window.lucide) window.lucide.createIcons();
}

function populateAdminSelect(selectedId) {
  const select = $("#adminPropertySelect");
  select.innerHTML = state.properties
    .map((property) => `<option value="${property.id}">${escapeHtml(getTitle(property))}</option>`)
    .join("");
  if (selectedId) select.value = selectedId;
}

function populateAdminReservationSelect(selectedId) {
  const select = $("#adminReservationProperty");
  if (!select) return;

  const preferredId = selectedId || select.value || $("#adminPropertySelect")?.value || state.properties[0]?.id || "";
  select.innerHTML = state.properties
    .map((property) => `<option value="${property.id}">${escapeHtml(getTitle(property))}</option>`)
    .join("");

  if (preferredId && state.properties.some((property) => property.id === preferredId)) {
    select.value = preferredId;
  } else if (state.properties[0]) {
    select.value = state.properties[0].id;
  }
}

function fillAdminForm(property) {
  $("#adminPropertySelect").value = property.id;
  const adminReservationProperty = $("#adminReservationProperty");
  if (adminReservationProperty) {
    adminReservationProperty.value = property.id;
    syncAdminReservationViews(property.id);
  }
  $("#adminTitleInput").value = property.title;
  $("#adminTypeInput").value = property.type;
  $("#adminOperationInput").value = property.nightOnly ? "rent-night" : property.operations.join(",");
  $("#adminStatusInput").value = property.status;
  $("#adminPriceInput").value = property.price || "";
  $("#adminNightInput").value = property.rentNight || "";
  $("#adminBedsInput").value = property.beds;
  $("#adminBathsInput").value = property.baths;
  $("#adminAreaInput").value = property.area;
  $("#adminLotInput").value = property.lot || "";
  $("#adminZoneInput").value = property.zone;
  $("#adminImagesInput").value = (property.images || []).join(", ");
  renderAdminImageList();
  $("#adminDescInput").value = property.description;
}

function collectAdminProperty(existing) {
  const title = $("#adminTitleInput").value.trim() || "Nueva propiedad";
  const code = existing?.code || allocatePropertyCode();
  const rawOperation = $("#adminOperationInput").value.trim();
  const normalizedType = normalizePropertyType($("#adminTypeInput").value);
  const operations = rawOperation === "rent-night"
    ? ["rent"]
    : rawOperation.split(",").map((item) => item.trim()).filter(Boolean);
  const fallbackCoords = fallbackPropertyCoordinates(existing || { id: "" }, state.properties.length);
  const structureArea = Number($("#adminAreaInput").value) || 0;
  const lotArea = Number($("#adminLotInput").value) || 0;
  return {
    id: existing?.id || `property-${code}-${Date.now()}`,
    code,
    slug: createPropertySlug(title, code),
    title,
    titleEn: existing?.titleEn || title,
    type: normalizedType,
    operations,
    status: rawOperation === "rent-night" ? "rent" : $("#adminStatusInput").value,
    zone: $("#adminZoneInput").value.trim() || "Jarabacoa",
    price: Number($("#adminPriceInput").value) || 0,
    rentNight: Number($("#adminNightInput").value) || 0,
    beds: Number($("#adminBedsInput").value) || 0,
    baths: Number($("#adminBathsInput").value) || 0,
    area: normalizedType === "Terreno" ? lotArea : structureArea,
    lot: lotArea || existing?.lot || structureArea || 0,
    featured: existing?.featured ?? false,
    lat: isValidCoordinate(existing?.lat) ? Number(existing.lat) : fallbackCoords.lat,
    lng: isValidCoordinate(existing?.lng) ? Number(existing.lng) : fallbackCoords.lng,
    coords: existing?.coords || { x: 42 + Math.random() * 16, y: 38 + Math.random() * 24 },
    distances: existing?.distances || {
      Supermercado: "8 min",
      Banco: "10 min",
      Clinica: "12 min",
      Parque: "9 min",
    },
    description: $("#adminDescInput").value.trim() || "Propiedad agregada al inventario de Meirah Group.",
    descriptionEn: existing?.descriptionEn || $("#adminDescInput").value.trim(),
    images: getAdminImages(),
    nightOnly: rawOperation === "rent-night",
  };
}

function addMessage(message, author = "bot") {
  const bubble = document.createElement("div");
  bubble.className = `chat-message ${author}`;
  bubble.textContent = message;
  $("#chatMessages").appendChild(bubble);
  $("#chatMessages").scrollTop = $("#chatMessages").scrollHeight;
}

function localized(copy) {
  return copy[state.lang] || copy.es || copy.en || "";
}

function getBotAnswer(question) {
  const q = question.toLowerCase();
  const rentals = state.properties.filter((property) => property.operations.includes("rent")).length;
  const sales = state.properties.filter((property) => property.operations.includes("sale")).length;

  if (q.includes("hello") || q.includes("hola") || q.includes("buenas")) {
    return localized({
      es: "Hola. Soy MeirahBot. Puedo ayudarte con propiedades, reservas, calculadoras, ubicación y contacto.",
      en: "Hello. I am MeirahBot. I can help with properties, bookings, calculators, location, and contact.",
      pt: "Olá. Sou o MeirahBot. Posso ajudar com imóveis, reservas, calculadoras, localização e contato.",
    });
  }
  if (
    q.includes("whatsapp") ||
    q.includes("teléfono") ||
    q.includes("telefono") ||
    q.includes("phone") ||
    q.includes("contato") ||
    q.includes("contact")
  ) {
    return localized({
      es: `Puedes escribir por WhatsApp al ${BUSINESS_PHONE_DISPLAY} o dejar tus datos en el formulario de contacto.`,
      en: `You can message WhatsApp at ${BUSINESS_PHONE_DISPLAY} or leave your details in the contact form.`,
      pt: `Você pode escrever pelo WhatsApp em ${BUSINESS_PHONE_DISPLAY} ou deixar seus dados no formulário de contato.`,
    });
  }
  if (q.includes("ubic") || q.includes("where") || q.includes("location") || q.includes("jarabacoa")) {
    return localized({
      es: "Estamos en Av. Federico Basilis, Jarabacoa. Trabajamos Jarabacoa, La Vega y otras zonas de República Dominicana.",
      en: "We are on Av. Federico Basilis, Jarabacoa. We serve Jarabacoa, La Vega, and other Dominican Republic areas.",
      pt: "Estamos na Av. Federico Basilis, Jarabacoa. Atendemos Jarabacoa, La Vega e outras zonas da República Dominicana.",
    });
  }
  if (q.includes("reserva") || q.includes("airbnb") || q.includes("booking") || q.includes("alquiler")) {
    return localized({
      es: `Tenemos ${rentals} propiedades de alquiler. Abre una propiedad marcada En Alquiler y calcula fechas, huéspedes y cargos.`,
      en: `We have ${rentals} rental properties. Open a For Rent listing to estimate dates, guests, and charges.`,
      pt: `Temos ${rentals} imóveis para aluguel. Abra um imóvel marcado Para aluguel e estime datas, hóspedes e encargos.`,
    });
  }
  if (q.includes("cita") || q.includes("appointment") || q.includes("reuniao") || q.includes("reunião")) {
    return localized({
      es: "Puedes agendar una cita desde la sección Agenda tu cita. Elige motivo, modalidad, fecha, horario y asesor; luego puedes enviar el resumen por WhatsApp.",
      en: "You can schedule a meeting in the Schedule your meeting section. Choose the purpose, format, date, time, and advisor, then send the summary by WhatsApp.",
      pt: "Você pode agendar uma reunião na seção Agende sua reunião. Escolha motivo, modalidade, data, horário e assessor e envie o resumo pelo WhatsApp.",
    });
  }
  if (q.includes("precio") || q.includes("price") || q.includes("compr") || q.includes("venta")) {
    return localized({
      es: `Ahora mismo hay ${sales} opciones de compra. Puedes filtrar por precio, habitaciones, m² y zona.`,
      en: `There are ${sales} purchase options right now. You can filter by price, bedrooms, sqm, and area.`,
      pt: `Agora há ${sales} opções de compra. Você pode filtrar por preço, quartos, m² e zona.`,
    });
  }
  if (q.includes("financ") || q.includes("hipoteca") || q.includes("payment") || q.includes("pago")) {
    return localized({
      es: "La calculadora estima cuota mensual según precio, inicial, tasa y plazo. El auto-cobro real debe conectarse a una pasarela con autorización del cliente.",
      en: "The calculator estimates monthly payment by price, down payment, rate, and term. Real auto-payment must connect to a gateway with client authorization.",
      pt: "A calculadora estima o pagamento mensal por preço, entrada, taxa e prazo. A cobrança real precisa de uma passarela com autorização do cliente.",
    });
  }
  if (q.includes("admin") || q.includes("agregar")) {
    return localized({
      es: "El modo admin permite agregar, editar y eliminar propiedades en esta demo. En producción debe tener usuarios, roles e historial.",
      en: "Admin mode can add, edit, and delete properties in this demo. Production should include users, roles, and history.",
      pt: "O modo admin permite adicionar, editar e remover imóveis nesta demo. Em produção deve incluir usuários, funções e histórico.",
    });
  }
  if (q.includes("vender") || q.includes("vendo") || q.includes("sell") || q.includes("alquilar mi") || q.includes("rent my")) {
    return localized({
      es: "Si quieres vender o alquilar tu propiedad, podemos representarte como agente: precio, fotos, promoción, visitas, negociación y seguimiento.",
      en: "If you want to sell or rent your property, we can represent you as your agent: pricing, photos, promotion, showings, negotiation, and follow-up.",
      pt: "Se quiser vender ou alugar seu imóvel, podemos representá-lo como agente: preço, fotos, promoção, visitas, negociação e acompanhamento.",
    });
  }
  return localized({
    es: "Puedo responder sobre propiedades, reservas, calculadoras, ubicación, teléfono y proceso. Si quieres, dime zona, presupuesto y objetivo.",
    en: "I can answer about properties, bookings, calculators, location, phone, and process. Share area, budget, and goal.",
    pt: "Posso responder sobre imóveis, reservas, calculadoras, localização, telefone e processo. Se quiser, diga zona, orçamento e objetivo.",
  });
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

function saveLead(lead) {
  const leads = JSON.parse(localStorage.getItem(STORAGE.leads) || "[]");
  leads.push({ ...lead, createdAt: new Date().toISOString() });
  localStorage.setItem(STORAGE.leads, JSON.stringify(leads));
}

function saveMember(member) {
  const members = JSON.parse(localStorage.getItem(STORAGE.members) || "[]");
  members.push({ ...member, createdAt: new Date().toISOString() });
  localStorage.setItem(STORAGE.members, JSON.stringify(members));
}

function legacyAppointmentStaffId(appointment) {
  const legacy = appointment.staffId || appointment.advisor;
  const mapping = {
    general: "staff-diego-cueto",
    diego: "staff-diego-cueto",
    investment: "staff-agent-demo",
    "staff-meirah-team": "staff-admin-meirah",
    "staff-laura-mendez": "staff-agent-demo",
  };
  if (mapping[legacy]) return mapping[legacy];
  if (state.staff.some((member) => member.id === legacy)) return legacy;
  return state.staff.find((member) => member.active && member.acceptsAppointments)?.id || "staff-diego-cueto";
}

function loadAppointments() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE.appointments) || "[]");
    if (!Array.isArray(saved)) return [];
    const appointments = saved.map((appointment, index) => {
      const staffId = legacyAppointmentStaffId(appointment);
      const staff = state.staff.find((member) => member.id === staffId);
      return {
        id: appointment.id || `appointment-${Date.now()}-${index}`,
        staffId,
        staffName: appointment.staffName || staff?.name || "Meirah Group",
        needType: appointment.needType || appointment.type || "buy",
        modality: appointment.modality || appointment.mode || "whatsapp",
        date: appointment.date || "",
        time: appointment.time || "",
        duration: Number(appointment.duration) || staff?.availability?.slotDuration || 60,
        clientName: appointment.clientName || appointment.name || "",
        clientPhone: appointment.clientPhone || appointment.phone || "",
        clientEmail: appointment.clientEmail || appointment.email || "",
        clientMessage: appointment.clientMessage || appointment.message || "",
        status: APPOINTMENT_STATUSES.includes(appointment.status) ? appointment.status : "pending",
        createdAt: appointment.createdAt || new Date().toISOString(),
      };
    });
    if (JSON.stringify(appointments) !== JSON.stringify(saved)) {
      localStorage.setItem(STORAGE.appointments, JSON.stringify(appointments));
    }
    return appointments;
  } catch {
    return [];
  }
}

function saveAppointments(appointments) {
  localStorage.setItem(STORAGE.appointments, JSON.stringify(appointments));
}

function getAppointments() {
  return loadAppointments();
}

function saveAppointment(appointment) {
  const appointments = loadAppointments();
  appointments.push(appointment);
  saveAppointments(appointments);
}

function appointmentLocale() {
  return { es: "es-DO", en: "en-US", pt: "pt-BR" }[state.lang] || "es-DO";
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(value) {
  const [year, month, day] = String(value).split("-").map(Number);
  return new Date(year, month - 1, day, 12);
}

function formatAppointmentDate(value) {
  return new Intl.DateTimeFormat(appointmentLocale(), {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateFromKey(value));
}

function formatAppointmentTime(value) {
  const [hours, minutes] = String(value).split(":").map(Number);
  return new Intl.DateTimeFormat(appointmentLocale(), {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2000, 0, 1, hours, minutes));
}

function appointmentTypeLabel(value) {
  const labels = {
    buy: "appointmentTypeBuy",
    sell: "appointmentTypeSell",
    rent: "appointmentTypeRent",
    invest: "appointmentTypeInvest",
    visit: "appointmentTypeVisit",
  };
  return text(labels[value] || "appointmentTypeBuy");
}

function appointmentModeLabel(value) {
  if (value === "whatsapp") return "WhatsApp";
  const labels = {
    call: "appointmentModeCall",
    video: "appointmentModeVideo",
    "in-person": "appointmentModeInPerson",
  };
  return text(labels[value] || "appointmentModeCall");
}

function currentAppointmentStaff() {
  const advisor = $("#appointmentAdvisor")?.value || "";
  return (
    state.staff.find(
      (member) =>
        member.id === advisor &&
        member.active === true &&
        member.acceptsAppointments === true &&
        member.availabilityConfigured === true
    ) || null
  );
}

function closeAppointmentSelectors() {
  openAppointmentSelector = "";
  $$("[data-appointment-selector-card]").forEach((card) => {
    const panel = $(".appointment-selector-panel", card);
    const toggle = $("[data-appointment-toggle]", card);
    card.classList.remove("is-open");
    if (panel) panel.hidden = true;
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
}

function toggleAppointmentSelector(key) {
  if (!key) return;
  if (openAppointmentSelector === key) {
    closeAppointmentSelectors();
    return;
  }

  openAppointmentSelector = key;
  $$("[data-appointment-selector-card]").forEach((card) => {
    const currentKey = card.dataset.appointmentSelectorCard;
    const panel = $(".appointment-selector-panel", card);
    const toggle = $("[data-appointment-toggle]", card);
    const active = currentKey === key;
    card.classList.toggle("is-open", active);
    if (panel) panel.hidden = !active;
    if (toggle) toggle.setAttribute("aria-expanded", String(active));
  });
}

function hideAppointmentConfirmation() {
  const confirmation = $("#appointmentConfirmation");
  if (confirmation) confirmation.hidden = true;
}

function syncAppointmentSelectorValues() {
  const typeValue = $("input[name='appointmentType']:checked")?.value || "buy";
  const modeValue = $("input[name='appointmentMode']:checked")?.value || "whatsapp";
  const staff = currentAppointmentStaff();
  const typeTarget = $("#appointmentTypeValue");
  const modeTarget = $("#appointmentModeValue");
  const advisorTarget = $("#appointmentAdvisorValue");

  if (typeTarget) typeTarget.textContent = appointmentTypeLabel(typeValue);
  if (modeTarget) modeTarget.textContent = appointmentModeLabel(modeValue);
  if (advisorTarget) {
    advisorTarget.textContent = staff?.name || text("appointmentSelectAgentPlaceholder");
    advisorTarget.classList.toggle("is-placeholder", !staff);
  }
  renderAppointmentScheduleMeta();
  renderAppointmentSummary();
}

function renderAppointmentScheduleMeta() {
  const meta = $("#appointmentScheduleMeta");
  const duration = $("#appointmentDurationChip");
  const staff = currentAppointmentStaff();
  if (meta) {
    meta.textContent = staff
      ? localized({
          es: `Disponibilidad de ${staff.name}`,
          en: `${staff.name}'s availability`,
          pt: `Disponibilidade de ${staff.name}`,
        })
      : text("appointmentChooseStaffError");
  }
  if (duration) duration.textContent = staff ? `${staff.availability.slotDuration} min` : "--";
}

function renderAppointmentSummary() {
  const summary = $("#appointmentSummaryGrid");
  if (!summary) return;

  const staff = currentAppointmentStaff();
  const labels = localized({
    es: {
      need: "Motivo",
      mode: "Modalidad",
      agent: "Agente",
      date: "Fecha",
      time: "Hora",
      duration: "Duración",
    },
    en: {
      need: "Need",
      mode: "Format",
      agent: "Agent",
      date: "Date",
      time: "Time",
      duration: "Duration",
    },
    pt: {
      need: "Motivo",
      mode: "Modalidade",
      agent: "Agente",
      date: "Data",
      time: "Hora",
      duration: "Duração",
    },
  });

  const items = [
    {
      icon: "tags",
      label: labels.need,
      value: appointmentTypeLabel($("input[name='appointmentType']:checked")?.value || "buy"),
    },
    {
      icon: "phone-call",
      label: labels.mode,
      value: appointmentModeLabel($("input[name='appointmentMode']:checked")?.value || "whatsapp"),
    },
    {
      icon: "user-round",
      label: labels.agent,
      value: staff?.name || "--",
      placeholder: !staff,
    },
    {
      icon: "calendar-days",
      label: labels.date,
      value: selectedAppointmentDate ? formatAppointmentDate(selectedAppointmentDate) : "--",
      placeholder: !selectedAppointmentDate,
    },
    {
      icon: "clock-3",
      label: labels.time,
      value: selectedAppointmentTime ? formatAppointmentTime(selectedAppointmentTime) : "--",
      placeholder: !selectedAppointmentTime,
    },
    {
      icon: "timer",
      label: labels.duration,
      value: staff ? `${staff.availability.slotDuration} min` : "--",
      placeholder: !staff,
    },
  ];

  summary.innerHTML = items
    .map(
      (item) => `
        <article class="appointment-summary-item">
          <i data-lucide="${item.icon}"></i>
          <div class="appointment-summary-item-copy">
            <span>${escapeHtml(item.label)}</span>
            <strong class="${item.placeholder ? "is-placeholder" : ""}">${escapeHtml(item.value)}</strong>
          </div>
        </article>
      `
    )
    .join("");
  if (window.lucide) window.lucide.createIcons();
}

function appointmentAdvisorLabel(staffId) {
  return state.staff.find((member) => member.id === staffId)?.name || "Meirah Group";
}

function minutesFromTime(value) {
  const [hours, minutes] = String(value).split(":").map(Number);
  return hours * 60 + minutes;
}

function timeFromMinutes(value) {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function appointmentDayKey(value) {
  const day = dateFromKey(value).getDay();
  return WEEKDAY_KEYS[(day + 6) % 7];
}

function getStaffAvailability(staffId, date) {
  const staff = state.staff.find((member) => member.id === staffId && member.active);
  if (!staff || !date || staff.availability.blockedDates.includes(date)) return [];
  return staff.availability.weekly[appointmentDayKey(date)] || [];
}

function appointmentRangesOverlap(startA, durationA, startB, endB) {
  const aStart = minutesFromTime(startA);
  const aEnd = aStart + Number(durationA);
  return aStart < minutesFromTime(endB) && aEnd > minutesFromTime(startB);
}

function isSlotBooked(staffId, date, time, duration) {
  return loadAppointments().some(
    (appointment) =>
      appointment.staffId === staffId &&
      appointment.date === date &&
      ACTIVE_APPOINTMENT_STATUSES.includes(appointment.status) &&
      appointmentRangesOverlap(time, duration, appointment.time, timeFromMinutes(minutesFromTime(appointment.time) + appointment.duration))
  );
}

function isStaffSlotBlocked(staff, date, time, duration) {
  return staff.availability.blockedSlots.some(
    (slot) => slot.date === date && appointmentRangesOverlap(time, duration, slot.start, slot.end)
  );
}

function generateAvailableSlots(staffId, date, includeBooked = false) {
  const staff = state.staff.find((member) => member.id === staffId && member.active);
  if (!staff) return [];
  const duration = staff.availability.slotDuration;
  const slots = [];
  getStaffAvailability(staffId, date).forEach((range) => {
    const start = minutesFromTime(range.start);
    const end = minutesFromTime(range.end);
    for (let cursor = start; cursor + duration <= end; cursor += duration) {
      const time = timeFromMinutes(cursor);
      const booked = isSlotBooked(staffId, date, time, duration);
      const blocked = isStaffSlotBlocked(staff, date, time, duration);
      const past = isPastAppointmentSlot(date, time);
      if (includeBooked || (!booked && !blocked && !past)) {
        slots.push({ time, duration, booked, blocked, past });
      }
    }
  });
  return slots;
}

function isPastAppointmentSlot(date, time) {
  if (date !== dateKey(new Date())) return false;
  const [hours, minutes] = time.split(":").map(Number);
  const slotDate = dateFromKey(date);
  slotDate.setHours(hours, minutes, 0, 0);
  return slotDate <= new Date();
}

function hasAvailableAppointmentSlot(date, staffId) {
  return generateAvailableSlots(staffId, date).length > 0;
}

function staffRoleLabel(role) {
  return {
    super_admin: text("staffRoleSuperAdmin"),
    admin: "Admin",
    agent: text("staffRoleAdvisor"),
    assistant: text("staffRoleAssistant"),
    editor: text("staffRoleEditor"),
  }[role] || role;
}

function renderStaffSelector() {
  const container = $("#appointmentStaffSelector");
  const input = $("#appointmentAdvisor");
  if (!container || !input) return;
  const activeStaff = state.staff.filter(
    (member) =>
      member.active &&
      member.acceptsAppointments === true &&
      member.availabilityConfigured === true
  );

  if (!activeStaff.length) {
    input.value = "";
    container.innerHTML = `<p class="appointment-empty-times">${text("appointmentNoStaff")}</p>`;
    syncAppointmentSelectorValues();
    return;
  }

  if (!activeStaff.some((member) => member.id === input.value)) input.value = "";
  container.innerHTML = activeStaff
    .map((member) => {
      const selected = member.id === input.value;
      const initials = member.name
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();
      const avatar = member.avatar
        ? `<img src="${escapeHtml(member.avatar)}" alt="" />`
        : `<span>${escapeHtml(initials)}</span>`;
      const publicRole = localized({ es: "Agente inmobiliario", en: "Real estate agent", pt: "Agente imobiliário" });
      return `
        <button class="appointment-staff-card${selected ? " is-selected" : ""}" type="button" data-select-staff="${member.id}" aria-pressed="${selected}">
          <span class="appointment-staff-avatar">${avatar}</span>
          <span class="appointment-staff-copy">
            <strong>${escapeHtml(member.name)}</strong>
            <small>${escapeHtml(publicRole)} · ${member.availability.slotDuration} min</small>
          </span>
          <i data-lucide="check"></i>
        </button>
      `;
    })
    .join("");
  if (window.lucide) window.lucide.createIcons();
  syncAppointmentSelectorValues();
}

function renderAppointmentCalendar() {
  const grid = $("#appointmentCalendarGrid");
  const weekdays = $("#appointmentWeekdays");
  const title = $("#appointment-calendar-title");
  const previous = $("#appointmentPrevMonth");
  const next = $("#appointmentNextMonth");
  if (!grid || !weekdays || !title || !previous || !next) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastMonth = new Date(today.getFullYear(), today.getMonth() + 12, 1);
  const advisor = $("#appointmentAdvisor")?.value || "";
  const appointments = loadAppointments();
  const monthStart = new Date(appointmentCalendarMonth.getFullYear(), appointmentCalendarMonth.getMonth(), 1);
  const monthEnd = new Date(appointmentCalendarMonth.getFullYear(), appointmentCalendarMonth.getMonth() + 1, 0);
  const leadingDays = (monthStart.getDay() + 6) % 7;

  const monthLabel = new Intl.DateTimeFormat(appointmentLocale(), {
    month: "long",
    year: "numeric",
  }).format(monthStart);
  title.textContent = monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1);
  previous.disabled = monthStart <= currentMonth;
  next.disabled = monthStart >= lastMonth;
  previous.setAttribute(
    "aria-label",
    localized({ es: "Mes anterior", en: "Previous month", pt: "Mês anterior" })
  );
  next.setAttribute("aria-label", localized({ es: "Mes siguiente", en: "Next month", pt: "Próximo mês" }));

  const monday = new Date(2026, 0, 5);
  weekdays.innerHTML = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + index);
    return `<span>${new Intl.DateTimeFormat(appointmentLocale(), { weekday: "short" }).format(day)}</span>`;
  }).join("");

  const cells = Array.from({ length: leadingDays }, () => '<span class="appointment-calendar-spacer"></span>');
  for (let day = 1; day <= monthEnd.getDate(); day += 1) {
    const date = new Date(monthStart.getFullYear(), monthStart.getMonth(), day);
    const value = dateKey(date);
    const outsideRange = date < today || date > new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
    const unavailable = !advisor || outsideRange || !hasAvailableAppointmentSlot(value, advisor);
    const selected = value === selectedAppointmentDate;
    const hasAppointments = appointments.some(
      (appointment) => appointment.staffId === advisor && appointment.date === value && ACTIVE_APPOINTMENT_STATUSES.includes(appointment.status)
    );
    const classes = ["appointment-day"];
    if (selected) classes.push("is-selected");
    if (hasAppointments) classes.push("has-appointments");
    cells.push(`
      <button
        class="${classes.join(" ")}"
        type="button"
        data-appointment-date="${value}"
        aria-label="${escapeHtml(formatAppointmentDate(value))}"
        aria-pressed="${selected}"
        ${unavailable ? "disabled" : ""}
      >${day}</button>
    `);
  }
  grid.innerHTML = cells.join("");
}

function renderAppointmentSlots() {
  const container = $("#appointmentTimeSlots");
  const selectedDateLabel = $("#appointmentSelectedDate");
  if (!container || !selectedDateLabel) return;

  const advisor = $("#appointmentAdvisor")?.value || "";
  if (!advisor) {
    selectedDateLabel.textContent = text("appointmentChooseStaffError");
    container.innerHTML = `<p class="appointment-empty-times">${text("appointmentChooseStaffError")}</p>`;
    syncAppointmentSelectorValues();
    return;
  }

  if (!selectedAppointmentDate) {
    selectedDateLabel.textContent = text("appointmentSelectDate");
    container.innerHTML = `<p class="appointment-empty-times">${text("appointmentSelectDate")}</p>`;
    syncAppointmentSelectorValues();
    return;
  }

  const slots = generateAvailableSlots(advisor, selectedAppointmentDate, true);
  selectedDateLabel.textContent = formatAppointmentDate(selectedAppointmentDate);
  if (!hasAvailableAppointmentSlot(selectedAppointmentDate, advisor)) {
    selectedAppointmentTime = "";
    container.innerHTML = `<p class="appointment-empty-times">${text("appointmentNoTimes")}</p>`;
    syncAppointmentSelectorValues();
    return;
  }

  container.innerHTML = slots
    .map((slot) => {
      const unavailable = slot.booked || slot.blocked || slot.past;
      const selected = slot.time === selectedAppointmentTime && !unavailable;
      return `
        <button
          class="appointment-time-slot${selected ? " is-selected" : ""}"
          type="button"
          data-appointment-time="${slot.time}"
          aria-pressed="${selected}"
          ${unavailable ? "disabled" : ""}
        >
          <span>${escapeHtml(formatAppointmentTime(slot.time))}</span>
          ${slot.booked ? `<small>${text("appointmentBooked")}</small>` : ""}
        </button>
      `;
    })
    .join("");
  syncAppointmentSelectorValues();
}

function renderAppointmentTimes() {
  renderAppointmentSlots();
}

function appointmentWhatsAppMessage(appointment) {
  const labels = localized({
    es: { intro: "Hola Meirah Group, deseo confirmar esta cita:", type: "Necesidad", mode: "Modalidad", date: "Fecha", time: "Hora", advisor: "Agente", name: "Cliente", phone: "Teléfono", email: "Correo", message: "Mensaje" },
    en: { intro: "Hello Meirah Group, I would like to confirm this appointment:", type: "Need", mode: "Format", date: "Date", time: "Time", advisor: "Agent", name: "Client", phone: "Phone", email: "Email", message: "Message" },
    pt: { intro: "Olá Meirah Group, desejo confirmar esta reunião:", type: "Necessidade", mode: "Modalidade", date: "Data", time: "Hora", advisor: "Agente", name: "Cliente", phone: "Telefone", email: "E-mail", message: "Mensagem" },
  });
  const lines = [
    labels.intro,
    "",
    `${labels.type}: ${appointmentTypeLabel(appointment.needType)}`,
    `${labels.mode}: ${appointmentModeLabel(appointment.modality)}`,
    `${labels.date}: ${formatAppointmentDate(appointment.date)}`,
    `${labels.time}: ${formatAppointmentTime(appointment.time)}`,
    `${labels.advisor}: ${appointment.staffName}`,
    `${labels.name}: ${appointment.clientName}`,
    `${labels.phone}: ${appointment.clientPhone}`,
  ];
  if (appointment.clientEmail) lines.push(`${labels.email}: ${appointment.clientEmail}`);
  if (appointment.clientMessage) lines.push(`${labels.message}: ${appointment.clientMessage}`);
  return lines.join("\n");
}

function renderAppointmentConfirmation(appointment = lastConfirmedAppointment) {
  const confirmation = $("#appointmentConfirmation");
  const summary = $("#appointmentConfirmationSummary");
  const whatsapp = $("#appointmentWhatsApp");
  if (!confirmation || !summary || !whatsapp) return;
  if (!appointment) {
    confirmation.hidden = true;
    return;
  }

  summary.innerHTML = `
    <span><strong>${escapeHtml(appointmentTypeLabel(appointment.needType))}</strong></span>
    <span>${escapeHtml(formatAppointmentDate(appointment.date))}</span>
    <span>${escapeHtml(formatAppointmentTime(appointment.time))}</span>
    <span>${escapeHtml(appointment.staffName)}</span>
  `;
  const staff = state.staff.find((member) => member.id === appointment.staffId);
  whatsapp.href = `https://wa.me/${staff?.phone || BUSINESS_WHATSAPP}?text=${encodeURIComponent(appointmentWhatsAppMessage(appointment))}`;
  confirmation.hidden = false;
  if (window.lucide) window.lucide.createIcons();
}

function handleAppointmentSubmit(form) {
  const validation = $("#appointmentValidation");
  const advisor = $("#appointmentAdvisor").value;
  const staff = state.staff.find(
    (member) =>
      member.id === advisor &&
      member.active === true &&
      member.acceptsAppointments === true &&
      member.availabilityConfigured === true
  );
  validation.textContent = "";

  if (!staff) {
    validation.textContent = text("appointmentChooseStaffError");
    return;
  }
  if (!selectedAppointmentDate) {
    validation.textContent = text("appointmentChooseDateError");
    return;
  }
  if (!selectedAppointmentTime) {
    validation.textContent = text("appointmentChooseTimeError");
    return;
  }
  if (isSlotBooked(advisor, selectedAppointmentDate, selectedAppointmentTime, staff.availability.slotDuration)) {
    validation.textContent = text("appointmentConflictError");
    selectedAppointmentTime = "";
    renderAppointmentTimes();
    return;
  }

  const formData = new FormData(form);
  const appointment = {
    id: window.crypto?.randomUUID?.() || `appointment-${Date.now()}`,
    staffId: staff.id,
    staffName: staff.name,
    needType: formData.get("appointmentType"),
    modality: formData.get("appointmentMode"),
    date: selectedAppointmentDate,
    time: selectedAppointmentTime,
    duration: staff.availability.slotDuration,
    clientName: $("#appointmentName").value.trim(),
    clientPhone: $("#appointmentPhone").value.trim(),
    clientEmail: $("#appointmentEmail").value.trim(),
    clientMessage: $("#appointmentMessage").value.trim(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  saveAppointment(appointment);
  lastConfirmedAppointment = appointment;
  renderAppointmentConfirmation(appointment);
  form.reset();
  $("#appointmentAdvisor").value = "";
  selectedAppointmentDate = "";
  selectedAppointmentTime = "";
  appointmentCalendarMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  closeAppointmentSelectors();
  renderStaffSelector();
  renderAppointmentCalendar();
  renderAppointmentTimes();
  showToast(text("appointmentSaved"));
  $("#appointmentConfirmation").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function weekdayLabel(day) {
  const date = new Date(2026, 0, 5 + WEEKDAY_KEYS.indexOf(day));
  const label = new Intl.DateTimeFormat(appointmentLocale(), { weekday: "long" }).format(date);
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function weeklyDayEditorValue(ranges = []) {
  const normalizedRanges = (Array.isArray(ranges) ? ranges : [])
    .map(normalizeTimeRange)
    .filter(Boolean)
    .sort((a, b) => a.start.localeCompare(b.start));
  if (!normalizedRanges.length) return emptyStaffDayDraft();
  const blocks = [];
  for (let index = 0; index < normalizedRanges.length - 1 && blocks.length < 2; index += 1) {
    const current = normalizedRanges[index];
    const next = normalizedRanges[index + 1];
    if (current.end < next.start) blocks.push({ start: current.end, end: next.start });
  }
  while (blocks.length < 2) blocks.push({ start: "", end: "" });
  return {
    active: true,
    start: normalizedRanges[0].start,
    end: normalizedRanges[normalizedRanges.length - 1].end,
    blocks,
  };
}

function buildStaffWeeklyDraft(member) {
  const draft = emptyStaffWeeklyDraft();
  WEEKDAY_KEYS.forEach((day) => {
    draft[day] = weeklyDayEditorValue(member?.availability?.weekly?.[day]);
  });
  return draft;
}

function staffDayDraftToRanges(dayDraft) {
  if (!dayDraft?.active) return [];
  const start = dayDraft.start;
  const end = dayDraft.end;
  if (!/^\d{2}:\d{2}$/.test(start || "") || !/^\d{2}:\d{2}$/.test(end || "") || start >= end) return [];
  const workStart = minutesFromTime(start);
  const workEnd = minutesFromTime(end);
  const blocks = (Array.isArray(dayDraft.blocks) ? dayDraft.blocks : [])
    .map((block) => normalizeTimeRange(block))
    .filter(Boolean)
    .map((block) => ({ start: minutesFromTime(block.start), end: minutesFromTime(block.end) }))
    .filter((block) => block.start >= workStart && block.end <= workEnd && block.start < block.end)
    .sort((a, b) => a.start - b.start);

  const merged = [];
  blocks.forEach((block) => {
    const previous = merged[merged.length - 1];
    if (!previous || block.start > previous.end) {
      merged.push({ ...block });
      return;
    }
    previous.end = Math.max(previous.end, block.end);
  });

  const ranges = [];
  let cursor = workStart;
  merged.slice(0, 2).forEach((block) => {
    if (cursor < block.start) ranges.push({ start: timeFromMinutes(cursor), end: timeFromMinutes(block.start) });
    cursor = Math.max(cursor, block.end);
  });
  if (cursor < workEnd) ranges.push({ start: timeFromMinutes(cursor), end: timeFromMinutes(workEnd) });
  return ranges.filter((range) => range.start < range.end);
}

function currentStaffDayDraft() {
  if (!staffWeeklyDraft[selectedStaffScheduleDay]) staffWeeklyDraft[selectedStaffScheduleDay] = emptyStaffDayDraft();
  return staffWeeklyDraft[selectedStaffScheduleDay];
}

function syncStaffWeeklyDraftFromPanel() {
  const dayDraft = currentStaffDayDraft();
  const activeInput = $("#staffDayActiveInput");
  if (!activeInput) return;
  dayDraft.active = activeInput.checked;
  dayDraft.start = $("#staffDayStartInput")?.value || "09:00";
  dayDraft.end = $("#staffDayEndInput")?.value || "17:00";
  dayDraft.blocks = [0, 1].map((index) => ({
    start: $(`[data-staff-block-start="${index}"]`)?.value || "",
    end: $(`[data-staff-block-end="${index}"]`)?.value || "",
  }));
}

function staffWeekdayStatus(dayDraft) {
  if (!dayDraft?.active) {
    return localized({
      es: "Sin disponibilidad",
      en: "Unavailable",
      pt: "Indisponível",
    });
  }
  const ranges = staffDayDraftToRanges(dayDraft);
  if (!ranges.length) {
    return localized({
      es: "Sin horarios válidos",
      en: "No valid hours",
      pt: "Sem horários válidos",
    });
  }
  return `${formatAppointmentTime(ranges[0].start)} - ${formatAppointmentTime(ranges[ranges.length - 1].end)}`;
}

function renderStaffWeeklySchedule(member) {
  if (member) {
    staffWeeklyDraft = buildStaffWeeklyDraft(member);
    const firstAvailableDay = WEEKDAY_KEYS.find((day) => staffWeeklyDraft[day]?.active) || WEEKDAY_KEYS[0];
    selectedStaffScheduleDay = staffWeeklyDraft[selectedStaffScheduleDay]?.active ? selectedStaffScheduleDay : firstAvailableDay;
  }

  const container = $("#staffWeeklySchedule");
  if (!container) return;
  const dayDraft = currentStaffDayDraft();
  container.innerHTML = `
    <div class="staff-weekday-grid">
      ${WEEKDAY_KEYS.map((day) => {
        const draft = staffWeeklyDraft[day] || emptyStaffDayDraft();
        return `
          <button
            class="staff-weekday-button${day === selectedStaffScheduleDay ? " is-selected" : ""}${draft.active ? "" : " is-inactive"}"
            type="button"
            data-select-staff-day="${day}"
          >
            <strong>${escapeHtml(weekdayShortLabel(day))}</strong>
            <small>${escapeHtml(staffWeekdayStatus(draft))}</small>
          </button>
        `;
      }).join("")}
    </div>
    <div class="staff-day-detail-panel">
      <div class="staff-day-detail-header">
        <div>
          <h5>${escapeHtml(weekdayLabel(selectedStaffScheduleDay))}</h5>
          <p>${escapeHtml(localized({
            es: "Lo no bloqueado dentro de la jornada quedará disponible automáticamente.",
            en: "Any unblocked time within the workday stays available automatically.",
            pt: "Tudo o que não for bloqueado dentro da jornada ficará disponível automaticamente.",
          }))}</p>
        </div>
        <label class="staff-day-toggle">
          <input id="staffDayActiveInput" type="checkbox" ${dayDraft.active ? "checked" : ""} />
          <span>${escapeHtml(localized({
            es: "Disponible este día",
            en: "Available this day",
            pt: "Disponível neste dia",
          }))}</span>
        </label>
      </div>
      <div class="staff-day-detail-grid">
        <label>
          <span>${escapeHtml(localized({ es: "Inicio", en: "Start", pt: "Início" }))}</span>
          <input id="staffDayStartInput" type="time" value="${dayDraft.start}" ${dayDraft.active ? "" : "disabled"} />
        </label>
        <label>
          <span>${escapeHtml(localized({ es: "Fin", en: "End", pt: "Fim" }))}</span>
          <input id="staffDayEndInput" type="time" value="${dayDraft.end}" ${dayDraft.active ? "" : "disabled"} />
        </label>
      </div>
      <div class="staff-day-block-list">
        ${dayDraft.blocks.map((block, index) => `
          <article class="staff-day-block-item">
            <h5>${escapeHtml(localized({
              es: `Bloqueo ${index + 1}`,
              en: `Block ${index + 1}`,
              pt: `Bloqueio ${index + 1}`,
            }))}</h5>
            <p>${escapeHtml(localized({
              es: "Usa estos rangos para marcar ausencias, reuniones o pausas.",
              en: "Use these windows for meetings, breaks, or offline time.",
              pt: "Use essas janelas para reuniões, pausas ou indisponibilidade.",
            }))}</p>
            <div class="staff-day-block-grid">
              <label>
                <span>${escapeHtml(localized({ es: "Desde", en: "From", pt: "De" }))}</span>
                <input type="time" data-staff-block-start="${index}" value="${block.start}" ${dayDraft.active ? "" : "disabled"} />
              </label>
              <label>
                <span>${escapeHtml(localized({ es: "Hasta", en: "To", pt: "Até" }))}</span>
                <input type="time" data-staff-block-end="${index}" value="${block.end}" ${dayDraft.active ? "" : "disabled"} />
              </label>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function staffListForSession() {
  const current = currentStaffMember();
  if (!current) return [];
  if (hasStaffPermission("manageStaff")) return state.staff;
  return current.role === "agent" && hasStaffPermission("ownAvailability")
    ? state.staff.filter((member) => member.id === current.id)
    : [];
}

function renderStaffAdminList(selectedId = $("#staffIdInput")?.value) {
  const container = $("#staffAdminList");
  if (!container) return;
  container.innerHTML = staffListForSession()
    .map((member) => {
      const initials = member.name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
      return `
        <button class="staff-admin-list-item${member.id === selectedId ? " is-selected" : ""}" type="button" data-edit-staff="${member.id}">
          <span class="appointment-staff-avatar">${member.avatar ? `<img src="${escapeHtml(member.avatar)}" alt="" />` : `<span>${escapeHtml(initials)}</span>`}</span>
          <span><strong>${escapeHtml(member.name)}</strong><small>${escapeHtml(staffRoleLabel(member.role))} · ${member.active ? localized({ es: "Activo", en: "Active", pt: "Ativo" }) : localized({ es: "Inactivo", en: "Inactive", pt: "Inativo" })}</small></span>
        </button>
      `;
    })
    .join("");
}

function setStaffProfileFieldsDisabled(disabled) {
  [
    "#staffNameInput",
    "#staffUsernameInput",
    "#staffPasswordInput",
    "#staffRoleInput",
    "#staffPhoneInput",
    "#staffEmailInput",
    "#staffAvatarInput",
    "#staffAvatarLinkInput",
    "#staffAvatarFileInput",
    "#staffActiveInput",
    "#toggleStaffPassword",
    "#staffAvatarUseLink",
    "#staffAvatarUseFile",
    "#staffAvatarClear",
  ].forEach((selector) => {
    const field = $(selector);
    if (field) field.disabled = disabled;
  });
}

function fillStaffAdminForm(member) {
  if (!member) return;
  $("#staffIdInput").value = member.id;
  $("#staffNameInput").value = member.name;
  $("#staffUsernameInput").value = member.username;
  $("#staffPasswordInput").value = member.password;
  $("#staffRoleInput").value = member.role;
  $("#staffPhoneInput").value = formatStaffPhone(member.phone);
  $("#staffEmailInput").value = member.email;
  setStaffAvatarValue(member.avatar);
  $("#staffDurationInput").value = String(member.availability.slotDuration);
  $("#staffActiveInput").checked = member.active;
  $("#staffAcceptsAppointmentsInput").checked = member.acceptsAppointments;
  $("#staffAvailabilityConfiguredInput").checked = member.availabilityConfigured;
  $("#staffBlockedDatesInput").value = member.availability.blockedDates.join("\n");
  staffBlockedSlotsDraft = structuredClone(member.availability.blockedSlots);
  renderStaffWeeklySchedule(member);
  setStaffPasswordVisibility(false);
  renderStaffAdminList(member.id);

  const agentOnly = currentStaffMember()?.role === "agent" && !hasStaffPermission("manageStaff");
  setStaffProfileFieldsDisabled(agentOnly);
  $("#newStaffMember").hidden = !hasStaffPermission("manageStaff");
  $("#deleteStaffMember").hidden = !hasStaffPermission("manageStaff");
}

function newStaffDraft() {
  return normalizeStaffMember({
    id: `staff-${Date.now()}`,
    name: "",
    username: "",
    password: "demo123",
    role: "agent",
    permissions: defaultStaffPermissions("agent"),
    active: true,
    acceptsAppointments: false,
    availabilityConfigured: false,
    phone: BUSINESS_WHATSAPP,
    email: "",
    avatar: "",
    availability: { slotDuration: 60, weekly: emptyWeeklyAvailability(), blockedDates: [], blockedSlots: [] },
  });
}

function collectStaffWeeklyAvailability() {
  syncStaffWeeklyDraftFromPanel();
  return Object.fromEntries(WEEKDAY_KEYS.map((day) => [day, staffDayDraftToRanges(staffWeeklyDraft[day])]));
}

function collectStaffFromForm(existing) {
  const blockedDates = $("#staffBlockedDatesInput")
    .value.split(/[\s,;]+/)
    .map((date) => date.trim())
    .filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date));
  const role = $("#staffRoleInput").value;
  return normalizeStaffMember({
    id: existing?.id || $("#staffIdInput").value || `staff-${Date.now()}`,
    name: $("#staffNameInput").value.trim(),
    username: $("#staffUsernameInput").value.trim(),
    password: $("#staffPasswordInput").value,
    role,
    permissions: defaultStaffPermissions(role),
    active: $("#staffActiveInput").checked,
    acceptsAppointments: $("#staffAcceptsAppointmentsInput").checked,
    availabilityConfigured: $("#staffAvailabilityConfiguredInput").checked,
    phone: $("#staffPhoneInput").value,
    email: $("#staffEmailInput").value,
    avatar: $("#staffAvatarInput").value.trim(),
    availability: {
      slotDuration: Number($("#staffDurationInput").value),
      weekly: collectStaffWeeklyAvailability(),
      blockedDates,
      blockedSlots: existing?.availability?.blockedSlots || staffBlockedSlotsDraft,
    },
  });
}

function setupStaffAdmin(selectedId) {
  const section = $("#staffAdminSection");
  const current = currentStaffMember();
  if (!section || !current) return;
  section.hidden = !(hasStaffPermission("manageStaff") || hasStaffPermission("ownAvailability"));
  if (section.hidden) return;
  const available = staffListForSession();
  const member = available.find((item) => item.id === selectedId) || available[0];
  renderStaffAdminList(member?.id);
  if (member) fillStaffAdminForm(member);
}

function appointmentStatusLabel(status) {
  return text(
    {
      pending: "appointmentStatusPending",
      confirmed: "appointmentStatusConfirmed",
      cancelled: "appointmentStatusCancelled",
      completed: "appointmentStatusCompleted",
    }[status] || "appointmentStatusPending"
  );
}

function appointmentVisibleToSession(appointment) {
  const current = currentStaffMember();
  if (!current) return false;
  if (!hasStaffPermission("viewAppointments")) return false;
  return current.role !== "agent" || appointment.staffId === current.id;
}

function populateAppointmentAdminStaffFilter() {
  const select = $("#appointmentAdminStaffFilter");
  const current = currentStaffMember();
  if (!select || !current) return;
  const ownOnly = current.role === "agent";
  const members = ownOnly ? state.staff.filter((member) => member.id === current.id) : state.staff;
  select.innerHTML = `${ownOnly ? "" : `<option value="all">${text("optionAll")}</option>`}${members
    .map((member) => `<option value="${member.id}">${escapeHtml(member.name)}</option>`)
    .join("")}`;
  if (ownOnly) select.value = current.id;
}

function loadLeads() {
  try {
    const leads = JSON.parse(localStorage.getItem(STORAGE.leads) || "[]");
    return Array.isArray(leads) ? leads : [];
  } catch {
    return [];
  }
}

function renderAdminLeads() {
  const panel = $("#adminLeadsPanel");
  const list = $("#adminLeadsList");
  if (!panel || !list) return;
  panel.hidden = !hasStaffPermission("viewLeads");
  if (panel.hidden) return;
  const leads = loadLeads().slice().reverse().slice(0, 8);
  list.innerHTML = leads.length
    ? leads
        .map(
          (lead) => `
            <article class="admin-lead-item">
              <strong>${escapeHtml(lead.name || "")}</strong>
              <span>${escapeHtml(lead.phone || "")}</span>
              <small>${escapeHtml(lead.interest || "")}</small>
            </article>
          `
        )
        .join("")
    : `<p>${localized({ es: "No hay leads guardados.", en: "No saved leads.", pt: "Não há leads salvos." })}</p>`;
}

function renderAppointmentAdmin() {
  const container = $("#appointmentAdminList");
  if (!container || !currentStaffMember()) return;
  const staffFilter = $("#appointmentAdminStaffFilter")?.value || "all";
  const dateFilter = $("#appointmentAdminDateFilter")?.value || "";
  const statusFilter = $("#appointmentAdminStatusFilter")?.value || "all";
  const modeFilter = $("#appointmentAdminModeFilter")?.value || "all";
  const appointments = loadAppointments()
    .filter(appointmentVisibleToSession)
    .filter((appointment) => staffFilter === "all" || appointment.staffId === staffFilter)
    .filter((appointment) => !dateFilter || appointment.date === dateFilter)
    .filter((appointment) => statusFilter === "all" || appointment.status === statusFilter)
    .filter((appointment) => modeFilter === "all" || appointment.modality === modeFilter)
    .sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));

  if (!appointments.length) {
    container.innerHTML = `<p class="admin-empty-state">${localized({ es: "No hay citas con estos filtros.", en: "No appointments match these filters.", pt: "Não há reuniões com estes filtros." })}</p>`;
    return;
  }

  container.innerHTML = appointments
    .map(
      (appointment) => `
        <article class="appointment-admin-item" data-admin-appointment="${appointment.id}">
          <div class="appointment-admin-item-main">
            <span class="appointment-status-badge status-${appointment.status}">${escapeHtml(appointmentStatusLabel(appointment.status))}</span>
            <h4>${escapeHtml(appointment.clientName || localized({ es: "Cliente", en: "Client", pt: "Cliente" }))}</h4>
            <p>${escapeHtml(appointment.staffName)} · ${escapeHtml(appointmentTypeLabel(appointment.needType))} · ${escapeHtml(appointmentModeLabel(appointment.modality))}</p>
            <strong>${escapeHtml(formatAppointmentDate(appointment.date))} · ${escapeHtml(formatAppointmentTime(appointment.time))} · ${appointment.duration} min</strong>
            <small>${escapeHtml(appointment.clientPhone)}${appointment.clientEmail ? ` · ${escapeHtml(appointment.clientEmail)}` : ""}</small>
            ${appointment.clientMessage ? `<blockquote>${escapeHtml(appointment.clientMessage)}</blockquote>` : ""}
          </div>
          <label class="appointment-status-control">
            <span>${text("appointmentFilterStatus")}</span>
            <select data-appointment-status="${appointment.id}" ${hasStaffPermission("manageAppointments") ? "" : "disabled"}>
              ${APPOINTMENT_STATUSES.map((status) => `<option value="${status}" ${status === appointment.status ? "selected" : ""}>${escapeHtml(appointmentStatusLabel(status))}</option>`).join("")}
            </select>
          </label>
        </article>
      `
    )
    .join("");
}

function setupAppointmentAdmin() {
  const section = $("#appointmentAdminSection");
  if (!currentStaffMember() || !section) return;
  section.hidden = !hasStaffPermission("viewAppointments");
  if (section.hidden) return;
  populateAppointmentAdminStaffFilter();
  renderAppointmentAdmin();
  renderAdminLeads();
}

function updateAppointmentStatus(id, status) {
  if (!hasStaffPermission("manageAppointments") || !APPOINTMENT_STATUSES.includes(status)) return;
  const appointments = loadAppointments();
  const appointment = appointments.find((item) => item.id === id && appointmentVisibleToSession(item));
  if (!appointment) return;
  appointment.status = status;
  saveAppointments(appointments);
  renderAppointmentAdmin();
  renderAppointmentCalendar();
  renderAppointmentSlots();
  showToast(
    localized({
      es: `Cita marcada como ${appointmentStatusLabel(status).toLowerCase()}.`,
      en: `Appointment marked ${appointmentStatusLabel(status).toLowerCase()}.`,
      pt: `Reunião marcada como ${appointmentStatusLabel(status).toLowerCase()}.`,
    })
  );
}

function openStaffLogin() {
  $("#staffLoginError").textContent = "";
  $("#staffLoginModal").hidden = false;
  document.body.classList.add("modal-open");
  setTimeout(() => $("#staffLoginUsername").focus(), 0);
}

function closeStaffLogin() {
  $("#staffLoginModal").hidden = true;
  document.body.classList.remove("modal-open");
  $("#staffLoginForm").reset();
  $("#staffLoginError").textContent = "";
}

function completeStaffLogin(member) {
  saveStaffSession(member);
  closeStaffLogin();
  $("#adminPanel").hidden = false;
  setupAdmin();
  $("#adminPanel").scrollIntoView({ behavior: "smooth" });
  showToast(
    localized({
      es: `Sesión iniciada como ${member.name}.`,
      en: `Signed in as ${member.name}.`,
      pt: `Sessão iniciada como ${member.name}.`,
    })
  );
}

function setupStaffLogin() {
  const current = currentStaffMember();
  $("#adminToggle").setAttribute(
    "aria-label",
    current
      ? localized({ es: `Panel interno: ${current.name}`, en: `Internal panel: ${current.name}`, pt: `Painel interno: ${current.name}` })
      : localized({ es: "Iniciar sesión interna", en: "Internal sign in", pt: "Entrar no painel interno" })
  );
}

function applyAdminPermissions() {
  const current = currentStaffMember();
  if (!current) return;
  $("#propertyAdminArea").hidden = !hasStaffPermission("manageProperties");
  $("#resetDemo").hidden = !hasStaffPermission("manageProperties");
  $("#staffAdminSection").hidden = !(hasStaffPermission("manageStaff") || hasStaffPermission("ownAvailability"));
  $("#appointmentAdminSection").hidden = !hasStaffPermission("viewAppointments");
  $("#adminSessionSummary").textContent = `${current.name} · ${staffRoleLabel(current.role)}`;
}

function getAdminImages() {
  return $("#adminImagesInput")
    .value.split(",")
    .map((image) => image.trim())
    .filter(Boolean);
}

function setAdminImages(images) {
  $("#adminImagesInput").value = [...new Set(images.filter(Boolean))].join(", ");
  renderAdminImageList();
}

function addAdminImages(images) {
  setAdminImages([...getAdminImages(), ...images]);
}

function renderAdminImageList() {
  const list = $("#adminImageList");
  if (!list) return;
  const images = getAdminImages();
  if (!images.length) {
    list.innerHTML = `<span>${localized({
      es: "Todavía no hay imágenes cargadas.",
      en: "No images added yet.",
      pt: "Ainda não há imagens carregadas.",
    })}</span>`;
    return;
  }

  list.innerHTML = images
    .map(
      (image, index) => {
        const isVideo = isVideoSource(image);
        return `
        <button class="admin-image-chip" type="button" data-remove-admin-image="${index}">
          ${
            isVideo
              ? `<video src="${escapeHtml(image)}" muted playsinline preload="metadata"></video>`
              : `<img src="${escapeHtml(image)}" alt="" />`
          }
          <span>${isVideo ? `V${index + 1}` : index + 1}</span>
        </button>
      `;
      }
    )
    .join("");
}

function refreshLocalizedViews() {
  applyTranslations();
  renderStaffSelector();
  renderAppointmentCalendar();
  renderAppointmentTimes();
  renderAppointmentConfirmation();
  populateZoneOptions();
  renderProperties();
  renderReservationPreview();
  setupAdmin();
  renderFinanceCalculators();
  renderAutopaySchedule(
    $("#autopaySchedule"),
    parseNumericInput($("#autopayAmount").value),
    Number($("#autopayMonths").value),
    Number($("#autopayDay").value)
  );

  const modal = $("#propertyModal");
  if (modal && !modal.hidden && modal.dataset.propertyId) {
    openPropertyModal(modal.dataset.propertyId);
  }
}

function refreshPriceViews() {
  applyCurrencyLabels();
  renderProperties();
  renderReservationPreview();
  renderFinanceCalculators();
  renderAutopaySchedule(
    $("#autopaySchedule"),
    parseNumericInput($("#autopayAmount").value),
    Number($("#autopayMonths").value),
    Number($("#autopayDay").value)
  );

  const modal = $("#propertyModal");
  if (modal && !modal.hidden && modal.dataset.propertyId) {
    openPropertyModal(modal.dataset.propertyId);
  }
}

function activateCalculator(target) {
  const nextTarget = !target || DISABLED_FINANCE_CALCULATORS.has(target) ? "mortgage" : target;
  $$("[data-calculator]").forEach((item) => {
    item.classList.toggle("active", item.dataset.calculator === nextTarget);
  });
  $$("[data-calculator-panel]").forEach((panel) => {
    const isDisabled = DISABLED_FINANCE_CALCULATORS.has(panel.dataset.calculatorPanel);
    panel.hidden = isDisabled;
    panel.classList.toggle("active", !isDisabled && panel.dataset.calculatorPanel === nextTarget);
  });
}

function bindEvents() {
  $("#languageToggle").addEventListener("click", () => {
    toggleHeaderMenu("language");
  });

  $("#currencyToggle").addEventListener("click", () => {
    toggleHeaderMenu("currency");
  });

  $$("[data-lang-option]").forEach((option) =>
    option.addEventListener("click", () => {
      state.lang = LANGUAGES.includes(option.dataset.langOption) ? option.dataset.langOption : "es";
      localStorage.setItem(STORAGE.lang, state.lang);
      closeHeaderMenus();
      refreshLocalizedViews();
    })
  );

  $$("[data-currency-option]").forEach((option) =>
    option.addEventListener("click", () => {
      state.currency = CURRENCIES.includes(option.dataset.currencyOption) ? option.dataset.currencyOption : "USD";
      localStorage.setItem(STORAGE.currency, state.currency);
      closeHeaderMenus();
      refreshPriceViews();
    })
  );

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-header-dropdown]")) closeHeaderMenus();
  });

  $("#themeToggle").addEventListener("click", () => {
    closeHeaderMenus();
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE.theme, state.theme);
    applyTheme();
  });

  $(".brand").addEventListener("click", (event) => {
    event.preventDefault();
    closeHeaderMenus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#appointmentPrevMonth").addEventListener("click", () => {
    appointmentCalendarMonth = new Date(
      appointmentCalendarMonth.getFullYear(),
      appointmentCalendarMonth.getMonth() - 1,
      1
    );
    renderAppointmentCalendar();
  });

  $("#appointmentNextMonth").addEventListener("click", () => {
    appointmentCalendarMonth = new Date(
      appointmentCalendarMonth.getFullYear(),
      appointmentCalendarMonth.getMonth() + 1,
      1
    );
    renderAppointmentCalendar();
  });

  $("#appointmentCalendarGrid").addEventListener("click", (event) => {
    const day = event.target.closest("[data-appointment-date]");
    if (!day || day.disabled) return;
    selectedAppointmentDate = day.dataset.appointmentDate;
    selectedAppointmentTime = "";
    $("#appointmentValidation").textContent = "";
    hideAppointmentConfirmation();
    renderAppointmentCalendar();
    renderAppointmentTimes();
  });

  $("#appointmentTimeSlots").addEventListener("click", (event) => {
    const slot = event.target.closest("[data-appointment-time]");
    if (!slot || slot.disabled) return;
    selectedAppointmentTime = slot.dataset.appointmentTime;
    $("#appointmentValidation").textContent = "";
    hideAppointmentConfirmation();
    renderAppointmentTimes();
  });

  $("#appointmentAdvisor").addEventListener("change", () => {
    selectedAppointmentTime = "";
    if (selectedAppointmentDate && !hasAvailableAppointmentSlot(selectedAppointmentDate, $("#appointmentAdvisor").value)) {
      selectedAppointmentDate = "";
    }
    $("#appointmentValidation").textContent = "";
    hideAppointmentConfirmation();
    renderAppointmentCalendar();
    renderAppointmentTimes();
  });

  $("#appointmentForm").addEventListener("change", (event) => {
    if (event.target.name === "appointmentType") {
      hideAppointmentConfirmation();
      closeAppointmentSelectors();
      syncAppointmentSelectorValues();
      return;
    }

    if (event.target.name === "appointmentMode") {
      hideAppointmentConfirmation();
      closeAppointmentSelectors();
      syncAppointmentSelectorValues();
    }
  });

  $("#appointmentBackButton").addEventListener("click", () => {
    closeAppointmentSelectors();
    $("#appointments-title").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("#appointmentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    handleAppointmentSubmit(event.currentTarget);
  });

  $("#propertyFilters").addEventListener("submit", (event) => {
    event.preventDefault();
    renderProperties();
  });

  $("#clearFilters").addEventListener("click", () => {
    $("#propertyFilters").reset();
    state.showFavorites = false;
    updateFavoriteCount();
    renderProperties();
  });

  $("#sortProperties").addEventListener("change", renderProperties);

  $("#showFavorites").addEventListener("click", () => {
    state.showFavorites = !state.showFavorites;
    updateFavoriteCount();
    renderProperties();
  });

  document.addEventListener("click", (event) => {
    const appointmentToggle = event.target.closest("[data-appointment-toggle]");
    if (appointmentToggle) {
      toggleAppointmentSelector(appointmentToggle.dataset.appointmentToggle);
      return;
    }

    if (openAppointmentSelector && !event.target.closest("[data-appointment-selector-card]")) {
      closeAppointmentSelectors();
    }

    const appointmentChoice = event.target.closest(".appointment-selector-panel .appointment-choice");
    if (appointmentChoice) {
      window.setTimeout(() => closeAppointmentSelectors(), 0);
    }

    const shareButton = event.target.closest("[data-share-property]");
    if (shareButton) {
      const property = state.properties.find((item) => item.id === shareButton.dataset.shareProperty);
      if (property) void shareProperty(property);
      return;
    }

    const shareChannel = event.target.closest("[data-share-channel]");
    if (shareChannel) {
      const property = state.properties.find((item) => item.id === $("#shareModal").dataset.propertyId);
      if (property) void handleShareChannel(shareChannel.dataset.shareChannel, property);
      return;
    }

    const staffSelector = event.target.closest("[data-select-staff]");
    if (staffSelector) {
      $("#appointmentAdvisor").value = staffSelector.dataset.selectStaff;
      selectedAppointmentDate = "";
      selectedAppointmentTime = "";
      $("#appointmentValidation").textContent = "";
      hideAppointmentConfirmation();
      closeAppointmentSelectors();
      renderStaffSelector();
      renderAppointmentCalendar();
      renderAppointmentSlots();
      return;
    }

    const editStaff = event.target.closest("[data-edit-staff]");
    if (editStaff) {
      const member = state.staff.find((item) => item.id === editStaff.dataset.editStaff);
      if (member && (hasStaffPermission("manageStaff") || member.id === currentStaffMember()?.id)) fillStaffAdminForm(member);
      return;
    }

    const removeImage = event.target.closest("[data-remove-admin-image]");
    if (removeImage) {
      const index = Number(removeImage.dataset.removeAdminImage);
      setAdminImages(getAdminImages().filter((_, itemIndex) => itemIndex !== index));
      return;
    }

    const favorite = event.target.closest("[data-favorite]");
    if (favorite) {
      const id = favorite.dataset.favorite;
      if (state.favorites.has(id)) state.favorites.delete(id);
      else state.favorites.add(id);
      saveFavorites();
      updateFavoriteCount();
      renderProperties();
      return;
    }

    const opener = event.target.closest("[data-open-property]");
    if (opener) {
      openPropertyModal(opener.dataset.openProperty, opener.dataset.focusBooking === "true", true);
      return;
    }

  });

  $("#mortgageForm").addEventListener("submit", (event) => {
    event.preventDefault();
    renderMortgage();
  });

  $("#refinanceForm").addEventListener("submit", (event) => {
    event.preventDefault();
    renderRefinance();
  });

  $("#affordabilityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    renderAffordability();
  });

  $("#rentBuyForm").addEventListener("submit", (event) => {
    event.preventDefault();
    renderRentBuy();
  });

  $("#autopayForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = parseNumericInput($("#autopayAmount").value);
    const months = Number($("#autopayMonths").value) || 1;
    const day = Number($("#autopayDay").value) || 15;
    renderAutopaySchedule($("#autopaySchedule"), amount, months, day);
    showToast(
      localized({
        es: "Plan de auto-cobro generado. Pendiente conectar pasarela.",
        en: "Auto-payment plan generated. Gateway connection pending.",
        pt: "Plano de cobrança automática gerado. Falta conectar a passarela.",
      })
    );
  });

  $$("[data-calculator]").forEach((button) => {
    button.addEventListener("click", () => {
      activateCalculator(button.dataset.calculator);
    });
  });

  $$("[data-nav-calculator]").forEach((link) => {
    link.addEventListener("click", () => {
      activateCalculator(link.dataset.navCalculator);
    });
  });

  $("#leadForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveLead({
      name: $("#leadName").value.trim(),
      phone: $("#leadPhone").value.trim(),
      interest: $("#leadInterest").value,
      message: $("#leadMessage").value.trim(),
    });
    event.currentTarget.reset();
    if (currentStaffMember()) renderAdminLeads();
    showToast(
      localized({
        es: "Solicitud guardada. Te contactaremos pronto.",
        en: "Request saved. We will contact you soon.",
        pt: "Solicitação salva. Entraremos em contato em breve.",
      })
    );
  });

  $("#memberLoginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveMember({
      email: $("#memberEmail").value.trim(),
      role: $("#memberRole").value,
      properties: $("#notifyProperties").checked,
      blogs: $("#notifyBlogs").checked,
      updates: $("#notifyUpdates").checked,
    });
    event.currentTarget.reset();
    showToast(
      localized({
        es: "Acceso guardado. Recibirás nuevas propiedades y noticias.",
        en: "Access saved. You will receive new properties and news.",
        pt: "Acesso salvo. Você receberá novos imóveis e notícias.",
      })
    );
  });

  $("#adminToggle").addEventListener("click", () => {
    if (!currentStaffMember()) {
      openStaffLogin();
      return;
    }
    $("#adminPanel").hidden = !$("#adminPanel").hidden;
    if (!$("#adminPanel").hidden) {
      setupAdmin();
      $("#adminPanel").scrollIntoView({ behavior: "smooth" });
    }
  });

  $("#staffLoginModal").addEventListener("click", (event) => {
    if (event.target.closest("[data-close-staff-login]")) closeStaffLogin();
  });

  $("#shareModal").addEventListener("click", (event) => {
    if (event.target.closest("[data-close-share]")) closeShareFallback();
  });

  window.addEventListener("popstate", handlePropertyRoute);

  $("#staffLoginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = $("#staffLoginUsername").value.trim().toLowerCase();
    const password = $("#staffLoginPassword").value;
    const member = state.staff.find(
      (item) => item.active && item.username.toLowerCase() === username && item.password === password
    );
    if (!member) {
      $("#staffLoginError").textContent = localized({
        es: "Usuario o contraseña incorrectos.",
        en: "Incorrect username or password.",
        pt: "Usuário ou senha incorretos.",
      });
      return;
    }
    completeStaffLogin(member);
  });

  $("#staffPinLogin").addEventListener("click", () => {
    const pin = window.prompt(localized({ es: "PIN demo de admin", en: "Demo admin PIN", pt: "PIN demo de admin" }));
    if (pin !== "1025") {
      $("#staffLoginError").textContent = localized({ es: "PIN incorrecto.", en: "Incorrect PIN.", pt: "PIN incorreto." });
      return;
    }
    const admin = state.staff.find((member) => member.active && isManagementRole(member));
    if (admin) completeStaffLogin(admin);
  });

  $("#staffLogout").addEventListener("click", () => {
    saveStaffSession(null);
    $("#adminPanel").hidden = true;
    setupStaffLogin();
    showToast(localized({ es: "Sesión cerrada.", en: "Signed out.", pt: "Sessão encerrada." }));
  });

  $("#newStaffMember").addEventListener("click", () => {
    if (!hasStaffPermission("manageStaff")) return;
    fillStaffAdminForm(newStaffDraft());
    $("#staffNameInput").focus();
  });

  $("#toggleStaffPassword").addEventListener("click", () => {
    setStaffPasswordVisibility($("#staffPasswordInput").type === "password");
  });

  $("#staffPhoneInput").addEventListener("input", (event) => {
    const digits = String(event.target.value || "").replace(/\D/g, "");
    event.target.value = formatStaffPhone(digits);
  });

  $("#staffNameInput").addEventListener("input", refreshStaffAvatarPreview);

  $("#staffAvatarUseLink").addEventListener("click", () => {
    $("#staffAvatarLinkInput").focus();
  });

  $("#staffAvatarLinkInput").addEventListener("input", (event) => {
    setStaffAvatarValue(event.target.value);
  });

  $("#staffAvatarUseFile").addEventListener("click", () => {
    $("#staffAvatarFileInput").click();
  });

  $("#staffAvatarClear").addEventListener("click", () => {
    setStaffAvatarValue("");
    $("#staffAvatarFileInput").value = "";
  });

  $("#staffAvatarFileInput").addEventListener("change", async (event) => {
    const [file] = [...event.target.files];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast(localized({ es: "El avatar debe ser una imagen.", en: "Avatar must be an image.", pt: "O avatar deve ser uma imagem." }));
      event.target.value = "";
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      showToast(localized({ es: "El archivo supera 10 MB.", en: "File exceeds 10 MB.", pt: "O arquivo excede 10 MB." }));
      event.target.value = "";
      return;
    }
    try {
      const avatar = await resizeStaffAvatarFile(file);
      setStaffAvatarValue(avatar);
    } catch {
      showToast(localized({ es: "No se pudo cargar el avatar.", en: "Avatar could not be loaded.", pt: "Não foi possível carregar o avatar." }));
    }
    event.target.value = "";
  });

  $("#staffWeeklySchedule").addEventListener("click", (event) => {
    const control = event.target.closest("[data-select-staff-day]");
    if (!control) return;
    syncStaffWeeklyDraftFromPanel();
    selectedStaffScheduleDay = control.dataset.selectStaffDay;
    renderStaffWeeklySchedule();
  });

  $("#staffWeeklySchedule").addEventListener("change", (event) => {
    if (!event.target.closest(".staff-day-detail-panel")) return;
    syncStaffWeeklyDraftFromPanel();
    renderStaffWeeklySchedule();
  });

  $("#staffAdminForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const current = currentStaffMember();
    const selectedId = $("#staffIdInput").value;
    const existing = state.staff.find((member) => member.id === selectedId);
    if (!current || (!hasStaffPermission("manageStaff") && selectedId !== current.id)) return;
    const member = collectStaffFromForm(existing);
    const duplicateUsername = state.staff.some(
      (item) => item.id !== member.id && item.username.toLowerCase() === member.username.toLowerCase()
    );
    if (duplicateUsername) {
      showToast(localized({ es: "Ese usuario ya existe.", en: "That username already exists.", pt: "Esse usuário já existe." }));
      return;
    }
    const nextStaff = existing
      ? state.staff.map((item) => (item.id === member.id ? member : item))
      : [...state.staff, member];
    if (!nextStaff.some((item) => item.active && isManagementRole(item))) {
      showToast(
        localized({
          es: "Debe existir al menos un administrador activo.",
          en: "At least one active administrator is required.",
          pt: "É necessário manter pelo menos um administrador ativo.",
        })
      );
      return;
    }
    state.staff = nextStaff;
    saveStaff();
    renderStaffSelector();
    setupStaffAdmin(member.id);
    setupAppointmentAdmin();
    renderAppointmentCalendar();
    renderAppointmentSlots();
    showToast(localized({ es: "Usuario y horario guardados.", en: "User and schedule saved.", pt: "Usuário e horário salvos." }));
  });

  $("#deleteStaffMember").addEventListener("click", () => {
    if (!hasStaffPermission("manageStaff")) return;
    const id = $("#staffIdInput").value;
    if (!id || id === currentStaffMember()?.id) {
      showToast(localized({ es: "No puedes eliminar tu propia sesión.", en: "You cannot delete your own session.", pt: "Você não pode excluir sua própria sessão." }));
      return;
    }
    if (!window.confirm(localized({ es: "¿Eliminar este usuario?", en: "Delete this user?", pt: "Excluir este usuário?" }))) return;
    state.staff = state.staff.filter((member) => member.id !== id);
    saveStaff();
    renderStaffSelector();
    setupStaffAdmin();
    setupAppointmentAdmin();
  });

  ["#appointmentAdminStaffFilter", "#appointmentAdminDateFilter", "#appointmentAdminStatusFilter", "#appointmentAdminModeFilter"].forEach(
    (selector) => $(selector).addEventListener("change", renderAppointmentAdmin)
  );

  $("#appointmentAdminList").addEventListener("change", (event) => {
    const control = event.target.closest("[data-appointment-status]");
    if (control) updateAppointmentStatus(control.dataset.appointmentStatus, control.value);
  });

  $("#adminPropertySelect").addEventListener("change", (event) => {
    if (!hasStaffPermission("manageProperties")) return;
    const property = state.properties.find((item) => item.id === event.target.value);
    if (property) fillAdminForm(property);
  });

  $("#adminReservationProperty").addEventListener("change", (event) => {
    if (!hasStaffPermission("manageProperties")) return;
    syncAdminReservationViews(event.target.value);
  });

  $("#adminReservationCheckIn").addEventListener("change", () => {
    ensureAdminReservationDates();
  });

  $("#adminReservationSave").addEventListener("click", () => {
    if (!hasStaffPermission("manageProperties")) return;
    ensureAdminReservationDates();
    saveAdminReservation();
  });

  $("#adminReservationClear").addEventListener("click", () => {
    if (!hasStaffPermission("manageProperties")) return;
    clearAdminReservations();
  });

  $("#adminUploadLocal").addEventListener("click", () => {
    if (!hasStaffPermission("manageProperties")) return;
    $("#adminImageFileInput").click();
  });

  $("#adminImageFileInput").addEventListener("change", async (event) => {
    if (!hasStaffPermission("manageProperties")) return;
    const files = [...event.target.files].filter((file) => file.type.startsWith("image/") || file.type.startsWith("video/"));
    if (!files.length) return;
    const images = await Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      )
    );
    addAdminImages(images);
    event.target.value = "";
  });

  $("#adminUploadDrive").addEventListener("click", () => {
    if (!hasStaffPermission("manageProperties")) return;
    const url = window.prompt(
      localized({
        es: "Pega el enlace compartido de Drive (imagen o video).",
        en: "Paste the shared Drive link (image or video).",
        pt: "Cole o link compartilhado do Drive (imagem ou vídeo).",
      })
    );
    if (url) addAdminImages([url.trim()]);
  });

  $("#adminUploadLink").addEventListener("click", () => {
    if (!hasStaffPermission("manageProperties")) return;
    const url = window.prompt(
      localized({
        es: "Pega el enlace directo de la imagen o video.",
        en: "Paste the direct image or video link.",
        pt: "Cole o link direto da imagem ou vídeo.",
      })
    );
    if (url) addAdminImages([url.trim()]);
  });

  $("#newProperty").addEventListener("click", () => {
    if (!hasStaffPermission("manageProperties")) return;
    $("#adminForm").reset();
    $("#adminPropertySelect").value = "";
    setAdminImages([]);
    $("#adminTitleInput").focus();
  });

  $("#deleteProperty").addEventListener("click", () => {
    if (!hasStaffPermission("manageProperties")) return;
    const id = $("#adminPropertySelect").value;
    if (!id) return;
    const ok = window.confirm(localized({ es: "¿Eliminar esta propiedad?", en: "Delete this property?", pt: "Remover este imóvel?" }));
    if (!ok) return;
    state.properties = state.properties.filter((property) => property.id !== id);
    state.favorites.delete(id);
    saveProperties();
    saveFavorites();
    refreshAfterDataChange();
    showToast(localized({ es: "Propiedad eliminada.", en: "Property deleted.", pt: "Imóvel removido." }));
  });

  $("#adminForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!hasStaffPermission("manageProperties")) return;
    const selectedId = $("#adminPropertySelect").value;
    const existing = state.properties.find((property) => property.id === selectedId);
    const property = collectAdminProperty(existing);
    if (existing) {
      state.properties = state.properties.map((item) => (item.id === existing.id ? property : item));
    } else {
      state.properties.unshift(property);
    }
    saveProperties();
    refreshAfterDataChange(property.id);
    showToast(localized({ es: "Propiedad guardada.", en: "Property saved.", pt: "Imóvel salvo." }));
  });

  $("#resetDemo").addEventListener("click", () => {
    if (!hasStaffPermission("manageProperties")) return;
    const ok = window.confirm(localized({ es: "¿Restaurar propiedades demo?", en: "Reset demo properties?", pt: "Restaurar imóveis demo?" }));
    if (!ok) return;
    state.properties = structuredClone(BASE_PROPERTIES);
    saveProperties();
    refreshAfterDataChange();
    showToast(localized({ es: "Demo restaurada.", en: "Demo reset.", pt: "Demo restaurada." }));
  });

  $("#propertyModal").addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal]")) closeModal();

    const thumbnail = event.target.closest("[data-thumbnail]");
    if (thumbnail) {
      const index = Number(thumbnail.dataset.thumbnail);
      setModalImageByIndex(index);
    }
  });

  $("#propertyModal").addEventListener("submit", (event) => {
    const bookingForm = event.target.closest("[data-booking-form]");
    const paymentForm = event.target.closest("[data-payment-form]");
    if (bookingForm) {
      event.preventDefault();
      handleBookingSubmit(bookingForm);
    }
    if (paymentForm) {
      event.preventDefault();
      handlePaymentSubmit(paymentForm);
    }
  });

  $("#propertyModal").addEventListener("change", (event) => {
    const form = event.target.closest("[data-booking-form]");
    if (!form) return;
    if (event.target.name === "checkIn") {
      setBookingDateConstraints(form);
    }
  });

  $("#chatToggle").addEventListener("click", () => {
    $("#chatPanel").hidden = false;
    if (!$("#chatMessages").children.length) {
      addMessage(
        localized({
          es: "Hola. Pregúntame por propiedades, reservas, calculadoras o contacto.",
          en: "Hello. Ask me about properties, bookings, calculators, or contact.",
          pt: "Olá. Pergunte sobre imóveis, reservas, calculadoras ou contato.",
        })
      );
    }
    $("#chatInput").focus();
  });

  $("#chatClose").addEventListener("click", () => {
    $("#chatPanel").hidden = true;
  });

  $("#chatForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = $("#chatInput");
    const question = input.value.trim();
    if (!question) return;
    addMessage(question, "user");
    input.value = "";
    setTimeout(() => addMessage(getBotAnswer(question), "bot"), 180);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if ($$("[data-header-dropdown].is-open").length) closeHeaderMenus();
    else if (openAppointmentSelector) closeAppointmentSelectors();
    else if (!$("#shareModal").hidden) closeShareFallback();
    else if (!$("#propertyModal").hidden) closeModal();
    else if (!$("#staffLoginModal").hidden) closeStaffLogin();
  });
}

function refreshAfterDataChange(selectedId) {
  populateZoneOptions();
  renderProperties();
  renderReservationPreview();
  setupAdmin();
  if (selectedId) {
    populateAdminSelect(selectedId);
    populateAdminReservationSelect(selectedId);
    const property = state.properties.find((item) => item.id === selectedId);
    if (property) fillAdminForm(property);
    else syncAdminReservationViews();
  }
  updateFavoriteCount();
}

function init() {
  applyTheme();
  applyTranslations();
  initHeroSlideshow();
  loadAppointments();
  renderStaffSelector();
  renderAppointmentCalendar();
  renderAppointmentTimes();
  populateZoneOptions();
  bindEvents();
  updateFavoriteCount();
  renderProperties();
  renderReservationPreview();
  renderFinanceCalculators();
  setupFormattedNumericInputs();
  renderAutopaySchedule(
    $("#autopaySchedule"),
    parseNumericInput($("#autopayAmount").value),
    Number($("#autopayMonths").value),
    Number($("#autopayDay").value)
  );
  setupAdmin();
  handlePropertyRoute();
}

document.addEventListener("DOMContentLoaded", init);
