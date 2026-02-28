"use client";

import { cvData } from "@/data/cv";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { Lightbulb } from "lucide-react";

export function Patents() {
    return (
        <section id="patents" className="py-24 bg-slate-900/50 relative border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                <SlideUp>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mb-8 mx-auto">
                        <Lightbulb className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Provisional Patents Filed
                    </h2>
                    <p className="text-slate-400 mb-12">Intellectual Property India</p>
                </SlideUp>

                <StaggerContainer className="grid gap-6">
                    {cvData.patents.map((patent, index) => (
                        <StaggerItem key={index}>
                            <div className="glass p-8 rounded-2xl border border-white/10 hover:border-yellow-500/30 transition-colors">
                                <h3 className="text-xl md:text-2xl font-medium text-slate-200 leading-relaxed">
                                    {patent}
                                </h3>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
