"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "/#about" },
        { name: "Startups", href: "/startups" },
        { name: "Experience", href: "/experience" },
        { name: "Academics", href: "/academics" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "glass py-3"
                    : "bg-transparent py-5"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="text-xl font-display font-bold tracking-widest uppercase text-slate-900">
                        Aroul<span className="gradient-text">R.</span>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-mono tracking-widest uppercase text-slate-500 hover:text-indigo-600 transition-colors relative"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <button
                        className="lg:hidden w-8 h-8 flex flex-col items-end justify-center space-y-1.5 focus:outline-none z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`block h-[1.5px] bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? "w-8 rotate-45 translate-y-[7px]" : "w-8"}`} />
                        <span className={`block h-[1.5px] bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-6"}`} />
                        <span className={`block h-[1.5px] bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? "w-8 -rotate-45 -translate-y-[7px]" : "w-4"}`} />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                        animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                        exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-32 px-6 lg:hidden flex flex-col"
                    >
                        <div className="flex flex-col space-y-6 relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 + 0.2 }}
                                    key={link.name}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-display font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
