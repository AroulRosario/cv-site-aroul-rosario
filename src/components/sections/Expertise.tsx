"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { Beaker, Palette, Cpu, Globe, GraduationCap, ArrowUpRight } from "lucide-react";

const skills = [
    {
        title: "Organic Chemistry",
        desc: "Synthesis, reaction mechanisms, and molecular architecture in pharmaceutical and academic contexts.",
        icon: <Beaker className="w-5 h-5" />,
        size: "md:col-span-2"
    },
    {
        title: "EdTech Innovation",
        desc: "Transforming classical pedagogy through AI and digital environments.",
        icon: <Cpu className="w-5 h-5" />,
        size: "md:col-span-1"
    },
    {
        title: "Architectural Identity",
        desc: "High-end visual communication and premium brand strategy for professional ecosystems.",
        icon: <Palette className="w-5 h-5" />,
        size: "md:col-span-1"
    },
    {
        title: "Global Mentorship",
        desc: "Guiding research scholars across UNESCO and European institutional frameworks.",
        icon: <GraduationCap className="w-5 h-5" />,
        size: "md:col-span-2"
    }
];

export function Expertise() {
    return (
        <section id="expertise" className="py-48 bg-white text-black blueprint-grid-light selection-light relative border-b border-black/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
                    <div>
                        <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-500 mb-8">
                            Skillset // Domain
                        </h2>
                        <h3 className="text-huge font-display font-bold uppercase text-black -ml-1">
                            Mastery.
                        </h3>
                    </div>
                    <div className="max-w-xs">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest leading-loose">
                            Multidisciplinary intersections across science, design, and digital education.
                        </p>
                    </div>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-black/10">
                    {skills.map((skill, i) => (
                        <StaggerItem key={i} className={`${skill.size} border-r border-b border-black/10 group bg-white hover:bg-zinc-50 transition-colors duration-500`}>
                            <div className="p-10 md:p-16 flex flex-col justify-between h-full min-h-[350px] relative">
                                <div className="flex justify-between items-start">
                                    <div className="text-zinc-300 group-hover:text-black transition-colors duration-500">
                                        {skill.icon}
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-300 group-hover:text-black transition-colors">0{i + 1}</span>
                                </div>

                                <div>
                                    <h4 className="text-3xl font-display font-medium text-black mb-6 tracking-tight flex items-center gap-3">
                                        {skill.title}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0" />
                                    </h4>
                                    <p className="text-zinc-500 leading-relaxed text-lg max-w-sm">
                                        {skill.desc}
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
