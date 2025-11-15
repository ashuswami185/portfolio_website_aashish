import React, { useState } from 'react'

function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const galleryItems = [
    {
      id: 1,
      title: 'Web Development',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=1000&fit=crop&q=80',
      year: '2024'
    },
    {
      id: 2,
      title: 'Mobile Apps',
      category: 'iOS & Android',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=1000&fit=crop&q=80',
      year: '2024'
    },
    {
      id: 3,
      title: 'UI Design',
      category: 'Interface',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=1000&fit=crop&q=80',
      year: '2024'
    },
    {
      id: 4,
      title: 'Development',
      category: 'Coding',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=1000&fit=crop&q=80',
      year: '2023'
    },
    {
      id: 5,
      title: 'App Design',
      category: 'Mobile UX',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=1000&fit=crop&q=80',
      year: '2023'
    },
    {
      id: 6,
      title: 'Tech Stack',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=1000&fit=crop&q=80',
      year: '2023'
    }
  ]

  return (
    <section className="relative w-full min-h-screen py-20 sm:py-24 md:py-32 px-6 md:px-10">
      {/* Page Title */}
      <div className="max-w-[1400px] mx-auto mb-12 sm:mb-16 md:mb-24">
        <h1 className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] xl:text-[140px] font-bold leading-[0.85] tracking-[-2px] md:tracking-[-3px]">
          <span className="bg-gradient-to-r from-[#c0c0c0] via-[#a0a0a0] to-[#1a1a1a] bg-clip-text text-transparent">
            GALLERY
          </span>
        </h1>
        <p className="text-[11px] sm:text-[12px] md:text-[13px] font-medium tracking-[1.5px] md:tracking-[2px] text-[#666] mt-4 md:mt-6 uppercase">
          Visual stories & moments — {galleryItems.length} Items
        </p>
      </div>

      {/* Attractive Masonry Gallery Grid */}
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {/* Item 1 - Large */}
          <div
            className="col-span-4 sm:col-span-4 lg:col-span-6 row-span-2 group relative cursor-pointer overflow-hidden bg-[#e5e5e5]"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white text-[18px] sm:text-[20px] font-bold tracking-[-0.3px] uppercase mb-1">
                    {galleryItems[0].title}
                  </h3>
                  <p className="text-white/70 text-[10px] sm:text-[11px] font-medium tracking-[1px] uppercase">
                    {galleryItems[0].category} • {galleryItems[0].year}
                  </p>
                </div>
                <div className="text-white/50 text-[12px] font-medium">01</div>
              </div>
            </div>
          </div>

          {/* Item 2 - Medium */}
          <div
            className="col-span-2 sm:col-span-4 lg:col-span-3 row-span-1 group relative cursor-pointer overflow-hidden bg-[#e5e5e5]"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={galleryItems[1].image}
              alt={galleryItems[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white text-[14px] sm:text-[16px] font-bold tracking-[-0.3px] uppercase mb-1">
                    {galleryItems[1].title}
                  </h3>
                  <p className="text-white/70 text-[9px] sm:text-[10px] font-medium tracking-[1px] uppercase">
                    {galleryItems[1].category}
                  </p>
                </div>
                <div className="text-white/50 text-[11px] font-medium">02</div>
              </div>
            </div>
          </div>

          {/* Item 3 - Medium Tall */}
          <div
            className="col-span-2 sm:col-span-4 lg:col-span-3 row-span-2 group relative cursor-pointer overflow-hidden bg-[#e5e5e5]"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={galleryItems[2].image}
              alt={galleryItems[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white text-[14px] sm:text-[16px] font-bold tracking-[-0.3px] uppercase mb-1">
                    {galleryItems[2].title}
                  </h3>
                  <p className="text-white/70 text-[9px] sm:text-[10px] font-medium tracking-[1px] uppercase">
                    {galleryItems[2].category}
                  </p>
                </div>
                <div className="text-white/50 text-[11px] font-medium">03</div>
              </div>
            </div>
          </div>

          {/* Item 4 - Small */}
          <div
            className="col-span-2 sm:col-span-4 lg:col-span-3 row-span-1 group relative cursor-pointer overflow-hidden bg-[#e5e5e5]"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={galleryItems[3].image}
              alt={galleryItems[3].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white text-[13px] sm:text-[14px] font-bold tracking-[-0.3px] uppercase mb-1">
                    {galleryItems[3].title}
                  </h3>
                  <p className="text-white/70 text-[9px] font-medium tracking-[1px] uppercase">
                    {galleryItems[3].category}
                  </p>
                </div>
                <div className="text-white/50 text-[10px] font-medium">04</div>
              </div>
            </div>
          </div>

          {/* Item 5 - Medium Wide */}
          <div
            className="col-span-4 sm:col-span-4 lg:col-span-5 row-span-1 group relative cursor-pointer overflow-hidden bg-[#e5e5e5]"
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={galleryItems[4].image}
              alt={galleryItems[4].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white text-[14px] sm:text-[16px] font-bold tracking-[-0.3px] uppercase mb-1">
                    {galleryItems[4].title}
                  </h3>
                  <p className="text-white/70 text-[9px] sm:text-[10px] font-medium tracking-[1px] uppercase">
                    {galleryItems[4].category}
                  </p>
                </div>
                <div className="text-white/50 text-[11px] font-medium">05</div>
              </div>
            </div>
          </div>

          {/* Item 6 - Medium */}
          <div
            className="col-span-4 sm:col-span-4 lg:col-span-4 row-span-1 group relative cursor-pointer overflow-hidden bg-[#e5e5e5]"
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={galleryItems[5].image}
              alt={galleryItems[5].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white text-[14px] sm:text-[16px] font-bold tracking-[-0.3px] uppercase mb-1">
                    {galleryItems[5].title}
                  </h3>
                  <p className="text-white/70 text-[9px] sm:text-[10px] font-medium tracking-[1px] uppercase">
                    {galleryItems[5].category}
                  </p>
                </div>
                <div className="text-white/50 text-[11px] font-medium">06</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1400px] mx-auto mt-12 sm:mt-16 md:mt-20 pt-10 sm:pt-12 md:pt-16 border-t border-[#d0d0d0]">
        <div className="text-center">
          <p className="text-[13px] sm:text-[14px] font-medium tracking-[0.5px] text-[#666] mb-6 sm:mb-8">
            Want to see more?
          </p>
          <button className="group inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] md:text-[13px] font-medium tracking-[1.5px] sm:tracking-[2px] text-[#666] uppercase border border-[#999] px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#333] hover:border-[#333] hover:text-white transition-all duration-300">
            <span>View All Projects</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1 sm:w-3 sm:h-3"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery

