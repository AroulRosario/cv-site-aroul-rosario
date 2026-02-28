"use client";

import { cvData } from "@/data/cv";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { ShieldCheck, MonitorPlay } from "lucide-react";

export function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-slate-900/30 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Tech Certifications */}
                    <div>
                        <SlideUp>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30">
                                    <MonitorPlay className="w-5 h-5 text-green-400" />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white">Design & Tech</h2>
                            </div>
                        </SlideUp>

                        <StaggerContainer className="flex flex-col gap-4">
                            {cvData.designAndTechCertifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <div className="group glass p-5 rounded-xl border border-white/5 hover:bg-white/5 transition-colors flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-green-400 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium text-white text-lg">{cert.title}</h3>
                                            <p className="text-sm text-slate-400 mt-1">{cert.org}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Academic Certifications */}
                    <div>
                        <SlideUp>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white">Academic</h2>
                            </div>
                        </SlideUp>

                        <StaggerContainer className="flex flex-col gap-4">
                            {cvData.academicCertifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <div className="group glass p-5 rounded-xl border border-white/5 hover:bg-white/5 transition-colors flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-purple-400 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium text-white text-lg">{cert.title}</h3>
                                            <p className="text-sm text-slate-400 mt-1">{cert.org}</p>
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
