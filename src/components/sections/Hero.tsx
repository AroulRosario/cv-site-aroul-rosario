"use client";

import { cvData } from "@/data/cv";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 w-full overflow-hidden">
            {/* Premium ambient elements */}
            <div className="absolute top-[-15%] right-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-100/60 via-violet-100/40 to-fuchsia-100/20 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-100/40 via-sky-50/30 to-transparent blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />
            <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-amber-100/20 to-transparent blur-3xl pointer-events-none" />

            {/* Refined grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
                <div className="absolute left-[12%] top-0 bottom-0 w-px bg-slate-900" />
                <div className="absolute right-[12%] top-0 bottom-0 w-px bg-slate-900" />
                <div className="absolute left-0 right-0 top-[30%] h-px bg-slate-900" />
                <div className="absolute left-0 right-0 bottom-[20%] h-px bg-slate-900" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                {/* Main Typography */}
                <div className="md:col-span-8 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2.5 text-indigo-600 font-mono text-[11px] tracking-[0.2em] uppercase mb-10 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-indigo-100/80 shadow-sm shadow-indigo-100/30">
                            <Sparkles className="w-3.5 h-3.5" />
                            Academic & Professional Profile
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-display font-bold tracking-[-0.04em] leading-[0.82]"
                    >
                        <span className="gradient-text">Dr. Aroul</span>
                        <br />
                        <span className="text-slate-900">Rosario.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-px bg-gradient-to-r from-indigo-300 via-violet-300 to-transparent max-w-md origin-left mt-8"
                    />
                </div>

                {/* Supporting Contact / Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="md:col-span-4 flex flex-col justify-end md:pb-8 space-y-10"
                >
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                        <span className="text-slate-900 font-semibold">Educationalist, EdTech Founder & Strategist.</span><br />
                        <span className="text-slate-400 mt-2 block">Transforming how the world learns through science and technology.</span>
                    </p>

                    <div className="flex flex-col space-y-0">
                        <a
                            href={`mailto:${cvData.personalInfo.email}`}
                            className="flex items-center justify-between py-4 border-b border-slate-100 hover:border-indigo-400 transition-all duration-500 group"
                        >
                            <span className="text-base text-slate-900 font-medium group-hover:text-indigo-600 transition-colors">Contact</span>
                            <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-indigo-500 flex items-center justify-center transition-all duration-500">
                                <ArrowDownRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-500" />
                            </div>
                        </a>
                        <a
                            href={`https://${cvData.personalInfo.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between py-4 border-b border-slate-100 hover:border-violet-400 transition-all duration-500 group"
                        >
                            <span className="text-base text-slate-900 font-medium group-hover:text-violet-600 transition-colors">Website</span>
                            <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-violet-500 flex items-center justify-center transition-all duration-500">
                                <ArrowDownRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-500" />
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
