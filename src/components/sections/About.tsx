"use client";

import { cvData } from "@/data/cv";
import { Mail, Linkedin, Twitter, Globe, Award, MessageSquare } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 md:py-40 relative overflow-hidden bg-black">
            {/* Minimal ambient glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* Visual Side: Clean Image with simple caption */}
                    <div className="relative group">
                        <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/5 bg-zinc-900">
                            <img
                                src="/photos/profile.png"
                                alt="Dr. Aroul Rosario S"
                                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                        </div>
                        {/* Simple, non-floating footer for the image */}
                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Institutional Leadership</span>
                            <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 rounded-full bg-zinc-800" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Side: Bold Typography & Narrative */}
                    <div className="space-y-12">
                        <div>
                            <p className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-500 mb-8">
                                02 // Narrative
                            </p>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter leading-[1.1] mb-10">
                                Bridging Core Science with <span className="text-zinc-500">Digital Pedagogy.</span>
                            </h2>
                            <div className="space-y-6 text-lg md:text-xl font-light text-zinc-400 leading-relaxed">
                                <p>
                                    Dr. S. Aroul Rosario is an Indian educationalist and serial ed-tech founder dedicated to redefining how STEM is taught at scale. 
                                    As the architect of <span className="text-white italic">OG Chemistry</span> and <span className="text-white italic">Neural Review</span>, he integrates neuro-cognitive research with immersive 3D simulations.
                                </p>
                                <p>
                                    A Fellow of the Royal Society (FRSA) and an IIM-A certified Digital Strategist, he balances institutional governance at the Amalorpavam Group with high-impact scientific inquiry. 
                                    Recently, he was invited to **Judge the EdTech Pitching Competition at BITS Pilani**, evaluating the next generation of digital learning innovators.
                                </p>
                            </div>
                        </div>

                        {/* Professional Credentials - Clean List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
                            <div>
                                <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Core Focus</h4>
                                <ul className="space-y-3 text-sm text-zinc-300">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-zinc-500" />
                                        Neuro-Cognitive Learning
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-zinc-500" />
                                        VR Molecular Simulations
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-zinc-500" />
                                        AI-Augmented Assessment
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Recognition</h4>
                                <ul className="space-y-3 text-sm text-zinc-300">
                                    <li className="flex items-center gap-2">
                                        <Award className="w-3 h-3 text-zinc-500" />
                                        FRSA · IUPAC · ACS
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Award className="w-3 h-3 text-zinc-500" />
                                        President's Award - Balashree
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Award className="w-3 h-3 text-zinc-500" />
                                        IIT Delhi Guest Speaker
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a 
                                href={`mailto:${cvData.personalInfo.email}`} 
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all"
                            >
                                <MessageSquare className="w-4 h-4" />
                                Inquire
                            </a>
                            <div className="flex items-center gap-4 px-4">
                                {cvData.socialLinks.map((s) => {
                                    const Icon = s.platform === "LinkedIn" ? Linkedin : s.platform === "Twitter" ? Twitter : null;
                                    return (
                                        <a 
                                            key={s.platform} 
                                            href={s.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-zinc-500 hover:text-white transition-colors"
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

            {/* Bottom Section Edge */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </section>
    );
}
