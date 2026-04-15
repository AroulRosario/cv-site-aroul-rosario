"use client";

import { useState } from "react";
import { cvData } from "@/data/cv";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { DeepDive } from "@/components/ui/DeepDive";
import { ArrowUpRight, Briefcase } from "lucide-react";

const STATS = [
    { value: "10K+", label: "Students Impacted", color: "text-blue-600" },
    { value: "300+", label: "Educators Trained", color: "text-violet-600" },
    { value: "5+", label: "Years Leading", color: "text-emerald-600" },
];

export function Experience() {
    const [activeDive, setActiveDive] = useState<number | null>(null);

    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-20">
                    <span className="inline-flex items-center gap-2 text-blue-600 font-mono text-xs tracking-widest uppercase mb-6 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                        <Briefcase className="w-3.5 h-3.5" />
                        Career Trajectory
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9]">
                        Built. <span className="text-blue-300">Led.</span><br />
                        <span className="gradient-text">Scaled.</span>
                    </h2>
                </div>

                {/* Stat bar */}
                <div className="grid grid-cols-3 gap-6 mb-20 pb-16 border-b border-slate-100">
                    {STATS.map((s, i) => (
                        <div key={s.label} className="text-center">
                            <p className={`text-5xl md:text-6xl font-display font-bold ${s.color} tracking-tighter`}>{s.value}</p>
                            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-3">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Experience Cards */}
                <div className="space-y-4">
                    {cvData.experience.map((item, index) => (
                        <div key={index} onClick={() => setActiveDive(index)}>
                            <div className="group relative flex items-center gap-6 md:gap-10 p-6 md:p-8 bg-white border border-slate-100 rounded-2xl cursor-pointer overflow-hidden hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-300">
                                <div className="flex-shrink-0">
                                    <BrandLogo name={item.org} size={72} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline gap-4 mb-2">
                                        <h3 className="text-xl md:text-3xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                                            {item.title}
                                        </h3>
                                        <span className="hidden md:block text-sm font-mono text-indigo-400 shrink-0">{item.period}</span>
                                    </div>
                                    <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">{item.org}</p>
                                </div>
                                <div className="text-slate-300 group-hover:text-indigo-500 transition-all duration-300 shrink-0">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {cvData.experience.map((item, index) => (
                <DeepDive
                    key={index}
                    isOpen={activeDive === index}
                    onClose={() => setActiveDive(null)}
                    title={item.title}
                    content={item.deepDive || item.description}
                    org={item.org}
                />
            ))}
        </section>
    );
}
