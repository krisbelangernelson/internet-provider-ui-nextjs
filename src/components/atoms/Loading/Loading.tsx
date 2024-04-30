import { ReactElement } from 'react'
import SpinnerIcon from '../SpinnerIcon/SpinnerIcon'

interface LoadingProps {
  centered?: boolean
  children?: ReactElement
}

export default function Loading({ children, centered }: LoadingProps) {
  return (
    <div className="container mx-auto">
      <div data-testid="loading-center" className={`items-center ${centered ? 'text-center mt-6 flex  justify-center' : ''}`}>
        <SpinnerIcon />
        {children !== undefined && <div className="ms-1">{children}</div>}
      </div>
    </div>
  )
}
