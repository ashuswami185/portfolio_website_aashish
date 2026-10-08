import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import SocialLinks from '../components/SocialLinks'

// EmailJS public key and IDs, carried over from the original portfolio
const EMAILJS_PUBLIC_KEY = 'B-xbz7cJVlbASXynb'
const EMAILJS_SERVICE_ID = 'service_swttp75'
const EMAILJS_TEMPLATE_ID = 'template_bby2va9'

const labelClass = 'block text-[11px] sm:text-[12px] font-medium tracking-[2px] text-[#999] uppercase mb-2'
const inputClass = 'w-full bg-transparent border-0 border-b border-[#bbb] py-3 text-[14px] sm:text-[15px] md:text-[16px] font-medium tracking-[0.5px] text-[#333] placeholder-[#aaa] focus:outline-none focus:border-[#333] transition-colors duration-300'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, { publicKey: EMAILJS_PUBLIC_KEY })
      setForm({ name: '', email: '', message: '' })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="relative w-full min-h-screen py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-10 flex items-start lg:items-center">
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

          {/* Right Side - Form & Info */}
          <div className="space-y-12 sm:space-y-14 md:space-y-16 pt-0 lg:pt-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" name="message" required rows="4" value={form.message} onChange={handleChange} placeholder="Tell me about your project or role" className={`${inputClass} resize-none`} />
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="h-11 sm:h-12 px-6 sm:px-8 border border-[#333] bg-[#333] text-white text-[11px] sm:text-[12px] font-medium tracking-[2px] uppercase hover:bg-transparent hover:text-[#333] transition-all duration-300 disabled:opacity-60 disabled:cursor-wait"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                <p role="status" aria-live="polite" className="text-[12px] sm:text-[13px] font-medium tracking-[1px]">
                  {status === 'sent' && <span className="text-[#2e7d32]">Thanks! Your message has been sent.</span>}
                  {status === 'error' && <span className="text-[#c62828]">Could not send. Please try again.</span>}
                </p>
              </div>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 border-t border-[#d0d0d0] pt-10">
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
                <SocialLinks className="flex gap-4 sm:gap-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
