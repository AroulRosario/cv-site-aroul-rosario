"use client";

import { cvData } from "@/data/cv";
import { Mail, Linkedin, Twitter, Globe, ArrowUpRight } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 md:py-48 relative bg-black overflow-hidden border-b border-white/5">
            {/* Architectural Grid Overlay */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-stretch">
                    
                    {/* Visual: Full Height Narrative Image */}
                    <div className="relative aspect-[3/4] lg:aspect-auto">
                        <img
                            src="/photos/profile.png"
                            alt="Dr. Aroul Rosario S"
                            className="w-full h-full object-cover filter grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.5em] mb-2">Puducherry, India</p>
                            <h3 className="text-2xl font-display font-medium text-white italic">Dr. Aroul Rosario S</h3>
                        </div>
                    </div>

                    {/* Narrative: Pure Typography */}
                    <div className="flex flex-col justify-center py-8">
                        <span className="text-xs font-mono text-zinc-600 uppercase tracking-[0.4em] mb-12 block">
                            02 // The Educationalist
                        </span>
                        
                        <div className="space-y-12">
                            <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-[1.05]">
                                Reimagining <br />
                                <span className="text-zinc-600 italic">Scientific Pedagogy.</span>
                            </h2>

                            <div className="space-y-8 text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
                                <p>
                                    Dr. S. Aroul Rosario is a dedicated Indian educationalist and serial ed-tech founder. 
                                    His work sits at the intersection of deep scientific research and intentional 
                                    digital design, aiming to make complex knowledge intuitively accessible to millions.
                                </p>
                                <p>
                                    As the architect of <span className="text-white">OG Chemistry</span> and <span className="text-white">Neural Review</span>, 
                                    he leverages neuro-cognitive learning frameworks and immersive 3D simulations to 
                                    bridge the gap between abstract concepts and real-world understanding.
                                </p>
                                <p>
                                    Recently, he served as a **Guest Judge for the EdTech Pitching Competition at BITS Pilani**, 
                                    mentoring the next wave of innovators in the digital learning ecosystem.
                                </p>
                            </div>

                            {/* Direct Connect */}
                            <div className="pt-12 flex flex-wrap items-center gap-10 border-t border-white/10">
                                <a 
                                    href={`mailto:${cvData.personalInfo.email}`} 
                                    className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-zinc-400 transition-colors"
                                >
                                    Collaborate 
                                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </a>
                                
                                <div className="flex gap-6">
                                    {cvData.socialLinks.map((s) => {
                                        const Icon = s.platform === "LinkedIn" ? Linkedin : s.platform === "Twitter" ? Twitter : null;
                                        return (
                                            <a 
                                                key={s.platform} 
                                                href={s.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-zinc-600 hover:text-white transition-colors"
                                                title={s.platform}
                                            >
                                                {Icon && <Icon className="w-5 h-5" />}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
