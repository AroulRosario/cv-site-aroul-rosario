"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, MapPin, Send } from "lucide-react";

export function Contact() {
    const contact = cvData.contact;

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-indigo-50/40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <span className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs tracking-widest uppercase mb-6 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                            <Send className="w-3.5 h-3.5" />
                            Let&apos;s Connect
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9]">
                            Reach<br />
                            <span className="gradient-text">Out.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 text-sm max-w-xs hidden md:block text-right leading-relaxed">
                        Open to collaborations, speaking invitations, research partnerships, and educational consulting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a
                        href={`tel:${contact.phone}`}
                        className="group bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100 p-10 flex flex-col gap-8 rounded-2xl hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-200 transition-all duration-500"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-all duration-500">
                            <Phone size={22} className="text-blue-500 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div>
                            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">Voice</p>
                            <p className="text-2xl font-display font-bold text-slate-900">{contact.phone}</p>
                        </div>
                    </a>

                    <div className="group bg-white border border-slate-200 p-10 flex flex-col gap-8 rounded-2xl hover:shadow-xl hover:shadow-indigo-100/40 hover:border-indigo-200 transition-all duration-500">
                        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-500 transition-all duration-500">
                            <Mail size={22} className="text-indigo-500 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="space-y-5">
                            <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Professional Inquiries</p>
                            {contact.emails.map((e) => (
                                <a key={e.email} href={`mailto:${e.email}`} className="block group/link">
                                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">{e.label}</span>
                                    <span className="text-lg font-display font-medium text-slate-900 group-hover/link:text-indigo-600 transition-colors underline underline-offset-4 decoration-slate-200 group-hover/link:decoration-indigo-400">
                                        {e.email}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="group bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-100 p-10 flex flex-col gap-8 rounded-2xl hover:shadow-xl hover:shadow-violet-100/40 hover:border-violet-200 transition-all duration-500">
                        <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center group-hover:bg-violet-500 transition-all duration-500">
                            <ExternalLink size={22} className="text-violet-500 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="space-y-4">
                            <p className="text-xs font-mono uppercase tracking-widest text-violet-400">Digital Footprint</p>
                            {contact.links.map((l) => (
                                <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group/link">
                                    <span className="flex-1 text-sm font-mono text-slate-600 group-hover/link:text-violet-600 transition-colors">{l.label}</span>
                                    <ExternalLink size={12} className="text-slate-300 group-hover/link:text-violet-500 transition-colors shrink-0" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 bg-emerald-50 border border-emerald-100 p-8 flex items-center gap-6 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                        <MapPin size={20} className="text-emerald-500" />
                    </div>
                    <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">Based In</p>
                        <p className="text-lg font-display font-bold text-slate-900">Puducherry + Bengaluru, India</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
