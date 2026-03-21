"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { MouseEvent } from "react";

export function CardSpotlight({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const x = clientX - left;
        const y = clientY - top;

        mouseX.set(x);
        mouseY.set(y);

        const rX = ((y - height / 2) / height) * -10;
        const rY = ((x - width / 2) / width) * 10;

        rotateX.set(rX);
        rotateY.set(rY);
    }

    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/50 transition-all duration-300 ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 255, 255, 0.08),
                            transparent 80%
                        )
                    `,
                }}
            />
            {children}
        </motion.div>
    );
}
