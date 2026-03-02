// ─────────────────────────────────────────────
//  DATA: Experiencia, certificados y aprendizaje
// ─────────────────────────────────────────────

export const experience = [
  {
    date:    { es: 'Enero 2026 — Presente',   en: 'January 2026 — Present'   },
    role:    { es: 'Auxiliar Administrativo', en: 'Administrative Assistant'  },
    company: 'Giser Corp — Alpayana',
    context: {
      es: 'Puesto administrativo que tomé para ganar experiencia laboral real. Aproveché el entorno para aplicar Python y Excel en la automatización de tareas repetitivas.',
      en: 'Administrative role taken to gain real work experience. Used the environment to apply Python and Excel for automating repetitive tasks.',
    },
    items: {
      es: [
        'Automatización de reportes recurrentes con Excel y fórmulas avanzadas',
        'Registro y actualización de información en bases de datos internas',
        'Diseño de formatos y documentos administrativos con herramientas ofimáticas',
        'Digitalización y gestión de documentación física y digital',
        'Atención y soporte administrativo a clientes y personal interno',
      ],
      en: [
        'Automation of recurring reports with Excel and advanced formulas',
        'Data entry and updates in internal databases',
        'Design of administrative formats and documents with office tools',
        'Digitalization and management of physical and digital documentation',
        'Administrative support for clients and internal staff',
      ],
    },
  },
  {
    date:    { es: 'Abril 2025 — Agosto 2025',              en: 'April 2025 — August 2025'       },
    role:    { es: 'Practicante de Ingeniería de Sistemas', en: 'Systems Engineering Intern'     },
    company: 'COTAS — Empresa de Telecomunicaciones',
    context: null,
    items: {
      es: [
        'Configuración y mantenimiento de routers y equipos de red en campo',
        'Supervisión activa de redes y detección temprana de caídas de conexión',
        'Documentación técnica de incidencias y procedimientos de red',
        'Gestión y actualización de contenido en el servicio IPTV empresarial',
      ],
      en: [
        'Configuration and maintenance of routers and network equipment in the field',
        'Active network monitoring and early detection of connection failures',
        'Technical documentation of incidents and network procedures',
        'IPTV content management and updates for business clients',
      ],
    },
  },
]

export const certificates = [
  {
    num:    '01',
    name:   { es: 'Programa para Emprender: Analiza Mercado', en: 'Entrepreneurship Program: Market Analysis' },
    issuer: { es: 'U. Continental — Growth Center', en: 'U. Continental — Growth Center' },
    date:   { es: '2023 · 32 horas', en: '2023 · 32 hours' },
    file:   '/cv/cert-emprender.pdf',
  },
  {
    num:    '02',
    name:   { es: 'Office Básico (20 horas)', en: 'Basic Office (20 hours)' },
    issuer: { es: 'Conecta Empleo — Telefónica Movistar', en: 'Conecta Empleo — Telefónica Movistar' },
    date:   { es: 'Enero 2024', en: 'January 2024' },
    file:   '/cv/cert-office.pdf',
  },
  {
    num:    '03',
    name:   { es: 'VI Congreso de IA en Manufactura y Servicios', en: 'VI AI Congress in Manufacturing & Services' },
    issuer: { es: 'Universidad Continental', en: 'Universidad Continental' },
    date:   { es: '2024 — Participante', en: '2024 — Participant' },
    file:   '/cv/cert-ia.pdf',
  },
  {
    num:    '04',
    name:   { es: 'VI Congreso Internacional: Smart Engineering 2025', en: 'VI International Congress: Smart Engineering 2025' },
    issuer: { es: 'Universidad Continental', en: 'Universidad Continental' },
    date:   { es: '2025 — Participante', en: '2025 — Participant' },
    file:   '/cv/cert-smart.pdf',
  },
  {
    num:    '05',
    name:   { es: 'Inducción y Orientación Básica (8 horas)', en: 'Basic Induction and Orientation (8 hours)' },
    issuer: { es: 'Alpayana S.A.', en: 'Alpayana S.A.' },
    date:   { es: 'Enero 2026', en: 'January 2026' },
    file:   '/cv/cert-alpayana.pdf',
  },
]

export const learning = [
  {
    abbr:   'Rx',
    name:   'React',
    desc: {
      es: 'Lo estoy aplicando directamente en este portafolio — componentes, hooks, Context API y arquitectura de proyecto real.',
      en: 'Applying it directly in this portfolio — components, hooks, Context API and real project architecture.',
    },
    badge:  { es: 'En uso activo', en: 'Actively using' },
    proof: {
      es: 'Evidencia: el código de este portafolio',
      en: 'Evidence: this portfolio\'s source code',
    },
    link:   'https://github.com/Andre121314115',
  },
  {
    abbr:   'DL',
    name:   'Deep Learning',
    desc: {
      es: 'Continuación natural de DesInfo — explorando redes neuronales con TensorFlow para mejorar la precisión del modelo de detección de noticias falsas.',
      en: 'Natural continuation of DesInfo — exploring neural networks with TensorFlow to improve the fake news detection model accuracy.',
    },
    badge:  { es: 'En progreso', en: 'In progress' },
    proof: {
      es: 'Aplicado en: DesinfoAppV4.0',
      en: 'Applied in: DesinfoAppV4.0',
    },
    link:   'https://github.com/Andre121314115/DesinfoAppV4.0',
  },
]
