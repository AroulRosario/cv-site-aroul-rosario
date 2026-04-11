"use client";

import { cvData } from "@/data/cv";
import { FadeIn, RevealText } from "@/components/ui/motion-helpers";

export function Footer() {
    return (
        <footer className="py-32 bg-white relative border-t border-zinc-100 flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
                <div className="space-y-16 mb-24">
                    <div>
                        <p
                            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-zinc-950 leading-[0.9] tracking-tight"
                        >
                            {cvData.footerQuotes[0]}
                        </p>
                    </div>
                    <div>
                        <p
                            className="text-xl md:text-2xl font-light text-zinc-500 leading-relaxed max-w-2xl mx-auto"
                        >
                            {cvData.footerQuotes[1]}
                        </p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-zinc-100 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
                        <p>© {new Date().getFullYear()} {cvData.personalInfo.name}</p>
                        <div className="flex gap-8 mt-6 md:mt-0">
                            <a
                                href={`https://${cvData.personalInfo.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-zinc-950 transition-colors"
                            >
                                {cvData.personalInfo.website}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
