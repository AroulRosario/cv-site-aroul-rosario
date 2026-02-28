"use client";

import { useState } from "react";

const logoOverrides: Record<string, string> = {
    "Amalorpavam Group of Institutions": "https://amalorpavam.org/wp-content/uploads/2019/08/Amalorpavam-Logo-1.png",
    "Amalorpavam Lourds Academy": "https://amalorpavamacademy.com/wp-content/uploads/2021/06/cropped-ALA-Logo-192x192.png",
    "Amalorpavam Higher Secondary School": "https://amalorpavam.org/wp-content/uploads/2019/08/Amalorpavam-Logo-1.png",
    "Starborn Young Scientist Academy": "https://static.wixstatic.com/media/ef199e_7a53696f0e474542a229a43a0589d97a~mv2.png",
    "IUPAC": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/International_Union_of_Pure_and_Applied_Chemistry_logo.svg/501px-International_Union_of_Pure_and_Applied_Chemistry_logo.svg.png",
    "Royal Society, London": "https://royalsociety.org/~/media/Royal_Society_Content/about-us/branding/the-royal-society-logo-600.jpg",
};

const domainMap: Record<string, string> = {
    "Uni of Selinius, Delaware, USA": "selinusuniversity.it",
    "University of Manchester, UK": "manchester.ac.uk",
    "Loyola College, Chennai": "loyolacollege.edu",
    "Nehru College Puducherry": "ncesi.in",
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
    "IJCIRAS": "ijciras.com",
};

export const BrandLogo = ({ name, size = 48 }: { name: string; size?: number }) => {
    const override = logoOverrides[name];
    const domain = domainMap[name];

    const sources = [
        ...(override ? [override] : []),
        ...(domain ? [
            `https://unavatar.io/${domain}`,
            `https://logo.clearbit.com/${domain}`,
            `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
        ] : [])
    ];

    return (
        <div
            className="flex-shrink-0 flex items-center justify-center rounded-md bg-zinc-900 border border-white/10 overflow-hidden group-hover:border-white/30 transition-colors duration-500"
            style={{ width: size, height: size }}
        >
            {sources.length > 0 ? (
                <LogoImage sources={sources} name={name} />
            ) : (
                <FallbackMonogram name={name} />
            )}
        </div>
    );
};

const FallbackMonogram = ({ name }: { name: string }) => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-black text-white/40">
        <span className="font-display font-black text-xl tracking-tighter uppercase italic">
            {name.substring(0, 2)}
        </span>
    </div>
);

const LogoImage = ({ sources, name }: { sources: string[], name: string }) => {
    const [sourceIndex, setSourceIndex] = useState(0);

    const currentSource = sources[sourceIndex];

    if (sourceIndex >= sources.length) {
        return <FallbackMonogram name={name} />;
    }

    return (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
            src={currentSource}
            alt={`${name} logo`}
            className="w-full h-full object-contain p-2 filter grayscale opacity-60 mix-blend-screen brightness-150 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:brightness-100 transition-all duration-500"
            onError={() => setSourceIndex(sourceIndex + 1)}
        />
    );
};
