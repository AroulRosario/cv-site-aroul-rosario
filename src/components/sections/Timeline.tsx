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
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section ref={containerRef} id="timeline" className="py-24 md:py-48 bg-black relative overflow-hidden blueprint-grid border-b border-white/10">

            {/* V4.1 Stabilized Background Number */}
            <div className="bg-number bottom-0 right-0 translate-x-1/4 translate-y-1/4">
                03
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-end">
                    <div className="md:col-span-8">
                        <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-8">
                            Chronicle // Timeline
                        </h2>
                        <h3 className="text-huge font-display font-bold text-white uppercase -ml-1">
                            Journey.
                        </h3>
                    </div>
                    <div className="md:col-span-4 pb-2">
                        <p className="text-sm font-mono text-zinc-500 uppercase leading-relaxed max-w-xs">
                            A sequential log of academic evolution and institutional appointments.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    {/* Central Structural Line */}
                    <div className="absolute left-0 md:left-[20%] top-0 bottom-0 w-px bg-white/10" />

                    <div className="space-y-24 md:space-y-48">
                        {timelineData.map((item, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative items-start">

                                {/* Technical Index */}
                                <div className="md:col-span-2 flex items-start justify-start md:justify-end pr-8">
                                    <span className="text-[10px] font-mono text-white/40 tracking-widest mt-2">{item.year}</span>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-10 pl-6 md:pl-24 relative border-l border-white/0">
                                    {/* Point Indicator */}
                                    <div className="absolute left-[-5px] md:left-[-5px] top-[14px] w-[10px] h-[10px] bg-black border border-white z-20" />

                                    <FadeIn>
                                        <div className="flex flex-col max-w-2xl">
                                            <h4 className="text-2xl md:text-5xl font-display font-medium text-white mb-4 md:mb-6 tracking-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-zinc-500 text-base md:text-xl leading-relaxed font-light">
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
