import { ReactNode } from 'react'

interface AlertProps {
  children: ReactNode
  variant?: string
  title?: string | null
}

export default function Alert({ children, variant, title }: AlertProps) {
  let color = 'text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300'
  if (variant === 'success') {
    color = 'text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400'
  } else if (variant === 'danger') {
    color = 'text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
  }

  return (
    <div className={`p-4 mb-4 text-sm ${color}`} role="alert">
      {title && <div className="text-3xl">{title}</div>}
      {children}
    </div>
  )
}
