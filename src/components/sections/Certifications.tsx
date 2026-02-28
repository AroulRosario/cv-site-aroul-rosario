"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Certifications() {
    return (
        <section id="certifications" className="py-48 bg-black relative border-b border-white/10 blueprint-grid">

            {/* Background Index */}
            <div className="absolute bottom-10 right-10 text-white/[0.02] font-display font-bold text-[25vw] leading-none pointer-events-none select-none">
                06
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">

                    {/* Tech Certifications */}
                    <div>
                        <div className="mb-16">
                            <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-8">
                                Technical // Domains
                            </h2>
                            <h3 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter">
                                Logic.
                            </h3>
                        </div>

                        <StaggerContainer className="flex flex-col gap-6">
                            {cvData.designAndTechCertifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <div className="group flex items-center gap-8 p-8 border border-white/5 bg-zinc-950/30 hover:bg-white/5 hover:border-white/20 transition-all duration-500">
                                        <BrandLogo name={cert.org} size={64} />
                                        <div>
                                            <h4 className="font-display font-medium text-white text-xl mb-1">{cert.title}</h4>
                                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">{cert.org}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Academic Certifications */}
                    <div>
                        <div className="mb-16">
                            <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-8">
                                Academic // Verification
                            </h2>
                            <h3 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter">
                                Theory.
                            </h3>
                        </div>

                        <StaggerContainer className="flex flex-col border-t border-white/10">
                            {cvData.academicCertifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <div className="group flex flex-col py-10 border-b border-white/10 hover:bg-white/5 transition-all duration-500 px-4">
                                        <div className="flex justify-between items-start mb-6">
                                            <BrandLogo name={cert.org} size={48} />
                                            <span className="text-[10px] font-mono text-zinc-700 group-hover:text-zinc-400">VERIFIED-A0{index + 1}</span>
                                        </div>
                                        <h4 className="font-display font-medium text-white text-xl mb-2 tracking-tight">{cert.title}</h4>
                                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{cert.org}</p>
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
