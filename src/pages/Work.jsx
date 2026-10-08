import React from 'react'

function Work() {
  const projects = [
    {
      id: 1,
      title: 'Parking Management System',
      tech: 'React • Tailwind • Node.js • Express • MongoDB',
      description: 'Full stack parking management app with JWT auth, OTP email verification, analytics charts, CSV import and export, and downloadable PDF reports.',
      year: '2026',
      links: [
        { label: 'Frontend', url: 'https://github.com/ashuswami185/Parking-system-frontend' },
        { label: 'Backend', url: 'https://github.com/ashuswami185/Parking-system-backend' }
      ]
    },
    {
      id: 2,
      title: 'Clean Notes on Kubernetes',
      tech: 'React • Express • PostgreSQL • Docker • Kubernetes',
      description: 'Minimal notes app with auto save, pinning, archiving and instant search, built as containerized microservices behind an NGINX Ingress.',
      year: '2026',
      links: [
        { label: 'Live', url: 'https://k8s-notes-app.vercel.app' },
        { label: 'Code', url: 'https://github.com/ashuswami185/k8s-notes-app' }
      ]
    },
    {
      id: 3,
      title: 'PestnFix',
      tech: 'TypeScript • Node.js • MongoDB • JWT',
      description: 'Pest control booking platform with time slot booking, order tracking, promo codes, reviews and an admin dashboard for orders, services and revenue.',
      year: '2025',
      links: [
        { label: 'Code', url: 'https://github.com/ashuswami185/pestnfix_prototype' }
      ]
    },
    {
      id: 4,
      title: 'Authentication App',
      tech: 'React • Express • PostgreSQL • JWT',
      description: 'Signup and login flow with bcrypt password hashing, JWT sessions and a protected dashboard route.',
      year: '2026',
      links: [
        { label: 'Code', url: 'https://github.com/ashuswami185/auth-dbjs' }
      ]
    },
    {
      id: 5,
      title: 'Rajasthan Crime Analysis',
      tech: 'R • Shiny • Data Visualization',
      description: 'Interactive dashboard that visualizes crime data across Rajasthan through charts and graphs.',
      year: '2024',
      links: [
        { label: 'Code', url: 'https://github.com/ashuswami185/Crime-Analyisation' }
      ]
    }
  ]

  return (
    <section className="relative w-full min-h-screen py-20 sm:py-24 md:py-32 px-6 md:px-10">
      {/* Page Title */}
      <div className="max-w-[1400px] mx-auto mb-12 sm:mb-16 md:mb-24">
        <h1 className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] xl:text-[140px] font-bold leading-[0.85] tracking-[-2px] md:tracking-[-3px]">
          <span className="bg-gradient-to-r from-[#c0c0c0] via-[#a0a0a0] to-[#1a1a1a] bg-clip-text text-transparent">
            SELECTED WORK
          </span>
        </h1>
        <p className="text-[11px] sm:text-[12px] md:text-[13px] font-medium tracking-[1.5px] md:tracking-[2px] text-[#666] mt-4 md:mt-6 uppercase">
          Full stack apps, containerized deployments and data dashboards
        </p>
      </div>

      {/* Projects List */}
      <div className="max-w-[1400px] mx-auto space-y-1">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative border-t border-[#d0d0d0] py-6 sm:py-8 md:py-10 transition-all duration-300 hover:bg-white/40"
          >
            <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-start md:items-center">
              {/* Number */}
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium tracking-[1px] text-[#999] group-hover:text-[#333] transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Project Info */}
              <div className="col-span-10 sm:col-span-11 lg:col-span-6">
                <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold tracking-[-1px] text-[#333] mb-2 md:mb-3 uppercase group-hover:text-[#1a1a1a] transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-[10px] sm:text-[11px] font-medium tracking-[1.5px] text-[#777] uppercase mb-3 md:mb-4">
                  {project.tech}
                </p>
                <p className="text-[13px] sm:text-[14px] font-medium tracking-[0.3px] text-[#666] leading-relaxed max-w-[600px]">
                  {project.description}
                </p>
              </div>

              {/* Year & Links */}
              <div className="col-span-12 sm:col-span-11 sm:col-start-2 lg:col-span-4 lg:ml-auto lg:col-start-9">
                <div className="flex items-center justify-between lg:justify-end gap-6 md:gap-8">
                  <span className="text-[12px] sm:text-[13px] font-medium tracking-[1px] text-[#999]">
                    {project.year}
                  </span>
                  <div className="flex gap-2 sm:gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 sm:h-10 px-3 sm:px-4 border border-[#999] flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[1.5px] uppercase text-[#666] hover:border-[#333] hover:bg-[#333] hover:text-white transition-all duration-300"
                      >
                        {link.label}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Border */}
      <div className="max-w-[1400px] mx-auto border-t border-[#d0d0d0] mt-1"></div>

      <div className="max-w-[1400px] mx-auto mt-10 md:mt-14">
        <a
          href="https://github.com/ashuswami185?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] sm:text-[12px] md:text-[13px] font-medium tracking-[2px] text-[#666] uppercase hover:text-[#333] transition-colors duration-300"
        >
          More on GitHub →
        </a>
      </div>
    </section>
  )
}

export default Work
