// Componente reutilizable de etiqueta de tecnología
const colorMap = {
  green:  'bg-accent/10 text-accent border-accent/25',
  purple: 'bg-accent2/10 text-purple-300 border-accent2/25',
  orange: 'bg-red-500/10 text-red-300 border-red-500/25',
}

export default function Tag({ label, color = 'green' }) {
  return (
    <span className={`font-mono text-[0.6rem] px-2 py-1 border ${colorMap[color]}`}>
      {label}
    </span>
  )
}
