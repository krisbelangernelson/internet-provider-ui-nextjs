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
          className="px-6 py-3 bg-primary text-white text-base font-medium rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
          onClick={() => {
            router.push(ROUTES.internet)
          }}
        >
          {FORMS.buttons.explorePlans.label}
        </button>
        <button
          type="button"
          className="px-6 py-3 border-2 border-primary text-white text-base font-medium rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
          onClick={() =>
            document.getElementById('features-summary')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </button>
      </div>
    </div>

  )
}
