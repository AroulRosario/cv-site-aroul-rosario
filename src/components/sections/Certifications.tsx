"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

export function Certifications() {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                {/* Tech / Design Certs */}
                <div className="space-y-12">
                    <FadeIn>
                        <h3 className="text-2xl font-display font-bold text-white mb-2 italic">Professional Accreditations</h3>
                        <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.4em] mb-12 border-b border-white/5 pb-4">
                            Technical & Operational Mastery
                        </p>
                    </FadeIn>

                    <StaggerContainer className="space-y-6">
                        {cvData.designAndTechCertifications.map((cert, i) => (
                            <StaggerItem key={i}>
                                <div className="group flex items-center justify-between py-6 border-b border-white/[0.03] hover:border-white/10 transition-colors">
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-medium text-white group-hover:text-zinc-300 transition-colors">{cert.title}</h4>
                                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{cert.org}</p>
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Academic Certs */}
                <div className="space-y-12">
                    <FadeIn>
                        <h3 className="text-2xl font-display font-bold text-white mb-2 italic">Scientific Pedagogy</h3>
                        <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.4em] mb-12 border-b border-white/5 pb-4">
                            Academic & Research Competencies
                        </p>
                    </FadeIn>

                    <StaggerContainer className="space-y-6">
                        {cvData.academicCertifications.map((cert, i) => (
                            <StaggerItem key={i}>
                                <div className="group flex items-center justify-between py-6 border-b border-white/[0.03] hover:border-white/10 transition-colors">
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-medium text-white group-hover:text-zinc-300 transition-colors">{cert.title}</h4>
                                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{cert.org}</p>
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

            </div>

            <div className="mt-24 p-12 bg-white/[0.02] border border-white/5 rounded-3xl text-center">
                <p className="text-zinc-500 text-sm font-light italic max-w-2xl mx-auto">
                    "This comprehensive portfolio of certifications validates the multidisciplinary nature of my work—where the rigor of the laboratory meets the strategic demands of modern institutional governance."
                </p>
            </div>
        </div>
    );
}
