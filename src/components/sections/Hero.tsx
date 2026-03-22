"use client";

import { cvData } from "@/data/cv";
import { ArrowDownRight } from "lucide-react";
import { RevealText, FadeIn, LineDraw } from "@/components/ui/motion-helpers";
import { GlitchText } from "@/components/ui/InteractiveHelpers";
import { Spotlight } from "@/components/ui/Spotlight";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 w-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,242,255,0.03)_0%,transparent_50%)] pointer-events-none" />
            <Spotlight />

            {/* Absolute strict architectural grid overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute left-[10%] top-0 bottom-0 w-px bg-zinc-800" />
                <div className="absolute right-[10%] top-0 bottom-0 w-px bg-zinc-800" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end">

                {/* Main Typography */}
                <div className="md:col-span-8 space-y-2">
                    <div>
                        <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 block">
                            01 // Profile
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9]">
                        <div className="text-zinc-400">
                            <GlitchText text="Dr. Aroul" />
                        </div>
                        <div className="text-white">Rosario.</div>
                    </h1>
                </div>

                {/* Supporting Contact / Title */}
                <div className="md:col-span-4 flex flex-col justify-end md:pb-4 space-y-8">
                    <div>
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-snug">
                            Educationalist, EdTech Founder & Strategist.<br />
                            Transforming how the world learns through science and technology.
                        </p>
                    </div>

                    <div>
                        <div className="flex flex-col space-y-4">
                            <a
                                href={`mailto:${cvData.personalInfo.email}`}
                                className="flex items-center justify-between py-4 border-b border-white/20 hover:border-white transition-colors duration-300 group"
                            >
                                <span className="text-lg text-white font-medium">Contact</span>
                                <ArrowDownRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300" />
                            </a>
                            <a
                                href={`https://${cvData.personalInfo.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between py-4 border-b border-white/20 hover:border-white transition-colors duration-300 group"
                            >
                                <span className="text-lg text-white font-medium">Website</span>
                                <ArrowDownRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 h-px bg-white/20" />
        </section>
    );
}
