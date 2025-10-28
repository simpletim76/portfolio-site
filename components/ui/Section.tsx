import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
}

export default function Section({
  children,
  className,
  id,
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-24 px-6', className)}>
      <div className={cn(!fullWidth && 'max-w-7xl mx-auto')}>{children}</div>
    </section>
  )
}
