"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Certifications() {
    const allCerts = [
        ...cvData.designAndTechCertifications.map(c => ({ ...c, type: "tech" as const })),
        ...cvData.academicCertifications.map(c => ({ ...c, type: "academic" as const })),
    ];

    return (
        <section id="certifications" className="py-32 relative border-y border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(255,255,255,0.04),transparent)] pointer-events-none" />

            <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-4 inline-block px-4 py-1.5 rounded-full border border-white/10 glass">07 // Certified by the Best</p>
                            <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-none relative">
                                Certified<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/30 to-white/70">by the Best.</span>
                            </h2>
                        </div>
                        <p className="text-zinc-500 font-mono text-sm max-w-xs text-left md:text-right hidden md:block">
                            {allCerts.length} certifications from the world&apos;s most prestigious institutions and technology leaders.
                        </p>
                    </div>
                </FadeIn>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-24 relative"
                >
                    {allCerts.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.8 },
                                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
                            }}
                            className="group glass border border-white/10 p-8 flex flex-col items-center gap-6 rounded-2xl hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-500 text-center"
                        >
                            <BrandLogo name={cert.org} size={140} />

                            <div className="w-full flex-grow flex flex-col justify-between">
                                <p className="text-xs font-display font-bold text-white/80 uppercase tracking-widest group-hover:text-white transition-colors mb-3">
                                    {cert.org}
                                </p>
                                <p className="text-[10px] font-mono text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors line-clamp-3 mb-4">
                                    {cert.title}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-white transition-colors">
                                    {cert.type === "tech" ? "Tech" : "Academic"}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="relative overflow-hidden py-6 border-t border-b border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm">
                    <motion.div
                        className="flex gap-16 whitespace-nowrap items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                        {[...allCerts, ...allCerts].map((cert, i) => (
                            <span key={i} className="text-xs font-mono text-white/50 uppercase tracking-[0.2em] shrink-0 hover:text-white transition-colors cursor-default">
                                {cert.title}
                                <span className="mx-8 text-white/10">✦</span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
