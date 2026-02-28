"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const luxuryEasing: [number, number, number, number] = [0.16, 1, 0.3, 1]; // Apple-like ultra-smooth ease

export const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay, ease: luxuryEasing }}
        className={className}
    >
        {children}
    </motion.div>
);

export const SlideUp = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay, ease: luxuryEasing }}
        className={className}
    >
        {children}
    </motion.div>
);

export const RevealText = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
    <div className={`overflow-hidden ${className}`}>
        <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay, ease: luxuryEasing }}
        >
            {children}
        </motion.div>
    </div>
);

export const ScaleIn = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, delay, ease: luxuryEasing }}
        className={className}
    >
        {children}
    </motion.div>
);

export const StaggerContainer = ({ children, className = "", staggerDelay = 0.15 }: { children: ReactNode; className?: string; staggerDelay?: number }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: luxuryEasing } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const LineDraw = ({ delay = 0, className = "" }: { delay?: number; className?: string }) => (
    <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, delay, ease: luxuryEasing }}
        className={`h-px bg-white/20 origin-left ${className}`}
    />
);
