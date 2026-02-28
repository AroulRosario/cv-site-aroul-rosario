"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Certifications() {
    return (
        <section id="certifications" className="py-32 bg-zinc-950 relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Tech Certifications */}
                    <div>
                        <FadeIn>
                            <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-12">
                                04 // Tech Certifications
                            </h2>
                        </FadeIn>

                        <StaggerContainer className="flex flex-col gap-6">
                            {cvData.designAndTechCertifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <div className="group flex items-start gap-6 p-6 border border-white/5 bg-black/20 hover:bg-black/40 hover:border-white/20 transition-all duration-500 rounded-lg">
                                        <BrandLogo name={cert.org} size={56} />
                                        <div>
                                            <h3 className="font-display font-medium text-white text-lg mb-1 leading-snug">{cert.title}</h3>
                                            <p className="text-xs font-mono text-zinc-500 uppercase">{cert.org}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Academic Certifications */}
                    <div>
                        <FadeIn>
                            <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-12">
                                05 // Academic Certifications
                            </h2>
                        </FadeIn>

                        <StaggerContainer className="flex flex-col border-l border-white/10 pl-6 md:pl-8">
                            {cvData.academicCertifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <div className="group flex items-start gap-5 py-6 border-b border-white/5 hover:border-white/20 transition-all duration-500 relative">
                                        <div className="absolute left-[-25px] md:left-[-33px] top-1/2 -translate-y-1/2 w-1.5 h-0 bg-white group-hover:h-8 transition-all duration-500" />

                                        <BrandLogo name={cert.org} size={48} />
                                        <div>
                                            <h3 className="font-display font-medium text-zinc-200 text-base mb-1 group-hover:text-white transition-colors">{cert.title}</h3>
                                            <p className="text-xs font-mono text-zinc-600 uppercase transition-colors group-hover:text-zinc-400">{cert.org}</p>
                                        </div>
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
