"use client";

import { cvData } from "@/data/cv";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Experience() {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <StaggerContainer className="space-y-6">
                {cvData.experience.map((item, index) => (
                    <StaggerItem key={index}>
                        <div className="group relative border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-all overflow-hidden p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                {/* Left side: Basic info */}
                                <div className="lg:col-span-4 space-y-6">
                                    <div className="text-sm font-mono text-zinc-500 tracking-wider">
                                        {item.period}
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <BrandLogo name={item.org} size={56} />
                                        <div>
                                            <h3 className="text-2xl font-display font-bold text-white group-hover:text-zinc-200 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-zinc-500 text-sm font-medium tracking-wide">
                                                {item.org}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-zinc-400 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Right side: Detailed academic narrative */}
                                <div className="lg:col-span-8 bg-zinc-900/40 p-10 rounded-2xl border border-white/5">
                                    <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                                        Executive Mandate // Impact Analysis
                                    </h4>
                                    <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed italic">
                                        "{item.academicDetail}"
                                    </p>

                                    <div className="mt-8 flex gap-8">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-mono text-zinc-600 uppercase">Outcome</span>
                                            <span className="text-white text-sm">Validated</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-mono text-zinc-600 uppercase">Status</span>
                                            <span className="text-white text-sm">Permanent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    );
}
