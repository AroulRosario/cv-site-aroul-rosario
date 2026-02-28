"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { FlaskConical, Cpu, Globe } from "lucide-react";

export function About() {
    const coreExpertise = [
        { icon: <FlaskConical />, label: "Molecular Synthesis", desc: "Expertise in synthetic pathways and experimental methodology." },
        { icon: <Cpu />, label: "AI Integration", desc: "Specializing in AI-augmented academic assessment and digital laboratories." },
        { icon: <Globe />, label: "Global Fellowship", desc: "UNESCO and EU-collaborative research frameworks." }
    ];

    return (
        <section id="about" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">

            <div className="quantum-container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">

                    <div className="md:col-span-5">
                        <h2 className="text-emerald-500 mb-6 font-mono text-xs">01 // PHILOSOPHY</h2>
                        <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter">
                            Defining the <span className="text-emerald-500">Standard.</span>
                        </h3>
                        <FadeIn>
                            <div className="glass-card p-1">
                                <div className="p-8 md:p-10 bg-black/40 rounded-[14px]">
                                    <p className="text-lg text-zinc-400 leading-relaxed font-light mb-0">
                                        With over two decades of academic immersion across India and the UK, I have dedicated my career to the precise intersection of chemical research and modern education technology.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="md:col-span-7">
                        <StaggerContainer className="grid grid-cols-1 gap-6">
                            {coreExpertise.map((item, i) => (
                                <StaggerItem key={i}>
                                    <div className="glass-card flex items-start gap-6 p-8 group">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-display font-medium text-white mb-2">{item.label}</h4>
                                            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                </div>
            </div>
        </section>
    );
}
