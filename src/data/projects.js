// ─────────────────────────────────────────────
//  DATA: Proyectos
//  Para agregar imágenes reales: pon los archivos en public/img/projects/
//  Nombres: zapastore.jpg, desinfo.jpg, arcos.jpg, portfolio.jpg
// ─────────────────────────────────────────────

export const projects = [
{
    id:       'desinfo',
    num:      '001',
    category: 'python',
    wip:      false,
    image:    '/img/projects/desinfo.jpg',
    fallback: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&q=80',
    gallery: [
      { src: '/img/projects/desinfo-2.jpg', fb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
      { src: '/img/projects/desinfo-3.jpg', fb: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80' },
      { src: '/img/projects/desinfo-4.jpg', fb: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&q=80' },
    ],
    github: 'https://github.com/Andre121314115/DesinfoAppV4.0',
    demo:   null, // TODO: agregar link a Colab o demo si tienes
    tags: [
      { label: 'Python',       color: 'green'  },
      { label: 'scikit-learn', color: 'purple' },
      { label: 'Pandas',       color: 'purple' },
      { label: 'NLP',          color: 'purple' },
    ],
    title:   { es: 'DesInfo — Fake News Detector', en: 'DesInfo — Fake News Detector' },
    eyebrow: { es: '// 002 — PYTHON · MACHINE LEARNING', en: '// 002 — PYTHON · MACHINE LEARNING' },
    desc: {
      es: 'Sistema de clasificación automática de noticias falsas usando Machine Learning y Procesamiento de Lenguaje Natural en Python.',
      en: 'Automatic fake news classification system using Machine Learning and Natural Language Processing in Python.',
    },
    features: {
      es: [
        'Clasificación de texto con scikit-learn (Naive Bayes / SVM)',
        'Pipeline de preprocesamiento NLP: tokenización, stopwords y stemming',
        'Evaluación del modelo con precisión, recall y F1-score',
        'Dataset de noticias reales en español para entrenamiento',
        // TODO: agrega aquí la métrica real — ej: 'Precisión del modelo: 87% en datos de prueba'
      ],
      en: [
        'Text classification with scikit-learn (Naive Bayes / SVM)',
        'NLP preprocessing pipeline: tokenization, stopwords and stemming',
        'Model evaluation with precision, recall and F1-score',
        'Real Spanish news dataset for training',
      ],
    },
  },

  {
    id:       'zapastore',
    num:      '002',
    category: 'web',
    wip:      false,
    image:    '/img/projects/zapastore.jpg',
    fallback: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80',
    gallery: [
      { src: '/img/projects/zapastore-2.jpg', fb: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&q=80' },
      { src: '/img/projects/zapastore-3.jpg', fb: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80' },
      { src: '/img/projects/zapastore-4.jpg', fb: 'https://images.unsplash.com/photo-1556906781-9a412961a28c?w=400&q=80' },
    ],
    github: 'https://github.com/Andre121314115/ZapaStore',
    demo:   null,
    tags: [
      { label: 'Java',       color: 'purple' },
      { label: 'Spring Boot',color: 'purple' },
      { label: 'HTML/CSS',   color: 'green'  },
      { label: 'SQL',        color: 'purple' },
    ],
    title:   { es: 'ZapaStore', en: 'ZapaStore' },
    eyebrow: { es: '// 001 — BACKEND · WEB', en: '// 001 — BACKEND · WEB' },
    desc: {
      es: 'Panel administrativo para una tienda de zapatillas. Gestión completa de productos, usuarios y stock desarrollado con Java Spring Boot.',
      en: 'Admin panel for a sneaker store. Full product, user and stock management built with Java Spring Boot.',
    },
    features: {
      es: [
        'CRUD completo de productos con Spring Boot REST',
        'Gestión de usuarios con roles y autenticación',
        'Control de inventario y stock en tiempo real',
        'Interfaz web con HTML, CSS y Thymeleaf',
        'Base de datos relacional con SQL',
      ],
      en: [
        'Full product CRUD with Spring Boot REST',
        'User management with roles and authentication',
        'Real-time inventory and stock control',
        'Web interface with HTML, CSS and Thymeleaf',
        'Relational database with SQL',
      ],
    },
  },

  {
    id:       'arcos',
    num:      '003',
    category: 'mobile',
    wip:      false,
    image:    '/img/projects/arcos.jpg',
    fallback: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80',
    gallery: [
      { src: '/img/projects/arcos-2.jpg', fb: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&q=80' },
      { src: '/img/projects/arcos-3.jpg', fb: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&q=80' },
      { src: '/img/projects/arcos-4.jpg', fb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80' },
    ],
    github: 'https://github.com/Andre121314115/arcos_globos',
    demo:   null,
    tags: [
      { label: 'Flutter', color: 'orange' },
      { label: 'Dart',    color: 'orange' },
    ],
    title:   { es: 'Arcos & Globos', en: 'Arcos & Globos' },
    eyebrow: { es: '// 003 — FLUTTER · MOBILE', en: '// 003 — FLUTTER · MOBILE' },
    desc: {
      es: 'App móvil para una empresa de decoraciones. Reemplazó el seguimiento manual de pedidos por un sistema digital de gestión y cotizaciones.',
      en: 'Mobile app for a decoration business. Replaced manual order tracking with a digital management and quoting system.',
    },
    features: {
      es: [
        'Registro y seguimiento de pedidos en tiempo real',
        'Generación automática de cotizaciones para clientes',
        'Catálogo digital de productos y decoraciones',
        'Historial de clientes con detalle de pedidos anteriores',
        'Diseño adaptado para uso en campo (sin conexión estable)',
      ],
      en: [
        'Real-time order tracking and registration',
        'Automatic quote generation for clients',
        'Digital product and decoration catalog',
        'Customer history with previous order details',
        'Designed for field use (without stable connection)',
      ],
    },
  },

  {
    id:       'portfolio',
    num:      '004',
    category: 'web',
    wip:      false,
    image:    '/img/projects/portfolio.jpg',
    fallback: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=700&q=80',
    gallery: [
      { src: '/img/projects/portfolio-2.jpg', fb: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80' },
      { src: '/img/projects/portfolio-3.jpg', fb: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80' },
      { src: '/img/projects/portfolio-4.jpg', fb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80' },
    ],
    github: 'https://github.com/Andre121314115',
    demo:   null, // TODO: agrega la URL de Vercel o GitHub Pages cuando lo despliegues
    tags: [
      { label: 'Next.js 14', color: 'green'  },
      { label: 'React',      color: 'green'  },
      { label: 'Tailwind',   color: 'purple' },
      { label: 'MVC',        color: 'purple' },
    ],
    title:   { es: 'Este Portafolio', en: 'This Portfolio' },
    eyebrow: { es: '// 004 — NEXT.JS · REACT · TAILWIND', en: '// 004 — NEXT.JS · REACT · TAILWIND' },
    desc: {
      es: 'Portafolio personal construido desde cero con Next.js 14, React y Tailwind CSS. Arquitectura MVC, bilingüe ES/EN, modo claro/oscuro y cursor personalizado.',
      en: 'Personal portfolio built from scratch with Next.js 14, React and Tailwind CSS. MVC architecture, ES/EN bilingual, light/dark mode and custom cursor.',
    },
    features: {
      es: [
        'Arquitectura MVC: datos separados de la vista y la lógica',
        'Sistema de traducción ES/EN con React Context API',
        'Modo claro/oscuro con variables CSS y Tailwind',
        'Cursor personalizado con animación de seguimiento suavizado',
        'Animaciones de scroll con Intersection Observer API',
        'Deploy estático con next export — compatible con GitHub Pages',
      ],
      en: [
        'MVC architecture: data separated from view and logic',
        'ES/EN translation system with React Context API',
        'Light/dark mode with CSS variables and Tailwind',
        'Custom cursor with smooth tracking animation',
        'Scroll animations with Intersection Observer API',
        'Static deploy with next export — GitHub Pages compatible',
      ],
    },
  },
]
