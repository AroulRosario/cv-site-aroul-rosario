"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";

export function Contact() {
    const contact = cvData.contact;

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Ambient gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(255,255,255,0.04),transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(0,242,255,0.02)_0%,transparent_50%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-4 inline-block px-4 py-1.5 rounded-full border border-white/10 glass">10 // Let&apos;s Connect</p>
                        <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-none mt-6">
                            Reach<br />
                            <span className="text-white/20">Out.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 text-sm font-mono max-w-xs hidden md:block text-right">
                        Open to collaborations, speaking invitations, research partnerships, and educational consulting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Phone */}
                    <motion.a
                        href={`tel:${contact.phone}`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="group glass-card p-10 flex flex-col gap-6 hover:border-white/25 hover:-translate-y-2 transition-all duration-500"
                    >
                        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors bg-white/5">
                            <Phone size={22} className="text-zinc-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-3">Phone</p>
                            <p className="text-2xl font-display font-black text-white tracking-tight">{contact.phone}</p>
                        </div>
                    </motion.a>

                    {/* Emails */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="group glass-card p-10 flex flex-col gap-8 md:col-span-1 border-white/20 hover:border-accent-primary/50 hover:shadow-[0_0_50px_-10px_rgba(0,242,255,0.15)] transition-all duration-700"
                    >
                        <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-accent-primary/50 group-hover:bg-accent-primary/5 transition-all duration-500 bg-white/5">
                            <Mail size={24} className="text-zinc-400 group-hover:text-accent-primary transition-colors" />
                        </div>
                        <div className="space-y-6">
                            <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">Professional Networks</p>
                            {contact.emails.map((e) => (
                                <a key={e.email} href={`mailto:${e.email}`}
                                    className="block group/link relative">
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">{e.label}</span>
                                    <span className="text-lg font-display font-medium text-zinc-200 group-hover/link:text-white transition-colors underline underline-offset-8 decoration-white/10 group-hover/link:decoration-accent-primary/50">
                                        {e.email}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="group glass-card p-10 flex flex-col gap-6 hover:border-white/25 hover:-translate-y-2 transition-all duration-500"
                    >
                        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors bg-white/5">
                            <ExternalLink size={22} className="text-zinc-400 group-hover:text-white transition-colors" />
                        </div>
                        <div className="space-y-4">
                            <p className="text-xs font-mono uppercase tracking-widest text-zinc-600">Ventures</p>
                            {contact.links.map((l) => (
                                <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 group/link">
                                    <span className="flex-1 text-sm font-mono text-zinc-300 group-hover/link:text-white transition-colors">
                                        {l.label}
                                    </span>
                                    <ExternalLink size={12} className="text-zinc-700 group-hover/link:text-white transition-colors shrink-0" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Location */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-6 glass-card p-8 flex items-center gap-6"
                >
                    <MapPin size={20} className="text-zinc-600 shrink-0" />
                    <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-1">Location</p>
                        <p className="text-lg font-display font-bold text-white">Puducherry, India</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
