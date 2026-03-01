"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

export function Magnetic({ children, strength = 0.5 }: { children: ReactNode; strength?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = ref.current;

        // Calculate center
        const centerX = offsetLeft + offsetWidth / 2;
        const centerY = offsetTop + offsetHeight / 2;

        // Relative distance
        const dx = clientX - centerX;
        const dy = clientY - centerY;

        x.set(dx * strength);
        y.set(dy * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
}

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
    return (
        <div className={`relative group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 text-red-500/30 translate-x-[1px] translate-y-[1px] opacity-0 group-hover:opacity-100 transition-opacity blur-[0.5px]">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 text-blue-500/30 -translate-x-[1px] -translate-y-[1px] opacity-0 group-hover:opacity-100 transition-opacity blur-[0.5px]">
                {text}
            </span>
        </div>
    );
}
