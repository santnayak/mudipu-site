interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { dot: 'h-1.5 w-1.5', text: 'text-base' },
    md: { dot: 'h-2 w-2', text: 'text-xl' },
    lg: { dot: 'h-3 w-3', text: 'text-3xl' },
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`${sizes[size].dot} rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]`}></div>
      {showText && (
        <span className={`${sizes[size].text} font-normal`}>mudipu</span>
      )}
    </div>
  )
}
