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
            <a href="#">
              <svg className="social-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z"
                  fill="#191826"
                />
              </svg>
            </a>
            <a href="#">
              <svg className="social-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058ZM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                  fill="#191826"
                />
              </svg>
            </a>
            <a href="#">
              <svg className="social-icon" width="20" height="17" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 2.172a8.192 8.192 0 0 1-2.357.646 4.11 4.11 0 0 0 1.805-2.27 8.22 8.22 0 0 1-2.606.996A4.096 4.096 0 0 0 13.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 0 1 1.392 1a4.109 4.109 0 0 0 1.27 5.478 4.086 4.086 0 0 1-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 0 1-1.853.07 4.106 4.106 0 0 0 3.833 2.849A8.25 8.25 0 0 1 0 14.658a11.616 11.616 0 0 0 6.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0 0 20 2.172Z"
                  fill="#191826"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
