import { cvData } from "@/data/cv";
import { ArrowUpRight, GraduationCap, Microscope, Rocket } from "lucide-react";

const PILLARS = [
    {
        icon: Microscope,
        title: "Scientific Research",
        desc: "Published in CERN, Cambridge, and Harvard Dataverse. Architecting neuro-cognitive learning frameworks with global impact.",
        color: "text-blue-600",
        bg: "bg-blue-50/30",
        border: "border-blue-100",
    },
    {
        icon: Rocket,
        title: "EdTech Founder",
        desc: "Visionary behind OG Chemistry and Neural Review. Delivering 10,000+ AI-driven educational simulations worldwide.",
        color: "text-violet-600",
        bg: "bg-violet-50/30",
        border: "border-violet-100",
    },
    {
        icon: GraduationCap,
        title: "Global Impact",
        desc: "Elite Speaker at IIT Delhi and Strategic Judge for BITS Pilani. Consulting on nationwide educational transformations.",
        color: "text-emerald-600",
        bg: "bg-emerald-50/30",
        border: "border-emerald-100",
    },
];

export function AboutNew() {
    return (
        <section id="about" className="py-24 md:py-48 relative overflow-hidden bg-white">
            {/* Subtle elite background gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-5xl mx-auto text-center lg:text-left">
                    <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-[0.5em] mb-10 block">
                        02 // Perspective & Vision
                    </span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-slate-900 tracking-[-0.04em] leading-[0.8] mb-12">
                        Architect of <br />
                        <span className="gradient-text">Pedagogical Innovation.</span>
                    </h2>
                    <p className="text-2xl md:text-3xl text-slate-500 font-medium leading-relaxed max-w-4xl mb-20 tracking-tight">
                        Dr. S. Aroul Rosario is a serial ed-tech founder, STEM researcher, and global strategist—bridging the chasm between deep scientific inquiry and high-scale digital empowerment.
                    </p>

                    {/* Core Pillars — Elite static cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 w-full">
                        {PILLARS.map((p, i) => (
                            <div
                                key={p.title}
                                className={`${p.bg} ${p.border} border rounded-[3rem] p-12 text-left hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-700 hover:-translate-y-2 group`}
                            >
                                <div className={`w-16 h-16 rounded-2xl ${p.bg} border ${p.border} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                                    <p.icon className={`w-7 h-7 ${p.color}`} />
                                </div>
                                <h4 className="text-xl md:text-2xl font-display font-bold text-slate-900 uppercase tracking-widest mb-4">{p.title}</h4>
                                <p className="text-base text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Action */}
                    <div className="pt-24 flex justify-center lg:justify-start">
                        <a 
                            href="#experience" 
                            className="group inline-flex items-center gap-6 bg-slate-900 text-white px-10 py-5 rounded-full hover:bg-indigo-600 transition-all duration-700 shadow-xl shadow-slate-200"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Full Portfolio</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
