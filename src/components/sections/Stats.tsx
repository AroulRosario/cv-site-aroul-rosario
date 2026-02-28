"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

const Counter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-8 border border-white/5 bg-zinc-950/50 rounded-2xl group hover:border-white/20 transition-all duration-700">
            <div className="text-5xl md:text-7xl font-display font-bold text-white mb-2 tracking-tighter">
                {count}{suffix}
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                {label}
            </div>
        </div>
    );
};

export function Stats() {
    return (
        <section className="py-32 bg-black border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <FadeIn className="mb-20 text-center">
                    <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">Metric // Impact</h2>
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">Academic Footprint.</h3>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <StaggerItem>
                        <Counter value={10} label="Years Experience" suffix="+" />
                    </StaggerItem>
                    <StaggerItem>
                        <Counter value={15} label="Certifications" />
                    </StaggerItem>
                    <StaggerItem>
                        <Counter value={6} label="Publications" />
                    </StaggerItem>
                    <StaggerItem>
                        <Counter value={2} label="Indian Patents" />
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}
