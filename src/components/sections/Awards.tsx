"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";

const AWARD_ICONS = ["🏛️", "⚗️", "🌍"];

const CEREMONY_PHOTOS = [
    {
        src: "/photos/award-ceremony-2.jpg",
        caption: "Republic Day Award — presented by the Lt. Governor of Puducherry",
    },
    {
        src: "/photos/award-ceremony-1.jpg",
        caption: "National conclave recognition ceremony",
    },
];

export function Awards() {
    return (
        <section id="awards" className="py-32 relative overflow-hidden border-y border-zinc-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-6 inline-block px-4 py-1.5 rounded-full border border-zinc-100 bg-zinc-50">06 // Recognitions & Awards</p>
                    <h2 className="text-6xl md:text-8xl font-display font-medium text-zinc-950 tracking-tighter mt-6 mb-24 leading-[0.85]">
                        Recognised.<br />
                        <span className="text-zinc-200 italic">Celebrated.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Award plates */}
                    <div className="space-y-4">
                        {cvData.awards.map((award, i) => (
                            <div
                                key={i}
                                className="group bg-zinc-50 border border-zinc-100 p-8 flex gap-8 items-start hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 rounded-3xl"
                            >
                                <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0 transform group-hover:scale-110">
                                    {AWARD_ICONS[i] || "🏆"}
                                </span>
                                <div>
                                    <h3 className="text-2xl font-display font-medium text-zinc-950 leading-tight mb-3">
                                        {award.title}
                                    </h3>
                                    <p className="text-zinc-500 leading-relaxed font-light">
                                        {award.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Ceremony photo collage */}
                    <div className="relative flex flex-col gap-6 lg:mt-12">
                        <div
                            className="relative overflow-hidden rounded-[2rem] border border-zinc-100 shadow-xl group"
                        >
                            <img
                                src={CEREMONY_PHOTOS[0].src}
                                alt={CEREMONY_PHOTOS[0].caption}
                                className="w-full h-80 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/80 to-transparent p-8">
                                <p className="text-xs font-mono text-white/80 uppercase tracking-widest">{CEREMONY_PHOTOS[0].caption}</p>
                            </div>
                        </div>

                        <div
                            className="relative overflow-hidden rounded-[2rem] border border-zinc-100 shadow-xl ml-12 group"
                        >
                            <img
                                src={CEREMONY_PHOTOS[1].src}
                                alt={CEREMONY_PHOTOS[1].caption}
                                className="w-full h-80 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/80 to-transparent p-8">
                                <p className="text-xs font-mono text-white/80 uppercase tracking-widest">{CEREMONY_PHOTOS[1].caption}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
