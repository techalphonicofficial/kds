"use client";

import { useState, useEffect } from "react";
import {
    CheckCircle,
    ArrowRight,
    User,
    Mail,
    Phone,
    Globe,
    MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function ServiceHero({ service }) {
    const slides = [
        {
            src: "/industry.png",
            title: "Industrial Staffing Solutions",
            description:
                "Professional manpower solutions for industries and factories.",
        },
        {
            src: "/construction.png",
            title: "Construction Workforce",
            description:
                "Experienced and trained workers for construction projects.",
        },
        {
            src: "/security.png",
            title: "Security Services",
            description:
                "PSARA certified guards and security manpower solutions.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full lg:min-h-screen overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0"
                        }`}
                >
                    <img
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Bluish Overlay */}
                    <div className="absolute inset-0  bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

                    {/* <div className="absolute inset-0 bg-gradient-to-t from-[#04111f]/90 via-[#04111f]/30 to-transparent" /> */}
                </div>
            ))}

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 max-w-7xl lg:min-h-screen flex items-center pt-[120px] lg:pt-[100px] pb-12 lg:pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">

                    {/* Left */}
                    <div className="lg:col-span-7 text-white">
                        <div className="inline-flex items-center gap-2 ">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-white/5 backdrop-blur-sm mb-5 hover:bg-white/10 transition"
                            >
                                <ArrowRight
                                    size={14}
                                    className="rotate-180"
                                />

                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold mr-2">
                                    Back to Services
                                </span>
                            </Link>

                            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-5">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                                    Trusted Manpower Agency
                                </span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-tight mb-5">
                            {service.title}
                        </h1>

                        <p className="text-gray-200 text-base md:text-2xl leading-relaxed max-w-2xl">
                            {service.shortDesc}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 max-w-2xl">
                            {service.features?.slice(0, 4).map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle
                                        size={16}
                                        className="text-blue-400"
                                    />

                                    <span className="text-sm text-gray-200">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:col-span-5 flex justify-center">

                        <div className="relative lg:sticky lg:top-28 w-full max-w-[500px]">
                            <div className="w-full bg-white rounded-[24px] overflow-hidden shadow-2xl border border-blue-100">

                                {/* Top Image */}
                                <div className="relative h-[110px] overflow-hidden">
                                    <img
                                        src={slides[currentIndex].src}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d47a1]/90 via-[#1565c0]/60 to-transparent" />

                                    <div className="absolute bottom-4 left-5 text-white">
                                        <h3 className="text-xl font-black">
                                            Enquire Now
                                        </h3>

                                        <p className="text-xs text-white/90 mt-1">
                                            Quick manpower assistance
                                        </p>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="p-4 md:p-5">
                                    <form className="space-y-3">

                                        {/* Name + Email */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                            <div>
                                                <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                                                    Full Name
                                                </label>

                                                <div className="relative">
                                                    <User
                                                        size={15}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1565c0]"
                                                    />

                                                    <input
                                                        type="text"
                                                        placeholder="Your name"
                                                        className="w-full h-[42px] pl-12 pr-3 bg-[#f5f9ff] border border-blue-100 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#1565c0]"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                                                    Email
                                                </label>

                                                <div className="relative">
                                                    <Mail
                                                        size={15}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1565c0]"
                                                    />

                                                    <input
                                                        type="email"
                                                        placeholder="Your email"
                                                        className="w-full h-[42px] pl-12 pr-3 bg-[#f5f9ff] border border-blue-100 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#1565c0]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phone + Website */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                            <div>
                                                <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                                                    Phone
                                                </label>

                                                <div className="relative">
                                                    <Phone
                                                        size={15}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1565c0]"
                                                    />

                                                    <input
                                                        type="text"
                                                        placeholder="+91 9876543210"
                                                        className="w-full h-[42px] pl-12 pr-3 bg-[#f5f9ff] border border-blue-100 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#1565c0]"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                                                    Website
                                                </label>

                                                <div className="relative">
                                                    <Globe
                                                        size={15}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1565c0]"
                                                    />

                                                    <input
                                                        type="text"
                                                        placeholder="company.com"
                                                        className="w-full h-[42px] pl-12 pr-3 bg-[#f5f9ff] border border-blue-100 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#1565c0]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                                                Message
                                            </label>

                                            <div className="relative">
                                                <MessageSquare
                                                    size={15}
                                                    className="absolute right-4 top-4 text-[#1565c0]"
                                                />

                                                <textarea
                                                    rows={4}
                                                    placeholder="Tell us your requirements..."
                                                    className="w-full pl-12 pr-3 pt-4 pb-3 bg-[#f5f9ff] border border-blue-100 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#1565c0] resize-none"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full h-[45px] rounded-lg bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white text-sm font-bold hover:opacity-95 transition"
                                        >
                                            Send Enquiry
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}