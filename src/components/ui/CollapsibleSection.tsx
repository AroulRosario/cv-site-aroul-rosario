"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleSectionProps {
    id: string;
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
    number: string;
}

export function CollapsibleSection({ id, title, isOpen, onToggle, children, number }: CollapsibleSectionProps) {
    return (
        <div id={id} className={`border-b border-white/5 transition-colors ${isOpen ? 'bg-zinc-950/50' : 'hover:bg-white/[0.01]'}`}>
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-12 px-6 md:px-12 group text-left"
            >
                <div className="flex items-baseline gap-6 md:gap-12">
                    <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors uppercase tracking-widest">
                        {number}
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tighter transition-all group-hover:pl-4">
                        {title}<span className="text-zinc-800">.</span>
                    </h2>
                </div>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="p-4 rounded-full border border-white/5 group-hover:border-white/20 transition-colors"
                >
                    <ChevronDown className="w-6 h-6 text-zinc-500 group-hover:text-white" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 md:px-12 pb-24">
                            <div className="pt-8 border-t border-white/5">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
