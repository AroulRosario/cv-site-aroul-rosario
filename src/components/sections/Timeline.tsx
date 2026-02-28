"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, RevealText } from "@/components/ui/motion-helpers";

const timelineData = [
    {
        year: "ACAD-01",
        title: "Foundational Chemistry",
        desc: "Initial residency and early experimental immersion in pure sciences."
    },
    {
        year: "ACAD-02",
        title: "Molecular Synthesis",
        desc: "Advanced research at University of Manchester, specializing in synthetic pathways."
    },
    {
        year: "ACAD-03",
        title: "Global Standardization",
        desc: "UNESCO & EU Fellowship phases focusing on cross-border scientific frameworks."
    },
    {
        year: "ACAD-04",
        title: "Digital Pedagogies",
        desc: "Current tenure focusing on EdTech integration and computational chemistry."
    }
];

export function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} id="timeline" className="py-24 md:py-48 bg-black relative overflow-hidden blueprint-grid border-b border-white/10">

            {/* V4.2 Stabilized Background Number - Lower Opacity & Offset */}
            <div className="bg-number bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-white/[0.01]">
                03
            </div>

            <div className="content-container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-24 md:mb-32">
                    <div className="md:col-span-8">
                        <h2 className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 mb-6">
                            Chronicle // Timeline
                        </h2>
                        <h3 className="text-huge font-display font-bold text-white uppercase">
                            Journey.
                        </h3>
                    </div>
                    <div className="md:col-span-4 self-end">
                        <p className="text-[11px] font-mono text-zinc-500 uppercase leading-relaxed max-w-[240px]">
                            A sequential log of academic evolution and institutional appointments.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    {/* Structural Line */}
                    <div className="absolute left-1 md:left-[15%] top-0 bottom-0 w-px bg-white/10" />

                    <div className="space-y-24 md:space-y-40">
                        {timelineData.map((item, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 relative items-start">

                                {/* Technical Index */}
                                <div className="md:col-span-2 hidden md:flex items-start justify-end pr-8">
                                    <span className="text-[10px] font-mono text-white/30 tracking-widest mt-1">{item.year}</span>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-10 pl-8 md:pl-16 relative">
                                    {/* Point Indicator */}
                                    <div className="absolute left-[-2px] md:left-[-5px] top-[10px] w-2 h-2 md:w-2.5 md:h-2.5 bg-black border border-white z-20" />

                                    <FadeIn>
                                        <div className="flex flex-col max-w-2xl">
                                            <span className="md:hidden text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-2">{item.year}</span>
                                            <h4 className="text-xl md:text-4xl font-display font-medium text-white mb-3 md:mb-5 tracking-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-zinc-500 text-sm md:text-lg leading-relaxed font-light">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </FadeIn>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
