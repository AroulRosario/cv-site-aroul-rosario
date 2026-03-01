"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-2xl glass p-8 md:p-12 rounded-3xl overflow-hidden"
                    >
                        {/* Abstract Background Decoration */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X className="w-6 h-6 text-zinc-400" />
                        </button>

                        <div className="relative z-10">
                            {org && (
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] block mb-4">
                                    Context // {org}
                                </span>
                            )}

                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 tracking-tighter leading-tight">
                                {title}
                            </h3>

                            <div className="space-y-6">
                                <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                    {content}
                                </p>

                                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-1 h-1 rounded-full bg-white/40" />
                                        <div className="w-1 h-1 rounded-full bg-white/20" />
                                        <div className="w-1 h-1 rounded-full bg-white/10" />
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                                        Technical Briefing // Confidential
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
