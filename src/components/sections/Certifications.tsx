"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Certifications() {
    return (
        <section id="certifications" className="py-24 md:py-48 bg-black relative border-b border-white/10 blueprint-grid overflow-hidden">

            {/* V4.3 Stabilized Background Number */}
            <div className="bg-number top-0 right-0 translate-x-1/4 -translate-y-1/4 text-white/[0.01]">
                06
            </div>

            <div className="content-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32">

                    {/* Tech Certifications */}
                    <div>
                        <div className="mb-12 md:mb-16">
                            <h2 className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 mb-6">
                                Technical // Domains
                            </h2>
                            <h3 className="text-4xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter">
                                Logic.
                            </h3>
                        </div>

                        <StaggerContainer className="flex flex-col gap-4 md:gap-6">
                            {cvData.designAndTechCertifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <div className="group flex items-center gap-6 md:gap-8 p-6 md:p-8 border border-white/5 bg-zinc-950/30 hover:bg-white/5 hover:border-white/20 transition-all duration-500">
                                        <BrandLogo name={cert.org} size={56} />
                                        <div>
                                            <h4 className="font-display font-medium text-white text-lg md:text-xl mb-1">{cert.title}</h4>
                                            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.3em]">{cert.org}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Academic Certifications */}
                    <div>
                        <div className="mb-12 md:mb-16">
                            <h2 className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 mb-6">
                                Academic // Verification
                            </h2>
                            <h3 className="text-4xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter">
                                Theory.
                            </h3>
                        </div>

                        <StaggerContainer className="flex flex-col border-t border-white/10">
                            {cvData.academicCertifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <div className="group flex flex-col py-8 md:py-10 border-b border-white/10 hover:bg-white/5 transition-all duration-500 px-4">
                                        <div className="flex justify-between items-start mb-4 md:mb-6">
                                            <BrandLogo name={cert.org} size={40} />
                                            <span className="text-[9px] font-mono text-zinc-700 group-hover:text-zinc-400 uppercase tracking-widest">VERIFIED-A0{index + 1}</span>
                                        </div>
                                        <h4 className="font-display font-medium text-white text-lg md:text-xl mb-2 tracking-tight">{cert.title}</h4>
                                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{cert.org}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}
