"use client";

import { cvData } from "@/data/cv";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 w-full overflow-hidden">
            {/* Colorful ambient blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-200/40 via-violet-200/30 to-purple-100/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-100/30 via-sky-100/20 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">

                {/* Main Typography */}
                <div className="md:col-span-8 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 text-indigo-600 font-mono text-xs tracking-widest uppercase mb-8 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
                            <Sparkles className="w-3.5 h-3.5" />
                            Academic & Professional Profile
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.85]"
                    >
                        <span className="gradient-text">Dr. Aroul</span>
                        <br />
                        <span className="text-slate-900">Rosario.</span>
                    </motion.h1>
                </div>

                {/* Supporting Contact / Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="md:col-span-4 flex flex-col justify-end md:pb-6 space-y-10"
                >
                    <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                        Educationalist, EdTech Founder & Strategist.<br />
                        <span className="text-slate-400">Transforming how the world learns through science and technology.</span>
                    </p>

                    <div className="flex flex-col space-y-0">
                        <a
                            href={`mailto:${cvData.personalInfo.email}`}
                            className="flex items-center justify-between py-5 border-b border-slate-200 hover:border-indigo-500 transition-colors duration-500 group"
                        >
                            <span className="text-lg text-slate-900 font-medium group-hover:text-indigo-600 transition-colors">Contact</span>
                            <ArrowDownRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors duration-500" />
                        </a>
                        <a
                            href={`https://${cvData.personalInfo.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between py-5 border-b border-slate-200 hover:border-violet-500 transition-colors duration-500 group"
                        >
                            <span className="text-lg text-slate-900 font-medium group-hover:text-violet-600 transition-colors">Website</span>
                            <ArrowDownRight className="w-5 h-5 text-slate-400 group-hover:text-violet-500 transition-colors duration-500" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
