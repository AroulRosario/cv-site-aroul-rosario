"use client";

import { cvData } from "@/data/cv";

export function Patents() {
    return (
        <section id="patents" className="py-32 bg-white relative border-y border-slate-100">
            <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">

                <div className="mb-24">
                    <h2 className="text-[11px] font-mono font-bold tracking-[0.4em] uppercase text-indigo-500 mb-8 px-6 py-2 rounded-full border border-indigo-100 inline-block bg-indigo-50/30">
                        09 // Intellectual Property
                    </h2>
                    <h3 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-slate-900 mb-6 tracking-tighter leading-[0.85]">
                        Provisional<br /><span className="text-slate-300">Patents.</span>
                    </h3>
                    <p className="text-xs font-mono tracking-[0.4em] text-slate-400 uppercase">
                        Indian Patent Office · Global IP Index
                    </p>
                </div>

                <div className="flex flex-col gap-10 max-w-4xl mx-auto text-left">
                    {cvData.patents.map((patent, index) => (
                        <div key={index} className="relative pl-12 md:pl-20 border-l-2 border-slate-100 group hover:border-indigo-500 transition-all duration-500 py-4">
                            <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-100 group-hover:bg-indigo-500 transition-all duration-500 shadow-sm group-hover:scale-125" />
                            <h4 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-slate-400 group-hover:text-slate-900 transition-all duration-500 leading-[1.1] tracking-tight">
                                {patent}
                            </h4>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
