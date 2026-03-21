"use client";

import { cvData } from "@/data/cv";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { useRef } from "react";

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
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

    return (
        <section ref={sectionRef} id="awards" className="py-32 bg-zinc-950 relative overflow-hidden border-y border-white/5">
            {/* Scanline texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 60px)" }} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-4 inline-block px-4 py-1.5 rounded-full border border-white/10 glass">06 // Recognitions & Awards</p>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mt-6 mb-24 leading-none">
                        Recognised.<br />
                        <span className="text-white/20">Celebrated.</span>
                    </h2>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Award plates */}
                    <div className="space-y-5">
                        {cvData.awards.map((award, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="group glass-card p-8 flex gap-6 items-start hover:border-white/20 transition-all duration-500"
                            >
                                <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-500 shrink-0 mt-1">
                                    {AWARD_ICONS[i] || "🏆"}
                                </span>
                                <div>
                                    <h3 className="text-xl font-display font-black text-white leading-snug mb-3 group-hover:text-white transition-colors">
                                        {award.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        {award.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Ceremony photo collage with parallax */}
                    <div className="relative flex flex-col gap-5 lg:mt-12">
                        <motion.div
                            style={{ y: y1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group"
                        >
                            <img
                                src={CEREMONY_PHOTOS[0].src}
                                alt={CEREMONY_PHOTOS[0].caption}
                                className="w-full h-80 object-cover object-top"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{CEREMONY_PHOTOS[0].caption}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ y: y2 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] ml-8"
                        >
                            <img
                                src={CEREMONY_PHOTOS[1].src}
                                alt={CEREMONY_PHOTOS[1].caption}
                                className="w-full h-80 object-cover object-top"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{CEREMONY_PHOTOS[1].caption}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
