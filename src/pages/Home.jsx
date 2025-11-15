import React from 'react'

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
        ©2025
      </div>

      {/* Hero Image */}
      <div className="absolute right-[-50px] xl:right-[-40px] lg:right-[-30px] bottom-[-40px] w-[500px] xl:w-[450px] lg:w-[400px] h-[100vh] xl:h-[100vh] lg:h-[100vh] z-[3] overflow-visible hidden">
        <img
          src="/herosecton_imng.png"
          alt="Hero"
          className="w-full h-full object-cover object-bottom brightness-[0.98] contrast-[1.02]"
        />
      </div>

      {/* Right Sidebar Social Icons */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-5 z-10 hidden sm:flex">
        <a href="https://www.linkedin.com/in/aashish-swami-b35b04236/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-7 md:h-7 text-[#666] transition-colors duration-300 flex items-center justify-center border-[1.5px] border-[#666] p-1 hover:text-[#333] hover:border-[#333]" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="https://www.instagram.com/literally_aashish/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-7 md:h-7 text-[#666] transition-colors duration-300 flex items-center justify-center border-[1.5px] border-[#666] p-1 hover:text-[#333] hover:border-[#333]" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="https://x.com/Aashish0931" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-7 md:h-7 text-[#666] transition-colors duration-300 flex items-center justify-center border-[1.5px] border-[#666] p-1 hover:text-[#333] hover:border-[#333]" aria-label="Twitter/X">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Home

