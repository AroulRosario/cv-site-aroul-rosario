"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ShieldCheck, Award } from "lucide-react";

export function Certifications() {
    return (
        <section id="certifications" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">

            <div className="quantum-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                    {/* Tech Certifications */}
                    <div>
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                <h2 className="text-emerald-500 font-mono text-xs tracking-[0.3em]">03 // TECHNICAL DOMAINS</h2>
                            </div>
                            <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
                                System <span className="text-emerald-500">Logic.</span>
                            </h3>
                        </div>

                        <StaggerContainer className="grid grid-cols-1 gap-4">
                            {cvData.designAndTechCertifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <div className="glass-card group p-6 flex items-center gap-6">
                                        <BrandLogo name={cert.org} size={56} />
                                        <div>
                                            <h4 className="font-display font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">{cert.title}</h4>
                                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">{cert.org}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Academic Certifications */}
                    <div>
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Award className="w-5 h-5 text-emerald-500" />
                                <h2 className="text-emerald-500 font-mono text-xs tracking-[0.3em]">04 // ACADEMIC VERIFICATION</h2>
                            </div>
                            <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
                                Atomic <span className="text-emerald-500">Theory.</span>
                            </h3>
                        </div>

                        <StaggerContainer className="flex flex-col gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                            {cvData.academicCertifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <div className="bg-black/40 hover:bg-emerald-500/5 p-8 transition-colors duration-500 group border-b border-white/5 last:border-0">
                                        <div className="flex justify-between items-start mb-6">
                                            <BrandLogo name={cert.org} size={48} />
                                            <span className="text-[9px] font-mono text-zinc-600 group-hover:text-emerald-500 transition-colors uppercase tracking-[0.2em]">VERIFIED-CERT-0{index + 1}</span>
                                        </div>
                                        <h4 className="font-display font-bold text-white text-xl mb-2 tracking-tight">{cert.title}</h4>
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
