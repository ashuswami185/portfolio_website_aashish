import React, { useState } from 'react'

function Work() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      tech: 'React • Node.js • MongoDB',
      description: 'Full-stack e-commerce solution with modern UI and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
      year: '2024'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      tech: 'React • Vite • Tailwind CSS',
      description: 'Minimalist portfolio showcasing creative work with smooth animations.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80',
      year: '2024'
    },
    {
      id: 3,
      title: 'Dashboard Application',
      tech: 'Next.js • TypeScript • Prisma',
      description: 'Intuitive analytics dashboard with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      year: '2024'
    },
    {
      id: 4,
      title: 'Social Media App',
      tech: 'React Native • Firebase • Redux',
      description: 'Cross-platform mobile application with real-time messaging features.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80',
      year: '2023'
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
          A collection of recent projects
        </p>
      </div>

      {/* Projects List */}
      <div className="max-w-[1400px] mx-auto space-y-1">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative border-t border-[#d0d0d0] py-6 sm:py-8 md:py-10 cursor-pointer transition-all duration-300 hover:bg-white/40"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
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

              {/* Year & Arrow */}
              <div className="col-span-12 sm:col-span-11 sm:col-start-2 lg:col-span-4 lg:ml-auto lg:col-start-9">
                <div className="flex items-center justify-between lg:justify-end gap-6 md:gap-8">
                  <span className="text-[12px] sm:text-[13px] font-medium tracking-[1px] text-[#999]">
                    {project.year}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#999] flex items-center justify-center group-hover:border-[#333] group-hover:bg-[#333] transition-all duration-300">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#999] group-hover:text-white transition-colors duration-300 sm:w-[14px] sm:h-[14px]"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Bottom Border */}
      <div className="max-w-[1400px] mx-auto border-t border-[#d0d0d0] mt-1"></div>
    </section>
  )
}

export default Work
