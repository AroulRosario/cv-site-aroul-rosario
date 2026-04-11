"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";

export function Contact() {
    const contact = cvData.contact;

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div>
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-6 inline-block px-4 py-1.5 rounded-full border border-zinc-100 bg-zinc-50">10 // Let&apos;s Connect</p>
                        <h2 className="text-6xl md:text-8xl font-display font-medium text-zinc-950 tracking-tighter leading-[0.85] mt-6">
                            Reach<br />
                            <span className="text-zinc-200 italic">Out.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 text-sm font-mono max-w-xs hidden md:block text-right leading-relaxed">
                        Open to collaborations, speaking invitations, research partnerships, and educational consulting engagements globaly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Phone */}
                    <a
                        href={`tel:${contact.phone}`}
                        className="group bg-zinc-50 border border-zinc-100 p-12 flex flex-col gap-10 rounded-[2rem] hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500"
                    >
                        <div className="w-14 h-14 rounded-2xl border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-all duration-500 bg-white">
                            <Phone size={24} className="text-zinc-400 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div>
                            <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4">Voice</p>
                            <p className="text-3xl font-display font-medium text-zinc-950 tracking-tight">{contact.phone}</p>
                        </div>
                    </a>

                    {/* Emails */}
                    <div
                        className="group bg-white border border-zinc-200 p-12 flex flex-col gap-12 md:col-span-1 rounded-[2rem] hover:border-zinc-400 hover:shadow-2xl hover:shadow-zinc-300/50 transition-all duration-500"
                    >
                        <div className="w-16 h-16 rounded-3xl border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-all duration-500 bg-zinc-50">
                            <Mail size={28} className="text-zinc-400 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="space-y-8">
                            <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">Professional Inquiries</p>
                            {contact.emails.map((e) => (
                                <a key={e.email} href={`mailto:${e.email}`}
                                    className="block group/link relative">
                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2">{e.label}</span>
                                    <span className="text-xl font-display font-medium text-zinc-950 group-hover/link:text-zinc-600 transition-colors underline underline-offset-[12px] decoration-zinc-100 group-hover/link:decoration-zinc-950">
                                        {e.email}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div
                        className="group bg-zinc-50 border border-zinc-100 p-12 flex flex-col gap-10 rounded-[2rem] hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500"
                    >
                        <div className="w-14 h-14 rounded-2xl border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-all duration-500 bg-white">
                            <ExternalLink size={24} className="text-zinc-400 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="space-y-6">
                            <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">Digital Footprint</p>
                            {contact.links.map((l) => (
                                <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-3 group/link">
                                    <span className="flex-1 text-base font-mono text-zinc-600 group-hover/link:text-zinc-950 transition-colors">
                                        {l.label}
                                    </span>
                                    <ExternalLink size={14} className="text-zinc-300 group-hover/link:text-zinc-950 transition-colors shrink-0" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Location */}
                <div
                    className="mt-8 border border-zinc-100 bg-zinc-50/50 p-10 flex items-center gap-8 rounded-[2rem]"
                >
                    <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center">
                        <MapPin size={22} className="text-zinc-400" />
                    </div>
                    <div>
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-2">Based In</p>
                        <p className="text-xl font-display font-medium text-zinc-950">Puducherry + Bengaluru, India</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
