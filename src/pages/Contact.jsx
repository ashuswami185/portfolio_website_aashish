import React from 'react'

function Contact() {
  return (
    <section className="relative w-full min-h-screen p-6 sm:p-8 md:p-10 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left Side - Heading */}
          <div className="lg:sticky lg:top-20">
            <h2 className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[70px] xl:text-[120px] font-bold leading-[0.85] tracking-[-2px] md:tracking-[-3px]">
              <span className="block bg-gradient-to-r from-[#c0c0c0] to-[#1a1a1a] bg-clip-text text-transparent">
                CONTACT
              </span>
            </h2>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 pt-0 lg:pt-8">
            <div>
              <h3 className="text-[15px] sm:text-[16px] md:text-[18px] font-medium tracking-[1.5px] sm:tracking-[2px] text-[#333] mb-3 sm:mb-4 uppercase">
                Email
              </h3>
              <a href="mailto:hello@aashishswami.com" className="text-[14px] sm:text-[15px] md:text-[16px] font-medium tracking-[0.5px] sm:tracking-[1px] text-[#666] hover:text-[#333] transition-colors duration-300 break-all">
                hello@aashishswami.com
              </a>
            </div>

            <div>
              <h3 className="text-[15px] sm:text-[16px] md:text-[18px] font-medium tracking-[1.5px] sm:tracking-[2px] text-[#333] mb-3 sm:mb-4 uppercase">
                Location
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium tracking-[0.5px] sm:tracking-[1px] text-[#666]">
                Gurugram, India
              </p>
            </div>

            <div>
              <h3 className="text-[15px] sm:text-[16px] md:text-[18px] font-medium tracking-[1.5px] sm:tracking-[2px] text-[#333] mb-3 sm:mb-4 uppercase">
                Available For
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium tracking-[0.5px] sm:tracking-[1px] text-[#666] uppercase">
                Freelance Projects • Full-Time Opportunities
              </p>
            </div>

            <div>
              <h3 className="text-[15px] sm:text-[16px] md:text-[18px] font-medium tracking-[1.5px] sm:tracking-[2px] text-[#333] mb-4 sm:mb-5 md:mb-6 uppercase">
                Social
              </h3>
              <div className="flex gap-4 sm:gap-5">
                <a href="https://www.instagram.com/literally_aashish/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 text-[#666] transition-colors duration-300 flex items-center justify-center border-[1.5px] border-[#666] p-1 hover:text-[#333] hover:border-[#333]" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://x.com/Aashish0931" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 text-[#666] transition-colors duration-300 flex items-center justify-center border-[1.5px] border-[#666] p-1 hover:text-[#333] hover:border-[#333]" aria-label="Twitter/X">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/aashish-swami-b35b04236/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 text-[#666] transition-colors duration-300 flex items-center justify-center border-[1.5px] border-[#666] p-1 hover:text-[#333] hover:border-[#333]" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

