"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { Beaker, Palette, Cpu, Globe, GraduationCap, Zap } from "lucide-react";

const skills = [
    {
        title: "Organic Chemistry",
        desc: "Synthesis, reaction mechanisms, and molecular architecture.",
        icon: <Beaker className="w-6 h-6" />,
        color: "bg-zinc-900",
        size: "col-span-1 md:col-span-2"
    },
    {
        title: "EdTech Innovation",
        desc: "Bridging pedagogy with modern digital tools.",
        icon: <Cpu className="w-6 h-6" />,
        color: "bg-zinc-900",
        size: "col-span-1"
    },
    {
        title: "Branding",
        desc: "Visual identity and high-end aesthetic design.",
        icon: <Palette className="w-6 h-6" />,
        color: "bg-zinc-900",
        size: "col-span-1"
    },
    {
        title: "Global Research",
        desc: "Collaborating across borders with elite institutions.",
        icon: <Globe className="w-6 h-6" />,
        color: "bg-zinc-900",
        size: "col-span-1"
    },
    {
        title: "Academic Mentorship",
        desc: "Guiding the next generation of scientists and thinkers.",
        icon: <GraduationCap className="w-6 h-6" />,
        color: "bg-zinc-900",
        size: "col-span-1 md:col-span-2"
    }
];

export function Expertise() {
    return (
        <section id="expertise" className="py-32 bg-zinc-950 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <FadeIn className="mb-20">
                    <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">Skillset // Mastery</h2>
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">Multidisciplinary<br />Expertise.</h3>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                        <StaggerItem key={i} className={skill.size}>
                            <div className={`h-full p-8 rounded-3xl border border-white/5 bg-black hover:border-white/20 transition-all duration-700 group relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 p-8 text-zinc-800 group-hover:text-white/20 transition-colors duration-700">
                                    {skill.icon}
                                </div>
                                <div className="relative z-10 flex flex-col justify-end h-full min-h-[160px]">
                                    <h4 className="text-2xl font-display font-medium text-white mb-3 tracking-tight">{skill.title}</h4>
                                    <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed text-sm max-w-xs">{skill.desc}</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
