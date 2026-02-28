"use client";

import { useState } from 'react';

const domainMap: Record<string, string> = {
    "Royal Society, London": "royalsociety.org",
    "Uni of Selinius, Delaware, USA": "selinusuniversity.it",
    "University of Manchester, UK": "manchester.ac.uk",
    "Loyola College, Chennai": "loyolacollege.edu",
    "Nehru College Puducherry": "ncesi.in",
    "IUPAC": "iupac.org",
    "American Chemical Society": "acs.org",
    "Microsoft": "microsoft.com",
    "Indian Institute of Technology Bombay": "iitb.ac.in",
    "Adobe": "adobe.com",
    "IBM": "ibm.com",
    "NVIDIA": "nvidia.com",
    "Google": "google.com",
    "UNESCO": "unesco.org",
    "University of Glasgow": "gla.ac.uk",
    "University of Cambridge": "cam.ac.uk",
    "Université de Genève": "unige.ch",
    "Stanford University": "stanford.edu",
    "University of Colorado Boulder": "colorado.edu",
    "Physics Wallah": "pw.live",
    "Indian Institute of Management Ahmedabad": "iima.ac.in",
    "Johns Hopkins University": "jhu.edu",
    "CERN Geneva EU Zenodo": "cern.ch",
    "Harvard University": "harvard.edu",
    "IJIRST": "ijirst.org",
    "IJRDO": "ijrdo.org",
    "IJCIRAS": "ijciras.com"
};

// Tech-specific high-res SVG paths from SVGL for popular brands
const svglMap: Record<string, string> = {
    "microsoft.com": "https://svgl.app/library/microsoft.svg",
    "adobe.com": "https://svgl.app/library/adobe.svg",
    "ibm.com": "https://svgl.app/library/ibm.svg",
    "nvidia.com": "https://svgl.app/library/nvidia.svg",
    "google.com": "https://svgl.app/library/google.svg",
};

export const BrandLogo = ({ name, size = 48 }: { name: string; size?: number }) => {
    const domain = domainMap[name] || "edu.int";
    const [error, setError] = useState(false);

    // Try SVGL for tech, otherwise fallback to high-res logo.dev or clearbit-like pattern via Google
    const svglUrl = svglMap[domain];
    const logoUrl = svglUrl || `https://logo.clearbit.com/${domain}?size=256`;
    const fallbackUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

    return (
        <div
            className="flex-shrink-0 flex items-center justify-center rounded-lg bg-zinc-900/50 border border-white/5 overflow-hidden group-hover:border-white/20 transition-all duration-700 relative"
            style={{ width: size, height: size }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {!error ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={logoUrl}
                    alt={`${name} logo`}
                    className="w-[70%] h-[70%] object-contain filter grayscale opacity-40 brightness-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-700 z-10"
                    onError={(e) => {
                        if (e.currentTarget.src !== fallbackUrl) {
                            e.currentTarget.src = fallbackUrl;
                        } else {
                            setError(true);
                        }
                    }}
                />
            ) : (
                <span className="font-display font-medium text-lg text-zinc-700 group-hover:text-white transition-colors z-10">
                    {name.charAt(0)}
                </span>
            )}
        </div>
    );
};
