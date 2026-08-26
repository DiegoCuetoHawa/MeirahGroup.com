const STORAGE = {
  properties: "meiragroup.properties",
  favorites: "meiragroup.favorites",
  leads: "meiragroup.leads",
  reservations: "meiragroup.reservations",
  lang: "meiragroup.lang",
  currency: "meiragroup.currency",
  theme: "meiragroup.theme",
  members: "meiragroup.members",
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
const BUSINESS_NAME = "MeriahGroup";
const BUSINESS_PHONE_DISPLAY = "+1 (829) 990-5951";
const BUSINESS_WHATSAPP = "18299905951";
const VIDEO_SOURCE_PATTERN = /\.(mp4|webm|ogg|mov|m4v)(?:$|[?#])/i;
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
    type: "Solar",
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
    navMap: "Mapa",
    navFinancing: "Calculadoras",
    navAbout: "Sobre nosotros",
    navOwners: "Vende/Alquila",
    navContact: "Contacto",
    heroEyebrow: "Jarabacoa como base, República Dominicana como alcance",
    heroCopy:
      "Casas, villas, solares y propiedades de inversión con asesoría cercana, procesos claros y seguimiento real desde el primer mensaje hasta la entrega de llaves.",
    heroPrimary: "Explorar propiedades",
    heroSecondary: "Quiero asesoría",
    statProperties: "propiedades curadas",
    statFollow: "asesoría activa",
    statLang: "idiomas disponibles",
    statReviews: "referencias verificadas",
    filtersEyebrow: "Búsqueda inteligente",
    filtersTitle: "Encuentra una propiedad que encaje con tu próximo paso",
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
    optionRent: "Alquiler",
    optionNight: "Alquiler x noche",
    optionAny: "Cualquiera",
    typeHouse: "Casa",
    typeApartment: "Apartamento",
    typeLand: "Solar",
    propertiesEyebrow: "Inventario destacado",
    propertiesTitle: "Propiedades disponibles",
    sortLabel: "Ordenar",
    sortFeatured: "Destacadas",
    sortPriceAsc: "Precio menor",
    sortPriceDesc: "Precio mayor",
    sortArea: "Más m²",
    favoritesButton: "Favoritos",
    mapEyebrow: "Ubicación y entorno",
    mapTitle: "Mapa interactivo con distancias a puntos vitales",
    financeEyebrow: "Compra con claridad",
    financeTitle: "Calculadoras financieras para decidir mejor",
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
    reservationTitle: "Reservas tipo villa o Airbnb con confirmación rápida",
    reservationCopy:
      "Las propiedades de alquiler muestran tarifa por noche, disponibilidad de referencia, cálculo de cargos y envío directo al equipo para cerrar por WhatsApp o llamada.",
    aboutEyebrow: "Nuestra historia",
    aboutTitle: "Una firma cercana para decisiones grandes",
    aboutTextOne:
      "MeriahGroup nace en Jarabacoa con una idea simple: que comprar, vender o reservar una propiedad no se sienta como entrar a ciegas. Combinamos conocimiento local, criterio comercial y una comunicación clara.",
    aboutTextTwo:
      "Detrás de la compañía hay un equipo que conoce el ritmo de la zona, el valor de una buena ubicación y la importancia de cuidar cada documento antes de firmar.",
    valueOne: "Transparencia",
    valueTwo: "Acompañamiento",
    valueThree: "Visión de inversión",
    reviewsEyebrow: "Referencias",
    reviewsTitle: "Clientes que ya dieron el paso",
    reviewOne: "El equipo nos ayudó a comparar zonas, negociar y entender los costos reales antes de firmar.",
    reviewTwo: "Reservamos una villa para un fin de semana familiar. Todo fue rápido, claro y sin sorpresas.",
    reviewThree: "Vivo fuera del país y necesitaba alguien que respondiera con precisión. MeriahGroup lo hizo fácil.",
    ownersEyebrow: "Para propietarios",
    ownersTitle: "Vendemos o alquilamos tu propiedad como tu agente inmobiliario",
    ownersCopy:
      "Si tienes una casa, villa, apartamento, solar, finca o local, MeriahGroup puede representarte con estrategia de precio, fotos, promoción, filtros de clientes, visitas, negociación y seguimiento hasta el cierre.",
    ownersPrimary: "Quiero vender o alquilar",
    ownersWhatsApp: "Evaluar por WhatsApp",
    ownersSaleTitle: "Representación para venta",
    ownersSaleCopy: "Análisis de precio, publicación, prospectos calificados, visitas y negociación.",
    ownersRentTitle: "Gestión para alquiler",
    ownersRentCopy: "Promoción para alquiler fijo o turístico, reservas, disponibilidad y perfilado de clientes.",
    ownersLandTitle: "Solares y terrenos",
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
    leadName: "Nombre",
    leadPhone: "Teléfono o WhatsApp",
    leadInterest: "Interés",
    leadBuy: "Comprar",
    leadRent: "Alquilar",
    leadSell: "Vender mi propiedad",
    leadInvest: "Invertir",
    leadMessage: "Mensaje",
    leadConsent: "Acepto que MeriahGroup me contacte sobre mi solicitud.",
    leadSend: "Enviar solicitud",
    adminEyebrow: "Modo interno",
    adminTitle: "Administrar propiedades",
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
    adminArea: "m²",
    adminZone: "Zona",
    adminImages: "Imágenes y videos de la propiedad",
    adminUploadLocal: "Cargar",
    adminUploadDrive: "Subir",
    adminUploadLink: "Enlace",
    adminDesc: "Descripción",
    saveProperty: "Guardar propiedad",
    adminInsights: "Pendientes recomendados",
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
    aiAdvisory: "Asesoría 24/7 con IA para preguntas rápidas sobre propiedades.",
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
    navMap: "Map",
    navFinancing: "Calculators",
    navAbout: "About",
    navOwners: "Sell/Rent",
    navContact: "Contact",
    heroEyebrow: "Based in Jarabacoa, serving the Dominican Republic",
    heroCopy:
      "Homes, villas, land, and investment properties with clear guidance, clean processes, and real follow-up from the first message to key handoff.",
    heroPrimary: "Explore properties",
    heroSecondary: "Get guidance",
    statProperties: "curated properties",
    statFollow: "active advisory",
    statLang: "ES/EN/PT service",
    statReviews: "verified references",
    filtersEyebrow: "Smart search",
    filtersTitle: "Find a property that fits your next move",
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
    optionRent: "Rental",
    optionNight: "Nightly rental",
    optionAny: "Any",
    typeHouse: "House",
    typeApartment: "Apartment",
    typeLand: "Land",
    propertiesEyebrow: "Featured inventory",
    propertiesTitle: "Available properties",
    sortLabel: "Sort",
    sortFeatured: "Featured",
    sortPriceAsc: "Lowest price",
    sortPriceDesc: "Highest price",
    sortArea: "Most sqm",
    favoritesButton: "Favorites",
    mapEyebrow: "Location and surroundings",
    mapTitle: "Interactive map with distances to essential places",
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
    reservationTitle: "Villa and Airbnb-style bookings with quick confirmation",
    reservationCopy:
      "Rental properties show nightly rates, reference availability, charge estimates, and direct handoff to the team by WhatsApp or phone.",
    aboutEyebrow: "Our story",
    aboutTitle: "A close firm for big decisions",
    aboutTextOne:
      "MeriahGroup was born in Jarabacoa with a simple idea: buying, selling, or booking a property should not feel blind. We combine local knowledge, commercial judgment, and clear communication.",
    aboutTextTwo:
      "Behind the company is a team that understands the area's pace, the value of a good location, and the importance of checking every document before signing.",
    valueOne: "Transparency",
    valueTwo: "Guidance",
    valueThree: "Investment vision",
    reviewsEyebrow: "References",
    reviewsTitle: "Clients who already moved forward",
    reviewOne: "The team helped us compare areas, negotiate, and understand real costs before signing.",
    reviewTwo: "We booked a villa for a family weekend. Everything was fast, clear, and without surprises.",
    reviewThree: "I live abroad and needed precise answers. MeriahGroup made it easy.",
    ownersEyebrow: "For owners",
    ownersTitle: "We sell or rent your property as your real estate agent",
    ownersCopy:
      "If you own a house, villa, apartment, lot, farm, or commercial space, MeriahGroup can represent you with pricing strategy, photos, promotion, client filtering, showings, negotiation, and closing follow-up.",
    ownersPrimary: "I want to sell or rent",
    ownersWhatsApp: "Evaluate by WhatsApp",
    ownersSaleTitle: "Sales representation",
    ownersSaleCopy: "Price analysis, listing, qualified prospects, showings, and negotiation.",
    ownersRentTitle: "Rental management",
    ownersRentCopy: "Promotion for long-term or tourism rental, bookings, availability, and client filtering.",
    ownersLandTitle: "Lots and land",
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
    leadName: "Name",
    leadPhone: "Phone or WhatsApp",
    leadInterest: "Interest",
    leadBuy: "Buy",
    leadRent: "Rent",
    leadSell: "Sell my property",
    leadInvest: "Invest",
    leadMessage: "Message",
    leadConsent: "I agree that MeriahGroup may contact me about my request.",
    leadSend: "Send request",
    adminEyebrow: "Internal mode",
    adminTitle: "Manage properties",
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
    adminArea: "sqm",
    adminZone: "Area",
    adminImages: "Property images and videos",
    adminUploadLocal: "Load",
    adminUploadDrive: "Upload",
    adminUploadLink: "Link",
    adminDesc: "Description",
    saveProperty: "Save property",
    adminInsights: "Recommended next steps",
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
    aiAdvisory: "24/7 AI guidance for quick questions about properties.",
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
  navMap: "Mapa",
  navFinancing: "Calculadoras",
  navAbout: "Sobre nós",
  navOwners: "Venda/Alugue",
  navContact: "Contato",
  heroEyebrow: "Jarabacoa como base, República Dominicana como alcance",
  heroCopy:
    "Casas, villas, terrenos e propriedades de investimento com assessoria próxima, processos claros e acompanhamento real desde a primeira mensagem até a entrega das chaves.",
  heroPrimary: "Explorar imóveis",
  heroSecondary: "Quero assessoria",
  statProperties: "imóveis selecionados",
  statFollow: "assessoria ativa",
  statLang: "atendimento ES/EN/PT",
  filtersEyebrow: "Busca inteligente",
  filtersTitle: "Encontre um imóvel que combine com seu próximo passo",
  filterOperation: "Operação",
  filterType: "Tipo",
  filterZone: "Zona",
  filterBeds: "Quartos",
  filterApply: "Filtrar",
  filterClear: "Limpar",
  optionSale: "Venda",
  optionRent: "Aluguel",
  optionNight: "Aluguel por noite",
  typeHouse: "Casa",
  typeApartment: "Apartamento",
  typeLand: "Terreno",
  propertiesEyebrow: "Inventário em destaque",
  propertiesTitle: "Imóveis disponíveis",
  mapTitle: "Mapa interativo com distâncias a pontos essenciais",
  financeEyebrow: "Compre com clareza",
  financeTitle: "Calculadoras financeiras para decidir melhor",
  mortgageTitle: "Calculadora hipotecária",
  mortgageCardCopy: "Calcule o pagamento mensal da hipoteca.",
  affordabilityTitle: "Calculadora de acessibilidade",
  affordabilityCardCopy: "Calcule o preço de casa que você pode pagar.",
  rentBuyTitle: "Alugar vs. comprar",
  rentBuyCardCopy: "Estime quando faz sentido comprar ou alugar.",
  calculate: "Calcular",
  reservationTitle: "Reservas tipo villa ou Airbnb com confirmação rápida",
  reservationCopy:
    "As propriedades de aluguel mostram tarifa por noite, disponibilidade de referência, cálculo de encargos e envio direto à equipe para fechar por WhatsApp ou chamada.",
  aboutEyebrow: "Nossa história",
  aboutTitle: "Uma empresa próxima para grandes decisões",
  ownersEyebrow: "Para proprietários",
  ownersTitle: "Vendemos ou alugamos seu imóvel como seu agente imobiliário",
  ownersPrimary: "Quero vender ou alugar",
  ownersWhatsApp: "Avaliar por WhatsApp",
  blogEyebrow: "Blog e notícias",
  blogTitle: "Guias para comprar melhor",
  contactTitle: "Conte-nos o que você procura e entraremos em contato",
  leadName: "Nome",
  leadPhone: "Telefone ou WhatsApp",
  leadInterest: "Interesse",
  leadBuy: "Comprar",
  leadRent: "Alugar",
  leadSell: "Vender meu imóvel",
  leadInvest: "Investir",
  leadMessage: "Mensagem",
  leadSend: "Enviar solicitação",
  adminTitle: "Administrar imóveis",
  adminImages: "Imagens e vídeos do imóvel",
  adminUploadLocal: "Carregar",
  adminUploadDrive: "Subir",
  adminUploadLink: "Link",
  footerTag: "Compra, venda e aluguel de imóveis",
  footerFinancing: "Calculadoras",
  footerReservations: "Reservas",
  footerOwners: "Venda ou alugue conosco",
  chatStatus: "Responde com dados do negócio",
  chatPlaceholder: "Escreva sua pergunta",
  results: "imóveis encontrados",
  noResults: "Não encontramos imóveis com esses filtros.",
  viewDetails: "Ver detalhes",
  reserve: "Reservar",
  ask: "Consultar",
  beds: "quartos",
  baths: "banheiros",
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
  aiAdvisory: "Assessoria 24/7 com IA para perguntas rápidas sobre imóveis.",
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
  favorites: new Set(JSON.parse(localStorage.getItem(STORAGE.favorites) || "[]")),
  showFavorites: false,
  activeMapId: null,
};

const propertyGalleryTimers = new Map();
let modalGalleryTimer = null;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function loadProperties() {
  const saved = localStorage.getItem(STORAGE.properties);
  if (!saved) return normalizeProperties(structuredClone(BASE_PROPERTIES));

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length
      ? normalizeProperties(parsed)
      : normalizeProperties(structuredClone(BASE_PROPERTIES));
  } catch {
    return normalizeProperties(structuredClone(BASE_PROPERTIES));
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

function normalizeProperties(list) {
  return list.map((property) => {
    const normalizedMedia = (Array.isArray(property.images) ? property.images : [])
      .map(normalizeMediaItem)
      .filter(Boolean)
      .map((item) => item.src);
    const normalized = {
      ...property,
      title: repairMojibakeText(property.title),
      titleEn: repairMojibakeText(property.titleEn),
      type: repairMojibakeText(property.type),
      zone: repairMojibakeText(property.zone),
      description: repairMojibakeText(property.description),
      descriptionEn: repairMojibakeText(property.descriptionEn),
      images: normalizedMedia.length ? normalizedMedia : [DEFAULT_IMAGE],
    };
    if (normalized.id === "villa-riverstone") {
      normalized.images = RIVERSTONE_IMAGES;
    }
    return normalized;
  });
}

function saveProperties() {
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

function formatSpecValue(value) {
  const number = Number(value) || 0;
  return Number.isInteger(number) ? formatNumber(number, 0) : formatNumber(number, 1);
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
  if (state.lang === "en") {
    return {
    Casa: "House",
    Apartamento: "Apartment",
    Solar: "Land",
    Villa: "Villa",
    }[type] || type;
  }
  if (state.lang === "pt") {
    return {
      Casa: "Casa",
      Apartamento: "Apartamento",
      Solar: "Terreno",
      Villa: "Villa",
    }[type] || type;
  }
  return type;
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
  $("#languageToggle").textContent = state.lang.toUpperCase();
  $("#languageToggle").setAttribute("aria-label", `${text("brandTag")} - ES, EN, PT`);
  $("#chatInput").placeholder = text("chatPlaceholder");
  applyCurrencyLabels();
  if (window.lucide) window.lucide.createIcons();
}

function applyCurrencyLabels() {
  $("#currencySelect").value = state.currency;
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

function applyTheme() {
  document.body.dataset.theme = state.theme;
  const themeToggle = $("#themeToggle");
  if (!themeToggle) return;
  themeToggle.innerHTML = state.theme === "dark" ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
  themeToggle.setAttribute("aria-label", state.theme === "dark" ? "Modo claro" : "Modo oscuro");
  if (window.lucide) window.lucide.createIcons();
}

function initHeroSlideshow() {
  const heroMedia = $(".hero-media");
  if (!heroMedia || HERO_IMAGES.length < 2) return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
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
  }, 7600);
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
        <p class="property-zone">${escapeHtml(property.zone)} · ${escapeHtml(typeLabel(property.type))}</p>
        <p class="property-price"><strong>${price}</strong></p>
        <div class="property-specs">
          <span>${formatSpecValue(property.beds)} ${text("beds")}</span>
          <span>${formatSpecValue(property.baths)} ${text("baths")}</span>
          <span>${formatSpecValue(property.area)} ${text("area")}</span>
        </div>
        <p>${escapeHtml(getDescription(property))}</p>
        <div class="property-actions">
          <button class="button button-primary" type="button" data-open-property="${property.id}">
            <i data-lucide="home"></i><span>${text("viewDetails")}</span>
          </button>
          ${rentButton}
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

function renderMap() {
  const canvas = $("#mapCanvas");
  $$(".map-pin", canvas).forEach((pin) => pin.remove());
  const active = state.activeMapId || state.properties[0]?.id;
  state.activeMapId = active;

  state.properties.forEach((property, index) => {
    const pin = document.createElement("button");
    pin.className = `map-pin ${property.id === active ? "active" : ""}`;
    pin.type = "button";
    pin.dataset.mapId = property.id;
    pin.style.left = `${property.coords?.x || 45}%`;
    pin.style.top = `${property.coords?.y || 45}%`;
    pin.innerHTML = `<span>${index + 1}</span>`;
    pin.setAttribute("aria-label", getTitle(property));
    canvas.appendChild(pin);
  });

  renderMapPanel(state.properties.find((property) => property.id === active) || state.properties[0]);
}

function renderMapPanel(property) {
  if (!property) return;
  const price = property.operations.includes("sale") && property.price
    ? formatCurrency(property.price)
    : formatCurrency(property.rentNight);
  $("#mapPanel").innerHTML = `
    <h3>${escapeHtml(getTitle(property))}</h3>
    <p>${escapeHtml(property.zone)} · ${escapeHtml(typeLabel(property.type))}</p>
    <p><strong>${price}</strong></p>
    <ul class="distance-list">
      ${Object.entries(property.distances || {})
        .map(([name, distance]) => `<li><span>${escapeHtml(name)}</span><strong>${escapeHtml(distance)}</strong></li>`)
        .join("")}
    </ul>
    <button class="button button-primary" type="button" data-open-property="${property.id}">
      <i data-lucide="home"></i><span>${text("viewDetails")}</span>
    </button>
  `;
  if (window.lucide) window.lucide.createIcons();
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
  const price = Number($("#homePrice").value) || 0;
  const down = Number($("#downPayment").value) || 0;
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
  const balance = Number($("#currentBalance").value) || 0;
  const currentRate = Number($("#currentRate").value) || 0;
  const newRate = Number($("#newRate").value) || 0;
  const years = Number($("#remainingYears").value) || 1;
  const closingCosts = Number($("#closingCosts").value) || 0;
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
  const income = Number($("#monthlyIncome").value) || 0;
  const debt = Number($("#monthlyDebt").value) || 0;
  const down = Number($("#affordDown").value) || 0;
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
  const rent = Number($("#monthlyRent").value) || 0;
  const price = Number($("#compareHomePrice").value) || 0;
  const down = Number($("#compareDownPayment").value) || 0;
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

function openPropertyModal(propertyId, focusBooking = false) {
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
        <p class="property-zone">${escapeHtml(property.zone)} · ${escapeHtml(typeLabel(property.type))}</p>
        <p class="property-price"><strong>${price}</strong></p>
        <div class="property-specs">
          <span>${formatSpecValue(property.beds)} ${text("beds")}</span>
          <span>${formatSpecValue(property.baths)} ${text("baths")}</span>
          <span>${formatSpecValue(property.area)} ${text("area")}</span>
        </div>
        <p>${escapeHtml(getDescription(property))}</p>
        <div class="modal-tools">
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
  bindModalImageFallback();
  startModalGalleryRotation(mediaItems);
  $$("[data-booking-form]", $("#propertyModal")).forEach((form) => renderBookingAvailability(form));
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

function isRangeBlocked(propertyId, checkIn, checkOut) {
  const ranges = getReservationRanges(propertyId);
  return ranges.some((range) => checkIn < range.end && checkOut > range.start);
}

function renderBookingAvailability(form) {
  const availability = $("[data-booking-availability]", form);
  if (!availability) return;

  const checkIn = parseDateOnly($("input[name='checkIn']", form)?.value);
  const checkOut = parseDateOnly($("input[name='checkOut']", form)?.value);
  const ranges = getReservationRanges(form.dataset.bookingForm);
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const days = [];
  for (let offset = 0; offset < 45; offset += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + offset);
    const isReserved = ranges.some((range) => date >= range.start && date < range.end);
    const isSelected = checkIn && checkOut && date >= checkIn && date < checkOut;
    days.push(`
      <span class="availability-day ${isReserved ? "reserved" : "free"} ${isSelected ? "selected" : ""}">
        <strong>${date.getDate()}</strong>
        <small>${new Intl.DateTimeFormat(state.lang === "en" ? "en-US" : state.lang === "pt" ? "pt-BR" : "es-DO", { month: "short" }).format(date)}</small>
      </span>
    `);
  }

  availability.innerHTML = `
    <div class="availability-head">
      <strong>${text("reservedDates")}</strong>
      <small>${text("availabilityHint")}</small>
    </div>
    <div class="availability-grid">${days.join("")}</div>
  `;
}

function renderBookingTool(property) {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const next = new Date();
  next.setDate(today.getDate() + 3);
  const minDate = formatDateInput(today);
  const checkInDate = formatDateInput(tomorrow);
  const checkOutDate = formatDateInput(next);

  return `
    <form class="booking-tool" data-booking-tool data-booking-form="${property.id}">
      <h3>${text("modalBooking")}</h3>
      <div class="mini-form-grid">
        <label><span>${text("checkIn")}</span><input name="checkIn" type="date" min="${minDate}" value="${checkInDate}" /></label>
        <label><span>${text("checkOut")}</span><input name="checkOut" type="date" min="${minDate}" value="${checkOutDate}" /></label>
        <label><span>${text("guests")}</span><input name="guests" type="number" min="1" value="4" /></label>
        <label><span>${text("leadPhone")}</span><input name="phone" type="tel" placeholder="+1 829 000 0000" /></label>
      </div>
      <label><span>${text("additionalComments")}</span><textarea name="comments" rows="3" placeholder="..."></textarea></label>
      <div class="availability-panel" data-booking-availability></div>
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
      <label><span>${text("additionalComments")}</span><textarea name="comments" rows="3" placeholder="..."></textarea></label>
      <button class="button button-primary" type="submit">
        <i data-lucide="credit-card"></i><span>${text("generate")}</span>
      </button>
      <div class="payment-schedule" data-payment-output></div>
    </form>
  `;
}

function closeModal() {
  stopModalGalleryRotation();
  $$("video", $("#propertyModal")).forEach((video) => video.pause());
  $("#propertyModal").hidden = true;
  document.body.classList.remove("modal-open");
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

  if (isRangeBlocked(property.id, checkIn, checkOut)) {
    showToast(text("availabilityConflict"));
    renderBookingAvailability(form);
    return;
  }

  const guests = Number(data.get("guests")) || 1;
  const nights = Math.max(Math.round((checkOut - checkIn) / 86400000), 1);
  const subtotal = nights * property.rentNight;
  const cleaning = 55;
  const service = subtotal * 0.08;
  const deposit = subtotal * 0.2;
  const total = subtotal + cleaning + service + deposit;

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
    <div class="schedule-row"><span>${
      state.lang === "en" ? "Service" : state.lang === "pt" ? "Serviço" : "Servicio"
    }</span><strong>${formatCurrency(
    service
  )}</strong></div>
    <div class="schedule-row"><span>${
      state.lang === "en" ? "Deposit" : state.lang === "pt" ? "Depósito" : "Depósito"
    }</span><strong>${formatCurrency(
    deposit
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
  renderBookingAvailability(form);
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
  populateAdminSelect();
  const first = state.properties[0];
  if (first) fillAdminForm(first);
}

function populateAdminSelect(selectedId) {
  const select = $("#adminPropertySelect");
  select.innerHTML = state.properties
    .map((property) => `<option value="${property.id}">${escapeHtml(getTitle(property))}</option>`)
    .join("");
  if (selectedId) select.value = selectedId;
}

function fillAdminForm(property) {
  $("#adminPropertySelect").value = property.id;
  $("#adminTitleInput").value = property.title;
  $("#adminTypeInput").value = property.type;
  $("#adminOperationInput").value = property.nightOnly ? "rent-night" : property.operations.join(",");
  $("#adminStatusInput").value = property.status;
  $("#adminPriceInput").value = property.price || "";
  $("#adminNightInput").value = property.rentNight || "";
  $("#adminBedsInput").value = property.beds;
  $("#adminBathsInput").value = property.baths;
  $("#adminAreaInput").value = property.area;
  $("#adminZoneInput").value = property.zone;
  $("#adminImagesInput").value = (property.images || []).join(", ");
  renderAdminImageList();
  $("#adminDescInput").value = property.description;
}

function collectAdminProperty(existing) {
  const title = $("#adminTitleInput").value.trim() || "Nueva propiedad";
  const rawOperation = $("#adminOperationInput").value.trim();
  const operations = rawOperation === "rent-night"
    ? ["rent"]
    : rawOperation.split(",").map((item) => item.trim()).filter(Boolean);
  return {
    id: existing?.id || `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now()}`,
    title,
    titleEn: existing?.titleEn || title,
    type: $("#adminTypeInput").value,
    operations,
    status: rawOperation === "rent-night" ? "rent" : $("#adminStatusInput").value,
    zone: $("#adminZoneInput").value.trim() || "Jarabacoa",
    price: Number($("#adminPriceInput").value) || 0,
    rentNight: Number($("#adminNightInput").value) || 0,
    beds: Number($("#adminBedsInput").value) || 0,
    baths: Number($("#adminBathsInput").value) || 0,
    area: Number($("#adminAreaInput").value) || 0,
    lot: existing?.lot || Number($("#adminAreaInput").value) || 0,
    featured: existing?.featured ?? false,
    coords: existing?.coords || { x: 42 + Math.random() * 16, y: 38 + Math.random() * 24 },
    distances: existing?.distances || {
      Supermercado: "8 min",
      Banco: "10 min",
      Clinica: "12 min",
      Parque: "9 min",
    },
    description: $("#adminDescInput").value.trim() || "Propiedad agregada al inventario de MeriahGroup.",
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
      es: "Hola. Soy MeriahBot. Puedo ayudarte con propiedades, reservas, calculadoras, ubicación y contacto.",
      en: "Hello. I am MeriahBot. I can help with properties, bookings, calculators, location, and contact.",
      pt: "Olá. Sou o MeriahBot. Posso ajudar com imóveis, reservas, calculadoras, localização e contato.",
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
  populateZoneOptions();
  renderProperties();
  renderMap();
  renderReservationPreview();
  setupAdmin();
  renderFinanceCalculators();
  renderAutopaySchedule(
    $("#autopaySchedule"),
    Number($("#autopayAmount").value),
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
  renderMap();
  renderReservationPreview();
  renderFinanceCalculators();
  renderAutopaySchedule(
    $("#autopaySchedule"),
    Number($("#autopayAmount").value),
    Number($("#autopayMonths").value),
    Number($("#autopayDay").value)
  );

  const modal = $("#propertyModal");
  if (modal && !modal.hidden && modal.dataset.propertyId) {
    openPropertyModal(modal.dataset.propertyId);
  }
}

function bindEvents() {
  $("#languageToggle").addEventListener("click", () => {
    const nextIndex = (LANGUAGES.indexOf(state.lang) + 1) % LANGUAGES.length;
    state.lang = LANGUAGES[nextIndex];
    localStorage.setItem(STORAGE.lang, state.lang);
    refreshLocalizedViews();
  });

  $("#currencySelect").addEventListener("change", (event) => {
    state.currency = CURRENCIES.includes(event.target.value) ? event.target.value : "USD";
    localStorage.setItem(STORAGE.currency, state.currency);
    refreshPriceViews();
  });

  $("#themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE.theme, state.theme);
    applyTheme();
  });

  $(".brand").addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      openPropertyModal(opener.dataset.openProperty, opener.dataset.focusBooking === "true");
      return;
    }

    const mapPin = event.target.closest("[data-map-id]");
    if (mapPin) {
      state.activeMapId = mapPin.dataset.mapId;
      renderMap();
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
    const amount = Number($("#autopayAmount").value) || 0;
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
      const target = button.dataset.calculator;
      $$("[data-calculator]").forEach((item) => item.classList.toggle("active", item === button));
      $$("[data-calculator-panel]").forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.calculatorPanel === target);
      });
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
    if ($("#adminPanel").hidden) {
      const pin = window.prompt(localized({ es: "PIN demo de admin", en: "Demo admin PIN", pt: "PIN demo de admin" }));
      if (pin !== "1025") {
        showToast(localized({ es: "PIN incorrecto.", en: "Incorrect PIN.", pt: "PIN incorreto." }));
        return;
      }
      $("#adminPanel").hidden = false;
      setupAdmin();
      $("#adminPanel").scrollIntoView({ behavior: "smooth" });
    } else {
      $("#adminPanel").hidden = true;
    }
  });

  $("#adminPropertySelect").addEventListener("change", (event) => {
    const property = state.properties.find((item) => item.id === event.target.value);
    if (property) fillAdminForm(property);
  });

  $("#adminUploadLocal").addEventListener("click", () => {
    $("#adminImageFileInput").click();
  });

  $("#adminImageFileInput").addEventListener("change", async (event) => {
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
    $("#adminForm").reset();
    $("#adminPropertySelect").value = "";
    setAdminImages([]);
    $("#adminTitleInput").focus();
  });

  $("#deleteProperty").addEventListener("click", () => {
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

  $("#propertyModal").addEventListener("change", (event) => {
    const form = event.target.closest("form");
    if (!form) return;
    const checkInInput = $("input[name='checkIn']", form);
    const checkOutInput = $("input[name='checkOut']", form);
    const changedDateInput = event.target.closest("input[name='checkIn'], input[name='checkOut']");
    if (!changedDateInput || !checkInInput || !checkOutInput) return;
    checkOutInput.min = checkInInput.value;
    if (checkOutInput.value && checkOutInput.value <= checkInInput.value) {
      const nextDay = new Date(checkInInput.value);
      nextDay.setDate(nextDay.getDate() + 1);
      checkOutInput.value = formatDateInput(nextDay);
    }
    renderBookingAvailability(form);
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
    if (event.key === "Escape" && !$("#propertyModal").hidden) closeModal();
  });
}

function refreshAfterDataChange(selectedId) {
  populateZoneOptions();
  renderProperties();
  renderMap();
  renderReservationPreview();
  setupAdmin();
  if (selectedId) populateAdminSelect(selectedId);
  updateFavoriteCount();
}

function init() {
  applyTheme();
  applyTranslations();
  initHeroSlideshow();
  populateZoneOptions();
  bindEvents();
  updateFavoriteCount();
  renderProperties();
  renderMap();
  renderReservationPreview();
  renderFinanceCalculators();
  renderAutopaySchedule($("#autopaySchedule"), Number($("#autopayAmount").value), Number($("#autopayMonths").value), Number($("#autopayDay").value));
  setupAdmin();
}

document.addEventListener("DOMContentLoaded", init);
