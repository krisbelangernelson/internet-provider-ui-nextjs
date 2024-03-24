'use client'

import LazyBackgroundImg from '@/components/atoms/LazyBackgroundImg/LazyBackgroundImg'
import { ROUTES, FORMS } from '@/constants'
import { useRouter } from 'next/navigation'

export default function WhyChooseUs() {
  const router = useRouter()

  // TODO: mobile image version
  return (
    <section className="section-dark">
      <LazyBackgroundImg img="/assets/images/why-choose-595h.jpg">
        <div className="p-5">
          <div className="text-center grid md:grid-cols-12">
            <div className="md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 2xl:col-start-5 2xl:col-span-4">
              <div className="grid gap-4">
                <h1 className="primary" style={{ fontSize: '3rem' }}>
                  Why choose us?
                </h1>
                <p className="text-start">
                  Experience the frustration-free internet you deserve. Say goodbye to buffering, lag, and dropped
                  connections. We offer blazing-fast internet speeds that seamlessly adapt to your online activities,
                  whether you&apos;re streaming your favorite shows in 4K, downloading large files, or competing in
                  fast-paced online games. With Ping!, you can finally unleash the full potential of your internet
                  connection and connect to what matters most.
                </p>
                <div className="justify-center mb-4">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => {
                      router.push(ROUTES.internet)
                    }}
                  >
                    {FORMS.buttons.chooseUs.label}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazyBackgroundImg>
    </section>
  )
}
