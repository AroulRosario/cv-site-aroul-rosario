"use client";

import { X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface DeepDiveProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
    org?: string;
}

export function DeepDive({ isOpen, onClose, title, content, org }: DeepDiveProps) {
    return (
        <div 
            className={`fixed inset-0 z-[200] transition-all duration-500 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
        >
            {/* Backdrop: click to close */}
            <div
                className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
                onClick={onClose}
            />

            {/* Panel */}
            <div className={`relative h-full flex items-center justify-center p-4 md:p-8 transition-all duration-700 ${
                isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
            }`}>
                <div className="relative w-full max-w-6xl bg-zinc-900/50 border border-white/5 min-h-[500px] flex flex-col md:flex-row overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.5)]">
                    
                    {/* Close Button — top right */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:rotate-90 group"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                    </button>

                    {/* Left Sidebar */}
                    <div className="w-full md:w-80 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/5 p-12 md:p-16 flex flex-col gap-12">
                        {org && (
                            <div>
                                <BrandLogo name={org} size={80} />
                                <p className="mt-6 text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-[0.4em]">{org}</p>
                            </div>
                        )}

                        <div className="flex flex-col gap-4 mt-auto">
                            {["Verified Impact", "Peer Reviewed", "Live Deployment"].map((tag) => (
                                <span key={tag} className="flex items-center gap-3 text-[11px] font-mono font-medium text-zinc-600 uppercase tracking-widest">
                                    <span className="w-2 h-2 rounded-full bg-white/10 inline-block" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-12 md:p-24 flex flex-col justify-between bg-zinc-950/20 relative">
                        <div className="max-w-3xl">
                            <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-[0.6em] mb-10 block">Insight Case Study</span>
                            <h3 className="text-4xl md:text-7xl font-display font-black text-white mb-10 tracking-tighter leading-[0.9]">
                                {title}
                            </h3>
                            <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed">
                                {content}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
                            <div className="flex gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                ))}
                            </div>
                            <span className="text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-[0.4em]">
                                Escalation: 100% Secure
                            </span>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}
    );
}
