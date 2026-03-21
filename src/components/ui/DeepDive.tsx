"use client";

import { motion, AnimatePresence } from "framer-motion";
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
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop: click to close */}
                    <motion.div
                        key="backdrop"
                        className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        key="panel"
                        className="fixed inset-0 z-[201] flex items-center justify-center px-4 md:px-6 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.96, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 24 }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    >
                        <div className="relative w-full max-w-5xl glass-card min-h-[500px] flex flex-col md:flex-row overflow-hidden shadow-[0_0_120px_rgba(255,255,255,0.06)] pointer-events-auto">

                            {/* Close Button — top right, large tap target */}
                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-200 hover:rotate-90 group"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            {/* Left Sidebar — decorative + logo */}
                            <div className="w-full md:w-64 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/5 p-10 flex flex-col gap-12">
                                {org && (
                                    <div>
                                        <BrandLogo name={org} size={64} />
                                        <p className="mt-4 text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">{org}</p>
                                    </div>
                                )}

                                <div className="flex flex-col gap-3 mt-auto">
                                    {["Verified Impact", "Peer Reviewed", "Live Deployment"].map((tag) => (
                                        <span key={tag} className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/20 inline-block" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-10 md:p-16 flex flex-col justify-between bg-black/30 relative">
                                <div className="max-w-2xl">
                                    <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-8 tracking-tight leading-[1.05]">
                                        {title}
                                    </h3>
                                    <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                        {content}
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em]">
                                        Tap outside or × to close
                                    </span>
                                </div>

                                {/* Decorative glow */}
                                <div className="absolute top-0 right-0 w-72 h-72 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
