"use client";

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
    "IJCIRAS": "ijciras.com",
    "Amalorpavam Group of Institutions": "amalorpavam.org",
    "Amalorpavam Lourds Academy": "ala.org.in",
    "Amalorpavam Higher Secondary School": "amalorpavam.org"
};

export const BrandLogo = ({ name, size = 48 }: { name: string; size?: number }) => {
    const domain = domainMap[name];

    // unavatar.io is great for high-res brand logos
    // providing a domain directly is most reliable
    const unavatarUrl = domain ? `https://unavatar.io/${domain}` : null;
    const fallbackUrl = `https://www.google.com/s2/favicons?domain=${domain || 'edu.int'}&sz=128`;

    return (
        <div
            className="flex-shrink-0 flex items-center justify-center rounded-md bg-zinc-900 border border-white/10 overflow-hidden group-hover:border-white/30 transition-colors duration-500"
            style={{ width: size, height: size }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={unavatarUrl || fallbackUrl}
                alt={`${name} logo`}
                className="w-full h-full object-contain p-2 filter grayscale opacity-60 mix-blend-screen brightness-150 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:brightness-100 transition-all duration-500"
                onError={(e) => {
                    // Fallback to google if unavatar fails
                    if (unavatarUrl && e.currentTarget.src !== fallbackUrl) {
                        e.currentTarget.src = fallbackUrl;
                    } else {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<span class="font-display font-medium text-lg text-zinc-500">${name.charAt(0)}</span>`;
                    }
                }}
            />
        </div>
    );
};
