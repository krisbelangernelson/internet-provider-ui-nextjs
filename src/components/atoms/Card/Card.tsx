import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  footer: string
  header: string
  onClick: () => void
}

export default function Card(props: CardProps) {
  const { children, footer, header, onClick } = props

  return (
    <div className="sm:w-[20rem] text-center">
      <div className="bg-white rounded-lg shadow-md flex flex-col transition-all overflow-hidden hover:shadow-2xl cursor-pointer" onClick={onClick}>
        <div className="px-6 py-4 border-b border-stone-200 text-xs font-medium  bg-slate-50">
          <h3 className="primary font-semibold text-2xl">{header}</h3>
        </div>
        <div className="px-6 py-4">
          <p className="text-sky-800 text-lg">
            {children}
          </p>
        </div>
        <div className="px-6 py-4 border-t border-stone-200 text-md font-medium  text-blue-400 bg-slate-50">
          {footer}
        </div>
      </div>
    </div>
  )
}
