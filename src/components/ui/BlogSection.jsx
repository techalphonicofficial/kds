import React from 'react'

function BlogSection() {
  return (
    
     <section className="w-full py-16 md:py-24 overflow-hidden">
          <div className="mx-auto w-full max-w-[1550px] p-4 sm:px-6 lg:px-10">

            {/* Top Heading */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-10">

              {/* Left */}
              <div className="max-w-2xl">

                <span className="inline-block text-[#2563eb] font-bold text-sm md:text-base uppercase tracking-[0.15em] mb-4">
                  Latest Insights & Articles
                </span>

                <h2 className="text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-black text-[#111827] tracking-[-0.03em]">
                  Explore Our Latest Blogs
                  
                </h2>

              </div>

              {/* Right Button */}
              <div className="flex lg:justify-end">

                <button className="group flex items-center gap-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-7 md:px-8 py-2 rounded-2xl font-bold text-sm md:text-base shadow-[0_20px_60px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1">

                  <span>View All Blogs</span>

                  <span className="w-10 h-10 rounded-full bg-white text-[#2563eb] flex items-center justify-center text-lg group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>

                </button>

              </div>

            </div>

            {/* Blog Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-8 items-stretch">

              {/* Left Large Card */}
              <div className="xl:col-span-2 relative min-h-[520px] rounded-[10px] overflow-hidden group shadow-[0_25px_80px_rgba(0,0,0,0.15)]">

                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
                  alt="Blog"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-5 w-full p-6 md:p-10 lg:p-12 ">

                  <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/10 text-white text-[11px] uppercase tracking-[0.25em] font-bold">
                    Workforce Management
                  </span>

                  <h3 className="mt-6 text-white text-3xl sm:text-4xl lg:text-6xl leading-[1.05] font-black tracking-[-0.03em] max-w-4xl">
                    Future Of Smart
                    <span className="block text-blue-300">
                      Manpower Solutions
                    </span>
                  </h3>

                  <p className="mt-5 text-white/80 text-sm md:text-base leading-relaxed max-w-2xl">
                    Discover how modern workforce strategies, automation,
                    and operational technologies are transforming industries globally.
                  </p>

                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-6">

                {/* Small Image Card */}
                <div className="relative h-[250px] rounded-[10px] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                    alt="Blog"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-5 w-full p-6">

                    <h4 className="text-white text-[28px] leading-tight font-black">
                      AI Powered Staffing
                    </h4>

                    <p className="text-white/75 text-sm mt-3 leading-relaxed">
                      Smart hiring with automation, analytics,
                      and workforce optimization.
                    </p>

                  </div>
                </div>

                {/* White Content Card */}
                <div className="bg-white rounded-[10px] px-6 py-8 md:!px-4 md:py-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col justify-center flex-1">

                  <span className="text-[#2563eb] font-black text-xs uppercase tracking-[0.25em] mb-5">
                    Trending Article
                  </span>

                  <h3 className="text-[#111827] text-3xl md:text-4xl leading-[1.15] font-black tracking-[-0.03em] mb-8">
                    How Businesses Scale
                    Operations Efficiently
                  </h3>

                  <button className="group flex items-center gap-3 text-[#2563eb] font-bold text-lg w-fit">

                    <span>Read More</span>

                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>

                  </button>

                </div>

              </div>

            </div>
          </div>
        </section>
  )
}

export default BlogSection
