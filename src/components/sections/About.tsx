"use client";

import { cvData } from "@/data/cv";
import { SlideUp } from "@/components/ui/motion-helpers";

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
                <SlideUp>
                    <div className="glass rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl backdrop-blur-3xl relative overflow-hidden">
                        {/* Decorative blob inside the card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-white relative z-10">
                            About The Author
                        </h2>

                        <div className="space-y-6 text-xl md:text-2xl font-light text-slate-300 leading-relaxed max-w-3xl relative z-10">
                            <p>
                                {cvData.personalInfo.tagline.split('.')[0]}.
                            </p>
                            <p className="font-medium text-white text-2xl md:text-3xl">
                                {cvData.personalInfo.tagline.split('.')[1]}.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-4 relative z-10">
                            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-medium">
                                {cvData.personalInfo.name}
                            </div>
                            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-medium">
                                {cvData.personalInfo.phone}
                            </div>
                            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-medium">
                                {cvData.personalInfo.email}
                            </div>
                            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-medium">
                                {cvData.personalInfo.website}
                            </div>
                        </div>
                    </div>
                </SlideUp>
            </div>
        </section>
    );
}
