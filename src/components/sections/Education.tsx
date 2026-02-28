"use client";

import { cvData } from "@/data/cv";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
    return (
        <section id="academics" className="py-24 bg-slate-900/50 relative border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <SlideUp>
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                            <GraduationCap className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-4xl font-display font-bold text-white">Academics & Fellowships</h2>
                    </div>
                </SlideUp>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cvData.fellowshipsAndSocieties.map((item, index) => (
                        <StaggerItem key={index}>
                            <div className="group h-full glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300">
                                <div className="flex flex-col h-full justify-between gap-4">
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            {item.acronym ? (
                                                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                                                    {item.acronym}
                                                </span>
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                                                    <Award className="w-4 h-4 text-slate-400" />
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    </div>
                                    <p className="text-slate-400 font-medium">{item.org}</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
