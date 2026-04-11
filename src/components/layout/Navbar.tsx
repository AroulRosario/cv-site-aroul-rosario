"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
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
                    ? "glass py-4 shadow-2xl"
                    : "bg-transparent py-6 border-b border-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="text-xl font-display font-bold text-zinc-950 tracking-widest uppercase">
                        Aroul<span className="text-zinc-400">R.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-mono tracking-widest uppercase text-zinc-500 hover:text-zinc-950 transition-colors relative group"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden w-8 h-8 flex flex-col items-end justify-center space-y-1.5 focus:outline-none z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`block h-[1px] bg-zinc-950 transition-all duration-300 ${isMobileMenuOpen ? "w-8 rotate-45 translate-y-[7px]" : "w-8"}`} />
                        <span className={`block h-[1px] bg-zinc-950 transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-6"}`} />
                        <span className={`block h-[1px] bg-zinc-950 transition-all duration-300 ${isMobileMenuOpen ? "w-8 -rotate-45 -translate-y-[7px]" : "w-4"}`} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                        animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                        exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-white/98 backdrop-blur-3xl pt-32 px-6 lg:hidden flex flex-col"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03)_0%,transparent_70%)] pointer-events-none" />
                        <div className="flex flex-col space-y-8 relative z-10">
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
                                        className="text-4xl font-display font-medium text-zinc-950 hover:text-zinc-600 transition-colors"
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
