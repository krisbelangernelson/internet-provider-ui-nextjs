'use client'
import { useRouter } from 'next/navigation'
import { ROUTES, FORMS } from '@/constants'

export default function HeroCTA() {
  const router = useRouter()

  return (
    <div className="flex justify-center">
      <div className="flex flex-row gap-4">
        <button
          type="button"
          className="btn-primary"
          onClick={() => {
            router.push(ROUTES.internet)
          }}
        >
          {FORMS.buttons.explorePlans.label}
        </button>
        <button
          type="button"
          className="btn-primary-outline"
          onClick={() =>
            document.getElementById('features-summary')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </button>
      </div>
    </div>

  )
}
