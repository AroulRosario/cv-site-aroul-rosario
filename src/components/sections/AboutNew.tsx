"use client";

import { cvData } from "@/data/cv";
import { ArrowUpRight, GraduationCap, Microscope, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const PILLARS = [
    {
        icon: Microscope,
        title: "Research",
        desc: "Published in CERN, Cambridge, and Harvard Dataverse. Focusing on neuro-cognitive learning frameworks.",
        color: "text-blue-500",
        bg: "bg-blue-50",
        border: "border-blue-100",
    },
    {
        icon: Rocket,
        title: "Founder",
        desc: "Architect of OG Chemistry and Neural Review. Delivering 10,000+ AI-powered simulations globally.",
        color: "text-violet-500",
        bg: "bg-violet-50",
        border: "border-violet-100",
    },
    {
        icon: GraduationCap,
        title: "Impact",
        desc: "Invited Speaker at IIT Delhi. Guest Judge for the EdTech Pitching Competition at BITS Pilani.",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
    },
];

export function AboutNew() {
    return (
        <section id="about" className="py-24 md:py-40 relative overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center lg:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-mono text-indigo-500 uppercase tracking-[0.5em] mb-8 block"
                    >
                        02 // Perspective
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9] mb-10"
                    >
                        Architect of <br />
                        <span className="gradient-text">Pedagogical Innovation.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl"
                    >
                        Dr. S. Aroul Rosario is a serial ed-tech founder, STEM researcher, and educational strategist. 
                        He bridges the gap between deep scientific inquiry and high-scale digital empowerment.
                    </motion.p>

                    {/* Core Pillars — colorful cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 w-full">
                        {PILLARS.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i + 0.3 }}
                                className={`${p.bg} ${p.border} border rounded-2xl p-8 text-left hover:shadow-lg transition-all duration-500`}
                            >
                                <div className={`w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center mb-5`}>
                                    <p.icon className={`w-5 h-5 ${p.color}`} />
                                </div>
                                <h4 className="text-base font-display font-bold text-slate-900 uppercase tracking-wider mb-3">{p.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Action */}
                    <div className="pt-12 flex justify-center lg:justify-start">
                        <a 
                            href="/experience" 
                            className="group inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-indigo-600 transition-all duration-500"
                        >
                            <span className="text-sm font-semibold uppercase tracking-wider">Full Portfolio</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
