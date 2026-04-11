"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Certifications() {
    const allCerts = [
        ...cvData.designAndTechCertifications.map(c => ({ ...c, type: "tech" as const })),
        ...cvData.academicCertifications.map(c => ({ ...c, type: "academic" as const })),
    ];

    return (
        <section id="certifications" className="py-32 relative border-y border-slate-100 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <p className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-6 inline-block px-4 py-1.5 rounded-full border border-slate-100 bg-zinc-50">07 // Certified Excellence</p>
                        <h2 className="text-6xl md:text-8xl font-display font-medium text-slate-900 tracking-tighter leading-[0.85] relative">
                            Certified<br />
                            <span className="text-zinc-300 italic">by the Best.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 font-mono text-sm max-w-xs text-left md:text-right hidden md:block leading-relaxed">
                        {allCerts.length} professional certifications from the world&apos;s most prestigious academic institutions and technology leaders.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-24 relative">
                    {allCerts.map((cert, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-slate-100 p-8 flex flex-col items-center gap-6 rounded-3xl hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 text-center"
                        >
                            <div className="opacity-70 group-hover:opacity-100 transition-all duration-500">
                                <BrandLogo name={cert.org} size={80} />
                            </div>

                            <div className="w-full flex-grow flex flex-col justify-between">
                                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors mb-4">
                                    {cert.org}
                                </p>
                                <p className="text-sm font-display font-medium text-slate-900 leading-relaxed group-hover:text-zinc-600 transition-colors line-clamp-3 mb-6">
                                    {cert.title}
                                </p>
                            </div>

                            <div>
                                <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-slate-100 bg-zinc-50 text-slate-400 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all duration-500">
                                    {cert.type === "tech" ? "Tech" : "Academic"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative overflow-hidden py-10 border-t border-b border-slate-100 bg-zinc-50/50">
                    <motion.div
                        className="flex gap-20 whitespace-nowrap items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        {[...allCerts, ...allCerts].map((cert, i) => (
                            <span key={i} className="text-xs font-mono text-zinc-300 uppercase tracking-[0.3em] shrink-0 hover:text-slate-900 transition-colors cursor-default">
                                {cert.title}
                                <span className="mx-10 text-zinc-200">✦</span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
