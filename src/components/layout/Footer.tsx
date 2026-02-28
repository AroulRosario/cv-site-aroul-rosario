"use client";

import { cvData } from "@/data/cv";
import { FadeIn, RevealText } from "@/components/ui/motion-helpers";

export function Footer() {
    return (
        <footer className="py-32 bg-black relative border-t border-white/10 flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
                <div className="space-y-12 mb-24">
                    <RevealText>
                        <p
                            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight"
                            dangerouslySetInnerHTML={{
                                __html: cvData.footerQuotes[0]
                                    .replace("crack IIT or NEET.", "<span class='text-zinc-500'>crack IIT or NEET.</span>"),
                            }}
                        />
                    </RevealText>
                    <RevealText delay={0.2}>
                        <p
                            className="text-2xl md:text-3xl font-light text-zinc-400 leading-snug max-w-2xl mx-auto"
                            dangerouslySetInnerHTML={{
                                __html: cvData.footerQuotes[1]
                                    .replace("It's built to simplify, not mystify.", "<span class='text-white font-medium'>It's built to simplify, not mystify.</span>"),
                            }}
                        />
                    </RevealText>
                </div>

                <FadeIn delay={0.4}>
                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-500">
                        <p>© {new Date().getFullYear()} {cvData.personalInfo.name}</p>
                        <a
                            href={`https://${cvData.personalInfo.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors mt-4 md:mt-0"
                        >
                            {cvData.personalInfo.website}
                        </a>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
