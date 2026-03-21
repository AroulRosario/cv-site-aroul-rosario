"use client";

import { motion } from "framer-motion";

/**
 * BrandLogo: Renders the real institutional logo from /public/logos/
 * with the Quantum Signature overlay for a technical high-end look.
 * Falls back to Quantum Signature alone if no logo is mapped.
 */

// Exact logo name → file mapping from "R Labs - logos" folder
const LOGO_MAP: Record<string, string> = {
    // Academic Certifications
    "UNESCO": "/logos/135.png",
    "University of Glasgow": "/logos/136.png",
    "University of Cambridge": "/logos/137.png",
    "Université de Genève": "/logos/138.png",
    "Stanford University": "/logos/139.png",
    "University of Colorado Boulder": "/logos/140.png",
    "Physics Wallah": "/logos/141.png",
    "Indian Institute of Management Ahmedabad": "/logos/142.png",
    // Tech Certifications
    "Microsoft": "/logos/144.png",
    "IBM": "/logos/145.png",
    "Indian Institute of Technology Bombay": "/logos/146.png",
    "Adobe": "/logos/147.png",
    "NVIDIA": "/logos/148.png",
    "Google": "/logos/149.png",
    // Publications
    "CERN Geneva EU Zenodo": "/logos/150.png",
    "Harvard University": "/logos/151.png",
    "IJIRST": "/logos/152.png",
    "IJRDO": "/logos/153.png",
    "IJCIRAS": "/logos/154.png",
    // IP
    "Intellectual Property India": "/logos/143.png",
};

const getInitials = (name: string) => {
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

export const BrandLogo = ({ name, size = 80 }: { name: string; size?: number }) => {
    const logoSrc = LOGO_MAP[name];
    const hash = getHashVal(name);
    const initials = getInitials(name);
    const bits = hash.toString(2).padStart(16, "0").split("").reverse().slice(0, 9);

    return (
        <div
            className="group relative flex-shrink-0 flex items-center justify-center rounded-xl bg-white border border-white/10 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow duration-500"
            style={{ width: size, height: size }}
            title={name}
        >
            {/* Real Logo Layer – always rendered with a white background */}
            {logoSrc ? (
                <div className="absolute inset-0 z-10 flex items-center justify-center p-3">
                    <img
                        src={logoSrc}
                        alt={name}
                        className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-700 ease-out"
                        draggable={false}
                    />
                </div>
            ) : (
                /* Fallback if no logo: Quantum Signature on dark background */
                <div className="absolute inset-0 z-10 bg-zinc-950 flex flex-col items-center justify-center gap-1.5">
                    <span
                        className="font-display font-black text-white/50 tracking-tighter leading-none"
                        style={{ fontSize: size * 0.28 }}
                    >
                        {initials}
                    </span>
                    <div className="grid grid-cols-3 gap-[3px]">
                        {bits.map((bit, i) => (
                            <motion.div
                                key={i}
                                animate={{ opacity: bit === '1' ? [0.4, 0.7, 0.4] : 0.05 }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.12 }}
                                className={`rounded-full ${bit === '1' ? 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.4)]' : 'bg-white/5'}`}
                                style={{ width: size * 0.08, height: size * 0.08 }}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Subtle glow edge inside the frame */}
            <div className="absolute inset-0 border border-black/5 rounded-xl z-20 pointer-events-none" />
        </div>
    );
};
