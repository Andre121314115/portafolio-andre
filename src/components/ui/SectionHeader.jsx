export default function SectionHeader({ num, title }) {
  return (
    <div className="flex items-center gap-5 mb-14">
      <span className="font-mono text-xs text-accent tracking-widest">{num}</span>
      <h2 className="text-3xl sm:text-4xl font-extrabold whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
    </div>
  )
}
