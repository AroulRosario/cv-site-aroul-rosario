"use client";

import { useState, useEffect } from "react";
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
        { name: "Startups", href: "/#startups" },
        { name: "Experience", href: "/#experience" },
        { name: "Academics", href: "/#academics" },
        { name: "Press", href: "/#press" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "glass py-3"
                    : "bg-transparent py-5"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="text-xl font-display font-bold tracking-widest uppercase text-slate-900">
                        Aroul<span className="gradient-text">R.</span>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-slate-500 hover:text-indigo-600 transition-colors relative"
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
            </nav>

            {/* Mobile Menu - Static Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl px-6 lg:hidden flex flex-col transition-all duration-500 ${
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                }`}
            >
                <div className="flex flex-col space-y-8 pt-40">
                    {navLinks.map((link, i) => (
                        <div key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-4xl md:text-6xl font-display font-black text-slate-900 hover:text-indigo-600 transition-colors tracking-tighter"
                            >
                                {link.name}<span className="text-indigo-600">.</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
        </>
    );
}
