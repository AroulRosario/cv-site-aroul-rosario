"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, RevealText } from "@/components/ui/motion-helpers";

const timelineData = [
    {
        year: "Academic Foundations",
        title: "Loyola & Nehru College",
        desc: "Early immersion in pure chemistry and experimental sciences."
    },
    {
        year: "Advanced Research",
        title: "University of Manchester",
        desc: "Specializing in molecular synthesis and organic structures."
    },
    {
        year: "Global Collaboration",
        title: "EU & UNESCO Fellows",
        desc: "Bridging international scientific communities and standardizing research."
    },
    {
        year: "Digital Transition",
        title: "EdTech & Innovation",
        desc: "Merging classical pedagogy with modern computational tools."
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
        <section ref={containerRef} className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <div className="mb-24">
                    <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4 text-center">Journey // Evolution</h2>
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight text-center">Path of the Academician.</h3>
                </div>

                <div className="relative">
                    {/* Animated SVG line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-zinc-900 -translate-x-1/2 hidden md:block" />
                    <motion.div
                        style={{ scaleY: pathLength }}
                        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white -translate-x-1/2 origin-top hidden md:block z-10"
                    />

                    <div className="space-y-32">
                        {timelineData.map((item, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                <div className="flex-1 w-full text-center md:text-left">
                                    <FadeIn delay={0.2}>
                                        <div className={`flex flex-col ${i % 2 === 0 ? "md:items-end md:text-right" : "md:items-start"}`}>
                                            <span className="text-sm font-mono text-zinc-600 uppercase tracking-widest mb-4">{item.year}</span>
                                            <h4 className="text-2xl md:text-4xl font-display font-medium text-white mb-4 tracking-tight">{item.title}</h4>
                                            <p className="text-zinc-500 max-w-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </FadeIn>
                                </div>

                                <div className="relative z-20 flex-shrink-0">
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="w-10 h-10 rounded-full bg-black border border-white flex items-center justify-center"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                    </motion.div>
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
