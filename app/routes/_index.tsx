import type { MetaFunction } from '@remix-run/node'
import Logo from '~/components/Logo'

export const meta: MetaFunction = () => {
  return [{ title: 'Equalizer Landing Page' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="relative sm:px-8 sm:py-16">
      <picture className="absolute right-[-2.08rem] top-0 z-0 hidden max-w-[12.5rem] sm:block lg:right-0 lg:max-w-[16rem]">
        <source srcSet="/images/bg-pattern-1.svg" type="image/svg+xml" />
        <img src="/images/bg-pattern-1.svg" alt="Background Pattern" />
      </picture>
      <div className="z-1 relative px-4 py-6 sm:p-0 sm:pr-[12.5rem] lg:pr-[18rem]">
        <Logo />
        <h1 className="mt-16 sm:mt-24">We make your music sound extraordinary.</h1>
        <p className="mt-5 sm:mt-7">
          A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with
          a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
        </p>
      </div>
      <div className="relative">
        <div className="mt-40 sm:mt-56">
          <picture className="z-1 absolute left-0 right-0 top-[-6.12rem] mx-auto w-60 sm:top-[-8rem] sm:ml-16 lg:top-[-12rem] lg:ml-36 lg:w-80">
            <source srcSet="/images/illustration-app.png" type="image/png" />
            <img src="/images/illustration-app.png" alt="Illustration of Equalizer App" />
          </picture>
        </div>
        <div className="flex justify-center rounded-xl bg-dark-blue sm:items-start sm:pb-[12rem] lg:pr-36">
          <picture>
            <source srcSet="/images/bg-pattern-2.svg" type="image/svg+xml" />
            <img src="/images/bg-pattern-2.svg" alt="Background Pattern" />
          </picture>
        </div>
        <div className="z-1 relative mt-[-2rem] rounded-xl bg-bright-red px-10 py-12 text-light sm:ml-[13.7rem] sm:mt-[-29rem] sm:w-[24.9375rem] lg:ml-auto lg:mr-36 lg:mt-[-30rem] lg:w-[28.875rem]">
          <h2 className="lg:text mb-3">Premium EQ</h2>
          <p className="mb-9">
            Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening
            experience to a whole new level and access all our incredible features!
          </p>
          <p className="mb-8 flex items-center gap-4">
            <span className="text-[4.0625rem] font-bold leading-[3.25rem]">$4</span>
            <span>/ month</span>
          </p>
          <button className="mb-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-dark-blue py-4 hover:bg-medium-light-cyan">
            <picture>
              <source srcSet="/images/icon-apple.svg" type="image/svg+xml" />
              <img src="/images/icon-apple.svg" alt="Apple Icon" />
            </picture>
            <p className="font-bold">iOS Download</p>
          </button>
          <button className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-xl bg-light py-4 font-bold text-dark-blue hover:bg-vivid-orange">
            <picture>
              <source srcSet="/images/icon-android.svg" type="image/svg+xml" />
              <img src="/images/icon-android.svg" alt="Android Icon" />
            </picture>
            <span>Android Download</span>
          </button>
        </div>
        <div className="flex flex-col px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col sm:max-w-[22.875rem] lg:max-w-[43rem] lg:flex-row lg:gap-16">
            <div className="mb-8 min-w-fit">
              <Logo />
            </div>
            <p className="mb-16 sm:mb-0">
              All rights reserved © Equalizer 2021 Have any problems? Contact us via social media or email us at
              <div className="font-bold">equalizer@example.com</div>
            </p>
          </div>
          <div className="flex gap-6">
            <picture className="social-icon">
              <source srcSet="/images/icon-facebook.svg" type="image/svg+xml" />
              <img src="/images/icon-facebook.svg" alt="Facebook Icon" />
            </picture>
            <picture className="social-icon">
              <source srcSet="/images/icon-instagram.svg" type="image/svg+xml" />
              <img src="/images/icon-instagram.svg" alt="Instagram Icon" />
            </picture>
            <picture className="social-icon">
              <source srcSet="/images/icon-twitter.svg" type="image/svg+xml" />
              <img src="/images/icon-twitter.svg" alt="Twitter Icon" />
            </picture>
          </div>
        </div>
      </div>
    </main>
  )
}
