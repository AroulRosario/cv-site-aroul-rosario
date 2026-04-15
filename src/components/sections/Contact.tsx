"use client";

import { cvData } from "@/data/cv";
import { Mail, Phone, ExternalLink, MapPin, Send } from "lucide-react";

export function Contact() {
    const contact = cvData.contact;

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-indigo-50/30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
                    <div>
                        <span className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold tracking-[0.3em] uppercase mb-8 bg-emerald-50 px-5 py-2.5 rounded-full border border-emerald-100">
                            <Send className="w-4 h-4" />
                            Direct Communication
                        </span>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-slate-900 tracking-tighter leading-[0.8]">
                            Reach<br />
                            <span className="gradient-text">Out.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 text-lg max-w-sm hidden md:block text-right leading-relaxed font-medium">
                        Open to elite collaborations, keynote addresses, research partnerships, and strategic consulting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <a
                        href={`tel:${contact.phone}`}
                        className="group bg-blue-50/30 border border-blue-100 p-12 flex flex-col gap-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-400 transition-all duration-700 hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                            <Phone size={28} className="text-blue-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div>
                            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.4em] text-blue-400 mb-4 group-hover:text-blue-600 transition-colors">Direct Line</p>
                            <p className="text-3xl font-display font-bold text-slate-900 tracking-tight">{contact.phone}</p>
                        </div>
                    </a>

                    <div className="group bg-white border border-slate-200 p-12 flex flex-col gap-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-100/50 hover:border-indigo-400 transition-all duration-700 hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-500">
                            <Mail size={28} className="text-indigo-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="space-y-8">
                            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.4em] text-indigo-400 group-hover:text-indigo-600 transition-colors">Digital Inquiries</p>
                            <div className="space-y-6">
                                {contact.emails.map((e) => (
                                    <a key={e.email} href={`mailto:${e.email}`} className="block group/link">
                                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1 group-hover/link:text-slate-600 transition-colors">{e.label}</span>
                                        <span className="text-xl font-display font-bold text-slate-900 group-hover/link:text-indigo-600 transition-colors underline underline-offset-8 decoration-slate-100 group-hover/link:decoration-indigo-400 leading-tight">
                                            {e.email}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="group bg-violet-50/30 border border-violet-100 p-12 flex flex-col gap-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-violet-100/50 hover:border-violet-400 transition-all duration-700 hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center group-hover:bg-violet-600 transition-all duration-500">
                            <ExternalLink size={28} className="text-violet-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="space-y-6">
                            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.4em] text-violet-400 group-hover:text-violet-600 transition-colors">Digital Network</p>
                            <div className="space-y-5">
                                {contact.links.map((l) => (
                                    <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/link">
                                        <span className="flex-1 text-sm font-mono font-bold text-slate-500 group-hover/link:text-violet-600 transition-all duration-500 uppercase tracking-widest leading-none">{l.label}</span>
                                        <ExternalLink size={14} className="text-slate-300 group-hover/link:text-violet-500 transition-colors shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 p-10 flex items-center gap-8 rounded-[2rem] hover:bg-slate-100 transition-colors duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                        <MapPin size={24} className="text-slate-400" />
                    </div>
                    <div>
                        <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-400 mb-1">HQ / Consultation Base</p>
                        <p className="text-xl font-display font-bold text-slate-900 tracking-tight">Puducherry + Bengaluru, India</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
