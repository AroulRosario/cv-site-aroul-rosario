"use client";

import { useState } from "react";
import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { DeepDive } from "@/components/ui/DeepDive";
import { Plus } from "lucide-react";

export function Experience() {
    const [activeDive, setActiveDive] = useState<number | null>(null);

    return (
        <section id="experience" className="py-32 bg-zinc-950/30 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">04 // Career Path</p>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter mb-20">
                        Trajectory.
                    </h2>
                </FadeIn>

                <StaggerContainer className="space-y-4">
                    {cvData.experience.map((item, index) => (
                        <StaggerItem key={index}>
                            <div
                                onClick={() => setActiveDive(index)}
                                className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr_100px] items-center gap-8 p-8 border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-all cursor-pointer overflow-hidden"
                            >
                                <div className="text-sm font-mono text-zinc-500 tracking-wider">
                                    {item.period}
                                </div>

                                <div className="flex items-center gap-6">
                                    <BrandLogo name={item.org} size={48} />
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-white group-hover:text-zinc-200 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-500 text-sm font-medium tracking-wide">
                                            {item.org}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="p-3 bg-zinc-900 rounded-full border border-white/10 group-hover:scale-110 transition-transform">
                                        <Plus className="w-5 h-5 text-zinc-400" />
                                    </div>
                                </div>

                                <DeepDive
                                    isOpen={activeDive === index}
                                    onClose={() => {
                                        setActiveDive(null);
                                    }}
                                    title={item.title}
                                    content={item.deepDive || item.description}
                                    org={item.org}
                                />
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
