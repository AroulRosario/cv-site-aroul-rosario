"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { Mail, Phone, ExternalLink, ChevronDown } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/motion-helpers";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full text-center">
                <SlideUp delay={0.2}>
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide">
                        Elite Academician & Educationalist
                    </div>
                </SlideUp>

                <SlideUp delay={0.4}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
                        <span className="block text-white">Hi, I&apos;m</span>
                        <span className="block heading-gradient mt-2 py-2">
                            {cvData.personalInfo.name}
                        </span>
                    </h1>
                </SlideUp>

                <SlideUp delay={0.6}>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
                        A Chemist Who Loves Computers.
                    </p>
                </SlideUp>

                <FadeIn delay={0.8}>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a
                            href={`mailto:${cvData.personalInfo.email}`}
                            className="group flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-full font-medium hover:bg-blue-50 transition-colors"
                        >
                            <Mail className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                            <span>Contact Me</span>
                        </a>

                        <a
                            href={`https://${cvData.personalInfo.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-3 glass rounded-full font-medium text-white hover:bg-white/10 transition-colors"
                        >
                            <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            <span>Website</span>
                        </a>

                        <a
                            href={`tel:${cvData.personalInfo.phone}`}
                            className="group flex items-center gap-2 px-6 py-3 glass rounded-full font-medium text-white hover:bg-white/10 transition-colors"
                        >
                            <Phone className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                            <span>{cvData.personalInfo.phone}</span>
                        </a>
                    </div>
                </FadeIn>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
            >
                <a href="#about" aria-label="Scroll down">
                    <ChevronDown className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                </a>
            </motion.div>
        </section>
    );
}
