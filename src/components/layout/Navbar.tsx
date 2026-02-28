"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cvData } from "@/data/cv";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "01 // Home", href: "#hero" },
        { name: "02 // Persona", href: "#about" },
        { name: "03 // Timeline", href: "#timeline" },
        { name: "04 // Mastery", href: "#expertise" },
        { name: "05 // Research", href: "#publications" },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? "bg-black/90 border-b border-white/10" : "bg-transparent"}`}>
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

                    <a href="#" className="relative group">
                        <span className="text-sm font-mono tracking-[0.4em] uppercase text-white font-bold group-hover:text-zinc-400 transition-colors">
                            DR. AROULR.
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500" />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/10 hover:border-white/40 transition-colors bg-white/5"
                    >
                        <Menu className="w-5 h-5 text-white" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[200] bg-black p-6 md:p-12 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-24">
                            <span className="text-xs font-mono tracking-widest text-zinc-500">NAVIGATION SYSTEM</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="text-4xl md:text-6xl font-display font-medium text-white hover:text-zinc-500 transition-colors flex items-center justify-between group py-4 border-b border-white/5"
                                >
                                    <span>{link.name}</span>
                                    <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-auto pt-12 border-t border-white/10">
                            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                                © 2024 Dr. Aroul Rosario // V4 Redesign
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
