import React from 'react'

const socials = [
  {
    label: 'GitHub',
    url: 'https://github.com/ashuswami185',
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    )
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aashish-swami-b35b04236/',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </>
    )
  },
  {
    label: 'X',
    url: 'https://x.com/Aashish0931',
    // The X logo is a filled shape, unlike the stroked outline icons
    filled: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z'
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@aashishswami5714',
    icon: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </>
    )
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/literally_aashish/',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </>
    )
  }
]

function SocialLinks({ className }) {
  return (
    <div className={className}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 md:w-7 md:h-7 text-[#666] transition-colors duration-300 flex items-center justify-center border-[1.5px] border-[#666] p-1 hover:text-[#333] hover:border-[#333]"
          aria-label={social.label}
        >
          {social.filled ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full p-[1px]">
              <path d={social.filled}></path>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              {social.icon}
            </svg>
          )}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
