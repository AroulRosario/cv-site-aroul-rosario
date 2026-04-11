"use client";

import { cvData } from "@/data/cv";
import { ArrowDownRight } from "lucide-react";
import { RevealText, FadeIn, LineDraw } from "@/components/ui/motion-helpers";
import { GlitchText } from "@/components/ui/InteractiveHelpers";
import { Spotlight } from "@/components/ui/Spotlight";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 w-full overflow-hidden">
            {/* Absolute architectural grid overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute left-[10%] top-0 bottom-0 w-px bg-zinc-200" />
                <div className="absolute right-[10%] top-0 bottom-0 w-px bg-zinc-200" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">

                {/* Main Typography */}
                <div className="md:col-span-8 space-y-4">
                    <div>
                        <span className="text-zinc-400 font-mono text-xs tracking-[0.4em] uppercase mb-6 block">
                            01 // Academic & Professional Profile
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter leading-[0.85] text-zinc-950">
                        <div className="text-zinc-400">
                             Dr. Aroul
                        </div>
                        <div>Rosario.</div>
                    </h1>
                </div>

                {/* Supporting Contact / Title */}
                <div className="md:col-span-4 flex flex-col justify-end md:pb-6 space-y-10">
                    <div>
                        <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
                            Educationalist, EdTech Founder & Strategist.<br />
                            <span className="text-zinc-400 italic">Transforming how the world learns through science and technology.</span>
                        </p>
                    </div>

                    <div>
                        <div className="flex flex-col space-y-0">
                            <a
                                href={`mailto:${cvData.personalInfo.email}`}
                                className="flex items-center justify-between py-5 border-b border-zinc-200 hover:border-zinc-950 transition-colors duration-500 group"
                            >
                                <span className="text-lg text-zinc-950 font-medium">Contact</span>
                                <ArrowDownRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-950 transition-colors duration-500" />
                            </a>
                            <a
                                href={`https://${cvData.personalInfo.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between py-5 border-b border-zinc-200 hover:border-zinc-950 transition-colors duration-500 group"
                            >
                                <span className="text-lg text-zinc-950 font-medium">Website</span>
                                <ArrowDownRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-950 transition-colors duration-500" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 h-px bg-zinc-200" />
        </section>
    );
}
