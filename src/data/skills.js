// ─────────────────────────────────────────────
//  DATA: Habilidades y lenguajes
// ─────────────────────────────────────────────

export const skills = [
  {
    symbol:   '</> ',
    variant:  'green',
    category: { es: 'Frontend',        en: 'Frontend'       },
    name:     { es: 'Desarrollo Web',  en: 'Web Dev'        },
    desc:     { es: 'Maquetación, estilos y lógica en el navegador', en: 'Markup, styling and browser-side logic' },
    tags:     ['HTML', 'CSS', 'JavaScript'],
    tagColor: 'green',
  },
  {
    symbol:   '{ }',
    variant:  'purple',
    category: { es: 'Backend',             en: 'Backend'          },
    name:     { es: 'Lógica & Servidores', en: 'Logic & Servers'  },
    desc:     { es: 'APIs, lógica de negocio y bases de datos', en: 'APIs, business logic and databases' },
    tags:     ['Java', 'Spring', 'PHP', 'Firebase'],
    tagColor: 'purple',
  },
  {
    symbol:   '[ ]',
    variant:  'purple',
    category: { es: 'Datos & ML',       en: 'Data & ML'     },
    name:     { es: 'Análisis de Datos', en: 'Data Analysis' },
    desc:     { es: 'Procesamiento, análisis y modelos predictivos', en: 'Processing, analysis and predictive models' },
    tags:     ['Python', 'SQL', 'Pandas', 'ML'],
    tagColor: 'purple',
  },
  {
    symbol:   ':::',
    variant:  'orange',
    category: { es: 'Mobile',       en: 'Mobile'      },
    name:     { es: 'Apps Móviles', en: 'Mobile Apps' },
    desc:     { es: 'Interfaces nativas multiplataforma', en: 'Cross-platform native interfaces' },
    tags:     ['Flutter', 'Dart'],
    tagColor: 'orange',
  },
  {
    symbol:   '$_',
    variant:  'orange',
    category: { es: 'DevOps & Redes',  en: 'DevOps & Networks' },
    name:     { es: 'Control & Redes', en: 'Control & Networks' },
    desc:     { es: 'Versiones, redes y mantenimiento de hardware', en: 'Versioning, networking and hardware maintenance' },
    tags:     ['Git', 'GitHub', 'C++', 'Redes'],
    tagColor: 'orange',
  },
  {
    symbol:   '##',
    variant:  'green',
    category: { es: 'Herramientas', en: 'Tools'        },
    name:     { es: 'IA & Ofimática', en: 'AI & Office' },
    desc:     { es: 'Productividad, reportes técnicos e IA aplicada', en: 'Productivity, technical reports and applied AI' },
    tags:     ['MS Office', 'Excel avanzado', 'IA aplicada'],
    tagColor: 'green',
  },
]

export const languages = [
  {
    code:  'ES',
    name:  { es: 'Español', en: 'Spanish' },
    level: { es: 'Nativo — C2', en: 'Native — C2' },
    dots:  5,
    half:  false,
  },
  {
    code:  'EN',
    name:  { es: 'Inglés', en: 'English' },
    level: { es: 'Intermedio — B1', en: 'Intermediate — B1' },
    dots:  2,
    half:  true,
  },
]
