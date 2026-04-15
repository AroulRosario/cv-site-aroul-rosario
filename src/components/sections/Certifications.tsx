"use client";

import { cvData } from "@/data/cv";
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative">
                    {allCerts.map((cert, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white border border-slate-100 p-10 flex flex-col items-center gap-10 rounded-[2.5rem] transition-all duration-500 text-center ${cert.type === 'tech' ? 'hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:bg-blue-50/10' : 'hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-100/50 hover:bg-violet-50/10'} hover:scale-[1.02]`}
                        >
                            <div className="opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 filter group-hover:drop-shadow-xl">
                                <BrandLogo name={cert.org} size={140} />
                            </div>

                            <div className="w-full flex-grow flex flex-col justify-between pt-4">
                                <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-[0.3em] group-hover:text-slate-900 transition-colors mb-6">
                                    {cert.org}
                                </p>
                                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-3 mb-8">
                                    {cert.title}
                                </h3>
                            </div>

                            <div className="mt-auto">
                                <span className={`text-[10px] font-mono uppercase tracking-[0.25em] px-6 py-2.5 rounded-full border transition-all duration-500 ${cert.type === 'tech' ? 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white' : 'bg-violet-50 text-violet-600 border-violet-100 group-hover:bg-violet-600 group-hover:text-white'}`}>
                                    {cert.type === "tech" ? "Technology" : "Academic"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
