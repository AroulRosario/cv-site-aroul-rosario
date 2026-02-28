"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Education() {
    const academic = cvData.fellowshipsAndSocieties.filter(f => !f.acronym);
    const fellowships = cvData.fellowshipsAndSocieties.filter(f => f.acronym);

    return (
        <section id="education" className="py-24 md:py-48 bg-black relative border-b border-white/10 blueprint-grid overflow-hidden">

            {/* V4.3 Stabilized Background Number */}
            <div className="bg-number top-0 right-0 translate-x-1/4 -translate-y-1/4 text-white/[0.01]">
                04
            </div>

            <div className="content-container">
                <div className="mb-20 md:mb-32">
                    <h2 className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 mb-6">
                        Academic // Credentials
                    </h2>
                    <h3 className="text-huge font-display font-bold text-white uppercase">
                        Education.
                    </h3>
                </div>

                <StaggerContainer className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
                    {academic.map((edu, index) => (
                        <StaggerItem key={index} className="bg-black p-6 md:p-12 group hover:bg-zinc-900/50 transition-colors duration-500">
                            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                                <BrandLogo name={edu.org} size={64} />
                                <div className="flex-1">
                                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em] block mb-3">
                                        Credential-ID: 0{index + 1}
                                    </span>
                                    <h4 className="text-xl md:text-4xl font-display font-medium text-white mb-2 tracking-tight">
                                        {edu.title}
                                    </h4>
                                    <p className="text-base md:text-lg text-zinc-500 font-light">{edu.org}</p>
                                </div>
                                <div className="hidden md:block">
                                    <div className="w-12 h-px bg-white/10 group-hover:w-24 group-hover:bg-white transition-all duration-700" />
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="mt-24 md:mt-48">
                    <h2 className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 mb-10">
                        Professional // Fellowships
                    </h2>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {fellowships.map((f, index) => (
                            <StaggerItem key={index}>
                                <div className="p-6 md:p-10 border border-white/5 bg-zinc-950/50 hover:border-white/20 transition-all duration-500 relative group overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-500" />
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <BrandLogo name={f.org} size={48} />
                                        <div>
                                            <h4 className="text-lg md:text-xl font-display font-medium text-white mb-1 md:mb-2">{f.acronym || f.title}</h4>
                                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{f.org}</p>
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
