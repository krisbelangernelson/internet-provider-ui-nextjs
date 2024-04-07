import { ReactNode } from 'react'

interface FeaturesSummaryProps {
  children: ReactNode
  dark?: boolean
}

export default function FeaturesSummary(props: FeaturesSummaryProps) {
  const { children, dark } = props

  return (
    <section className={`section-${dark ? 'dark' : 'light'} features-summary py-[4rem]`}>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-col text-center py-4">
          {children}
        </div>
      </div>
    </section>
  )
}
