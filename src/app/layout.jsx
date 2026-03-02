import './globals.css'
import { LangProvider } from '@/context/LangContext'

export const metadata = {
  title:       'Andre De La Torre | Portfolio',
  description: 'Portafolio de Jhonny Andre De La Torre Segura — Ingeniería de Sistemas.',
  icons:       { icon: '/favicon.ico' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-bg text-text font-sans antialiased">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
