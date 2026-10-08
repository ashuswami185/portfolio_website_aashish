import React from 'react'
import SocialLinks from '../components/SocialLinks'

function Home() {
  return (
    <section className="relative w-full h-screen p-6 md:p-10">
      {/* Main Content */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-[2] pointer-events-none max-w-[calc(100vw-3rem)] md:max-w-none">
        <div className="pointer-events-auto">
          <div className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] 2xl:text-[200px] font-bold leading-[0.85] tracking-[-2px] md:tracking-[-3px] mb-[20px] md:mb-[35px]">
            <span className="inline-block bg-gradient-to-r from-[#c0c0c0] via-[#c0c0c0] to-[#1a1a1a] bg-clip-text text-transparent">
              AASHISH SWAMI
            </span>
          </div>
          <div className="text-[10px] sm:text-[12px] md:text-base font-medium tracking-[2px] md:tracking-[3px] text-[#666] flex items-center gap-[8px] md:gap-[10px]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60 md:w-3 md:h-3">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="hidden sm:inline">WEB DEVELOPER, BASED IN GURUGRAM</span>
            <span className="inline sm:hidden">GURUGRAM, INDIA</span>
          </div>
        </div>
      </div>

      {/* Bottom Left Copyright */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[10px] md:text-[11px] font-medium text-[#aaa] tracking-[1px] z-10">
        ©{new Date().getFullYear()}
      </div>

      {/* Right Sidebar Social Icons */}
      <SocialLinks className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex-col gap-4 md:gap-5 z-10 hidden sm:flex" />
    </section>
  )
}

export default Home

