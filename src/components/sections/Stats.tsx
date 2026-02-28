"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem, LineDraw } from "@/components/ui/motion-helpers";

const Counter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 1500;
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
        <div ref={ref} className="flex flex-col p-10 border-r border-white/10 last:border-r-0 group">
            <div className="text-xs font-mono uppercase tracking-[0.4em] text-zinc-600 mb-8 group-hover:text-zinc-400 transition-colors">
                {label}
            </div>
            <div className="text-6xl md:text-8xl font-display font-medium text-white tracking-tighter">
                {count.toString().padStart(2, '0')}{suffix}
            </div>
        </div>
    );
};

export function Stats() {
    return (
        <section className="bg-black border-y border-white/10 relative overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <Counter value={10} label="Yrs // Exp" suffix="+" />
                    <Counter value={15} label="Cert // Spec" />
                    <Counter value={6} label="Pub // Res" />
                    <Counter value={2} label="Pat // Ind" />
                </div>
            </div>

            {/* Precision Markings */}
            <div className="absolute top-4 left-4 text-[8px] font-mono text-zinc-800 uppercase tracking-widest select-none">
                Metric Specification Block-04
            </div>
            <div className="absolute bottom-4 right-4 text-[8px] font-mono text-zinc-800 uppercase tracking-widest select-none">
                V.4.0.1 Redesign
            </div>
        </section>
    );
}
