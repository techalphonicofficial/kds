import React from 'react'
import { IMAGE_URL } from "@/config/api";

function BlogSection({ data }) {

  const featuredBlog = data?.extra_data?.[0];
  const sideBlog = data?.extra_data?.[1];
  const trendingBlog = data?.extra_data?.[2];
  return (

     <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-[1550px] p-4 sm:px-6 lg:px-10">
        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-10">
          {/* Left */}
          <div className="max-w-2xl">
            <span className="inline-block text-[#2563eb] font-bold text-sm md:text-base uppercase tracking-[0.15em] mb-4">
              {data?.title}
            </span>

            <h2 className="text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-black text-[#111827] tracking-[-0.03em]">
              {data?.subtitle}
            </h2>
          </div>

          {/* Right Button */}
          <div className="flex lg:justify-end">
            <button className="group flex items-center gap-4 hover:bg-[#1d4ed8] hover:text-white text-blue-700 px-7 md:px-8 py-2 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 hover:-translate-y-1">
              <span>View All Blogs</span>

              <span className="w-10 h-10 rounded-full hover:text-white text-[#2563eb] flex items-center justify-center text-lg group-hover:translate-x-1 transition-transform duration-300">
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
              src={`${IMAGE_URL}/${featuredBlog?.image}`}
              alt={featuredBlog?.alt_text || featuredBlog?.key}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-5 w-full p-6 md:p-10 lg:p-12">
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/10 text-white text-[11px] uppercase tracking-[0.25em] font-bold">
                {featuredBlog?.key}
              </span>

              <h3 className="mt-6 text-white text-3xl sm:text-4xl lg:text-6xl leading-[1.05] font-black tracking-[-0.03em] max-w-4xl">
                {featuredBlog?.value}
              </h3>

              <p className="mt-5 text-white/80 text-sm md:text-base leading-relaxed max-w-2xl">
                {featuredBlog?.points?.[0]?.point}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            {/* Small Image Card */}
            <div className="relative h-[250px] rounded-[10px] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img
                src={`${IMAGE_URL}/${sideBlog?.image}`}
                alt={sideBlog?.alt_text || sideBlog?.key}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-5 w-full p-6">
                <h4 className="text-white text-[28px] leading-tight font-black">
                  {sideBlog?.key}
                </h4>

                <p className="text-white/75 text-sm mt-3 leading-relaxed">
                  {sideBlog?.value}
                </p>
              </div>
            </div>

            {/* White Content Card */}
            <div className="bg-white rounded-[10px] px-6 py-8 md:!px-4 md:py-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col justify-center flex-1">
              <span className="text-[#2563eb] font-black text-xs uppercase tracking-[0.25em] mb-5">
                {trendingBlog?.key}
              </span>

              <h3 className="text-[#111827] text-3xl md:text-4xl leading-[1.15] font-black tracking-[-0.03em] mb-8">
                {trendingBlog?.value}
              </h3>

              <button className="group flex items-center gap-3 text-[#2563eb] font-bold text-lg w-fit rounded-2xl">
                <span>
                  {trendingBlog?.points?.[0]?.point?.replace("→", "") ||
                    "Read More"}
                </span>

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
