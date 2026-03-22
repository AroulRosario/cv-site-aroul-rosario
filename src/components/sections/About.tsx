import { cvData } from "@/data/cv";
import { SlideUp, FadeIn } from "@/components/ui/motion-helpers";
import { motion } from "framer-motion";
import { Beaker, Globe, Mail, Cpu, Linkedin, Twitter } from "lucide-react";

const SOCIAL = [
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/aroulrosario/", handle: "aroulrosario" },
    { icon: Twitter, label: "X / Twitter", url: "https://x.com/rosarioaroul", handle: "@rosarioaroul" },
    { label: "Medium", url: "https://medium.com/@aroul.rosario", handle: "@aroul.rosario", icon: null },
];

export function About() {
    const tagline = cvData.personalInfo.tagline;

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="mb-20">
                    <FadeIn>
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">
                            02 // Mission &amp; Background
                        </p>
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">
                            Bridging Core Science <br />with Digital Frontiers.
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Main Statement Tile */}
                    <div className="md:col-span-8 glass-card p-10 md:p-14 flex flex-col justify-center">
                        <SlideUp>
                            <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-white">
                                {tagline}
                            </p>
                            <div className="mt-12 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
                            <div className="mt-8 flex gap-8">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Impact Radius</span>
                                    <span className="text-white font-medium">Global</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Focus</span>
                                    <span className="text-white font-medium">Cognitive STEM</span>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    {/* Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="md:col-span-4 glass-card overflow-hidden relative group"
                    >
                        <img
                            src="/photos/profile.png"
                            alt="Dr. Aroul Rosario S — Vice Principal & Ed-Tech Founder"
                            className="w-full h-full object-cover object-top min-h-[400px]"
                        />

                        {/* SYSTEM STATUS Overlay */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="glass-card bg-black/40 backdrop-blur-md border-white/10 p-4 self-start w-full max-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                                        <div className="w-4 h-4 text-white">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em]">System Status</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Network</span>
                                        <span className="text-[9px] font-mono text-white uppercase tracking-wider">Optimized</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] font-mono text-zinc-500 uppercase">Phase</span>
                                        <span className="text-[9px] font-mono text-white uppercase tracking-wider">Execution</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Bio details overlay at bottom */}
                            <div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-12 pb-2 px-2 backdrop-blur-[2px]">
                                <p className="text-sm font-display font-bold text-white leading-tight">Dr. Aroul Rosario S</p>
                                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-1">FRSA · IUPAC Affiliate · ACS Member</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="md:col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">
                        <div className="glass-card p-8 flex flex-col justify-between group">
                            <Cpu className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                            <div>
                                <span className="text-4xl font-display font-bold text-white block">10k+</span>
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Digital Learning Nodes</span>
                            </div>
                        </div>
                        <div className="glass-card p-8 flex flex-col justify-between group">
                            <Beaker className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                            <div>
                                <span className="text-4xl font-display font-bold text-white block">5+</span>
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Ventures Founded</span>
                            </div>
                        </div>
                    </div>

                    {/* Social / Connectivity Tile */}
                    <div className="md:col-span-12 lg:col-span-8 px-10 py-12 glass-card flex flex-col md:flex-row items-center justify-between gap-12 bg-white/[0.01]">
                        <div className="max-w-md">
                            <h4 className="text-2xl font-display font-bold text-white mb-2">Connect.</h4>
                            <p className="text-zinc-500 text-sm">Reach out for institutional collaboration, research inquiries, or speaking invitations.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a href={`mailto:${cvData.personalInfo.email}`} className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors text-sm">
                                <Mail className="w-4 h-4" />
                                Email
                            </a>
                            {cvData.socialLinks.map((s) => {
                                const Icon = s.platform === "LinkedIn" ? Linkedin : s.platform === "Twitter" ? Twitter : null;
                                return (
                                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors text-sm text-white">
                                        {Icon && <Icon className="w-4 h-4" />}
                                        {!Icon && <span className="font-bold text-xs">M</span>}
                                        {s.platform}
                                    </a>
                                );
                            })}
                            <a href={`https://${cvData.personalInfo.website}`} target="_blank" className="flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-sm text-white">
                                <Globe className="w-4 h-4" />
                                Website
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
