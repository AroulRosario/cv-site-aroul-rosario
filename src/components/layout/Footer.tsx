"use client";

import { cvData } from "@/data/cv";
import { FadeIn } from "@/components/ui/motion-helpers";

export function Footer() {
    return (
        <footer className="py-24 bg-slate-950 relative border-t border-white/5 overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
                <FadeIn>
                    <div className="space-y-8 mb-16">
                        {cvData.footerQuotes.map((quote, index) => (
                            <p
                                key={index}
                                className={`text-2xl md:text-4xl font-display font-medium ${index === 0 ? "heading-gradient" : "text-slate-300"
                                    } leading-relaxed mx-auto max-w-3xl`}
                                dangerouslySetInnerHTML={{
                                    __html: quote
                                        .replace("crack IIT or NEET.", "<strong class='text-white'>crack IIT or NEET.</strong>")
                                        .replace("It's built to simplify, not mystify.", "<strong class='text-white'>It's built to simplify, not mystify.</strong>"),
                                }}
                            />
                        ))}
                    </div>

                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mb-16" />

                    <div className="flex flex-col items-center justify-center space-y-4">
                        <p className="text-slate-500 font-medium">
                            © {new Date().getFullYear()} {cvData.personalInfo.name}. All rights reserved.
                        </p>
                        <a
                            href={`https://${cvData.personalInfo.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            {cvData.personalInfo.website}
                        </a>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
