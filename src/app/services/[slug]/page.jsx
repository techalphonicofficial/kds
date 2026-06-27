// app/services/[slug]/page.jsx
import { getServerData } from "@/lib/data";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/ui/ServiceHero";
import { API_ENDPOINTS } from "@/config/api";
import { getBySlug } from "@/lib/data";
import { IMAGE_URL } from "@/config/api";
import {
  CheckCircle,
  ArrowRight,
  Info,
  Shield,
  Zap,
  Award,
  User,
  Mail,
  Phone,
  Globe,
  MessageSquare,
  MapPin,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import SubServiceCard from "@/components/ui/SubServiceCard";
import ServiceDetailLocationTabs from "@/components/ui/ServiceDetailLocationTabs";
import HeroBanner from "@/components/ui/heroBanner";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  try {
    const response = await getBySlug(API_ENDPOINTS.SERVICES_SLUG, slug);
    const serviceData = response?.data;

    // Load fallback data from getServerData
    const localData = await getServerData();
    const localService = localData.services?.find((s) => s.slug === slug);

    if (!serviceData && !localService) {
      return { title: "Service Not Found | KDS International" };
    }

    const title = serviceData?.title || localService?.title || slug;
    const metaTitle = serviceData?.meta_title || localService?.meta_title || `${title} | KDS International`;
    const metaDescription = serviceData?.meta_description || localService?.meta_description || localService?.shortDesc || "";
    const metaKeyword = serviceData?.meta_keyword || localService?.meta_keyword || `${title}, manpower services, staffing solutions`;
    const imagePath = serviceData?.image || localService?.image || "/services/og-default.jpg";
    const imageUrl = imagePath.startsWith("http")
      ? imagePath
      : imagePath.startsWith("/")
        ? `${IMAGE_URL}${imagePath}`
        : `${IMAGE_URL}/${imagePath}`;

    return {
      title: metaTitle,
      description: metaDescription,
      keywords: metaKeyword,
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        images: [{ url: imageUrl }],
      },
      other: {
        "script:type": typeof serviceData?.meta_schema === "string"
          ? serviceData.meta_schema
          : JSON.stringify(serviceData?.meta_schema || []),
      },
    };
  } catch (error) {
    console.error("Error generating service metadata:", error);
    return { title: "Service Solutions | KDS International" };
  }
}

// export async function generateStaticParams() {
//   try {
//     const data = await getServerData();
//     console.log("generateStaticParams - generating for slugs:", data.services.map(s => s.slug));
//     return data.services.map((service) => ({
//       slug: service.slug,
//     }));
//   } catch (error) {
//     console.error("Error generating static params:", error);
//     return [];
//   }
// }

