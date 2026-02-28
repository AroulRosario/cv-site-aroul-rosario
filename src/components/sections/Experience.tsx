"use client";

import { cvData } from "@/data/cv";
import { SlideUp, StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Experience() {
    return (
        <section id="experience" className="py-32 bg-black relative border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-12">

                <FadeIn>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
                            Professional<br />Trajectory
                        </h2>
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600">
                            02 // Experience
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="space-y-12">
                    {cvData.experience.map((item, index) => (
                        <StaggerItem key={index}>
                            <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-t border-white/10 hover:bg-white/[0.02] transition-colors duration-500 pr-4">

                                {/* Period */}
                                <div className="md:col-span-3">
                                    <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                                        {item.period}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-7 flex gap-6 items-start">
                                    <BrandLogo name={item.org} size={56} />
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-display font-medium text-white group-hover:text-zinc-200 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-500 font-mono text-xs uppercase tracking-wider">
                                            {item.org}
                                        </p>
                                        <p className="text-zinc-400 font-light leading-relaxed max-w-md pt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Index decorator */}
                                <div className="hidden md:block md:col-span-2 text-right">
                                    <span className="text-6xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                        0{index + 1}
                                    </span>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
