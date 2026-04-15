"use client";

import { useState } from "react";
import { cvData } from "@/data/cv";
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

                <div className="space-y-6">
                    {cvData.initiatives.map((item, index) => {
                        const style = CARD_COLORS[index % CARD_COLORS.length];
                        return (
                            <div
                                key={index}
                                onClick={() => setActiveDive(index)}
                                className={`group relative ${style.bg} border ${style.border} ${style.hover} cursor-pointer overflow-hidden min-h-[220px] flex items-end p-10 md:p-16 rounded-[2.5rem] transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-100/40 hover:-translate-y-1`}
                            >
                                <span className="absolute top-4 right-12 text-[180px] md:text-[240px] font-display font-black text-slate-500/[0.04] leading-none pointer-events-none select-none group-hover:text-indigo-500/[0.06] transition-colors duration-700">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="absolute top-10 left-12 flex items-center gap-4">
                                    <span className={`w-3 h-3 rounded-full ${style.dot} shadow-sm group-hover:scale-125 transition-transform duration-500`} />
                                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-[0.3em] group-hover:text-slate-900 transition-colors">{item.role}</span>
                                </div>
                                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
                                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[0.85] tracking-tighter group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                                    <div className="shrink-0 group-hover:translate-x-2 transition-transform duration-500">
                                        <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.3em] border border-slate-200 px-8 py-4 rounded-full group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-500">
                                            Case Study &rarr;
                                        </div>
                                    </div>
                                </div>
                            </div>
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
