"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

export function Patents() {
    return (
        <div className="max-w-7xl mx-auto pb-12">
            <FadeIn>
                <div className="p-12 border border-white/5 bg-zinc-950/50 rounded-3xl">
                    <h3 className="text-3xl font-display font-bold text-white mb-12 flex items-center gap-4 uppercase tracking-tighter">
                        Intellectual Property.
                    </h3>
                    <div className="space-y-8">
                        {cvData.patents.map((patent, i) => (
                            <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-b border-white/5 last:border-0">
                                <div className="max-w-2xl">
                                    <h4 className="text-xl font-medium text-white group-hover:text-zinc-300 transition-colors mb-2 italic">"{patent.title}"</h4>
                                    <p className="text-zinc-500 text-sm font-light leading-relaxed">{patent.detail}</p>
                                </div>
                                <div className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover:border-white/30 group-hover:text-white transition-all whitespace-nowrap">
                                    Patent Registered
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
