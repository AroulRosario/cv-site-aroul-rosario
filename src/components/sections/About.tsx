"use client";

import { cvData } from "@/data/cv";
import { SlideUp, FadeIn } from "@/components/ui/motion-helpers";

export function About() {
    const statementParts = cvData.personalInfo.tagline.split('. ');

    return (
        <section id="about" className="py-32 relative bg-zinc-950 border-y border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-zinc-400">

                    <div className="md:col-span-4">
                        <FadeIn>
                            <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-8">
                                02 // Background
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="md:col-span-8">
                        <SlideUp>
                            <div className="space-y-8 text-2xl md:text-4xl font-light leading-snug tracking-tight text-white mb-16">
                                <p>
                                    {statementParts[0] ? statementParts[0] + "." : ""}
                                </p>
                                <p className="text-zinc-500">
                                    {statementParts[1] ? statementParts[1].replace(".", "") + "." : ""}
                                </p>
                            </div>
                        </SlideUp>

                        <FadeIn delay={0.2}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10">
                                <div className="flex flex-col space-y-2">
                                    <span className="text-xs font-mono text-zinc-600 uppercase">Status</span>
                                    <span className="text-sm font-medium text-white">Active</span>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <span className="text-xs font-mono text-zinc-600 uppercase">Discipline</span>
                                    <span className="text-sm font-medium text-white">Chemistry / EdTech</span>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <span className="text-xs font-mono text-zinc-600 uppercase">Contact</span>
                                    <span className="text-sm font-medium text-white truncate hover:text-zinc-400 transition-colors">
                                        <a href={`mailto:${cvData.personalInfo.email}`}>Email</a>
                                    </span>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <span className="text-xs font-mono text-zinc-600 uppercase">Network</span>
                                    <span className="text-sm font-medium text-white hover:text-zinc-400 transition-colors">
                                        <a href={`https://${cvData.personalInfo.website}`} target="_blank" rel="noopener noreferrer">Website</a>
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
