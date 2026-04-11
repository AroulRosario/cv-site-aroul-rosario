"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function Spotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0 opacity-20"
            style={{
                background: `radial-gradient(800px at ${springX}px ${springY}px, rgba(228, 228, 231, 0.4), transparent 80%)`,
            }}
        />
    );
}
