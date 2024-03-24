import HeroDesktop from '@/assets/images/hero-woman-350px.jpg'
import HeroMobile from '@/assets/images/hero-woman-200px.jpg'
import './HeroSection.scss'
import HeroCTA from './HeroCTA'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="section-dark md:pb-5">
      <div className="container lg:px-16">
        <div className="flex flex-row">
          <div className="text-center mb-4">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="px-3">
                <h1>
                  <span className="primary">Unleash</span>
                  {' '}
                  the Speed.
                  <br />
                  Power Up with
                  {' '}
                  <span className="primary">Ping!</span>
                </h1>
                <div className="flex flex-row justify-center my-4">
                  <h5 className="w-3/4">
                    Experience next-level internet for streaming, gaming, and everything in between.
                  </h5>
                </div>
                <HeroCTA />
              </div>
              <div className="flex-col items-center flex justify-center">
                <div id="outer-ring">
                  <div id="outer-ring-filler">
                    <div id="inner-ring">
                      <div id="inner-ring-filler">
                        <Image src={HeroMobile} alt="Hero Mobile" className="rounded-full lg:hidden" loading="lazy" />
                        <Image src={HeroDesktop} alt="Hero Mobile" className="rounded-full hidden lg:flex" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
