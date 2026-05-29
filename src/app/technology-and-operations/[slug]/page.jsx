import { notFound } from "next/navigation";
import { getServerData } from "@/lib/data";
import Image from 'next/image'
import { generateMockData, formatSlugToTitle } from "@/lib/mockDataGenerator";
import ServiceHero from "@/components/ui/ServiceHero";
import {
  CheckCircle,
  ArrowRight,
  Info,
  Monitor,
  Phone,
  Mail,
  MapPin,
  User,
  Globe,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BlogSection from "@/components/ui/BlogSection";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;


  const title = formatSlugToTitle(resolvedParams.slug);

  if (!title) {
    return {
      title: "Technology Not Found",
      description: "The requested technology could not be found."
    };
  }

  return {
    title: `${title} | Tech & Ops | KDS International`,
    description: `Discover how our comprehensive ${title} technology solutions can transform your operational efficiency.`,
  };
}

export default async function TechnologyDetailPage({ params }) {
  try {
    const resolvedParams = await params;
    const data = await getServerData();

    const stat = data.stats
    const service = generateMockData(resolvedParams.slug, "technology");

    if (!service) {
      notFound();
    }

    // Generate some mock "other services" for the sidebar
    const otherServices = [
      { id: "1", title: "Centralized Operations", slug: "centralized-operations" },
      { id: "2", title: "Digital Attendance", slug: "digital-attendance" },
      { id: "3", title: "Live GPS Tracking", slug: "live-gps-tracking" },
    ].filter(s => s.slug !== resolvedParams.slug).slice(0, 3);

    const tableContents = [
      { id: "overview", label: "Overview" },
      { id: "features", label: "Key Features" },
      { id: "benefits", label: "Benefits" },
      { id: "content", label: "Detailed Info" },
    ];

    const blogArticles = [
      {
        category: "Workforce Management",
        title: "Future of Smart Manpower Solutions",
        excerpt:
          "How workforce strategy, automation, and field visibility help businesses deploy stronger teams with less operational friction.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
        href: "/blog",
        readTime: "6 min read",
      },
      {
        category: "Technology",
        title: "AI Powered Staffing",
        excerpt:
          "Use better data to improve hiring speed, attendance tracking, and workforce planning across multiple locations.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
        href: "/blog",
        readTime: "4 min read",
      },
      {
        category: "Operations",
        title: "Scaling Business Operations Efficiently",
        excerpt:
          "Practical ways to align manpower, compliance, and reporting for reliable growth.",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
        href: "/blog",
        readTime: "5 min read",
      },
    ];

    return (
      <main className="scroll-smooth overflow-x-clip bg-white dark:bg-[#0d1117] transition-colors duration-500">

        <ServiceHero service={service} />

        {/* ─── CONTENT SECTION ─────────────────────────────────────────── */}
        <section className="relative flex flex-row mt-16 lg:mt-16">

          {/* table of contents */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28">
              <div className="p-4">
                <div className="space-y-3">
                  {tableContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="group relative flex items-center gap-4 rounded-xl border border-teal-100 dark:border-teal-900/30 bg-gradient-to-r from-teal-600 to-[#1565c0] px-1 py-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-100"
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
                      <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-black shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="relative z-10 flex-1">
                        <p className="text-gray-100 font-bold text-[15px] leading-none">
                          {item.label}
                        </p>
                      </div>
                      <div className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick CTA Block */}
              <div className="mx-4 mt-6 p-2 rounded-2xl bg-gradient-to-br from-teal-700 to-[#0d47a1] text-white shadow-xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <h4 className="font-black text-lg mb-2">Upgrade Your Tech Stack</h4>
                  <p className="text-white/80 text-xs leading-relaxed mb-4">
                    Deploy modern tech solutions like AI tracking, IoT integrations and centralized operations within days.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 bg-white text-teal-700 font-black text-xs uppercase tracking-wider rounded-xl hover:bg-teal-50 transition-colors duration-300 active:scale-95 shadow-lg shadow-teal-900/20"
                  >
                    <Monitor size={12} />
                    <span>Talk to Expert</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right side content */}
          <div className="container mx-auto my-2.5 px-6 max-w-7xl">

            {/* TOP SECTION */}
            {/* PREMIUM OVERVIEW SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 h-[220px] md:h-[300px] overflow-hidden rounded-[1.5rem] border border-gray-200 dark:border-white/5 dark:bg-[#0d1117]  mb-3 py-6">

              {/* LEFT IMAGE */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0" />

                {/* Decorative Shape */}
                <div className="hidden lg:block absolute -right-20 top-0 w-40 h-full bg-white dark:bg-teal-600/10 rotate-12" />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex flex-col justify-center px-8 md:px-14 py-10 md:py-14 relative">

                {/* Small Label */}
                <span className="inline-flex items-center w-fit px-4 py-1.5 mt-2 rounded-full bg-teal-600/10 text-blue-400 text-xs font-black uppercase tracking-[0.25em] mb-3">
                  Overview
                </span>

                {/* Heading */}
                <h2 className="text-2xl  font-black text-gray-900 dark:text-white leading-tight tracking-tight mb-6">
                  Transforming Operations with
                  <span className="block text-blue-700 mt-1 mb-1 text-2xl">
                    {service.title}
                  </span>
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-[#8b949e] text-base md:text-sm leading-relaxed mb-8 max-w-xl">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex gap-4">
                  <Button
                    href="/contact"
                    className="bg-teal-600 hover:bg-teal-700 text-white border-none  font-bold"
                  >
                    Learn More
                  </Button>

                  <Button
                    href="/services"
                    variant="outline"
                    className="border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl font-bold"
                  >
                    Explore Solutions
                  </Button>
                </div>
              </div>
            </div>

            {/* FULL WIDTH IMAGE */}
            {/* <div className="w-full rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/5 shadow-lg mb-12 animate-fade-in-up">
                        <img
                src={service.image}
                alt={service.title}
                className="w-full h-[280px] md:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div> */}

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main Content */}
              <div
                className="lg:col-span-2 space-y-12 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >

                {/* Features */}
                <div id="features" className="scroll-mt-28 my-4">
                  <h3
                    className="text-2xl font-black text-gray-900 dark:text-white tracking-tight transition-colors duration-500 mb-2"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Key Features
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features?.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-white dark:bg-transparent premium-glass border border-gray-200 dark:border-white/5 rounded-xl hover:border-teal-600/40 transition-all group"
                      >
                        <CheckCircle
                          size={20}
                          className="text-teal-600 shrink-0 mt-0.5"
                        />

                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                {service.benefits && (
                  <div id="benefits" className="scroll-mt-28 my-4">
                    <h3
                      className="text-2xl font-black text-gray-900 dark:text-white tracking-tight transition-colors duration-500"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      Benefits
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits?.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#161b22] rounded-xl"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2" />

                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}


                <div className="flex flex-col gap-2 my-8">
                  <div className="flex gap-2 h-48 md:h-64">
                    <div className="flex-1 rounded-lg overflow-hidden">
                      <img src={service.image} alt="Feature showcase" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 rounded-lg overflow-hidden">
                      <img src={service.image} alt="Feature showcase" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex gap-2 h-48 md:h-64">
                    <div className="flex-1 rounded-lg overflow-hidden">
                      <img src={service.image} alt="Feature showcase" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 rounded-lg overflow-hidden">
                      <img src={service.image} alt="Feature showcase" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                {service.content && service.content.length > 0 && (
                  <div
                    id="content"
                    className="scroll-mt-28 my-4 pt-3 border-t border-gray-200 dark:border-white/5"
                  >
                    {service.content.map((item, idx) => {
                      if (item.type === "heading") {
                        return (
                          <h3
                            key={idx}
                            className="text-2xl font-black text-gray-900 dark:text-white mt-8 mb-4"
                          >
                            {item.text}
                          </h3>
                        );
                      } else if (item.type === "paragraph") {
                        return (
                          <p
                            key={idx}
                            className="text-gray-600 dark:text-[#8b949e] leading-relaxed mb-4"
                          >
                            {item.text}
                          </p>
                        );
                      } else if (item.type === "takeaways") {
                        return (
                          <div
                            key={idx}
                            className="bg-teal-600/5 p-4 mb-3 rounded-2xl border border-teal-600/10"
                          >
                            <h4 className="font-black text-gray-900 dark:text-white mb-4">
                              {item.heading}
                            </h4>

                            <ul className="my-3 ps-1">
                              {item.items.map((takeaway, tidx) => (
                                <li
                                  key={tidx}
                                  className="flex items-start gap-3 my-3"
                                >
                                  <CheckCircle
                                    size={18}
                                    className="text-teal-600 shrink-0 mt-0.5"
                                  />

                                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                                    {takeaway}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                )}

                <div>
                  <p className="text-md text-gray-600">
                    Our manpower solutions are designed to help businesses streamline workforce operations with efficiency, reliability, and flexibility. We provide skilled, semi-skilled, and professional staffing services tailored to various industries, ensuring smooth day-to-day operations and long-term productivity. From workforce deployment and operational support to attendance management and compliance handling, our team focuses on delivering dependable manpower solutions that align with modern business requirements and organizational growth.
                    Our manpower solutions are designed to help businesses streamline workforce operations with efficiency, reliability, and flexibility. We provide skilled, semi-skilled, and professional staffing services tailored to various industries, ensuring smooth day-to-day operations and long-term productivity. From workforce deployment and operational support to attendance management and compliance handling, our team focuses on delivering dependable manpower solutions that align with modern business requirements and organizational growth.

                  </p>
                </div>

                <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-lg mb-8 animate-fade-in-up">

                  {/* Background Image */}
                  <Image
                    src="/industry-logistics.png"
                    alt="Industry Logistics"
                    fill
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                    <h2 className="text-white text-4xl md:text-6xl font-black leading-tight mb-8">
                      Elevate Your
                      <span className="block text-blue-300">
                        Manpower
                      </span>
                    </h2>

                    <button className="group flex items-center gap-3 bg-white text-[#1565c0] px-6 py-2 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300">

                      <span>Get Started</span>

                      <span className="w-6 h-6 rounded-full bg-[#1565c0] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        →
                      </span>

                    </button>

                  </div>
                </div>

              </div>



              {/* Sidebar */}
              <aside
                className="space-y-8 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >

                {/* Related Solutions */}
                {otherServices.length > 0 && (
                  <div className="bg-white dark:bg-transparent premium-glass p-4 rounded-[2rem] border border-gray-200 dark:border-white/5 shadow-sm">
                    <h3 className="text-gray-900 dark:text-white font-black text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                      <Info size={16} className="text-teal-600" />
                      Explore Technologies
                    </h3>

                    <div className="my-3">
                      {otherServices.map((s) => (
                        <Link
                          key={s.id}
                          href={`/technology-and-operations/${s.slug}`}
                          className="flex items-center justify-between group p-3 mb-3 rounded-xl border border-transparent hover:border-teal-600/20 hover:bg-teal-600/5 transition-all"
                        >
                          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-gray-900 dark:group-hover:text-white">
                            {s.title}
                          </span>

                          <ArrowRight
                            size={16}
                            className="text-teal-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gray-900 dark:bg-[#0d1117] rounded-[2rem] p-4 text-center border border-gray-200 dark:border-white/5 mt-4">
                  <h3 className="text-xl font-black text-white mb-3">
                    Need This Service?
                  </h3>
                  <p className="text-gray-200 text-sm mb-3">
                    Get in touch with our team for a customized solution.
                  </p>
                  <Button
                    href="/contact"
                    className="w-full bg-[#1565c0] text-white hover:bg-[#0d47a1] border-none"
                  >
                    Request Quote
                  </Button>
                </div>
                {/* enquiry form */}
                <div className="lg:col-span-5 mb-4  flex flex-col items-center  ">
                  <div className="bg-white/5 border border-white/10  rounded-3xl overflow-hidden shadow-2xl shadow-[#1565c0]/10" style={{ backdropFilter: 'blur(2px) ' }}>

                    <div className="h-1 w-full bg-gradient-to-r from-[#0d47a1] via-[#1565c0] to-[#1976d2]" />

                    <div className="p-3 ">
                      <h3 className="text-blue-900 font-black text-xl mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                        Get a Free Consultation
                      </h3>
                      <p className="text-gray-600 text-sm mb-6">Tell us your manpower requirements and we'll respond within 2 hours.</p>

                      <div className="space-y-3 ">
                        {[
                          { icon: Phone, label: "Call Us Directly", value: "+91 9899184918", href: "tel:+919899184918" },
                          { icon: Mail, label: "Email Us", value: "info@kdsinternational.org", href: "mailto:info@kdsinternational.org" },
                          { icon: MapPin, label: "Our Office", value: "Laxmi Nagar, Delhi - 110092", href: "#" },
                        ].map((item, i) => (
                          <a key={i} href={item.href}
                            className="flex items-center gap-4 p-lg-2 p-3 rounded-2xl mb-3 bg-[#1565c0] border border-white/5 hover:border-[#1565c0]/30 transition-all cursor-pointer group">
                            <div className="w-10 h-10 rounded-xl bg-[#1565c0]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1565c0] transition-all">
                              <item.icon size={17} className="text-white group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <p className="text-[10px] text-white uppercase tracking-widest font-bold mb-1">{item.label}</p>
                              <p className="text-white text-sm font-semibold mb-0">{item.value}</p>
                            </div>
                          </a>
                        ))}
                      </div>

                      <Link href="/contact"
                        className="block mt-2 w-full py-3 text-center bg-gradient-to-r from-[#0d47a1] to-[#1565c0] hover:from-[#1565c0] hover:to-[#1976d2] text-white text-sm font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-[#1565c0]/20">
                        Request Manpower Today →
                      </Link>
                    </div>
                  </div>

                </div>

                {/* blog text imge */}
                <div className="relative w-full rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-lg mb-8 animate-fade-in-up">

                  {/* Image */}
                  <img
                    src="https://bairesdev.mo.cloudinary.net/blog/2023/10/Process-Automation-and-Software-Development.jpg?tx=w_1920,q_auto"
                    alt="Feature showcase"
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/50"></div>

                  {/* Text Content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                      Transform Your Business
                    </h2>

                    <p className="text-white/90 text-sm md:text-lg max-w-2xl">
                      Automate workflows, improve efficiency, and scale your digital solutions
                      with modern technology.
                    </p>
                  </div>

                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-[#1565c0] to-[#0d47a1] rounded-[2rem] p-4 text-white mt-4">
                  <h3 className="text-xl font-black mb-4">Why Choose Us</h3>
                  <div className="space-y-4">
                    {stat.slice(0, 3).map((stat) => (
                      <div key={stat.id} className="flex justify-between items-center border-b border-white/20 py-3 last:border-0">
                        <span className="text-white/80 text-sm">{stat.label}</span>
                        <span className="font-black text-lg">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* form */}
                <div className="lg:col-span-5 flex justify-center mb-8">

                  <div className="relative lg:sticky lg:top-28 w-full max-w-[500px]">
                    <div className="w-full bg-white rounded-[24px] overflow-hidden shadow-2xl border border-blue-100">


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
              </aside>


            </div>
          </div>


        </section>

        {/* PREMIUM FEATURES SHOWCASE */}
        <div
          id="features"
          className="relative overflow-hidden"
        >

          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />

            {/* Light Overlay */}
            <div className="absolute inset-0 bg-black/35" />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 md:px-10 py-10 md:py-14 min-h-[520px]">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center max-w-xl">

              {/* Small Tag */}
              <span className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                Enterprise Solutions
              </span>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                Advanced
                <span className="block text-blue-400 mt-1">
                  {service.title}
                </span>
              </h2>

              {/* Description */}
              <p className="text-white text-sm md:text-base leading-relaxed max-w-lg">
                Streamline enterprise operations with scalable technologies,
                intelligent automation, and modern infrastructure solutions
                tailored for evolving business environments.
              </p>
            </div>

            {/* RIGHT FEATURE BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 self-center">

              {service.features?.slice(0, 4).map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[1.5rem] px-5 py-6 shadow-2xl border border-white/30 min-h-[150px] flex flex-col justify-center transition-all duration-300 hover:-translate-y-1"
                >

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-black text-blue-700 mb-3 leading-none">
                    0{idx + 1}
                  </div>

                  {/* Feature Text */}
                  <h4 className="text-sm md:text-base font-bold !text-gray-700  leading-relaxed">
                    {feature}
                  </h4>

                </div>
              ))}

            </div>
          </div>
        </div>
        {/* blog section */}
       <BlogSection/>


      </main>
    );
  } catch (error) {
    console.error("Error loading technology:", error);
    notFound();
  }
}
