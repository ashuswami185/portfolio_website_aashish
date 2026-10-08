import React from 'react'

function About() {
  const skillGroups = [
    { title: 'Frontend', skills: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'MongoDB', 'PostgreSQL'] },
    { title: 'DevOps & Tools', skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Vercel'] },
    { title: 'Other', skills: ['C++', 'R', 'Shiny'] }
  ]

  return (
    <section className="relative w-full min-h-screen py-20 sm:py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          {/* Page Title */}
          <h1 className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] xl:text-[140px] font-bold leading-[0.85] tracking-[-2px] md:tracking-[-3px] mb-10 md:mb-16">
            <span className="bg-gradient-to-r from-[#c0c0c0] via-[#a0a0a0] to-[#1a1a1a] bg-clip-text text-transparent">
              ABOUT
            </span>
          </h1>

          {/* Bio */}
          <div className="space-y-5 max-w-[640px] mb-14 md:mb-20">
            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-medium tracking-[0.3px] text-[#333] leading-relaxed">
              I&apos;m Aashish, a web developer based in Gurugram who builds full stack applications and ships them on modern infrastructure.
            </p>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-[0.3px] text-[#666] leading-relaxed">
              My work spans React frontends, Node.js and Express APIs backed by MongoDB or PostgreSQL, and deployments with Docker and Kubernetes. I enjoy taking a project from an empty repo to something people can actually use.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {skillGroups.map((group) => (
              <div key={group.title} className="border-t border-[#d0d0d0] pt-5">
                <h2 className="text-[11px] sm:text-[12px] md:text-[13px] font-medium tracking-[2px] text-[#999] uppercase mb-4">
                  {group.title}
                </h2>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-[14px] sm:text-[15px] md:text-[16px] font-medium tracking-[0.5px] text-[#333]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="hidden lg:block sticky top-24">
          <img
            src="/avatar.png"
            alt="3D avatar of Aashish waving"
            className="w-full max-w-[380px] mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default About
