"use client";

import { cvData } from "@/data/cv";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Education() {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cvData.fellowshipsAndSocieties.map((item, index) => (
                    <StaggerItem key={index}>
                        <div className="group relative p-10 border border-white/5 bg-zinc-950/50 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-700 rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-6 mb-8">
                                    <BrandLogo name={item.org} size={48} />
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-white group-hover:text-zinc-200 transition-colors tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.3em]">
                                            {item.org}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-zinc-400 font-light leading-relaxed text-base">
                                    {item.detail}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[10px] font-mono text-zinc-700 uppercase">Verification // Official</span>
                                <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-white/40 transition-colors" />
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            {/* Awards Sub-section included here for Monolithic feel */}
            <div className="mt-24 pt-24 border-t border-white/10">
                <h4 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.5em] mb-12">Honors & Decorations.</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {cvData.awards.map((award, i) => (
                        <div key={i} className="p-8 border border-white/5 bg-zinc-900/30 rounded-xl hover:border-white/10 transition-colors">
                            <h5 className="text-xl font-display font-bold text-white mb-4 italic">"{award.title}"</h5>
                            <p className="text-zinc-400 font-light text-sm leading-relaxed">{award.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
