"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";

const AWARD_ICONS = ["🏛️", "⚗️", "🌍"];
const AWARD_COLORS = [
    { bg: "bg-amber-50", border: "border-amber-100", hover: "hover:border-amber-200 hover:shadow-amber-100/40" },
    { bg: "bg-blue-50", border: "border-blue-100", hover: "hover:border-blue-200 hover:shadow-blue-100/40" },
    { bg: "bg-emerald-50", border: "border-emerald-100", hover: "hover:border-emerald-200 hover:shadow-emerald-100/40" },
];

const CEREMONY_PHOTOS = [
    { src: "/photos/award-ceremony-2.jpg", caption: "Republic Day Award — presented by the Lt. Governor of Puducherry" },
    { src: "/photos/award-ceremony-1.jpg", caption: "National conclave recognition ceremony" },
];

export function Awards() {
    return (
        <section id="awards" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-20">
                    <span className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-6 block">06 // Recognitions & Awards</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9]">
                        Recognised.<br />
                        <span className="gradient-text-warm">Celebrated.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-4">
                        {cvData.awards.map((award, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group ${AWARD_COLORS[i % 3].bg} border ${AWARD_COLORS[i % 3].border} ${AWARD_COLORS[i % 3].hover} p-8 flex gap-6 items-start rounded-2xl transition-all duration-500 hover:shadow-xl`}
                            >
                                <span className="text-4xl shrink-0 transform group-hover:scale-110 transition-transform duration-500">
                                    {AWARD_ICONS[i] || "🏆"}
                                </span>
                                <div>
                                    <h3 className="text-xl font-display font-bold text-slate-900 leading-tight mb-2">{award.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">{award.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative flex flex-col gap-5 lg:mt-8">
                        {CEREMONY_PHOTOS.map((photo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`relative overflow-hidden rounded-2xl shadow-xl group ${i === 1 ? "ml-8" : ""}`}
                            >
                                <img src={photo.src} alt={photo.caption} className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                                    <p className="text-xs font-mono text-white/80 uppercase tracking-widest">{photo.caption}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
