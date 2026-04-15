"use client";

import { cvData } from "@/data/cv";
import { ArrowDownRight, Sparkles } from "lucide-react";
export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 w-full overflow-hidden">
            {/* Premium ambient elements */}
            <div className="absolute top-[-15%] right-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-100/60 via-violet-100/40 to-fuchsia-100/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-100/40 via-sky-50/30 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-amber-100/20 to-transparent blur-3xl pointer-events-none" />

            {/* Refined grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
                <div className="absolute left-[12%] top-0 bottom-0 w-px bg-slate-900" />
                <div className="absolute right-[12%] top-0 bottom-0 w-px bg-slate-900" />
                <div className="absolute left-0 right-0 top-[30%] h-px bg-slate-900" />
                <div className="absolute left-0 right-0 bottom-[20%] h-px bg-slate-900" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                <div className="md:col-span-8 space-y-10">
                    <div>
                        <span className="inline-flex items-center gap-2.5 text-indigo-600 font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-12 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-indigo-100 shadow-sm shadow-indigo-100/30">
                            <Sparkles className="w-3.5 h-3.5" />
                            Academic & Professional Portfolio
                        </span>
                    </div>

                    <h1 className="text-[4.5rem] md:text-[8rem] lg:text-[11rem] font-display font-bold tracking-[-0.05em] leading-[0.78] text-slate-900">
                        <span className="gradient-text block mb-4">Dr. Aroul</span>
                        Rosario.
                    </h1>

                    <div className="h-2 w-32 bg-gradient-to-r from-indigo-500 via-violet-500 to-transparent rounded-full mt-12" />
                </div>

                {/* Supporting Contact / Title */}
                <div className="md:col-span-4 flex flex-col justify-end md:pb-8 space-y-10">
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
                </div>
            </div>
        </section>
    );
}
