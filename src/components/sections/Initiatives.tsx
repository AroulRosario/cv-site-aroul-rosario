"use client";

import { useState } from "react";
import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { DeepDive } from "@/components/ui/DeepDive";
import { Lightbulb } from "lucide-react";

const CARD_COLORS = [
    { bg: "bg-gradient-to-br from-indigo-50 to-blue-50/50", border: "border-indigo-100", hover: "hover:border-indigo-300 hover:shadow-indigo-100/50", dot: "bg-indigo-400" },
    { bg: "bg-gradient-to-br from-rose-50 to-pink-50/50", border: "border-rose-100", hover: "hover:border-rose-300 hover:shadow-rose-100/50", dot: "bg-rose-400" },
    { bg: "bg-gradient-to-br from-amber-50 to-orange-50/50", border: "border-amber-100", hover: "hover:border-amber-300 hover:shadow-amber-100/50", dot: "bg-amber-400" },
    { bg: "bg-gradient-to-br from-emerald-50 to-teal-50/50", border: "border-emerald-100", hover: "hover:border-emerald-300 hover:shadow-emerald-100/50", dot: "bg-emerald-400" },
];

export function Initiatives() {
    const [activeDive, setActiveDive] = useState<number | null>(null);

    return (
        <section id="initiatives" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-20">
                    <span className="inline-flex items-center gap-2 text-amber-600 font-mono text-xs tracking-widest uppercase mb-6 bg-amber-50 px-4 py-2 rounded-full border border-amber-100">
                        <Lightbulb className="w-3.5 h-3.5" />
                        Key Initiatives
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9]">
                        Ideas <span className="text-slate-300">into</span><br />
                        <span className="gradient-text-warm">Impact.</span>
                    </h2>
                </div>

                <div className="space-y-5">
                    {cvData.initiatives.map((item, index) => {
                        const style = CARD_COLORS[index % CARD_COLORS.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                onClick={() => setActiveDive(index)}
                                className={`group relative ${style.bg} border ${style.border} ${style.hover} cursor-pointer overflow-hidden min-h-[200px] flex items-end p-10 md:p-14 rounded-2xl transition-all duration-500 hover:shadow-xl`}
                            >
                                <span className="absolute top-4 right-8 text-[160px] md:text-[200px] font-display font-black text-slate-500/[0.03] leading-none pointer-events-none select-none">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="absolute top-8 left-10 flex items-center gap-3">
                                    <span className={`w-2.5 h-2.5 rounded-full ${style.dot}`} />
                                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{item.role}</span>
                                </div>
                                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
                                    <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight tracking-tight">{item.title}</h3>
                                    <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="text-xs font-mono text-slate-400 uppercase tracking-widest border border-slate-200 px-6 py-3 rounded-full group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-500">
                                            Case Study →
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {cvData.initiatives.map((item, index) => (
                <DeepDive
                    key={index}
                    isOpen={activeDive === index}
                    onClose={() => setActiveDive(null)}
                    title={item.title}
                    content={item.deepDive || item.description}
                    org={item.role}
                />
            ))}
        </section>
    );
}
