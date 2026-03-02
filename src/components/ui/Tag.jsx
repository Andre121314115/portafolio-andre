// Componente reutilizable de etiqueta de tecnología — paleta unificada verde
const colorMap = {
  green:  'bg-accent/10 text-accent border-accent/25',
  purple: 'bg-accent/8 text-accent/80 border-accent/20',   // antes violeta, ahora verde suave
  orange: 'bg-muted/10 text-muted border-muted/20',
}

export default function Tag({ label, color = 'green' }) {
  return (
    <span className={`font-mono text-[0.58rem] px-2 py-1 border ${colorMap[color]}`}>
      {label}
    </span>
  )
}
