"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Education() {
    const academic = cvData.fellowshipsAndSocieties.filter(f => !f.acronym);
    const fellowships = cvData.fellowshipsAndSocieties.filter(f => f.acronym);

    return (
        <section id="education" className="py-48 bg-black relative border-b border-white/10 blueprint-grid">

            {/* Background Index */}
            <div className="absolute top-10 right-10 text-white/[0.02] font-display font-bold text-[25vw] leading-none pointer-events-none select-none">
                04
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-32">
                    <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-8">
                        Academic // Credentials
                    </h2>
                    <h3 className="text-huge font-display font-bold text-white uppercase -ml-1">
                        Education.
                    </h3>
                </div>

                <StaggerContainer className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
                    {academic.map((edu, index) => (
                        <StaggerItem key={index} className="bg-black p-8 md:p-12 group hover:bg-zinc-900/50 transition-colors duration-500">
                            <div className="flex flex-col md:flex-row md:items-center gap-12">
                                <BrandLogo name={edu.org} size={80} />
                                <div className="flex-1">
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                                        Credential-ID: 0{index + 1}
                                    </span>
                                    <h4 className="text-2xl md:text-4xl font-display font-medium text-white mb-2 tracking-tight">
                                        {edu.title}
                                    </h4>
                                    <p className="text-lg text-zinc-500 font-light">{edu.org}</p>
                                </div>
                                <div className="hidden md:block">
                                    <div className="w-12 h-px bg-white/10 group-hover:w-24 group-hover:bg-white transition-all duration-700" />
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="mt-48">
                    <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-12">
                        Professional // Fellowships
                    </h2>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {fellowships.map((f, index) => (
                            <StaggerItem key={index}>
                                <div className="p-10 border border-white/5 bg-zinc-950/50 hover:border-white/20 transition-all duration-500 relative group overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-500" />
                                    <div className="flex items-start gap-6">
                                        <BrandLogo name={f.org} size={56} />
                                        <div>
                                            <h4 className="text-xl font-display font-medium text-white mb-2">{f.acronym || f.title}</h4>
                                            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">{f.org}</p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}
