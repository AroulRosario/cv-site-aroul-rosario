"use client";

import { cvData } from "@/data/cv";

export function Footer() {
    return (
        <footer className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Ambient gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10 text-center">
                <div className="space-y-10 mb-20">
                    <p className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[0.95] tracking-tight">
                        {cvData.footerQuotes[0]}
                    </p>
                    <p className="text-lg md:text-xl font-light text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        {cvData.footerQuotes[1]}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-700/50 text-xs font-mono uppercase tracking-widest text-slate-500">
                    <p>© {new Date().getFullYear()} {cvData.personalInfo.name}</p>
                    <a
                        href={`https://${cvData.personalInfo.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition-colors mt-4 md:mt-0"
                    >
                        {cvData.personalInfo.website}
                    </a>
                </div>
            </div>
        </footer>
    );
}
