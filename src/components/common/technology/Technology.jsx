'use client'
import React from 'react'
// import { technologyData } from '@/lib/solutionsAndTechData';
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/navigation';
import "swiper/css";
import "swiper/css/autoplay";
import { IMAGE_URL } from  "@/config/api";
import {
  Cpu,
  Users,
  ClipboardCheck,
  FileWarning,
  MapPinned,
  BarChart3,
} from "lucide-react";

const icons = [
  Cpu,
  Users,
  ClipboardCheck,
  FileWarning,
  MapPinned,
  BarChart3,
];

import { Autoplay } from "swiper/modules";
// import { Technology } from '@/components/common/technology/Technology';

const Technology = ({ data }) => {
  const carausalData = data?.carousel_json || [];
  const router = useRouter();
  return (
  
    <section className=" my-10 !py-15 bg-gradient-to-br bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_#1d4ed8_40%,_#0f172a_100%)]">
      <div className='container'>
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="900">
          <h1 className="text-3xl lg:text-5xl font-bold !text-white">
            {data.title}
          </h1>

          <p className="text-white mt-4 text-sm lg:text-base max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100"
            dangerouslySetInnerHTML={{
              __html: data.description || "",
            }}
          />
        </div>

        <div className='flex w-full h-full' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
          <div className='h-[500px] w-[60%] rounded-2xl overflow-hidden' data-aos="fade-right" data-aos-duration="900" data-aos-delay="180">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="h-full"
            >

              {carausalData?.map((slide, index) => (
                <SwiperSlide key={slide.key} className="h-full">

                  <img
                    src={`${IMAGE_URL}/${slide.image}`}
                    className="w-full h-full object-cover transition duration-700 ease-in-out"
                    alt={slide.alt_text || "technology banner"}
                  />

                </SwiperSlide>
              ))}

            </Swiper>
          </div>
          <div className="h-[500px] w-[40%]  ">

            <div className="grid grid-cols-3 h-full gap-3 ml-4 ">

              {data.extra.map((tech, index) => {
                 const Icon = icons[index % icons.length];

                return (
                  <div
                    key={tech.key}
                    data-aos="zoom-in"
                    data-aos-duration="700"
                    data-aos-delay={`${120 + index * 80}`}
                    onClick={() => router.push('technology-and-operations')}
                    className="border border-gray-100 flex flex-col items-center justify-center text-center bg-white hover:bg-gray-50 transition duration-500 ease-out transform rounded-2xl hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  >
                    {/* Circle Icon */}
                    <div className="w-15 h-15 rounded-full bg-[#0b2c6d] flex items-center justify-center border-[6px] border-gray-100 shadow-md mb-1 transition duration-500 ease-out">
                      <Icon size={34} className="text-white" />
                    </div>
                    {/* Title */}
                    <p className="!text-[14px] text-gray-800"
                      dangerouslySetInnerHTML={{
                        __html: tech.key || "",
                      }}
                    />
                    <p className="text-xs text-slate-500 leading-relaxed hidden sm:block p-1"
                      dangerouslySetInnerHTML={{
                        __html: tech.value.substring(0, 80) || "",
                      }} />


                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Technology
