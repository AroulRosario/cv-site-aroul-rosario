"use client";

import { motion } from "framer-motion";

/**
 * QuantumSignature: A high-end, generative alternative to institutional logos.
 * It creates a unique "digital fingerprint" for each organization using:
 * 1. Stylized Initials
 * 2. A 3x3 BitGrid generated from the institution's name hash
 * 3. A unique hexadecimal identifier
 */

const getInitials = (name: string) => {
    // Handle cases like "IUPAC" or "UNESCO" vs "Stanford University"
    const words = name.split(/[ ,]+/);
    if (words.length === 1) return name.substring(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
};

const getHashVal = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
};

export const BrandLogo = ({ name, size = 48 }: { name: string; size?: number }) => {
    const hash = getHashVal(name);
    const initials = getInitials(name);
    // Use bit representation of the hash to light up a 3x3 grid (9 bits)
    const bits = hash.toString(2).padStart(16, "0").split("").reverse().slice(0, 9);

    return (
        <div
            className="group relative flex-shrink-0 flex items-center justify-center rounded-xl bg-zinc-950 border border-white/5 overflow-hidden transition-all duration-700 hover:border-white/40 hover:bg-zinc-900"
            style={{ width: size, height: size }}
            title={name}
        >
            {/* Subtle Scanline Animation */}
            <motion.div
                animate={{ y: ["-100%", "250%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-[1px] bg-white/10 blur-[1px] z-0 opacity-20"
            />

            <div className="relative z-10 flex flex-col items-center justify-center gap-1.5">
                <span className="font-display font-black text-white/40 tracking-tighter leading-none group-hover:text-white transition-all duration-500" style={{ fontSize: size * 0.28 }}>
                    {initials}
                </span>

                {/* The Digital Mark: A 3x3 unique bit grid */}
                <div className="grid grid-cols-3 gap-[3px]">
                    {bits.map((bit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: bit === '1' ? [0.4, 0.6, 0.4] : 0.05 }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                            className={`rounded-full transition-colors duration-700 ${bit === '1' ? 'bg-white group-hover:bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'bg-white/5'}`}
                            style={{ width: size * 0.08, height: size * 0.08 }}
                        />
                    ))}
                </div>
            </div>

            {/* Hex ID - Tiny technical detail */}
            <div className="absolute bottom-1.5 right-2 opacity-10 group-hover:opacity-40 transition-opacity">
                <span className="font-mono tabular-nums tracking-tighter" style={{ fontSize: size * 0.12 }}>
                    {hash.toString(16).substring(0, 4).toUpperCase()}
                </span>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-1 left-1 w-1 h-1 border-t border-l border-white/10 group-hover:border-white/40 transition-colors" />
            <div className="absolute bottom-1 right-1 w-1 h-1 border-b border-r border-white/10 group-hover:border-white/40 transition-colors" />
        </div>
    );
};
