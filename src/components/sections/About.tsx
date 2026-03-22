import { cvData } from "@/data/cv";
import { Mail, Cpu, Beaker, Linkedin, Twitter, Globe } from "lucide-react";

export function About() {
    const tagline = cvData.personalInfo.tagline;

    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(0,242,255,0.02),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="mb-12 md:mb-20">
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">
                        02 // Mission &amp; Background
                    </p>
                    <h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tighter">
                        Bridging Core Science <br className="hidden md:block" />with Digital Frontiers.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

                    {/* Profile Photo — mobile first: shows on top */}
                    <div className="lg:col-span-4 glass-card overflow-hidden relative group min-h-[280px] md:min-h-[420px]">
                        <img
                            src="/photos/profile.png"
                            alt="Dr. Aroul Rosario S — Educationalist, EdTech Founder & Strategist"
                            className="w-full h-full object-cover object-top absolute inset-0"
                        />
                        {/* Bio overlay at bottom — no floating card */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-16 pb-4 px-4">
                            <p className="text-sm font-display font-bold text-white leading-tight">Dr. Aroul Rosario S</p>
                            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-1">FRSA · IUPAC Affiliate · ACS Member</p>
                        </div>
                    </div>

                    {/* Main Statement */}
                    <div className="lg:col-span-8 glass-card p-6 md:p-10 xl:p-14 flex flex-col justify-center">
                        <p className="text-xl md:text-3xl xl:text-4xl font-light leading-snug tracking-tight text-white">
                            Designing the future of pedagogy through deep science and intentional technology. Educationalist, EdTech Founder & Strategist.
                        </p>
                        <div className="mt-8 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
                        <div className="mt-6 flex flex-wrap gap-6 md:gap-8">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Impact Radius</span>
                                <span className="text-white font-medium text-sm">Global</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Focus</span>
                                <span className="text-white font-medium text-sm">Cognitive STEM</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-5">
                        <div className="glass-card p-6 md:p-8 flex flex-col justify-between group">
                            <Cpu className="w-6 h-6 text-zinc-700 group-hover:text-white transition-colors" />
                            <div className="mt-4">
                                <span className="text-3xl md:text-4xl font-display font-bold text-white block">10k+</span>
                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1 block">Digital Learning Nodes</span>
                            </div>
                        </div>
                        <div className="glass-card p-6 md:p-8 flex flex-col justify-between group">
                            <Beaker className="w-6 h-6 text-zinc-700 group-hover:text-white transition-colors" />
                            <div className="mt-4">
                                <span className="text-3xl md:text-4xl font-display font-bold text-white block">5+</span>
                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1 block">Ventures Founded</span>
                            </div>
                        </div>
                    </div>

                    {/* Social / Connect Tile */}
                    <div className="lg:col-span-8 px-6 py-8 md:px-10 md:py-10 glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white/[0.01]">
                        <div className="max-w-md">
                            <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-1">Connect.</h4>
                            <p className="text-zinc-500 text-sm">Reach out for institutional collaboration, research inquiries, or speaking invitations.</p>
                        </div>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            <a href={`mailto:${cvData.personalInfo.email}`} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors text-xs md:text-sm">
                                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                                Email
                            </a>
                            {cvData.socialLinks.map((s) => {
                                const Icon = s.platform === "LinkedIn" ? Linkedin : s.platform === "Twitter" ? Twitter : null;
                                return (
                                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors text-xs md:text-sm text-white">
                                        {Icon && <Icon className="w-3 h-3 md:w-4 md:h-4" />}
                                        {!Icon && <span className="font-bold text-xs">M</span>}
                                        {s.platform}
                                    </a>
                                );
                            })}
                            <a href={`https://${cvData.personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-xs md:text-sm text-white">
                                <Globe className="w-3 h-3 md:w-4 md:h-4" />
                                Website
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
