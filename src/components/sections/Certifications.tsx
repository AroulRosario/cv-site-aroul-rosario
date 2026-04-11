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
                        <span className="inline-flex items-center gap-2 text-violet-600 font-mono text-xs tracking-widest uppercase mb-6 bg-violet-50 px-4 py-2 rounded-full border border-violet-100">
                            07 // Certified Excellence
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9] relative">
                            Certified<br />
                            <span className="gradient-text">By the Best.</span>
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
                            className={`group relative bg-white border border-slate-100 p-8 flex flex-col items-center gap-8 rounded-3xl transition-all duration-500 text-center ${cert.type === 'tech' ? 'hover:border-blue-300 hover:shadow-blue-100/50 hover:bg-blue-50/20' : 'hover:border-violet-300 hover:shadow-violet-100/50 hover:bg-violet-50/20'} hover:shadow-xl`}
                        >
                            <div className="opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                                <BrandLogo name={cert.org} size={110} />
                            </div>

                            <div className="w-full flex-grow flex flex-col justify-between pt-2">
                                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors mb-4">
                                    {cert.org}
                                </p>
                                <p className="text-sm md:text-base font-display font-bold text-slate-900 leading-relaxed group-hover:text-indigo-600 transition-colors line-clamp-3 mb-6">
                                    {cert.title}
                                </p>
                            </div>

                            <div>
                                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all duration-500 ${cert.type === 'tech' ? 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white' : 'bg-violet-50 text-violet-600 border-violet-100 group-hover:bg-violet-600 group-hover:text-white'}`}>
                                    {cert.type === "tech" ? "Tech" : "Academic"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative overflow-hidden py-10 border-t border-b border-indigo-100 bg-gradient-to-r from-indigo-50/30 via-violet-50/50 to-indigo-50/30">
                    <motion.div
                        className="flex gap-20 whitespace-nowrap items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        {[...allCerts, ...allCerts].map((cert, i) => (
                            <span key={i} className="text-sm font-mono text-indigo-300 uppercase tracking-[0.3em] shrink-0 hover:text-indigo-600 transition-colors cursor-default">
                                {cert.title}
                                <span className="mx-10 text-indigo-200">✦</span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
