# 🗂️ PORTAFOLIO ANDRE — GUÍA COMPLETA
# Next.js 14 + Tailwind CSS + Arquitectura limpia

═══════════════════════════════════════════════════
## 📁 ESTRUCTURA DE CARPETAS
═══════════════════════════════════════════════════

```
portfolio-andre/
│
├── 📄 package.json          → dependencias del proyecto
├── 📄 next.config.js        → config de Next.js (export estático para GitHub Pages)
├── 📄 tailwind.config.js    → colores, fuentes, animaciones personalizadas
├── 📄 postcss.config.js     → necesario para Tailwind
│
├── 📂 public/               → archivos estáticos (accesibles como /archivo)
│   ├── 📄 favicon.ico
│   ├── 📂 cv/
│   │   └── CV_AndreDeLaTorre.pdf   ← ⭐ TU CV AQUÍ
│   │
│   └── 📂 img/
│       └── 📂 projects/
│           ├── zapastore.jpg        ← capturas de tus proyectos
│           ├── zapastore-2.jpg
│           ├── zapastore-3.jpg
│           ├── zapastore-4.jpg
│           ├── desinfo.jpg
│           ├── desinfo-2.jpg
│           ├── ... (igual para arcos y gestos)
│
└── 📂 src/
    │
    ├── 📂 app/                     → App Router de Next.js
    │   ├── globals.css             → estilos globales + Tailwind imports
    │   ├── layout.jsx              → HTML base, metadata, providers
    │   └── page.jsx                → página principal (une todo)
    │
    ├── 📂 components/
    │   │
    │   ├── 📂 layout/              → componentes de estructura
    │   │   ├── Navbar.jsx          → barra de navegación
    │   │   └── Footer.jsx          → pie de página
    │   │
    │   ├── 📂 sections/            → cada sección de la página
    │   │   ├── Hero.jsx            → sección inicial con nombre y typing
    │   │   ├── About.jsx           → sobre mí con contadores
    │   │   ├── Skills.jsx          → tarjetas de habilidades + idiomas
    │   │   ├── Learning.jsx        → tecnologías que estás aprendiendo
    │   │   ├── Projects.jsx        → grid de proyectos con filtros
    │   │   ├── Experience.jsx      → timeline de experiencia laboral
    │   │   ├── Certificates.jsx    → certificados y congresos
    │   │   └── Contact.jsx         → formulario + info de contacto
    │   │
    │   └── 📂 ui/                  → componentes reutilizables pequeños
    │       ├── Loader.jsx          → pantalla de carga animada
    │       ├── SectionHeader.jsx   → título de sección reutilizable
    │       ├── Tag.jsx             → etiquetas de tecnologías
    │       └── ProjectModal.jsx    → modal de detalle de proyecto
    │
    ├── 📂 context/
    │   └── LangContext.jsx         → estado global del idioma (ES/EN)
    │
    ├── 📂 data/                    → toda la info del portafolio aquí
    │   ├── projects.js             → proyectos, tecnologías, descripciones
    │   ├── skills.js               → habilidades e idiomas
    │   └── experience.js           → experiencia, certificados, aprendizaje
    │
    └── 📂 hooks/
        └── useScrollFade.js        → animación fade-in al hacer scroll
```

═══════════════════════════════════════════════════
## 🚀 INSTALACIÓN PASO A PASO
═══════════════════════════════════════════════════

### Requisitos previos
- Node.js v18 o superior → descargar en https://nodejs.org
- Git → descargar en https://git-scm.com

### 1. Instala las dependencias
```bash
cd portfolio-andre
npm install
```

### 2. Prueba en local
```bash
npm run dev
```
Abre http://localhost:3000 y verás tu portafolio.

### 3. Genera el build estático
```bash
npm run build
```
Esto crea la carpeta `out/` con los archivos HTML listos.


═══════════════════════════════════════════════════
## 📬 ACTIVAR EL FORMULARIO DE CONTACTO
═══════════════════════════════════════════════════

1. Ve a https://formspree.io y crea cuenta GRATIS
2. Crea un nuevo formulario → pon tu email
3. Te dará un ID como: xbjvkpqr
4. Abre el archivo:
   src/components/sections/Contact.jsx
5. Busca esta línea:
   const FORMSPREE_URL = 'https://formspree.io/f/TU_ID_AQUI'
6. Reemplaza TU_ID_AQUI:
   const FORMSPREE_URL = 'https://formspree.io/f/xbjvkpqr'
7. Guarda y listo — el formulario enviará a tu gmail ✓


═══════════════════════════════════════════════════
## 🌐 PUBLICAR EN GITHUB PAGES (GRATIS)
═══════════════════════════════════════════════════

1. Crea un repositorio en GitHub llamado:
      Andre121314115.github.io

2. Sube la carpeta `out/` al repositorio:
```bash
cd out
git init
git add .
git commit -m "Deploy portafolio"
git remote add origin https://github.com/Andre121314115/Andre121314115.github.io.git
git push -u origin main
```

3. En GitHub → Settings → Pages → Source: main branch
4. En 2-3 minutos tu URL será:
      https://Andre121314115.github.io ✓

O también puedes usar VERCEL (más fácil):
1. Ve a https://vercel.com
2. Conecta tu GitHub
3. Importa el repositorio del proyecto (NO el out/, sino el proyecto completo)
4. Vercel lo construye y despliega automáticamente
5. Te da una URL como: portfolio-andre.vercel.app


═══════════════════════════════════════════════════
## ✏️ CÓMO EDITAR EL CONTENIDO
═══════════════════════════════════════════════════

| Quieres cambiar...       | Edita este archivo              |
|--------------------------|----------------------------------|
| Tus proyectos            | src/data/projects.js            |
| Habilidades / idiomas    | src/data/skills.js              |
| Experiencia laboral      | src/data/experience.js          |
| Certificados             | src/data/experience.js          |
| Lo que estás aprendiendo | src/data/experience.js          |
| Colores / fuentes        | tailwind.config.js              |
| Animaciones CSS          | tailwind.config.js → keyframes  |
| Estilos globales         | src/app/globals.css             |
| Texto del Hero           | src/components/sections/Hero.jsx|
| Formulario Formspree     | src/components/sections/Contact.jsx |


═══════════════════════════════════════════════════
## 🖼️ IMÁGENES DE PROYECTOS
═══════════════════════════════════════════════════

Pon tus capturas en:  public/img/projects/

Nombres que necesitas:
  zapastore.jpg, zapastore-2.jpg, zapastore-3.jpg, zapastore-4.jpg
  desinfo.jpg,   desinfo-2.jpg,   desinfo-3.jpg,   desinfo-4.jpg
  arcos.jpg,     arcos-2.jpg,     arcos-3.jpg,     arcos-4.jpg
  gestos.jpg,    gestos-2.jpg,    gestos-3.jpg,     gestos-4.jpg

Si no las tienes → el sitio carga imágenes de internet automáticamente.
Tamaño recomendado: 800x500px o más.

═══════════════════════════════════════════════════
## 🔧 ARQUITECTURA MVC APLICADA
═══════════════════════════════════════════════════

MODEL  (datos)    → src/data/          → projects.js, skills.js, experience.js
VIEW   (visual)   → src/components/   → sections/, layout/, ui/
CONTROLLER (lógica) → src/context/    → LangContext.jsx (estado global idioma)
                   → src/hooks/       → useScrollFade.js (lógica de animación)
                   → src/app/page.jsx → orquesta todos los componentes
