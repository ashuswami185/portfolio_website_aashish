import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Layout({ children }) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] overflow-x-hidden">
      {/* Top Left Logo */}
      <Link to="/" className="absolute top-6 left-6 md:top-10 md:left-10 text-[11px] md:text-[13px] font-medium tracking-[2px] text-[#777] z-50 uppercase hover:text-[#333] transition-colors duration-300">
        AASHISH SWAMI
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex absolute top-10 right-10 gap-10 z-50">
        <Link
          to="/work"
          className={`no-underline text-[13px] font-medium tracking-[2px] transition-colors duration-300 uppercase hover:text-[#333] ${
            location.pathname === '/work' ? 'text-[#333]' : 'text-[#777]'
          }`}
        >
          WORK
        </Link>
        <Link
          to="/gallery"
          className={`no-underline text-[13px] font-medium tracking-[2px] transition-colors duration-300 uppercase hover:text-[#333] ${
            location.pathname === '/gallery' ? 'text-[#333]' : 'text-[#777]'
          }`}
        >
          GALLERY
        </Link>
        <Link
          to="/contact"
          className={`no-underline text-[13px] font-medium tracking-[2px] transition-colors duration-300 uppercase hover:text-[#333] ${
            location.pathname === '/contact' ? 'text-[#333]' : 'text-[#777]'
          }`}
        >
          CONTACT
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden absolute top-6 right-6 md:top-10 md:right-10 w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-[1.5px] bg-[#777] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-[1.5px] bg-[#777] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-[1.5px] bg-[#777] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-[#f5f5f5] z-40 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            to="/work"
            onClick={() => setMobileMenuOpen(false)}
            className={`no-underline text-[20px] font-medium tracking-[2px] transition-colors duration-300 uppercase hover:text-[#333] ${
              location.pathname === '/work' ? 'text-[#333]' : 'text-[#777]'
            }`}
          >
            WORK
          </Link>
          <Link
            to="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className={`no-underline text-[20px] font-medium tracking-[2px] transition-colors duration-300 uppercase hover:text-[#333] ${
              location.pathname === '/gallery' ? 'text-[#333]' : 'text-[#777]'
            }`}
          >
            GALLERY
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`no-underline text-[20px] font-medium tracking-[2px] transition-colors duration-300 uppercase hover:text-[#333] ${
              location.pathname === '/contact' ? 'text-[#333]' : 'text-[#777]'
            }`}
          >
            CONTACT
          </Link>
        </nav>
      </div>

      {children}
    </div>
  )
}

export default Layout