export default async function ServiceDetailPage({ params }) {


  try {

    const { slug } = await params;


    const response = await getBySlug(API_ENDPOINTS.SERVICES_SLUG, slug);
    const sections = response.data.sections.reduce(
      (acc, section) => {
        acc[section.section_key] = section;
        return acc;
      },
      {}
    );


    const hero_section = sections.hero_section;
    const content = sections.content_key;
    const benefit = sections.benefits;
    const advantage = sections.Advantage
    const related = sections.related_service;
    const stats = sections.why_choose;
    const needService = sections.need_service;
    const needManpower = sections.Need_manpower;
   
   
    const locations = (response.data.states || []).map((stateItem) => ({
      state: stateItem.state?.slug || stateItem.slug,
      stateLabel: stateItem.state?.name || stateItem.title,
      cities: (stateItem.cities || []).map((cityItem) => ({
        slug: cityItem.city?.slug || cityItem.slug,
        label: cityItem.city?.name || cityItem.alt_text || ""
      }))
    }));

    const service = {
      title: hero_section?.title || "",
      slug: slug,
      locations: locations
    };



    const tableContents = [
      { id: "overview", label: "Overview" },
      { id: "features", label: "Key Features" },
      { id: "benefits", label: "Benefits" },
      { id: "content", label: "Detailed Info" },
      { id: "locations", label: "Locations" },
    ];

    return (
      <main className="scroll-smooth overflow-x-clip bg-white dark:bg-[#0d1117] transition-colors duration-500">
        {response.data?.meta_schema?.[0]?.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: typeof response.data.meta_schema[0].schema === "string"
                ? response.data.meta_schema[0].schema
                : JSON.stringify(response.data.meta_schema[0].schema)
            }}
          />
        )}

        <ServiceHero service={hero_section} />

        {/* <section className="relative mt-5 pt-5 pb-5 hero-bg overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1565c0]/10 glow-blob rounded-full blur-[120px]" />
          <div className="container mx-auto mt-5 px-6 max-w-7xl relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              Left Column - Service Info
              <div
                className="animate-fade-in-up transition-colors duration-500"
                style={{ animationDelay: "0.1s" }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border-[#1565c0]/70 mb-2 animate-fade-in-up hover:border-[#1565c0] transition-colors group w-fit"
                >
                  <ArrowRight
                    size={14}
                    className="group-hover:-translate-x-1 transition-transform rotate-180 text-white"
                  />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1565c0]">
                    Back to All Services
                  </span>
                </Link>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black !text-gray-200 dark:text-white mb-6 leading-[1.1] tracking-tighter transition-colors duration-500"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {service.title}
                </h1>
                <p className="text-gray-300 dark:text-[#8b949e] text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl italic transition-colors duration-500">
                  {service.shortDesc}
                </p>

                Quick Features Preview
                <div className="flex flex-wrap gap-3 mt-6">
                  {service.features?.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white dark:bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-[#1565c0]/20">
                      <CheckCircle size={14} className="text-[#1565c0]" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">{feature.substring(0, 20)}...</span>
                    </div>
                  ))}
                </div>
              </div>

              Right Column - Enquiry Form
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-white dark:bg-[#0d1117]/90 backdrop-blur-xl rounded-[2rem] p-4 md:p-8 border border-gray-200 dark:border-white/5 shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                      Enquire About This Service
                    </h3>
                    <p className="text-gray-600 dark:text-[#8b949e] text-sm">
                      Fill in your details and we'll get back to you within 24 hours
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
                      Name Field
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300  mb-2">
                          Full Name <span className="text-[#1565c0]">*</span>
                        </label>
                        <div className="relative">
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full ps-5 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] text-gray-900 dark:text-white text-sm transition-all"
                          />
                        </div>
                      </div>

                      Email Field
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300  mb-2">
                          Email Address <span className="text-[#1565c0]">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="john@company.com"
                            className="w-full  ps-5 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] text-gray-900 dark:text-white text-sm transition-all"
                          />
                        </div>
                      </div>

                      Phone Field
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-gray-700 dark:text-gray-300  mb-2">
                          Phone Number <span className="text-[#1565c0]">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="+1 (555) 000-0000"
                            className="w-full ps-5 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] text-gray-900 dark:text-white text-sm transition-all"
                          />
                        </div>
                      </div>

                      Website Field
                      <div>
                        <label htmlFor="website" className="block text-xs font-medium text-gray-700 dark:text-gray-300  mb-2">
                          Website (Optional)
                        </label>
                        <div className="relative">
                          <Globe size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="url"
                            id="website"
                            name="website"
                            placeholder="https://yourcompany.com"
                            className="w-full ps-5 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] text-gray-900 dark:text-white text-sm transition-all"
                          />
                        </div>
                      </div>

                    </div>

                    Message Field
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Message <span className="text-[#1565c0]">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare size={16} className="absolute left-4 top-4 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          placeholder="Tell us about your requirements..."
                          className="w-full ps-5 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] text-gray-900 dark:text-white text-sm transition-all resize-none"
                        />
                      </div>
                    </div>

                    Hidden field for service name
                    <input type="hidden" name="service" value={service.title} />

                    Submit Button
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1565c0] to-[#0d47a1] text-white font-bold py-2 px-6 rounded-xl hover:from-[#1976d2] hover:to-[#1565c0] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#1565c0]/50 flex items-center justify-center gap-2 group"
                    >
                      <span>Send Enquiry</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* ─── CONTENT SECTION ─────────────────────────────────────────── */}
        <section className=" relative  flex flex-row mt-16 lg:mt-16">

          {/* table of contents */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28">

              {/* Wrapper */}
              <div className=" p-4  ">

                {/* Items */}
                <div className="space-y-3">

                  {tableContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="group relative flex items-center gap-4 rounded-xl border border-blue-100 bg-gradient-to-r from-[#1565c0] to-[#1976d2] px-1 py-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100"
                    >


                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />


                      <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-black shrink-0">

                        {String(index + 1).padStart(2, "0")}

                      </div>


                      <div className="relative z-10 flex-1">

                        <p className="text-gray-300 font-bold text-[15px] leading-none">
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
              <div className="mx-4 mt-6 p-2 rounded-2xl bg-gradient-to-br from-[#0d47a1] to-[#1565c0] text-white shadow-xl relative overflow-hidden group">

                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">

                  <h4 className="font-black text-lg mb-2">
                    {needManpower?.title}
                  </h4>

                  <p className="text-white/80 text-xs leading-relaxed mb-4">
                    {needManpower?.subtitle}
                  </p>

                  <Link
                    href={needManpower?.url_path || "/contact"}
                    className="inline-flex items-center justify-center gap-2 w-full py-2 bg-white text-[#1565c0] font-black text-xs uppercase tracking-wider rounded-xl hover:bg-blue-50 transition-colors duration-300 active:scale-95 shadow-lg shadow-[#0d47a1]/20"
                  >

                    <Phone size={12} />

                    <span>
                      {needManpower?.description
                        ?.replace(/<[^>]*>/g, "") || "Talk to Expert"}
                    </span>

                  </Link>

                </div>

              </div>

            </div>
          </div>

          <div className="container mx-auto my-2.5 px-6 max-w-7xl ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">


              {/* Main Content */}
              <div
                className="lg:col-span-2 space-y-12 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {/* Description */}
                <div id="overview" className="scroll-mt-28 bg-white dark:bg-transparent premium-glass p-4 md:p-3 rounded-[2rem] border border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                    {content.title}
                  </h2>
                  <p className="text-gray-600 dark:text-[#8b949e] text-lg leading-relaxed transition-colors duration-500">
                    {content.description.replace(/<[^>]*>/g, "")}
                  </p>
                </div>

                {/* Features */}
                <div id="features" className="scroll-mt-28 my-4">

                  <h3
                    className="text-2xl font-black text-gray-900 dark:text-white tracking-tight transition-colors duration-500 mb-2"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {content.extra_data?.map((text, idx) => (
                      <div>
                        {text.key}
                      </div>
                    ))}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {content.extra_data?.map((feature, idx) => (
                      feature.points?.slice(0, 4).map((item, i) => (

                        <div
                          key={`${idx}-${i}`}
                          className="flex items-start gap-3 p-4 bg-white dark:bg-transparent premium-glass border border-gray-200 dark:border-white/5 rounded-xl hover:border-[#1565c0]/40 transition-all group"
                        >

                          <CheckCircle
                            size={20}
                            className="text-[#1565c0] shrink-0 mt-0.5"
                          />

                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {item.point}
                          </span>

                        </div>

                      ))
                    ))}

                  </div>

                </div>

                {/* Benefits */}
                {benefit && (
                  <div id="benefits" className="scroll-mt-28 my-4">
                    <h3
                      className="text-2xl font-black text-gray-900 dark:text-white tracking-tight transition-colors duration-500"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {benefit.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {benefit.points?.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#161b22] rounded-xl"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1565c0] mt-2" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {benefit.point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Content Sections from the service.content array */}
                {advantage && (
                  <div
                    id="content"
                    className="scroll-mt-28 my-4 pt-3 border-t border-gray-200 dark:border-white/5"
                  >

                    {/* Title */}
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                      {advantage.title}
                    </h3>


                    {/* Subtitle */}
                    {advantage.subtitle && (
                      <p className="text-gray-600 dark:text-[#8b949e] leading-relaxed mt-2">
                        {advantage.subtitle}
                      </p>
                    )}


                    {/* Pointer Box */}
                    {advantage?.extra_data?.map((item, idx) => (
                      <div
                        key={item.key}
                        className="bg-[#1565c0]/5 p-4 my-4 rounded-2xl border border-[#1565c0]/10"
                      >

                        <h4 className="font-black text-gray-900 dark:text-white mb-4">
                          {item.key}
                        </h4>

                        <ul className="my-3 ps-1">

                          {item.points?.map((pointer, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 my-3"
                            >

                              <CheckCircle
                                size={18}
                                className="text-[#1565c0] shrink-0 mt-0.5"
                              />

                              <span className="text-gray-600 dark:text-gray-400 text-sm">
                                {pointer.point}
                              </span>

                            </li>
                          ))}

                        </ul>

                      </div>
                    ))}

                    {/* Description */}
                    {advantage.description && (
                      <p className="text-gray-600 dark:text-[#8b949e] leading-relaxed">
                        {advantage.description.replace(/<[^>]*>/g, "")}
                      </p>
                    )}

                  </div>
                )}

              </div>

              {/* Sidebar */}
              <aside
                className="space-y-8 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >

                {/* blog image */}
                <div className="bg-gray-200 dark:bg-[#161b22] border border-gray-300 dark:border-white/5 rounded-3xl overflow-hidden">
                  <img
                    src={`${IMAGE_URL}/${related.image}`}
                    alt={related.alt_text}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Related Services */}

                <div className="bg-white dark:bg-transparent premium-glass p-4 rounded-[2rem] border border-gray-200 dark:border-white/5">
                  <h3 className="text-gray-900 dark:text-white font-black text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Info size={16} className="text-[#1565c0]" />
                    {related.title}
                  </h3>
                  <div className="my-3">
                    {related.extra_data.map((s) => (
                      <Link
                        key={s.key}
                        href={`/services/${s.url_path}`}
                        className="flex items-center justify-between group p-3 mb-3  rounded-xl border border-transparent hover:border-[#1565c0]/20 hover:bg-[#1565c0]/5 transition-all"
                      >
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-gray-900 dark:group-hover:text-white">
                          {s.key}
                        </span>
                        <ArrowRight
                          size={16}
                          className="text-[#1565c0] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                        />
                      </Link>
                    ))}
                  </div>
                </div>


                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-[#1565c0] to-[#0d47a1] rounded-[2rem] p-4 text-white mt-4">

                  <h3 className="text-xl font-black mb-4">
                    {stats.title}
                  </h3>

                  <div className="space-y-4">

                    {stats?.extra_data?.slice(0, 3).map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center border-b border-white/20 py-3 last:border-0"
                      >

                        <span className="text-white/80 text-sm">
                          {stat.key}
                        </span>

                        <span className="font-black text-lg">
                          {stat.value}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

                {/* CTA */}
                <div className="bg-gray-900 dark:bg-[#0d1117] rounded-[2rem] p-4 text-center border border-gray-200 dark:border-white/5 mt-4">

                  <h3 className="text-xl font-black text-white mb-3">
                    {needService?.title}
                  </h3>

                  <p className="text-gray-200 text-sm mb-3">
                    {needService?.subtitle}
                  </p>

                  <Button
                    href={needService?.url_path || "/contact"}
                    className="w-full bg-[#1565c0] text-white hover:bg-[#0d47a1] border-none"
                  >
                    {needService?.description?.replace(/<[^>]*>/g, "") || "Request Quote"}
                  </Button>

                </div>
              </aside>
            </div>

            {/* ─── LOCATIONS WE SERVE ───────────────────────────────────────── */}
            {service.locations && service.locations.length > 0 && (
              <section id="locations" className="scroll-mt-28 bg-gray-50 dark:bg-[#161b22]/30 relative overflow-hidden transition-colors duration-500 p-4 rounded">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1565c0]/5 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                  <div className="mb-3 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <MapPin size={14} className="text-[#1565c0]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1565c0]">
                        Service Locations
                      </span>
                    </div>
                    <h2
                      className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-4 transition-colors duration-500"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      Where We Serve —{" "}
                      <span className="text-[#1565c0]">
                        {service.locations.map((l) => l.stateLabel).join(", ")}
                      </span>
                    </h2>
                    <p className="text-gray-600 dark:text-[#8b949e] text-lg max-w-2xl leading-relaxed transition-colors duration-500">
                      KDS International provides <strong className="text-gray-900 dark:text-white">{service.title}</strong> across
                      multiple states and cities. Select your state and city to get
                      location-specific details.
                    </p>
                  </div>
                  <ServiceDetailLocationTabs service={service} />
                </div>
              </section>
            )}


          </div>
        </section>

      </main>
    );
  } catch (error) {
    console.error("Error loading service:", error);
    notFound();
  }
}