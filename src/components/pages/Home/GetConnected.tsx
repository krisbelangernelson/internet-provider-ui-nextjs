'use client'

import { ROUTES, FORMS, LANDING } from '@/constants'
import { useRouter } from 'next/navigation'

export default function GetConnected() {
  const router = useRouter()

  return (
    <section className="section-light cta">
      <div className="text-center py-8 grid gap-3">
        <h2>{LANDING.getConnected.title}</h2>
        <div>
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              router.push(ROUTES.internet)
            }}
          >
            {FORMS.buttons.getConnected.label}
          </button>
        </div>
      </div>
    </section>
  )
}
