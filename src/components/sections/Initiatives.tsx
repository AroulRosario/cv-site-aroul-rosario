"use client";

import { cvData } from "@/data/cv";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Initiatives() {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {cvData.initiatives.map((item, index) => (
                    <StaggerItem key={index}>
                        <div className="group relative p-10 border border-white/5 bg-zinc-950/50 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-700 rounded-2xl overflow-hidden">
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-6">
                                    <div className="p-4 bg-zinc-900 rounded-xl border border-white/5 group-hover:border-white/20 transition-colors">
                                        <BrandLogo name={item.title} size={64} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                                            {item.role}
                                        </span>
                                        <h3 className="text-3xl font-display font-bold text-white group-hover:text-zinc-200 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-zinc-400 font-light leading-relaxed text-lg">
                                        {item.description}
                                    </p>

                                    {/* Very lengthy academic detail */}
                                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                                        <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Tactical Breakdown // Research & Deployment</h4>
                                        <p className="text-zinc-300 text-sm leading-relaxed font-light">
                                            {item.academicDetail}
                                        </p>
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
