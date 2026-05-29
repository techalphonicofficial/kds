import { solutionsData } from "@/lib/solutionsAndTechData";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Shield,
  Truck,
  Warehouse,
  Server,
  LayoutGrid,
  ArrowRight,
  Sparkles,
  ChevronRight,
  TrendingUp
} from "lucide-react";

export const metadata = {
  title: "Industrial & Workforce Solutions | KDS International",
  description: "Explore our comprehensive suite of solutions including workforce management, facility operations, security surveillance, warehouse operations, and logistics coordination.",
};

const IconMap = {
  Briefcase: Briefcase,
  Building2: Building2,
  ShieldCheck: Shield,
  Truck: Truck,
  Warehouse: Warehouse,
  Server: Server,
  LayoutGrid: LayoutGrid,
};

const caseStudies = [
  {
    title: "Optimizing 2.5M Sq. Ft Warehouse Facility Operations",
    category: "Warehouse & Facilities",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    desc: "How we deployed 350+ skilled staff and automated tracking to reduce inventory leakage by 94%.",
    link: "/contact"
  },
  {
    title: "Real-time CCTV Monitoring & Surveillance Deployment",
    category: "Surveillance & Security",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
    desc: "Deployment of smart AI patrol tracking and remote guard systems for a major industrial manufacturer.",
    link: "/contact"
  },
  {
    title: "On-Demand Shift Scheduling for Automotive Assembly Plant",
    category: "Workforce Management",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
    desc: "Architected a zero-downtime labor replacement model handling 24/7 rotational shifts.",
    link: "/contact"
  }
];

export default function SolutionsPage() {
  return (
    <main className="overflow-hidden  dark:bg-[#0d1117] transition-colors duration-500">
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section 
        className="relative  mt-16 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop')" }}
      >
        {/* Dark brand gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020d1f]/95 via-[#06111e]/85 to-[#06111e]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-90" />
        
        {/* Visual Background grid and glow blobs */}
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#1565c0]/15 glow-blob rounded-full blur-[120px]" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-teal-500/10 glow-blob rounded-full blur-[100px]" />

        <div className="container mx-auto px-6  max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border-[#1565c0]/30 mb-8 animate-fade-in-up">
              <Sparkles size={14} className="text-[#1565c0]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1565c0]">
                Architecting Efficiency
              </span>
            </div>
            <h1
              className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter animate-fade-in-up"
              style={{ animationDelay: "0.1s", fontFamily: "Outfit, sans-serif" }}
            >
              Tailored Solutions.
              <br />
              <span className="gradient-text">Streamlined Success.</span>
            </h1>
            <p
              className="text-gray-300 dark:text-[#8b949e] text-lg md:text-xl leading-relaxed mb-12 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Discover structured operational frameworks designed to optimize costs, minimize compliance risk, and deliver verified project continuity across your sites.
            </p>
            <div
              className="animate-fade-in-up mb-4"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                href="/contact"
                size="lg"
                className="shadow-2xl shadow-[#1565c0]/20 font-bold"
              >
                Consult an Expert <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-[#161b22] border-y border-gray-200 dark:border-white/5 py-8 relative z-10 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {[
              { label: "Compliance Assured", val: "100%", sub: "PF, ESIC & Laws" },
              { label: "SLA Adherence Rate", val: "99.8%", sub: "Guaranteed Response" },
              { label: "Active Deployments", val: "450+", sub: "Across Major Sites" },
              { label: "Unified Platform", val: "24/7", sub: "Control & Tracking" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-black text-[#1565c0]" style={{ fontFamily: "Outfit, sans-serif" }}>{stat.val}</span>
                <span className="text-xs font-black text-gray-800 dark:text-gray-200 mt-1 uppercase tracking-wider">{stat.label}</span>
                <span className="text-[10px] text-gray-400 dark:text-[#8b949e]">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID ────────────────────────────────────────── */}
      <section id="explore-solutions" className="section-padding relative bg-white dark:bg-[#0d1117] transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <SectionTitle
              label="Our Solutions"
              title="Targeted Operational Frameworks"
              subtitle="We coordinate skilled manpower, workflows, and infrastructure to build highly reliable specialized environments for your business."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsData.map((sol, index) => {
              const Icon = IconMap[sol.iconName] || LayoutGrid;
              return (
                <div
                  key={index}
                  className="group flex flex-col bg-white dark:bg-[#161b22]/50 premium-glass rounded-[2rem] border border-gray-200 dark:border-white/5 hover:border-[#1565c0]/40 dark:hover:border-[#1565c0]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(21,101,192,0.15)] overflow-hidden"
                >
                  {/* Category Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={sol.image}
                      alt={sol.category}
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1565c0]/80 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                        <Icon size={18} />
                      </div>
                      <h3
                        className="text-white font-black text-lg tracking-tight"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {sol.category}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 px-4 dark:text-[#8b949e] text-sm leading-relaxed mb-6">
                      {sol.description}
                    </p>

                    <div className="border-t px-4 border-gray-100 dark:border-white/5 pt-4 mb-6">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#1565c0] mb-3">Key Capabilities</p>
                      <div className="flex flex-col gap-2">
                        {sol.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={`/solutions/${item.slug}`}
                            className="flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-[#1565c0] dark:hover:text-[#90caf9] transition-colors py-1 group/link"
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1565c0]" />
                              {item.name}
                            </span>
                            <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#1565c0] dark:text-[#90caf9]" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* CTA link */}
                    <div className="mt-auto py-4 px-4  border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
                      <Link
                        href={`/solutions/${sol.items[0]?.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1565c0] hover:text-[#0d47a1] transition-colors"
                      >
                        Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">KDS Solution</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES SHOWCASE ────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50 dark:bg-[#161b22]/30 border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="inline-block text-[#1565c0] font-black text-xs uppercase tracking-[0.2em] mb-3">
                Proven Deployments
              </span>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Solutions in Action
              </h2>
              <p className="text-[#8b949e] text-base mt-4 leading-relaxed">
                Read how our integrated approach delivers measurable business improvements and operational security for industrial giants.
              </p>
            </div>
            <div>
              <Button href="/contact" className="font-bold flex items-center gap-2">
                Request Case Studies <TrendingUp size={16} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="group bg-white dark:bg-[#0d1117] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-[#1565c0]/30 transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-wider py-1 px-3 rounded-full">
                    {cs.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 px-4 dark:text-white font-bold text-lg mb-3 tracking-tight group-hover:text-[#1565c0] transition-colors" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {cs.title}
                  </h3>
                  <p className="text-gray-600 px-4 dark:text-[#8b949e] text-sm leading-relaxed mb-6">
                    {cs.desc}
                  </p>
                  <Link href={cs.link} className="inline-flex items-center gap-1 p-4 text-xs font-bold uppercase tracking-wider text-[#1565c0] hover:text-[#0d47a1]">
                    Contact Representative <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#0d47a1] to-[#1565c0]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Deploy Certified Solutions <br />
            For Your Enterprise.
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            From emergency roster replacements to high-compliance building operations, KDS International architects custom frameworks that match your criteria.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              href="/contact"
              size="lg"
              className="bg-gray-900 text-white hover:bg-black border-none shadow-2xl px-8 py-4 font-bold"
            >
              Request Proposal
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1565c0] px-8 py-4 font-bold"
            >
              About Our Security
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
