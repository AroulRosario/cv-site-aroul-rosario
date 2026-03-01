"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Box, ShieldCheck, Zap } from "lucide-react";

interface DeepDiveProps {
    isOpen: boolean;
    onClose: (e?: React.MouseEvent) => void;
    title: string;
    content: string;
    org?: string;
}

export function DeepDive({ isOpen, onClose, title, content, org }: DeepDiveProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => onClose(e)}
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl glass-card min-h-[500px] flex flex-col md:flex-row p-0 overflow-hidden"
                    >
                        {/* Technical Sidebar */}
                        <div className="w-full md:w-64 bg-white/[0.02] border-r border-white/5 p-8 flex flex-col justify-between">
                            <div className="space-y-8">
                                <div className="p-3 bg-white/5 w-fit rounded-xl">
                                    <Box className="w-6 h-6 text-white/60" />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-zinc-500">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span className="text-[10px] font-mono uppercase tracking-widest">Verified Content</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-500">
                                        <Zap className="w-4 h-4" />
                                        <span className="text-[10px] font-mono uppercase tracking-widest">High Impact</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest rotate-[-90deg] origin-left translate-y-[-20px] inline-block whitespace-nowrap">
                                    System ID: {Math.random().toString(36).substring(7).toUpperCase()}
                                </span>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-8 md:p-12 relative">
                            <button
                                onClick={(e) => onClose(e)}
                                className="absolute top-6 right-6 p-3 rounded-full hover:bg-white/10 transition-all hover:rotate-90 group"
                            >
                                <X className="w-6 h-6 text-zinc-500 group-hover:text-white" />
                            </button>

                            <div className="relative z-10">
                                {org && (
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-6">
                                        {org}
                                    </span>
                                )}

                                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-10 tracking-tighter leading-[1.1]">
                                    {title}
                                </h3>

                                <div className="prose prose-invert max-w-none">
                                    <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                        {content}
                                    </p>
                                </div>

                                <div className="mt-12 flex items-center gap-4 text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                                    <div className="h-px w-8 bg-zinc-800" />
                                    Academic Insight // V4.0
                                </div>
                            </div>

                            {/* Decorative Grid */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.03] p-4 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
